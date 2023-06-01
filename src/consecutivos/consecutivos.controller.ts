import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Res } from '@nestjs/common';
import { ConsecutivoService } from './consecutivos.service';
import { CreateConsecutivoDto } from './dto/create-consecutivo.dto';
import { UpdateConsecutivoDto } from './dto/update-consecutivo.dto';

@Controller('consec_fact')
export class ConsecutivoController {
  constructor(private readonly consecutivoService: ConsecutivoService) {}

  @Post()
  create(@Res() response, @Body() createConsecutivoDto: CreateConsecutivoDto) {
    return this.consecutivoService.create(createConsecutivoDto,response);
  }

  @Get()
  findAll() {
    return this.consecutivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consecutivoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id:number, @Body() consecutivo:UpdateConsecutivoDto) {
    return this.consecutivoService.update(id, consecutivo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consecutivoService.remove(+id);
  }
}
