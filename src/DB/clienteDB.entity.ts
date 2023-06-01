/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { VentaDB } from './ventaDB.entity';

@Entity({name:'cliente'})
export class clienteDB{
  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column()
  nombreCliente: string;

  @Column()
  direccionCliente: string;

  @Column()
  telefonoCliente: number;  

  @OneToMany(() => VentaDB, venta => venta.idventa)
  venta: VentaDB[];
}