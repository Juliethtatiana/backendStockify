/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { proveedorDB } from 'src/DB/proveedorDB.entity';

@Injectable()
export class ProveedorService {
  constructor(@InjectRepository(proveedorDB) private proveedorRespository : Repository<proveedorDB>){}

  create(proveedor) {
    const newProvider = this.proveedorRespository.create(proveedor);
    return this.proveedorRespository.save(newProvider)
  }

  findAll() {
    return this.proveedorRespository.find();
  }

  findOne(id: number) {
    return this.proveedorRespository.findOne({
      where:{
        idProveedor: id
      }
    });
  }

  update(id: number) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return this.proveedorRespository.delete({idProveedor:id})
  }
} 
