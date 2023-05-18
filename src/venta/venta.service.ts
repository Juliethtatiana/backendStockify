/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VentaDB } from 'src/DB/ventaDB.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentaService {
  constructor(@InjectRepository(VentaDB) private ventaRespository : Repository<VentaDB>){}

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
        idventa: id
      }
    });
  }

  update(id: number, provider: UpdateVentaDto) {
    return this.ventaRespository.update({idventa:id},provider) ;
  }

  remove(id: number) {
    return this.ventaRespository.delete({idventa:id})
  }
} 
