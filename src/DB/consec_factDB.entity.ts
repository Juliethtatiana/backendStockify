/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { VentaDB } from './ventaDB.entity';

@Entity({name:'consec_fact'})
export class consec_fact{
  @PrimaryGeneratedColumn()
  id_consec: number;

  @Column()
  rango_min: string;

  @Column()
  rango_max: string;

  @Column()
  numero_actual: number;  
  
  @OneToMany(() => VentaDB, venta => venta.idventa)
  venta: VentaDB[];
}