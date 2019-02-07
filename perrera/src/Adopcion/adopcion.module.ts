import {Module} from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm';
import {AdopcionEntity} from "./adopcion-entity";
import {AdopcionController} from "./adopcion.controller";
import {AdopcionService} from "./adopcion.service";

@Module({

    imports: [
        // Repositorio
        TypeOrmModule
            .forFeature(
                [
                    AdopcionEntity
                ]
            )
    ],
    controllers: [
        AdopcionController
    ],
    providers:[
        AdopcionService
    ],
    exports:[
        AdopcionService
    ]
})
export class AdopcionModule {
}