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
  precioUnitario: number;  

  @Column()
  proveedorIdProveedor:number;

  @OneToMany(() => inventario_has_productoDB, inventario => inventario.producto)
  inventario: inventario_has_productoDB[];

  @OneToMany(() => producto_has_ventaDB, prodVent => prodVent.idProdVent)
  venta: producto_has_ventaDB[];

  @ManyToOne(() =>proveedorDB, proveedor=>proveedor.idProveedor)
    proveedor: proveedorDB;

}