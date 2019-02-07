import {Body, Controller, Get, Param, Post, Query, Res} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario-entity";

@Controller('Usuario')
export class UsuarioController {

    constructor(
        private readonly _usuarioService: UsuarioService,
    ) {

    }

    @Get('registro')
    async registro(@Res() response) {
     response.render('registro.ejs')
    }

    @Post('registro')
    async crearUsuarioFormulario(
        @Body() usuario: Usuario,
        @Res() response
    ) {

        await this._usuarioService.crear(usuario);
        response.redirect('/Usuario/registro')
    }


}