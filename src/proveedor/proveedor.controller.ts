import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { CreateProdveedorDto } from './dto/create-proveedor.dto';
import { proveedorDB } from 'src/DB/proveedorDB.entity';

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
  update(@Param('id') id: string) {
    //return this.productoService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proveedorService.remove(+id);
  }
}
