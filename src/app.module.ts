import { Module } from '@nestjs/common';
import { InventarioModule } from './inventario/inventario.module';
import { VentaModule } from './venta/venta.module';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarioDB } from './DB/usuarioDB.entity';
import { inventarioDB } from './DB/inventarioDB.entity';

@Module({
  imports: [
    InventarioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'stockifydb',
      entities: [usuarioDB,inventarioDB],
    }),
    ProductoModule,
    VentaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
