/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { VentaDB } from './ventaDB.entity';

@Entity({name:'cliente'})
export class clienteDB{
  @Column()
  idCliente: number;

  @Column()
  nombreCliente: string;

  @Column()
  direccionCliente: string;

  @Column()
  telefonoCliente: string;  

  @OneToMany(() => VentaDB, venta => VentaDB.cliente)
  venta: VentaDB[];
}