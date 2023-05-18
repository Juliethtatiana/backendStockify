import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentaProdService } from './ventaprod.service';
import { CreateVentaProdDto } from './dto/create-ventaprod.dto';
import { UpdateVentaProdDto } from './dto/update-ventaprod.dto';

@Controller('ventaprod')
export class VentaProdController {
  constructor(private readonly ventaService: VentaProdService) {}

  @Post()
  create(@Body() createVentaDto: CreateVentaProdDto) {
    return this.ventaService.create(createVentaDto);
  }

  @Get()
  findAll() {
    return this.ventaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventaService.findOne(+id);
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
