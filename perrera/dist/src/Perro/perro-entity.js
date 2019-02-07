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
const adopcion_entity_1 = require("../Adopcion/adopcion-entity");
const perrera_entity_1 = require("../Perrera/perrera-entity");
let PerroEntity = class PerroEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_perro'
    }),
    __metadata("design:type", Number)
], PerroEntity.prototype, "idPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'nombre_perro',
        type: 'varchar',
        length: 50,
        default: 'nombrePerro'
    }),
    __metadata("design:type", String)
], PerroEntity.prototype, "nombrePerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'raza_perro',
        type: 'varchar',
        length: 50,
        default: 'razaPerro'
    }),
    __metadata("design:type", String)
], PerroEntity.prototype, "razaPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'tamanio_perro',
        type: 'varchar',
        length: 50,
        default: 'tamanioPerro'
    }),
    __metadata("design:type", String)
], PerroEntity.prototype, "tamanioPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'sexo_perro',
        type: 'varchar',
        length: 50,
        default: 'sexoPerro'
    }),
    __metadata("design:type", String)
], PerroEntity.prototype, "sexoPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'edad_perro',
        type: 'int',
        default: 1
    }),
    __metadata("design:type", Number)
], PerroEntity.prototype, "edadPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'descripcion_perro',
        type: 'varchar',
        length: 50,
        default: 'descripcionPerro'
    }),
    __metadata("design:type", String)
], PerroEntity.prototype, "descripcionPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'fertilidad_perro',
        type: Boolean,
        default: false
    }),
    __metadata("design:type", Boolean)
], PerroEntity.prototype, "fertilidadPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'vacuna_perro',
        type: Boolean,
        default: false
    }),
    __metadata("design:type", Boolean)
], PerroEntity.prototype, "vacunaPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'chip_perro',
        type: Boolean,
        default: false
    }),
    __metadata("design:type", Boolean)
], PerroEntity.prototype, "chipPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'adopcion_perro',
        type: Boolean,
        default: false
    }),
    __metadata("design:type", Boolean)
], PerroEntity.prototype, "adopcionPerro", void 0);
__decorate([
    typeorm_1.Column({
        name: 'fechaentrada_perro',
        type: 'varchar',
        length: 50,
        default: 'fechaPerro'
    }),
    __metadata("design:type", String)
], PerroEntity.prototype, "fechaPerro", void 0);
__decorate([
    typeorm_1.OneToMany(type => adopcion_entity_1.AdopcionEntity, adopcion => adopcion.perro),
    __metadata("design:type", Array)
], PerroEntity.prototype, "adopcion", void 0);
__decorate([
    typeorm_1.ManyToOne(type => perrera_entity_1.PerreraEntity, perrera => perrera.perro),
    __metadata("design:type", Array)
], PerroEntity.prototype, "perrera", void 0);
PerroEntity = __decorate([
    typeorm_1.Entity('Perro')
], PerroEntity);
exports.PerroEntity = PerroEntity;
//# sourceMappingURL=perro-entity.js.map