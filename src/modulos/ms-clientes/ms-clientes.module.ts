import { Module } from '@nestjs/common';
import { MsClientesController } from './ms-clientes.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { MS_CLIENTES } from '@apirestaurante/contracts';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
  
      ClientsModule.register([
        {
          name: MS_CLIENTES.NAME,
          transport: Transport.TCP,
            options: {
              host: MS_CLIENTES.HOST,
              port: MS_CLIENTES.PORT
            },
        },
      ]),
    ],
  controllers: [MsClientesController],

})
export class ClientesModule {}
