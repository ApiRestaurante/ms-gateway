import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Post,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  CreateUsuarioDto,
  USUARIOS_PATTERNS,
} from '@apirestaurante/contracts';
import type { Usuario } from '@apirestaurante/contracts';
import { firstValueFrom, timeout } from 'rxjs';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    @Inject('USUARIOS_CLIENT')
    private readonly usuariosClient: ClientProxy,
  ) {}

  @Post()
  hello(@Body() usuarioDto: CreateUsuarioDto): any {
    return usuarioDto;
  }
  
  @Get()
  findAll(): Promise<Usuario[]> {
    return this.request<Usuario[]>(
      USUARIOS_PATTERNS.FIND_ALL,
      {},
    );
  }

  // @Post()
  // create(@Body() dto: CreateUsuarioDto): Promise<Usuario> {
  //   return this.request<Usuario>(
  //     USUARIOS_PATTERNS.CREATE,
  //     dto,
  //   );
  // }

  private async request<T>(
    pattern: string,
    payload: unknown,
  ): Promise<T> {
    try {
      return await firstValueFrom(
        this.usuariosClient
          .send<T>(pattern, payload)
          .pipe(timeout(5000)),
      );
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'statusCode' in error &&
        error.statusCode === 400
      ) {
        throw new HttpException(
          'Datos de usuario no válidos',
          400,
        );
      }

      throw new ServiceUnavailableException(
        'No se pudo completar la petición al servicio de usuarios',
      );
    }
  }
}