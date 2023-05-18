/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoDB } from 'src/DB/productoDB.entity';
import { Repository } from 'typeorm';
import { inventario_has_productoDB } from 'src/DB/Inventario_has_productoDB.entity';
import { UpdateProductoDto } from 'src/producto/dto/update-producto.dto';

@Injectable()
export class InvProdService {
  constructor(@InjectRepository(inventario_has_productoDB) private productoRespository : Repository<inventario_has_productoDB>){}

  create(producto) {
    const newProduct = this.productoRespository.create(producto);
    return this.productoRespository.save(newProduct)
  }

  findAll() {
    return this.productoRespository.find();
  }

  findOne(id: number) {
    return this.productoRespository.findOne({
      where:{
        idInvProd:id
      }
    });
  }

  findWithProvider(id: number) {
    return this.productoRespository.find({
      relations:['proveedor']
      
    });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
