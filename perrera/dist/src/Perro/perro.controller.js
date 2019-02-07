"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const perro_service_1 = require("./perro.service");
let PerroController = class PerroController {
    constructor(_perroService) {
        this._perroService = _perroService;
    }
    inicio(response, busqueda) {
        return __awaiter(this, void 0, void 0, function* () {
            let perro;
            if (busqueda) {
                const consulta = {
                    where: [
                        { nombrePerro: busqueda }
                    ]
                };
                perro = yield this._perroService.buscar(consulta);
            }
            else {
                perro = yield this._perroService.buscar();
            }
            response.render('administracionPerro.ejs', { arreglo: perro });
        });
    }
    crearPerro(perro, response) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._perroService.crear(perro);
            response.redirect('/Perro/Admin');
        });
    }
    borrar(idPerro, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioEncontrado = yield this._perroService
                .buscarPorId(+idPerro);
            yield this._perroService.borrar(Number(idPerro));
            response.redirect('/Perro/Admin');
        });
    }
    actualizarPerrera(idPerro, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const perroAActualizar = yield this
                ._perroService
                .buscarPorId(Number(idPerro));
            response.render('actualizarPerro.ejs', {
                perro: perroAActualizar
            });
        });
    }
    actualizar(idPerro, response, perro) {
        return __awaiter(this, void 0, void 0, function* () {
            perro.idPerro = +idPerro;
            yield this._perroService.actualizar(+idPerro, perro);
            response.redirect('/Perro/Admin');
        });
    }
    galeria(response, busqueda) {
        return __awaiter(this, void 0, void 0, function* () {
            let perro;
            if (busqueda) {
                const consulta = {
                    where: [
                        { nombrePerro: busqueda }
                    ]
                };
                perro = yield this._perroService.buscar(consulta);
            }
            else {
                perro = yield this._perroService.buscar();
            }
            response.render('galeria-principal.ejs', { arreglo: perro });
        });
    }
};
__decorate([
    common_1.Get('Admin'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PerroController.prototype, "inicio", null);
__decorate([
    common_1.Post('Admin/crear'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PerroController.prototype, "crearPerro", null);
__decorate([
    common_1.Post('Admin/borrar/:idPerro'),
    __param(0, common_1.Param('idPerro')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PerroController.prototype, "borrar", null);
__decorate([
    common_1.Get('Admin/actualizar/:idPerro'),
    __param(0, common_1.Param('idPerro')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PerroController.prototype, "actualizarPerrera", null);
__decorate([
    common_1.Post('Admin/actualizar/:idPerro'),
    __param(0, common_1.Param('idPerro')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PerroController.prototype, "actualizar", null);
__decorate([
    common_1.Get('Galeria'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PerroController.prototype, "galeria", null);
PerroController = __decorate([
    common_1.Controller('Perro'),
    __metadata("design:paramtypes", [perro_service_1.PerroService])
], PerroController);
exports.PerroController = PerroController;
//# sourceMappingURL=perro.controller.js.map