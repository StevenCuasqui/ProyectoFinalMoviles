import {Body, Controller, Get, Param, Post, Query, Res} from "@nestjs/common";
import {Perrera, PerreraService} from "../Perrera/perrera.service";
import {PerreraEntity} from "./perrera-entity";
import {FindManyOptions} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario-entity";

@Controller('Perrera')
export class PerreraController {

    constructor(
        private readonly _perreraService: PerreraService,
    ) {}

    @Get('Admin')
    async inicio(@Res() response,
           @Query('busqueda') busqueda: string
    ){

        let perrera: PerreraEntity[]

        if (busqueda) {
                    const consulta = {
                        where: [
                            {nombrePerrera: busqueda}

                        ]
                    };
                    perrera = await this._perreraService.buscar(consulta);
                } else {
                    perrera =await this._perreraService.buscar();
                }
        response.render('administracionPerrera.ejs',{arreglo: perrera})
    }


    @Post('Admin/crear')
    async crearPerro(
        @Res() response,
        @Body() perrera: Perrera

    ){
        await this._perreraService.crear(perrera)

        response.redirect('/Perrera/Admin')
    }

    @Post('Admin/borrar/:idPerrera')
    async borrar(
        @Param('idPerrera') idPerrera: string,
        @Res() response
    ) {
        const usuarioEncontrado = await this._perreraService
            .buscarPorId(+idPerrera);

        await this._perreraService.borrar(Number(idPerrera));

        //const parametrosConsulta = `?accion=borrar&nombre=${usuarioEncontrado.nombre}`;

        response.redirect('/Perrera/Admin')
    }

    @Get('Admin/actualizar/:idPerrera')
    async actualizarPerrera(
        @Param('idPerrera') idPerrera: string,
        @Res() response
    ) {
        const perreraAActualizar = await this
            ._perreraService
            .buscarPorId(Number(idPerrera));

        response.render(
            'actualizarPerrera.ejs', {
                perrera: perreraAActualizar
            }
        )
    }

    @Post('Admin/actualizar/:idPerrera')
    async actualizar(
        @Param('idPerrera') idPerrera: string,
        @Res() response,
        @Body() perrera: Perrera
    ) {
        perrera.idPerrera = +idPerrera;

        await this._perreraService.actualizar(+idPerrera, perrera);

        response.redirect('/Perrera/Admin')

    }


}