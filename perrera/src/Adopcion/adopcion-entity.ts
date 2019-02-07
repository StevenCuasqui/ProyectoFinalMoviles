import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario-entity";
import {PerroEntity} from "../Perro/perro-entity";

@Entity('Adopcion')
export class AdopcionEntity{
    @PrimaryGeneratedColumn(
        {
            name: 'id_adopcion'
        }
    ) idAdopcion:number

    @Column(
        {
            name: 'fecha_adopcion',
            type: 'varchar',
            length: 50,
            default: 'fecha'
        }
    )fechaAdopcion: string

    @Column(
        {
            name: 'hora_adopcion',
            type: 'varchar',
            length: 50,
            default: 'hora'
        }
    )horaAdopcion: string

    @Column(
        {
            name:'observacion_adopcion',
            type: 'varchar',
            length: 50,
            default: 'observacion'
    })observacionAdopcion: string

    // @Column(
    //     {
    //         name: 'id_Usuario',
    //         type: 'int'
    //     }
    //
    // )idUsuario:number
    //
    // @Column(
    //     {
    //         name: 'id_Perro',
    //         type: 'int'
    //     }
    //
    // )idPerro:number

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.adopcion
    )usuario: UsuarioEntity

    @ManyToOne(
        type => PerroEntity,
        perro => perro.adopcion
    )perro: PerroEntity
}