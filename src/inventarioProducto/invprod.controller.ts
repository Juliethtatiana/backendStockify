import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvProdService } from './invprod.service';
import { CreateInvprodDto } from './dto/create-invprod.dto';
import { UpdateInvprodDto } from './dto/update-invprod.dto';

@Controller('invprod')
export class InvProdController {
  constructor(private readonly ventaService: InvProdService) {}

  @Post()
  create(@Body() createVentaDto: CreateInvprodDto) {
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
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateInvprodDto) {
    return this.ventaService.update(+id, updateVentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventaService.remove(+id);
  }
}
