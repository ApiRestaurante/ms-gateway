import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ClientsModule.registerAsync([
      {
        name: 'USUARIOS_CLIENT',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: config.get<string>(
              'USUARIOS_HOST',
              '127.0.0.1',
            ),
            port: Number(
              config.get<string>('USUARIOS_PORT', '3001'),
            ),
          },
        }),
      },
    ]),
  ],
  controllers: [UsuariosController],
})
export class AppModule {}