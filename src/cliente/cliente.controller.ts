import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Res } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Res() response, @Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto,response);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id:number, @Body() cliente:UpdateClienteDto) {
    return this.clienteService.update(id, cliente);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
