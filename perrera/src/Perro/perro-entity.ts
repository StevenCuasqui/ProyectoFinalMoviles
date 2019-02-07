import {BeforeInsert, Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AdopcionEntity} from "../Adopcion/adopcion-entity";
import {PerreraEntity} from "../Perrera/perrera-entity";


@Entity('Perro')
export class PerroEntity{
    @PrimaryGeneratedColumn(
        {
            name: 'id_perro'
        }
    )idPerro:number


    @Column(
        {
            name: 'nombre_perro',
            type: 'varchar',
            length: 50,
            default: 'nombrePerro'
        }
    )nombrePerro:string;

    @Column(
        {
            name: 'raza_perro',
            type: 'varchar',
            length: 50,
            default: 'razaPerro'
        }
    )razaPerro:string;

    @Column(
        {
            name: 'tamanio_perro',
            type: 'varchar',
            length: 50,
            default: 'tamanioPerro'
        }
    )tamanioPerro:string;

    @Column(
        {
            name: 'sexo_perro',
            type: 'varchar',
            length: 50,
            default: 'sexoPerro'
        }
    )sexoPerro:string;

    @Column(
        {
            name: 'edad_perro',
            type: 'int',


        }
    )edadPerro:number;
    @Column(
        {
            name: 'descripcion_perro',
            type: 'varchar',
            length: 50,
            default: 'descripcionPerro'
        }
    )descripcionPerro:string;

    @Column(
        {
            name: 'fertilidad_perro',
            type: Boolean,


        }
    )fertilidadPerro:boolean;

    @Column(
        {
            name: 'vacuna_perro',
            type: Boolean,


        }
    )vacunaPerro:boolean;
    @Column(
        {
            name: 'chip_perro',
            type: Boolean,


        }
    )chipPerro:boolean;

    @Column(
        {
            name: 'adopcion_perro',
            type: Boolean,


        }
    )adopcionPerro:boolean;

    @Column(
        {
            name: 'fechaentrada_perro',
            type: 'varchar',
            length: 50,
            default: 'fechaPerro'
        }
    )fechaPerro:string;

    // @Column(
    //     {
    //         name: 'id_Perrera',
    //         type: 'int'
    //     }
    // )idPerrera:number

    @OneToMany(
        type => AdopcionEntity,
        adopcion => adopcion.perro
    )
    adopcion: AdopcionEntity[];

    @ManyToOne(
        type => PerreraEntity,
        perrera => perrera.perro
    )perrera: PerreraEntity[]
}