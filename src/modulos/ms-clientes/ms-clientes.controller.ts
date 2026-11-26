import { MS_CLIENTES } from '@apirestaurante/contracts';
import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';

@Controller('clientes')
export class MsClientesController {
    constructor(
        @Inject(MS_CLIENTES.NAME)
        private readonly clientesClient: ClientProxy,
      ) {}

        @Get()
        findAll(): any {
          console.log('ms-gateway: listado de clientes');
          return this.clientesClient.send({cmd:MS_CLIENTES.PATTERNS.Cliente.LISTAR}, {}); //envia
        }

        @Get(':nif')
          findUser(@Param('nif') nif: string): any {
            console.log('ms-gateway: get user detail for nif:', nif);
            return this.clientesClient.send({ cmd:MS_CLIENTES.PATTERNS.Cliente.OBTENER}, { nif }); //envia
          }
        
}
