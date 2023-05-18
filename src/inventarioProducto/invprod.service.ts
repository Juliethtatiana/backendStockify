/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateInvprodDto } from './dto/update-invprod.dto';
import { producto_has_ventaDB } from 'src/DB/producto_has_ventaDB.entity';
import { inventario_has_productoDB } from 'src/DB/Inventario_has_productoDB.entity';

@Injectable()
export class InvProdService {
  constructor(@InjectRepository(inventario_has_productoDB) private ventaRespository : Repository<inventario_has_productoDB>){}

  create(venta) {
    const newProvider = this.ventaRespository.create(venta);
    return this.ventaRespository.save(newProvider)
  }

  findAll() {
    return this.ventaRespository.find();
  }

  findOne(id: number) {
    return this.ventaRespository.findOne({
      where:{
        idInvProd: id
      }
    });
  }

  update(id: number, provider: UpdateInvprodDto) {
    //return this.ventaRespository.update({idProdVent:id},provider) ;
  }

  remove(id: number) {
    return this.ventaRespository.delete({idInvProd:id})
  }
} 
