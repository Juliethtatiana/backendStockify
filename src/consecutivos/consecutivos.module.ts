import { Module } from '@nestjs/common';
import { ConsecutivoService } from './consecutivos.service';
import { ConsecutivoController } from './consecutivos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { consec_fact } from 'src/DB/consec_factDB.entity';

@Module({
  imports:[TypeOrmModule.forFeature([consec_fact])],
  controllers: [ConsecutivoController],
  providers: [ConsecutivoService],
  exports:[ConsecutivoService]
})
export class ConsecutivoModule {}
