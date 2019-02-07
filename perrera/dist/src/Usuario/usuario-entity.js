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
let UsuarioEntity = class UsuarioEntity {
    antesDeInsertar() {
        console.log('Ejecutandome antes de insertar');
    }
    verificarFuncion() {
        console.log('Ejecuta despues de antes de insertar');
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'id_usuario'
    }),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column({
        name: 'nombre_usuario',
        type: 'varchar',
        length: 50,
        default: 'nombre'
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        name: 'apellido_usuario',
        type: 'varchar',
        length: 50,
        default: 'apellido'
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "apellido", void 0);
__decorate([
    typeorm_1.Column({
        name: 'fechanacimiento_usuario',
        type: 'varchar',
        length: 50,
        default: 'fechaNacimiento'
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "fechaNacimiento", void 0);
__decorate([
    typeorm_1.Column({
        name: 'correo_usuario',
        type: 'varchar',
        length: 50,
        default: 'correo'
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column({
        name: 'telefono_usuario',
        type: 'varchar',
        length: 50,
        default: 'telefono'
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column({
        name: 'contrasenia_usuario',
        type: 'varchar',
        length: 50,
        default: 'contrasenia'
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "contrasenia", void 0);
__decorate([
    typeorm_1.Column({
        name: 'genero_usuario',
        type: 'varchar',
        length: 50,
        default: 'genero'
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "genero", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioEntity.prototype, "antesDeInsertar", null);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioEntity.prototype, "verificarFuncion", null);
__decorate([
    typeorm_1.OneToMany(type => adopcion_entity_1.AdopcionEntity, adopcion => adopcion.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "adopcion", void 0);
UsuarioEntity = __decorate([
    typeorm_1.Entity('Usuario')
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario-entity.js.map