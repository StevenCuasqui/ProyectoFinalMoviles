"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./Usuario/usuario-entity");
const usuario_module_1 = require("./Usuario/usuario.module");
const perro_entity_1 = require("./Perro/perro-entity");
const perro_module_1 = require("./Perro/perro.module");
const perrera_entity_1 = require("./Perrera/perrera-entity");
const perrera_module_1 = require("./Perrera/perrera.module");
const adopcion_entity_1 = require("./Adopcion/adopcion-entity");
const adopcion_module_1 = require("./Adopcion/adopcion.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule
                .forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'Admin',
                password: 'web2018',
                database: 'proyectoweb',
                synchronize: true,
                dropSchema: true,
                entities: [
                    usuario_entity_1.UsuarioEntity,
                    perro_entity_1.PerroEntity,
                    perrera_entity_1.PerreraEntity,
                    adopcion_entity_1.AdopcionEntity
                ]
            }),
            adopcion_module_1.AdopcionModule,
            perrera_module_1.PerreraModule,
            perro_module_1.PerroModule,
            usuario_module_1.UsuarioModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map