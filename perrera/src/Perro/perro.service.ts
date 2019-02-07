import {Injectable} from "@nestjs/common";
import {FindManyOptions, Repository} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';
import {PerroEntity} from "./perro-entity";
import {PerreraEntity} from "../Perrera/perrera-entity";
import {Perrera} from "../Perrera/perrera.service";


@Injectable()
export class PerroService{

    constructor(
        @InjectRepository(PerroEntity)
        private readonly _perroRepository: Repository<PerroEntity>,
    ) {
    }

    async crear(nuevoPerro: Perro): Promise<PerroEntity> {

        // Instanciar una entidad -> .create()
        const perroEntity = this._perroRepository
            .create(nuevoPerro);

        // Guardar una entidad en la BDD -> .save()
        const perroCreado = await this._perroRepository
            .save(perroEntity);

        return perroCreado;
    }
    buscar(parametros?: FindManyOptions<PerroEntity>)
        : Promise<PerroEntity[]> {
        return this._perroRepository.find(parametros);
    }
    buscarPorId(idPerro: number): Promise<PerroEntity> {
        return this._perroRepository.findOne(idPerro);
    }

    borrar(idPerro: number): Promise<PerroEntity> {

        // CREA UNA INSTANCIA DE LA ENTIDAD
        const perroEntityAEliminar = this._perroRepository
            .create({
                idPerro: idPerro
            });


        return this._perroRepository.remove(perroEntityAEliminar)
    }
    actualizar(idPerro: number,
               nuevoPerro: Perro): Promise<PerroEntity> {

        nuevoPerro.idPerro = idPerro;

        const perroEntity = this._perroRepository.create(nuevoPerro);

        return this._perroRepository.save(perroEntity);
    }

}

export interface Perro{
    idPerro: number,
    nombrePerro: string,
    razaPerro: string,
    tamanioPerro: string,
    sexoPerro: string,
    edadPerro: number,
    descrPerro: string,
    fertilidadPerro: boolean,
    vacunaPerro: boolean,
    chipPerro: boolean,
    adopcionPerro: boolean,
    fechaPerro: string,
    perreraIdPerrera: number
}