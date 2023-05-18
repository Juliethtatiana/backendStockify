import { Module } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { proveedorDB } from 'src/DB/proveedorDB.entity';

@Module({
  imports:[TypeOrmModule.forFeature([proveedorDB])],
  controllers: [ProveedorController],
  providers: [ProveedorService],
  exports:[ProveedorService]
})
export class ProveedorModule {}
