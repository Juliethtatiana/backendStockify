/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { clienteDB } from 'src/DB/clienteDB.entity';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(clienteDB) private clienteRepository : Repository<clienteDB>){}

  create(cliente) {
    const newClient = this.clienteRepository.create(cliente);
    return this.clienteRepository.save(newClient)
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
