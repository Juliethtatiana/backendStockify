import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { CreateProdveedorDto } from './dto/create-proveedor.dto';
import { proveedorDB } from 'src/DB/proveedorDB.entity';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Post()
  create(@Body() createProveedorDto: CreateProdveedorDto) {
    return this.proveedorService.create(createProveedorDto);
  }

  @Get()
  findAll() : Promise<proveedorDB[]> {
    return this.proveedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) : Promise<proveedorDB> {
    return this.proveedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id:number, @Body() provider: UpdateProveedorDto) {
   return this.proveedorService.update(id,provider);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proveedorService.remove(+id);
  }
}
