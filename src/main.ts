import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MS_GATEWAY } from '@apirestaurante/contracts';

async function bootstrap() {
  const logger = new Logger('Main: ' + MS_GATEWAY.NAME);
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //eliminar propiedades que no esten en el DTO
      forbidNonWhitelisted: true, //si vienen campos que no esten en el DTO, error
      transform: true //transformar los datos al tipo que esperamos (DTO) 
    })
  )
  await app.listen(MS_GATEWAY.PORT);

  logger.log(`Gateway running on port MS_GATEWAY.PORT`);
}
bootstrap();