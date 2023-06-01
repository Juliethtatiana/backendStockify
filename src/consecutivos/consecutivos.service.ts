/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { consec_fact } from 'src/DB/consec_factDB.entity';
import { UpdateConsecutivoDto } from './dto/update-consecutivo.dto';
import { CreateConsecutivoDto } from './dto/create-consecutivo.dto';

@Injectable()
export class ConsecutivoService {
  constructor(@InjectRepository(consec_fact) private consecutivoRepository : Repository<consec_fact>){}

  async create(consecutivo:CreateConsecutivoDto,response) {
    const consecutivoFound= await this.consecutivoRepository.findOne({
      where: {
        rango_min:consecutivo.rango_min
      }
    })  
    if(consecutivoFound){
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'consecutivo existe',
        id: consecutivoFound.id_consec
      });
    }else{
      const newConsecutivo =  this.consecutivoRepository.create(consecutivo);
      const saved=await this.consecutivoRepository.save(newConsecutivo)
      if(this.consecutivoRepository.save(newConsecutivo)){
        return response.status(HttpStatus.OK).json({
          statusCode: 200,
          message: 'consecutivo creado exitosamente',
          id:newConsecutivo.id_consec,
          
        });
      }
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 500,
        message: 'fallo al crear consecutivo'
      });
    }

    
  }

  findAll() {
    return this.consecutivoRepository.find();
  }

  findOne(id: number) {
    return this.consecutivoRepository.findOne({
      where:{
        id_consec:id
      }
    });
  }

  update(id: number, consecutivo:UpdateConsecutivoDto) {
    return this.consecutivoRepository.update(id,consecutivo);
  }

  remove(id: number) {
    return this.consecutivoRepository.delete({id_consec:id});
  }
}
