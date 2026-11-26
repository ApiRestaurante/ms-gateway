import { CreateProfileDto, MS_USUARIOS } from '@apirestaurante/contracts';
import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Controller('profile')
export class ProfileController {
  constructor(
    @Inject(MS_USUARIOS.NAME)
    private readonly usuariosClient: ClientProxy,
  ) {}
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    console.log("GW - crearpERFIL: ", createProfileDto)
    return this.usuariosClient.send({ cmd: MS_USUARIOS.PATTERNS.Profile.CREAR }, createProfileDto)
     
  }

  @Get()
  findAll() {
console.log('ms-gateway: list users');
    return this.usuariosClient.send({cmd: MS_USUARIOS.PATTERNS.Profile.LISTAR }, {}); //envia
    }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('ms-gateway: get user detail for username:', id);
    return this.usuariosClient.send({ cmd: MS_USUARIOS.PATTERNS.Profile.OBTENER } , { id }); //envia
   }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
  //   return this.profileService.update(+id, updateProfileDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.profileService.remove(+id);
  // }
}
