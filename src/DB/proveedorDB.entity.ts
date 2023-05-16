/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductoDB } from './productoDB.entity';

@Entity({name:'proveedor'})
export class proveedorDB{
  @Column()
  idProveedor: number;

  @Column()
  nombreProveedor: string;

  @Column()
  direccionProveedor: string;

  @Column()
  telefonoProveedor: string;  

  @OneToMany(() => ProductoDB, producto => ProductoDB.proveedor)
  producto: ProductoDB[];
}