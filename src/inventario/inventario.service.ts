import { Injectable } from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { inventarioDB } from 'src/DB/inventarioDB.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InventarioService {
  constructor(@InjectRepository(inventarioDB) private inventarioRespository : Repository<inventarioDB>){}

  create(inventario: CreateInventarioDto) {
    const newInv= this.inventarioRespository.create(inventario);
    return this.inventarioRespository.save(newInv)
  }

  findAll() {
    return `This action returns all inventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventario`;
  }

  update(id: number, updateInventarioDto: UpdateInventarioDto) {
    return `This action updates a #${id} inventario`;
  }

  findWithUser(id: number) {
    return this.inventarioRespository.find({
      relations:['creador']
      
    });
  }


  remove(id: number) {
    return `This action removes a #${id} inventario`;
  }
}
