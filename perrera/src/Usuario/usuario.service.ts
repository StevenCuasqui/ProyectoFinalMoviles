import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario-entity";
import {FindManyOptions} from "../../node_modules/typeorm/find-options/FindManyOptions";

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>,
    ) {
    }

    buscar(parametros?: FindManyOptions<UsuarioEntity>)
        : Promise<UsuarioEntity[]> {
        return this._usuarioRepository.find(parametros);
    }

    async crear(nuevoUsuario: Usuario): Promise<UsuarioEntity> {

        // Instanciar una entidad -> .create()
        const usuarioEntity = this._usuarioRepository
            .create(nuevoUsuario);

        // Guardar una entidad en la BDD -> .save()
        const usuarioCreado = await this._usuarioRepository
            .save(usuarioEntity);

        return usuarioCreado;
    }

    actualizar(idUsuario: number,
               nuevoUsuario: Usuario): Promise<UsuarioEntity> {

        nuevoUsuario.id = idUsuario;

        const usuarioEntity = this._usuarioRepository.create(nuevoUsuario);

        return this._usuarioRepository.save(usuarioEntity);
    }

    borrar(idUsuario: number): Promise<UsuarioEntity> {

        // CREA UNA INSTANCIA DE LA ENTIDAD
        const usuarioEntityAEliminar = this._usuarioRepository
            .create({
                id: idUsuario
            });


        return this._usuarioRepository.remove(usuarioEntityAEliminar)
    }

    buscarPorId(idUsuario: number): Promise<UsuarioEntity> {
        return this._usuarioRepository.findOne(idUsuario);
    }

    // buscarPorNombreOBiografia(busqueda:string): Usuario[]{
    //     return this.usuarios.filter(
    //         (usuario)=>{
    //
    //             // Si la busqueda contiene algo del nombre
    //
    //             const tieneAlgoEnElnombre = usuario
    //                 .nombre.includes(busqueda); // True / False
    //
    //             // Si la busqueda contiene algo de la bio
    //
    //             const tieneAlgoEnLaBio = usuario
    //                 .biografia.includes(busqueda);// True / False
    //
    //             return tieneAlgoEnElnombre || tieneAlgoEnLaBio;
    //         }
    //     )
    // }


}

export interface Usuario {
    id: number;
    nombre: string;
            biografia: string;
}