import { Module } from '@nestjs/common';
import { InvProdService } from './invprod.service';
import { InvprodController } from './invprod.controller';
import { TypeOrmModule} from '@nestjs/typeorm'
import { inventario_has_productoDB } from 'src/DB/inventario_has_productoDB.entity';
import { ProductoModule } from 'src/producto/producto.module';
import { InventarioModule } from 'src/inventario/inventario.module';

@Module({
  imports:[TypeOrmModule.forFeature([inventario_has_productoDB]), ProductoModule,InventarioModule],
  controllers: [InvprodController],
  providers: [InvProdService]
})
export class InvprodModule {}
