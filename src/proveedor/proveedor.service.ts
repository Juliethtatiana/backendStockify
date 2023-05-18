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
    return `This action returns all producto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
