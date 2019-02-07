import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AdopcionEntity} from "../Adopcion/adopcion-entity";

@Entity('Usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn(
        {
            name:'id_usuario'
        }
    )
    id: number;

    @Index()
    @Column(
        {
            name: 'nombre_usuario',
            type: 'varchar',
            length: 50,
            default: 'nombre'
        }
    )
    nombre: string;

    @Column(
        {
            name: 'apellido_usuario',
            type: 'varchar',
            length: 50,
            default: 'apellido'
        }
    )
    apellido: string;

    @Column(
        {
            name: 'fechanacimiento_usuario',
            type: 'varchar',
            length: 50,
            default: 'fechaNacimiento'
        }
    )
    fechaNacimiento: string;

    @Column(
        {
            name: 'correo_usuario',
            type: 'varchar',
            length: 50,
            default: 'correo'
        }
    )
    correo: string;

    @Column(
        {
            name: 'telefono_usuario',
            type: 'varchar',
            length: 50,
            default: 'telefono'
        }
    )
    telefono: string;

    @Column(
        {
            name: 'contrasenia_usuario',
            type: 'varchar',
            length: 50,
            default: 'contrasenia'
        }
    )
    contrasenia: string;

    @Column(
        {
            name: 'genero_usuario',
            type: 'varchar',
            length: 50,
            default: 'genero'
        }
    )
    genero: string;

    // @Column({
    //     nullable: true,
    // })
    // biografia: string;

    @BeforeInsert()
    antesDeInsertar() {
        console.log('Ejecutandome antes de insertar');
    }

    @BeforeInsert()
    verificarFuncion() {
        console.log('Ejecuta despues de antes de insertar');
    }

    @OneToMany(
        type => AdopcionEntity,
        adopcion => adopcion.usuario
    )
    adopcion: AdopcionEntity[];
}