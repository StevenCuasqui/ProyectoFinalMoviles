import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "./Usuario/usuario-entity";
import {UsuarioModule} from "./Usuario/usuario.module";
import {PerroEntity} from "./Perro/perro-entity";
import {PerroModule} from "./Perro/perro.module";
import {PerreraEntity} from "./Perrera/perrera-entity";
import {PerreraModule} from "./Perrera/perrera.module";
import {AdopcionEntity} from "./Adopcion/adopcion-entity";
import {AdopcionModule} from "./Adopcion/adopcion.module";

@Module({
  imports: [
      TypeOrmModule
          .forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'Admin',
              password: 'web2018',
              database: 'proyectoweb',
              synchronize: false,
              dropSchema: false,
              entities: [
                  UsuarioEntity,
                  PerroEntity,
                  PerreraEntity,
                  AdopcionEntity
              ]
          }),
      AdopcionModule,
      PerreraModule,
      PerroModule,
      UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
