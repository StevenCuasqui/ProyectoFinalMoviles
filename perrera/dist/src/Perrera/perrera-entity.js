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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const perro_entity_1 = require("../Perro/perro-entity");
let PerreraEntity = class PerreraEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_perrera'
    }),
    __metadata("design:type", Number)
], PerreraEntity.prototype, "idPerrera", void 0);
__decorate([
    typeorm_1.Column({
        name: 'nombre_Perrera',
        type: 'varchar',
        length: 50,
        default: 'nombredePerrera'
    }),
    __metadata("design:type", String)
], PerreraEntity.prototype, "nombrePerrera", void 0);
__decorate([
    typeorm_1.Column({
        name: 'capacidad_Perrera',
        type: 'int'
    }),
    __metadata("design:type", Number)
], PerreraEntity.prototype, "capacidadPerrera", void 0);
__decorate([
    typeorm_1.OneToMany(type => perro_entity_1.PerroEntity, perro => perro.perrera),
    __metadata("design:type", Array)
], PerreraEntity.prototype, "perro", void 0);
PerreraEntity = __decorate([
    typeorm_1.Entity('Perrera')
], PerreraEntity);
exports.PerreraEntity = PerreraEntity;
//# sourceMappingURL=perrera-entity.js.map