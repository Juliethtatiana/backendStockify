/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { clienteDB } from 'src/DB/clienteDB.entity';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(clienteDB) private clienteRepository : Repository<clienteDB>){}

  create(cliente) {
    const newClient = this.clienteRepository.create(cliente);
    return this.clienteRepository.save(newClient)
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
