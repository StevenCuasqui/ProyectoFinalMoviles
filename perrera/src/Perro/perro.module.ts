import {Module} from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm';
import {PerroEntity} from "./perro-entity";
import {PerroController} from "./perro.controller";
import {PerroService} from "./perro.service";

@Module({

    imports: [
        // Repositorio
        TypeOrmModule
            .forFeature(
                [
                    PerroEntity
                ]
            )
    ],
    controllers: [
        PerroController
    ],
    providers:[
        PerroService
    ],
    exports:[
        PerroService
    ]
})
export class PerroModule{

}