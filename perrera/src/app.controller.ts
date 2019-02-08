import {
    Get,
    Controller,
    Request,
    Response,
    Headers,
    HttpCode,
    HttpException,
    Query,
    Param,
    Res,
    Post, Body, Session, BadRequestException
} from '@nestjs/common';
import {AppService} from './app.service';
import {Observable, of} from "rxjs";
import {Usuario, UsuarioService} from "./usuario/usuario.service";
import {ExpressionStatement} from "typescript";
import {Code} from "typeorm";

// http://192.168.1.2:3000/Usuario/saludar     METODO -> GET
// http://192.168.1.2:3000/Usuario/salir   METODO -> POST
// http://192.168.1.2:3000/Usuario/registrar METODO -> PUT
// http://192.168.1.2:3000/Usuario/borrar METODO -> DELETE
// http://192.168.1.2:3000/Notas


// Decorador -> FUNCION
// SE EJECUTA ANTES DE ALGO
@Controller() // Decoradores!
export class AppController {

    // CONSTRUCTOR NO ES UN CONSTRUCTOR NORMAL!!!

    constructor(
        private readonly _usuarioService: UsuarioService,
        // private readonly _appService:AppService,
    ) {

    }


    @Get('saludar')
    saludar(
        @Query() queryParams,
        @Query('nombre') nombre,
        @Headers('seguridad') seguridad,
        @Session() sesion
    ): string { // metodo!
        console.log('Sesion:', sesion);

        return nombre;
    }

    // /Usuario/segmentoUno/12/segmentoDos
    @Get('segmentoUno/:idUsuario/segmentoDos')
    ruta(
        @Param() todosParametrosRuta,
        @Param('idUsuario') idUsuario,
    ): string { // metodo!
        return idUsuario;
    }


    @Get('despedirse')
    @HttpCode(201)
    despedirse(): Promise<string> {
        return new Promise<string>(
            (resolve, reject) => {

                throw new HttpException({
                        mensaje: 'Error en despedirse',
                    },
                    400);
            }
        );
    }

    @Get('tomar')
    @HttpCode(201)
    tomar(): string { // metodo!
        return 'Estoy borracho';
    }

    @Get('saludarObservable')
    saludarObservable(): Observable<string> { // metodo!
        return of('Hola mundo');
    }

    @Post('login')
    @HttpCode(200)
    async loginMetodo(
        @Body('nombre') nombre: string,
        @Body('password') password: string,
        @Res() response,
        @Session() sesion,
    ) {
        console.log(nombre);
        const identificado = await this._usuarioService
            .login(nombre, password);
        console.log(identificado);
        if (identificado) {
            sesion.usuario = nombre;
            response.redirect('/Perro/inicio')
        } else {
            response.render('login'
                ,
                {
                    erroru: 'erroru',
                    errorp : 'errorp',



                })

        }
    }

    @Get('login')
    loginVista(
        @Res() response,
        @Query('erroru') erroru: string,
        @Query('errorp') errorp: string,
    ) {
        if(erroru || errorp){

            response.render(
                'login',
                {

                    erroru: 'erroru',
                    errorp: 'errorp',
                });



        }
        else{

            response.render('login');

        }

    }

    @Get('tienda')
    tiendaVista(
        @Res() response
    ) {
        response.render('tienda');
    }




    @Get('logout')
    logout(
        @Res() response,
        @Session() sesion,
    ) {
        sesion.usuario = undefined;
        sesion.destroy();
        response.redirect('/login');
    }




}


