/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VentaDB } from 'src/DB/ventaDB.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { CreateVentaDto } from './dto/create-venta.dto';

@Injectable()
export class VentaService {
  constructor(@InjectRepository(VentaDB) private ventaRespository : Repository<VentaDB>){}

  async create(venta:CreateVentaDto,response) {
    const newVenta = this.ventaRespository.create(venta);
    const saved= await this.ventaRespository.save(newVenta)
    if(saved){
      return response.status(HttpStatus.CREATED).json({
        statusCode: 200,
        message: 'venta creada exitosamente',
        id: saved.idventa
      }); 
    }
    return response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: 500,
      message: 'fallo al crear venta'
    });
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
