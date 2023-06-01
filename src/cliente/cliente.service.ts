/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { clienteDB } from 'src/DB/clienteDB.entity';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(clienteDB) private clienteRepository : Repository<clienteDB>){}

  async create(cliente:CreateClienteDto,response) {
    console.log(cliente)
    const clientFound= await this.clienteRepository.findOne({
      where: {
        nombreCliente:cliente.nombreCliente
      }
    })  
    if(clientFound){
      return response.status(HttpStatus.OK).json({
        statusCode: 200,
        message: 'cliente existente',
        id: clientFound.idCliente
      });
    }else{
      const newClient =  this.clienteRepository.create(cliente);
      const saved=await this.clienteRepository.save(newClient)
      if(this.clienteRepository.save(newClient)){
        return response.status(HttpStatus.OK).json({
          statusCode: 200,
          message: 'cliente creado exitosamente',
          id:newClient.idCliente,
          
        });
      }
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 500,
        message: 'fallo al crear cliente'
      });
    }

    
  }

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return this.clienteRepository.findOne({
      where:{
        idCliente:id
      }
    });
  }

  update(id: number, cliente:UpdateClienteDto) {
    return this.clienteRepository.update(id,cliente);
  }

  remove(id: number) {
    return this.clienteRepository.delete({idCliente:id});
  }
}
