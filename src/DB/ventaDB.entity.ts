/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { producto_has_ventaDB } from './producto_has_ventaDB.entity';
import { clienteDB } from './clienteDB.entity';
import { usuarioDB } from './usuarioDB.entity';

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

  @OneToMany(() => producto_has_ventaDB, venta => producto_has_ventaDB.venta)
  producto: producto_has_ventaDB[];

  @ManyToOne(() =>clienteDB, cliente=>clienteDB.venta)
    cliente: clienteDB;

  @ManyToOne(() =>usuarioDB, usuario=>usuarioDB.venta)
    vendedor: usuarioDB;

}