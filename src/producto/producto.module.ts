import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule} from '@nestjs/typeorm'
import { ProductoDB } from 'src/DB/productoDB.entity';
import { ProveedorModule } from 'src/proveedor/proveedor.module';

@Module({
  imports:[TypeOrmModule.forFeature([ProductoDB]),ProveedorModule],
  controllers: [ProductoController],
  providers: [ProductoService],
  exports:[ProductoService]
})
export class ProductoModule {}
