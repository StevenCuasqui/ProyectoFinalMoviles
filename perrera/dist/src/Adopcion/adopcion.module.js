"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const adopcion_entity_1 = require("./adopcion-entity");
const adopcion_controller_1 = require("./adopcion.controller");
const adopcion_service_1 = require("./adopcion.service");
let AdopcionModule = class AdopcionModule {
};
AdopcionModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule
                .forFeature([
                adopcion_entity_1.AdopcionEntity
            ])
        ],
        controllers: [
            adopcion_controller_1.AdopcionController
        ],
        providers: [
            adopcion_service_1.AdopcionService
        ],
        exports: [
            adopcion_service_1.AdopcionService
        ]
    })
], AdopcionModule);
exports.AdopcionModule = AdopcionModule;
//# sourceMappingURL=adopcion.module.js.map