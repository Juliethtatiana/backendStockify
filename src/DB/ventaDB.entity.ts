/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne} from 'typeorm';
import { producto_has_ventaDB } from './producto_has_ventaDB.entity';
import { clienteDB } from './clienteDB.entity';
import { usuarioDB } from './usuarioDB.entity';
import { inventarioDB } from './inventarioDB.entity';
import { consec_fact } from './consec_factDB.entity';


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

  @OneToMany(() => producto_has_ventaDB, producto => producto.venta)
  producto: producto_has_ventaDB[];

  @ManyToOne(() =>clienteDB, cliente => cliente.idCliente)
    cliente: clienteDB;

  @ManyToOne(() =>usuarioDB, usuario=>usuario.idusuario)
    vendedor: usuarioDB;

  @ManyToOne(() =>inventarioDB, inventario=>inventario.idinventario)
  inventario: inventarioDB;

  @ManyToOne(() => consec_fact, consecutivo => consecutivo.id_consec)
  consecutivo: consec_fact;
}