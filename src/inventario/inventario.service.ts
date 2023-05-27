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
    return this.inventarioRespository.find();
  }

  

  findOne(id: number) {
    return this.inventarioRespository.findOne({
      where:{idinventario:id}
    });;
  }

  update(id: number, updateInventarioDto: UpdateInventarioDto) {
    return `This action updates a #${id} inventario`;
  }

//obtener el inventario  con los datos del usuario que lo creo
  findWithUser(id: number) {
    return this.inventarioRespository.findOne({
      where:{idinventario:id},
      relations:['creador']
      
    });
  }
//obtener todos los inevntarios con los datos del usuario
  findAllWithUser() {
    return this.inventarioRespository.find({
      relations:['creador']
      
    });
  }


  remove(id: number) {
    return `This action removes a #${id} inventario`;
  }
}
