/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { inventarioDB } from './inventarioDB.entity';
import { VentaDB } from './ventaDB.entity';

@Entity({name:'usuario'})
export class usuarioDB{
  @PrimaryGeneratedColumn()
  idusuario: number;

  @Column()
  nombre: string;

  @Column()
  apellido:string;

  @Column()
  userName:string;

  @Column()
  password:string;

  @Column()
  role:string;

  @OneToMany(() => inventarioDB, inventario => inventario.idinventario)
  inventarios: inventarioDB[];

  @OneToMany(() => VentaDB, venta => venta.idventa)
  venta: VentaDB[];

}