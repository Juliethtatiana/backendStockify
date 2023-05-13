import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: inventarioService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.inventarioService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.inventarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.inventarioService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventarioService.remove(+id);
  }

}