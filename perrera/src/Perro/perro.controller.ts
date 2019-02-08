import {Body, Controller, Get, Param, Post, Query, Res} from "@nestjs/common";
import {Perro, PerroService} from "./perro.service";
import {PerreraEntity} from "../Perrera/perrera-entity";
import {PerroEntity} from "./perro-entity";
import {Perrera} from "../Perrera/perrera.service";
import {FindManyOptions,Like} from "typeorm";

@Controller('Perro')
export class PerroController{
    constructor(
        private readonly _perroService: PerroService,
    ) {}

    @Get('Admin')
    async inicio(@Res() response,
                 @Query('busqueda') busqueda: string
    ){

        let perro: PerroEntity[]

        if (busqueda) {
            const consulta = {
                where: [
                    {nombrePerro: busqueda}

                ]
            };
            perro = await this._perroService.buscar(consulta);
        } else {
            perro =await this._perroService.buscar();
        }
        response.render('administracionPerro.ejs',{arreglo: perro})
    }


    @Post('Admin/crear')
        async crearPerro(
            @Body() perro: Perro,
            @Res() response
    ){
        await this._perroService.crear(perro)

        response.redirect('/Perro/Admin')
    }

    @Post('Admin/borrar/:idPerro')
    async borrar(
        @Param('idPerro') idPerro: string,
        @Res() response
    ) {
        const usuarioEncontrado = await this._perroService
            .buscarPorId(+idPerro);

        await this._perroService.borrar(Number(idPerro));

        //const parametrosConsulta = `?accion=borrar&nombre=${usuarioEncontrado.nombre}`;

        response.redirect('/Perro/Admin')
    }

    @Get('Admin/actualizar/:idPerro')
    async actualizarPerrera(
        @Param('idPerro') idPerro: string,
        @Res() response
    ) {
        const perroAActualizar = await this
            ._perroService
            .buscarPorId(Number(idPerro));

        response.render(
            'actualizarPerro.ejs', {
                perro: perroAActualizar
            }
        )
    }

    @Post('Admin/actualizar/:idPerro')
    async actualizar(
        @Param('idPerro') idPerro: string,
        @Res() response,
        @Body() perro: Perro
    ) {
        perro.idPerro = +idPerro;

        await this._perroService.actualizar(+idPerro, perro);

        response.redirect('/Perro/Admin')

    }

    @Get('Galeria')
    async galeria(@Res() response,
                 @Query('busqueda') busqueda: string
    ){

        let perro: PerroEntity[]

        if (busqueda) {
            const consulta = {
                where: [
                    {nombrePerro: busqueda}

                ]
            };
            perro = await this._perroService.buscar(consulta);
        } else {
            perro =await this._perroService.buscar();
        }
        response.render('galeria-principal.ejs',{arreglo: perro})
    }



    @Get('inicio')
    async inicio2(
        @Res() response,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
        @Query('busqueda') busqueda: string,
        //@Session() sesion,
    ) {

        // if(sesion.usuario){
        let mensaje; // undefined
        let clase; // undefined

        if (accion && nombre) {
            switch (accion) {
                case 'actualizar':
                    clase = 'info';
                    mensaje = `Registro ${nombre} actualizado`;
                    break;
                case 'borrar':
                    clase = 'danger';
                    mensaje = `Registro ${nombre} eliminado`;
                    break;
                case 'crear':
                    clase = 'success';
                    mensaje = `Registro ${nombre} creado`;
                    break;
            }
        }

        let perros: PerroEntity[];
        if (busqueda) {

            const consulta: FindManyOptions<PerroEntity> = {
                where: [
                    {
                        nombrePerro: Like(`%${busqueda}%`)
                    },
                    {
                        razaPerro: Like(`%${busqueda}%`)
                    }
                ]
            };
            perros = await this._perroService.buscar(consulta);
        } else {
            perros = await this._perroService.buscar();
        }
        response.render('galeria-principal', {
            nombre: '',
            arreglo: perros,
            mensaje: mensaje,
            accion: clase,
            titulo: 'Gestion de perros',

        });
        // }else{
        //     throw new ForbiddenException({mensaje:'No puedes entrar'});
        // }



    }



}