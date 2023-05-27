import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvProdService } from './invprod.service';
import { CreateInvprodDto } from './dto/create-invprod.dto';
import { UpdateInvprodDto } from './dto/update-invprod.dto';

@Controller('invprod')
export class InvProdController {
  constructor(private readonly invProdService: InvProdService) {}

  @Post()
  create(@Body() createInvProdDto: CreateInvprodDto) {
    return this.invProdService.create(createInvProdDto);
  }

  @Get()
  findAll() {
    return this.invProdService.findAll();
  }

  @Get(':id')
  findProducts(@Param('id') id: string) {
    return this.invProdService.findProducts(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateInvprodDto) {
    return this.invProdService.update(+id, updateVentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invProdService.remove(+id);
  }
}
