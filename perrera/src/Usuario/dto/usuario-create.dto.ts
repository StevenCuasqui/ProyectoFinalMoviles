// usuario-crate.dto.ts

import {IsPhoneNumber, IsEmail, IsEmpty, IsNotEmpty, IsString, Length, IsDate} from "class-validator";

export class UsuarioCreateDto {

    @IsNotEmpty()
    @IsString()
    @Length(1)
    nombre:string;


    @IsNotEmpty()
    @IsString()
    @Length(5)
    apellido:string;

    @IsNotEmpty()
    //@IsDate()
    fechaNacimiento:string;

    @IsNotEmpty()
    @IsEmail()
    correo:string;

    @IsPhoneNumber('EC')
    telefono:string;



    @IsNotEmpty()
    @Length(5)
    contrasenia:string;

    @IsNotEmpty()
    @IsString()
    @Length(5)
    genero:string;

}
