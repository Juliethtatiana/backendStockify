import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';

@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: ventaService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.ventaService.create(createUserDto);
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
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.ventaService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventaService.remove(+id);
  }
}