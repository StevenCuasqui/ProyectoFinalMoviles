import {Body, Controller, Get, Param, Post, Query, Res} from "@nestjs/common";
import {Perro, PerroService} from "./perro.service";

@Controller('Perro')
export class PerroController{
    constructor(
        private readonly _perroService: PerroService,
    ) {}

    @Get('ingresoAdmin/:perroState')
        async (@Res() response){
        response.render('administracion.ejs')
    }

    @Post('ingresoAdmin/:parametro')
        async crearPerro(
            @Body() perro: Perro,
            @Res() response
    ){
        await this._perroService.crear(perro)

        response.render('galeria-principal.ejs')
    }


}