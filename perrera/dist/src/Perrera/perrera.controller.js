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
const perrera_service_1 = require("../Perrera/perrera.service");
let PerreraController = class PerreraController {
    constructor(_perreraService) {
        this._perreraService = _perreraService;
    }
    inicio(response, busqueda) {
        return __awaiter(this, void 0, void 0, function* () {
            let perrera;
            if (busqueda) {
                const consulta = {
                    where: [
                        { nombrePerrera: busqueda }
                    ]
                };
                perrera = yield this._perreraService.buscar(consulta);
            }
            else {
                perrera = yield this._perreraService.buscar();
            }
            response.render('administracionPerrera.ejs', { arreglo: perrera });
        });
    }
    crearPerro(response, perrera) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._perreraService.crear(perrera);
            response.redirect('/Perrera/Admin');
        });
    }
    borrar(idPerrera, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioEncontrado = yield this._perreraService
                .buscarPorId(+idPerrera);
            yield this._perreraService.borrar(Number(idPerrera));
            response.redirect('/Perrera/Admin');
        });
    }
    actualizarPerrera(idPerrera, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const perreraAActualizar = yield this
                ._perreraService
                .buscarPorId(Number(idPerrera));
            response.render('actualizarPerrera.ejs', {
                perrera: perreraAActualizar
            });
        });
    }
    actualizar(idPerrera, response, perrera) {
        return __awaiter(this, void 0, void 0, function* () {
            perrera.idPerrera = +idPerrera;
            yield this._perreraService.actualizar(+idPerrera, perrera);
            response.redirect('/Perrera/Admin');
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
], PerreraController.prototype, "inicio", null);
__decorate([
    common_1.Post('Admin/crear'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PerreraController.prototype, "crearPerro", null);
__decorate([
    common_1.Post('Admin/borrar/:idPerrera'),
    __param(0, common_1.Param('idPerrera')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PerreraController.prototype, "borrar", null);
__decorate([
    common_1.Get('Admin/actualizar/:idPerrera'),
    __param(0, common_1.Param('idPerrera')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PerreraController.prototype, "actualizarPerrera", null);
__decorate([
    common_1.Post('Admin/actualizar/:idPerrera'),
    __param(0, common_1.Param('idPerrera')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PerreraController.prototype, "actualizar", null);
PerreraController = __decorate([
    common_1.Controller('Perrera'),
    __metadata("design:paramtypes", [perrera_service_1.PerreraService])
], PerreraController);
exports.PerreraController = PerreraController;
//# sourceMappingURL=perrera.controller.js.map