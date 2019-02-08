
import {Body, Controller, ForbiddenException, Get, HttpCode, Param, Post, Query, Res, Session} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario-entity";
import {FindManyOptions, Like} from 'typeorm';
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {validate, ValidationError} from "class-validator";

@Controller('Usuario')
export class UsuarioController {

    constructor(
        private readonly _usuarioService: UsuarioService,
    ) {

    }

    @Get('inicio')
    Vistainicio(
        @Res() response
    ){

           response.render('galeria-principal')
        }


    @Get('registro')
    crearUsuario(
        @Res() response,
        @Query('error') error: string,
        @Query('error20') error20: string,
        @Query('error21') error21: string,
        @Query('error22') error22: string,
        @Query('error23') error23: string,
        @Query('error24') error24: string,
        @Query('error25') error25: string,
        @Query('error26') error26: string,
    ) {
        if(error20 || error21 || error22 || error23|| error24|| error25||error26){

            console.log(error20)
            response.render(

                'registro', {
                    error20: error20,
                    error21: error21,
                    error22: error22,
                    error23: error23,
                    error24: error24,
                    error25: error25,
                    error26: error26,
                }

            )
        }
        else {
            response.render(

                'registro'

            )
        }

    }

    @Post('registro')
    async crearUsuarioFormulario(
        @Body() usuario: Usuario,
        @Res() response
    ) {
        const usuarioValidado = new UsuarioCreateDto();

        usuarioValidado.nombre = usuario.nombre;
        usuarioValidado.apellido = usuario.apellido;
        usuarioValidado.fechaNacimiento = usuario.fechaNacimiento;
        usuarioValidado.correo = usuario.correo;
        usuarioValidado.telefono = usuario.telefono;
        usuarioValidado.contrasenia = usuario.contrasenia;
        usuarioValidado.genero = usuario.genero;




        const errores: ValidationError[] = await validate(usuarioValidado);
        const hayErrores = errores.length > 0;
        if (hayErrores) {
            const errores2 = errores.map((errores)=>{return errores['property']})
            console.error(errores);
            console.log(errores2[0])
            response.render('registro', {
                error: 'errores',
                error20: errores2[0],
                error21: errores2[1],
                error22: errores2[2],
                error23: errores2[3],
                error24: errores2[4],
                error25: errores2[5],
                error26: errores2[6],

            });
            // response.redirect('/Usuario/crear-usuario?error=Hay errores');
        } else {
            await this._usuarioService.crear(usuario);
            // const parametrosConsulta = `?accion=crear&username=${usuario.username}`;

            response.redirect('/login');

        }


    }


}