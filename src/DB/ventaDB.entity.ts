/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { producto_has_ventaDB } from './producto_has_ventaDB.entity';
import { clienteDB } from './clienteDB.entity';
import { usuarioDB } from './usuarioDB.entity';
import { inventarioDB } from './inventarioDB.entity';

@Entity({name:'venta'})
export class VentaDB{
  @PrimaryGeneratedColumn()
  idventa: number;

  @Column({type: 'datetime'})
  fecha: Date;

  @Column()
  valor:number;

  @Column()
  clienteIdCliente:number;

  @Column()
  vendedorIdusuario:number;

  @Column()
  inventarioIdinventario:number;

  @OneToMany(() => producto_has_ventaDB, venta => venta.venta)
  producto: producto_has_ventaDB[];

  @ManyToOne(() =>clienteDB, cliente => cliente.idCliente)
    cliente: clienteDB;

    @ManyToOne(() =>inventarioDB, inventario => inventario.idinventario)
    inventario: clienteDB;

  @ManyToOne(() =>usuarioDB, usuario=>usuario.idusuario)
    vendedor: usuarioDB;

}