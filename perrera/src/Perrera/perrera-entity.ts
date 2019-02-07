import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PerroEntity} from "../Perro/perro-entity";

@Entity('Perrera')
export class PerreraEntity{

    @PrimaryGeneratedColumn({
        name:'id_perrera'
    })idPerrera: number

    @Column(
        {
            name:'nombre_Perrera',
            type: 'varchar',
            length: 50,
            default: 'nombredePerrera'
        }
    )nombrePerrera: string

    @Column(
        {
            name:'capacidad_Perrera',
            type: 'int'
        }
    )capacidadPerrera: number

    @OneToMany(
        type => PerroEntity,
        perro => perro.perrera
    )perro: PerroEntity[]


}