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
const usuario_entity_1 = require("../Usuario/usuario-entity");
const perro_entity_1 = require("../Perro/perro-entity");
let AdopcionEntity = class AdopcionEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_adopcion'
    }),
    __metadata("design:type", Number)
], AdopcionEntity.prototype, "idAdopcion", void 0);
__decorate([
    typeorm_1.Column({
        name: 'fecha_adopcion',
        type: 'varchar',
        length: 50,
        default: 'fecha'
    }),
    __metadata("design:type", String)
], AdopcionEntity.prototype, "fechaAdopcion", void 0);
__decorate([
    typeorm_1.Column({
        name: 'hora_adopcion',
        type: 'varchar',
        length: 50,
        default: 'hora'
    }),
    __metadata("design:type", String)
], AdopcionEntity.prototype, "horaAdopcion", void 0);
__decorate([
    typeorm_1.Column({
        name: 'observacion_adopcion',
        type: 'varchar',
        length: 50,
        default: 'observacion'
    }),
    __metadata("design:type", String)
], AdopcionEntity.prototype, "observacionAdopcion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.UsuarioEntity, usuario => usuario.adopcion),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], AdopcionEntity.prototype, "usuario", void 0);
__decorate([
    typeorm_1.ManyToOne(type => perro_entity_1.PerroEntity, perro => perro.adopcion),
    __metadata("design:type", perro_entity_1.PerroEntity)
], AdopcionEntity.prototype, "perro", void 0);
AdopcionEntity = __decorate([
    typeorm_1.Entity('Adopcion')
], AdopcionEntity);
exports.AdopcionEntity = AdopcionEntity;
//# sourceMappingURL=adopcion-entity.js.map