import { Module } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaDB } from 'src/DB/ventaDB.entity';

@Module({
  imports:[TypeOrmModule.forFeature([VentaDB])],
  controllers: [VentaController],
  providers: [VentaService]
})
export class VentaModule {}
