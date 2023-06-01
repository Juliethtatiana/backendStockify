/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateInvprodDto } from './dto/update-invprod.dto';
import { producto_has_ventaDB } from 'src/DB/producto_has_ventaDB.entity';
import { inventario_has_productoDB } from 'src/DB/Inventario_has_productoDB.entity';
import {CreateInvprodDto} from './dto/create-invprod.dto'

@Injectable()
export class InvProdService {
  constructor(@InjectRepository(inventario_has_productoDB) private invProdRepository : Repository<inventario_has_productoDB>){}

  async create(producto: CreateInvprodDto) {
    const prodFound= await this.invProdRepository.findOne({
      where: {
        productoIdproducto:producto.productoIdproducto,
        inventarioIdinventario:producto.inventarioIdinventario
      }
    })  
    
    if(prodFound){
      return new HttpException('producto ya existe en el inventario', HttpStatus.CONFLICT)
    }
    const newProvider = this.invProdRepository.create(producto);
    return this.invProdRepository.save(newProvider)
  }

  findAll() {
    return this.invProdRepository.find();
  }

  findProducts(id: number) {
    return this.invProdRepository.find({
      where:{
        inventarioIdinventario: id
      },
      relations:['producto']
    });
  }

  update(id: number, provider: UpdateInvprodDto) {
    //return this.invProdRepository.update({idProdVent:id},provider) ;
  }

  remove(id: number) {
    return this.invProdRepository.delete({idInvProd:id})
  }
} 
