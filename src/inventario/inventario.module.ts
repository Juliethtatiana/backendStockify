import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { inventarioDB } from 'src/DB/inventarioDB.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports:[TypeOrmModule.forFeature([inventarioDB]), UsuarioModule],
  controllers: [InventarioController],
  providers: [InventarioService],
  exports:[InventarioService]
})
export class InventarioModule {}
