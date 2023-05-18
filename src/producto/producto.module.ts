import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule} from '@nestjs/typeorm'
import { ProductoDB } from 'src/DB/productoDB.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductoDB])],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
