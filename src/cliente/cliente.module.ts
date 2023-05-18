import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clienteDB } from 'src/DB/clienteDB.entity';

@Module({
  imports:[TypeOrmModule.forFeature([clienteDB])],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
