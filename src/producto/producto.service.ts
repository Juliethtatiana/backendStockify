/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoDB } from 'src/DB/productoDB.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
  constructor(@InjectRepository(ProductoDB) private productoRespository : Repository<ProductoDB>){}

  createProduct(producto,response) {
    const newProduct = this.productoRespository.create(producto);
    if(this.productoRespository.save(newProduct)){
      return response.status(HttpStatus.CREATED).json({
        statusCode: 200,
        message: 'producto creado exitosamente'
      });
    }
    return response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: 500,
      message: 'producto creado exitosamente'
    });
  }

  findAll() {
    return this.productoRespository.find();
  }

  findOne(id: number) {
    return this.productoRespository.findOne({
      where:{
        idproducto:id
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
