import { Module } from '@nestjs/common';
import { InvProdService } from './invprod.service';
import { InvProdController } from './invprod.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { producto_has_ventaDB } from 'src/DB/producto_has_ventaDB.entity';
import { inventario_has_productoDB } from 'src/DB/Inventario_has_productoDB.entity';

@Module({
  imports:[TypeOrmModule.forFeature([inventario_has_productoDB])],
  controllers: [InvProdController],
  providers: [InvProdService]
})
export class InvProdModule {}
