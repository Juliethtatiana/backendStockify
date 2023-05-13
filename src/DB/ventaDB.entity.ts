/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'venta'})
export class VentaDB{
  @PrimaryGeneratedColumn()
  idventa: number;

  @Column()
  nombreCliente: string;

  @Column()
  documentoCliente: number;

  @Column({type: 'datetime'})
  fecha: Date;

}