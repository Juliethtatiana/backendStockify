import { Module } from '@nestjs/common';
import { InventarioModule } from './inventario/inventario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioDB } from 'src/DB/inventarioDB.entity';
import { UsuarioDB } from 'src/DB/usuarioDB.entity';

@Module({
  imports: [
    InventarioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'stockifyDB',
      entities: [InventarioDB, UsuarioDB],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
