import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { usuarioDB } from 'src/DB/usuarioDB.entity';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

type user={
  username:string,
  password:string
}

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() : Promise<usuarioDB[]> {
    return this.usuarioService.findAll();
  }

  @Post('auth/signin')
  signin(@Res() response,@Body() credentials:user){
    return this.usuarioService.signin(credentials, response)
  }

  @Get(':id')
  findOne(@Param('id') id: number) : Promise<usuarioDB> {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id:number, @Body() provider: UpdateUsuarioDto) {
   return this.usuarioService.update(id,provider);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
