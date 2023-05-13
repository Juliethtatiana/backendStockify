/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

}