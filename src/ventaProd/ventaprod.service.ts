/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateVentaProdDto } from './dto/update-ventaprod.dto';
import { producto_has_ventaDB } from 'src/DB/producto_has_ventaDB.entity';

@Injectable()
export class VentaProdService {
  constructor(@InjectRepository(producto_has_ventaDB) private ventaRespository : Repository<producto_has_ventaDB>){}

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
        idProdVent: id
      }
    });
  }

  update(id: number, provider: UpdateVentaProdDto) {
    //return this.ventaRespository.update({idProdVent:id},provider) ;
  }

  remove(id: number) {
    return this.ventaRespository.delete({idProdVent:id})
  }
} 
