import { Module } from '@nestjs/common';
import { VentaProdService } from './ventaprod.service';
import { VentaProdController } from './ventaprod.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { producto_has_ventaDB } from 'src/DB/producto_has_ventaDB.entity';

@Module({
  imports:[TypeOrmModule.forFeature([producto_has_ventaDB])],
  controllers: [VentaProdController],
  providers: [VentaProdService]
})
export class VentaProdModule {}
