import {Injectable} from "@nestjs/common";
import {FindManyOptions, Repository} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';
import {PerreraEntity} from "./perrera-entity";
import {UsuarioEntity} from "../Usuario/usuario-entity";

@Injectable()
export class PerreraService {
    constructor(
        @InjectRepository(PerreraEntity)
        private readonly _perreraRepository: Repository<PerreraEntity>,
    ) {
    }

    async crear(nuevoPerrera: Perrera): Promise<PerreraEntity> {

        // Instanciar una entidad -> .create()
        const perreraEntity = this._perreraRepository
            .create(nuevoPerrera);

        // Guardar una entidad en la BDD -> .save()
        const perreraCreado = await this._perreraRepository
            .save(perreraEntity);

        return perreraCreado;
    }

    buscar(parametros?: FindManyOptions<PerreraEntity>)
        : Promise<PerreraEntity[]> {
        return this._perreraRepository.find(parametros);
    }
    buscarPorId(idPerrera: number): Promise<PerreraEntity> {
        return this._perreraRepository.findOne(idPerrera);
    }
    borrar(idPerrera: number): Promise<PerreraEntity> {

        // CREA UNA INSTANCIA DE LA ENTIDAD
        const perreraEntityAEliminar = this._perreraRepository
            .create({
                idPerrera: idPerrera
            });


        return this._perreraRepository.remove(perreraEntityAEliminar)
    }
    actualizar(idPerrera: number,
               nuevoPerrera: Perrera): Promise<PerreraEntity> {

        nuevoPerrera.idPerrera = idPerrera;

        const perreraEntity = this._perreraRepository.create(nuevoPerrera);

        return this._perreraRepository.save(perreraEntity);
    }
}
export interface Perrera {
    idPerrera: number
    nombrePerrera: string
    capacidadPerrera: number

}