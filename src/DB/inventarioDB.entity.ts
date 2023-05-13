/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'inventario'})
export class InventarioDB{
  @PrimaryGeneratedColumn()
  idinventario: number;

  @Column()
  cantidad: number;
  
  @Column()
  fechaCreacion:Date;
}