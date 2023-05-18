import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvProdService } from './invprod.service';
import { CreateInvprodDto } from './dto/create-invprod.dto';
import { UpdateInvprodDto } from './dto/update-invprod.dto';

@Controller('invprod')
export class InvprodController {
  constructor(private readonly invprodService: InvProdService) {}

  @Post()
  create(@Body() createInvprodDto: CreateInvprodDto) {
    return this.invprodService.create(createInvprodDto);
  }

  @Get()
  findAll() {
    return this.invprodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invprodService.findOne(+id);
  }
  @Get('inv/:id')
  findWithProvider(@Param('id') id: string) {
    //return this.invprodService.findWithInvProd(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvprodDto: UpdateInvprodDto) {
    //return this.invprodService.update(+id, updateInvprodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invprodService.remove(+id);
  }
}
