import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  Post,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import {
  CreateUsuarioDto,
  MS_USUARIOS
} from '@apirestaurante/contracts';



@Controller('usuarios')
export class UsuariosController {
  constructor(
    @Inject(MS_USUARIOS.NAME)
    private readonly usuariosClient: ClientProxy,
  ) {}


  @Get()
  findAll(): any {
    console.log('ms-gateway: list users');
    return this.usuariosClient.send({cmd: MS_USUARIOS.PATTERNS.Usuario.LISTAR }, {}); //envia
  }

  @Get(':username')
  findUser(@Param('username') username: string): any {
    console.log('ms-gateway: get user detail for username:', username);
    return this.usuariosClient.send({ cmd: MS_USUARIOS.PATTERNS.Usuario.OBTENER } , { username }); //envia
  }
  @Post()
  crearUsuario(@Body() createusuarioDto: CreateUsuarioDto) {
    console.log("GW - crearUsuario: ", createusuarioDto)
    return this.usuariosClient.send({ cmd: MS_USUARIOS.PATTERNS.Usuario.CREAR }, createusuarioDto)
  }



}