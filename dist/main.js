"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const contracts_1 = require("@apirestaurante/contracts");
async function bootstrap() {
    const logger = new common_1.Logger('Main: ' + contracts_1.MS_GATEWAY.NAME);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true, //eliminar propiedades que no esten en el DTO
        forbidNonWhitelisted: true, //si vienen campos que no esten en el DTO, error
        transform: true //transformar los datos al tipo que esperamos (DTO) 
    }));
    await app.listen(contracts_1.MS_GATEWAY.PORT);
    logger.log(`Gateway running on port MS_GATEWAY.PORT`);
}
bootstrap();
//# sourceMappingURL=main.js.map