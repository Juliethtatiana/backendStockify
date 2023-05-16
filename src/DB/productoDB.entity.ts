/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { inventario_has_productoDB } from './Inventario_has_productoDB.entity';
import { producto_has_ventaDB } from './producto_has_ventaDB.entity';
import { proveedorDB } from './proveedorDB.entity';

@Entity({name:'producto'})
export class ProductoDB{
  @PrimaryGeneratedColumn()
  idproducto: number;

  @Column()
  nombreProducto: string;

  @Column()
  descripcion: string;

  @Column()
  precioUnitario: string;  

  @OneToMany(() => inventario_has_productoDB, inventario => inventario_has_productoDB.producto)
  inventario: inventario_has_productoDB[];

  @OneToMany(() => producto_has_ventaDB, venta => producto_has_ventaDB.producto)
  venta: producto_has_ventaDB[];

  @ManyToOne(() =>proveedorDB, proveedor=>proveedorDB.producto)
    proveedor: proveedorDB;

}