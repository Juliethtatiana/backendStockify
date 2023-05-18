import { Module } from '@nestjs/common';
import { InventarioModule } from './inventario/inventario.module';
import { VentaModule } from './venta/venta.module';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarioDB } from './DB/usuarioDB.entity';
import { inventarioDB } from './DB/inventarioDB.entity';
import { clienteDB } from './DB/clienteDB.entity';
import { inventario_has_productoDB } from './DB/Inventario_has_productoDB.entity';
import { producto_has_ventaDB } from './DB/producto_has_ventaDB.entity';
import { ProductoDB } from './DB/productoDB.entity';
import { proveedorDB } from './DB/proveedorDB.entity';
import { VentaDB } from './DB/ventaDB.entity';
import {ProveedorModule} from './proveedor/proveedor.module'
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioModule } from './usuario/usuario.module';
import { InvProdModule } from './inventarioProducto/invprod.module';
import { VentaProdModule } from './ventaProd/ventaprod.module';

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
      entities: [clienteDB,inventarioDB,inventario_has_productoDB,producto_has_ventaDB, producto_has_ventaDB,ProductoDB,proveedorDB,usuarioDB,VentaDB],
      synchronize:true
    }),
    ProductoModule,
    VentaModule,
    ProveedorModule,
    ClienteModule,
    UsuarioModule,
    InvProdModule,
    VentaProdModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
