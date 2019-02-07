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
const perrera_entity_1 = require("./perrera-entity");
const perrera_controller_1 = require("./perrera.controller");
const perrera_service_1 = require("./perrera.service");
let PerreraModule = class PerreraModule {
};
PerreraModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule
                .forFeature([
                perrera_entity_1.PerreraEntity
            ])
        ],
        controllers: [
            perrera_controller_1.PerreraController
        ],
        providers: [
            perrera_service_1.PerreraService
        ],
        exports: [
            perrera_service_1.PerreraService
        ]
    })
], PerreraModule);
exports.PerreraModule = PerreraModule;
//# sourceMappingURL=perrera.module.js.map