import {Module} from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm';
import {PerreraEntity} from "./perrera-entity";
import {PerreraController} from "./perrera.controller";
import {PerreraService} from "./perrera.service";

@Module({

    imports: [
        // Repositorio
        TypeOrmModule
            .forFeature(
                [
                    PerreraEntity
                ]
            )
    ],
    controllers: [
        PerreraController
    ],
    providers:[
        PerreraService
    ],
    exports:[
        PerreraService
    ]
})
export class PerreraModule {
}