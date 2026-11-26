import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsuariosController } from './usuarios.controller';
import {
  MS_USUARIOS,
} from '@apirestaurante/contracts';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ClientsModule.register([
      {
        name: MS_USUARIOS.NAME,
        transport: Transport.TCP,
          options: {
            host: MS_USUARIOS.HOST,
            port: MS_USUARIOS.PORT
          },
      },
    ]),
  ],
  controllers: [UsuariosController],
})
export class UsuariosModule {}