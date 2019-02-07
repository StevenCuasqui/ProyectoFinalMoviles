import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';
import {PerroEntity} from "./perro-entity";


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

}

export interface Perro{

}