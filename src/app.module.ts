import { Module } from '@nestjs/common';

import { UsuariosModule } from './modulos/ms-usuarios/usuarios.module';
import { ClientesModule } from './modulos/ms-clientes/ms-clientes.module';

import { AppController } from './app.controller';

@Module({
  imports: [
   UsuariosModule,
   ClientesModule
  ],
  controllers: [AppController],
})
export class AppModule {}