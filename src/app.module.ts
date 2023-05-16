import { Module } from '@nestjs/common';
import { InventarioModule } from './inventario/inventario.module';
import { VentaModule } from './venta/venta.module';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioDB } from 'src/DB/inventarioDB.entity';
import { UsuarioDB } from 'src/DB/usuarioDB.entity';
import { InventarioModule } from './inventario/inventario.module';

@Module({
  imports: [
    InventarioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sub-zero00',
      database: 'stockifyDB',
      entities: [InventarioDB, UsuarioDB],
    }),
    ProductoModule,
    VentaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
