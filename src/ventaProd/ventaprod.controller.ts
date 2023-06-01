import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { VentaProdService } from './ventaprod.service';
import { CreateVentaProdDto } from './dto/create-ventaprod.dto';
import { UpdateVentaProdDto } from './dto/update-ventaprod.dto';

@Controller('ventaprod')
export class VentaProdController {
  constructor(private readonly ventaService: VentaProdService) {}

  @Post()
  create(@Res() response, @Body() createVentaDto: CreateVentaProdDto) {

    return this.ventaService.create(createVentaDto, response);
  }

  @Get()
  findAll() {
    return this.ventaService.findAll();
  }

  @Get(':id')
  findbySell(@Param('id') id: string) {
    return this.ventaService.findbySell(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaProdDto) {
    return this.ventaService.update(+id, updateVentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventaService.remove(+id);
  }
}
