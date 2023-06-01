/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateVentaProdDto } from './dto/update-ventaprod.dto';
import { producto_has_ventaDB } from 'src/DB/producto_has_ventaDB.entity';
import { CreateVentaProdDto } from './dto/create-ventaprod.dto';

@Injectable()
export class VentaProdService {
  constructor(@InjectRepository(producto_has_ventaDB) private ventaRespository : Repository<producto_has_ventaDB>){}

  async create(ventaprod:CreateVentaProdDto, response) {
    const newVentaProd = this.ventaRespository.create(ventaprod);
    const saved= await this.ventaRespository.save(newVentaProd)
    if(saved){
      console.log(saved)
      return response.status(HttpStatus.CREATED).json({
        statusCode: 200,
        message: 'ventaprod creada exitosamente'
      });
    }
    return response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: 500,
      message: 'fallo al crear ventaprod'
    });
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
  findbySell(id:number){
    return this.ventaRespository.find({
      where:{
        ventaIdventa: id
      },
      relations:['producto']
    })

  }

  update(id: number, provider: UpdateVentaProdDto) {
    //return this.ventaRespository.update({idProdVent:id},provider) ;
  }

  remove(id: number) {
    return this.ventaRespository.delete({idProdVent:id})
  }
} 
