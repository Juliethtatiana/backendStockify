/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import {usuarioDB} from 'src/DB/usuarioDB.entity'
import { inventario_has_productoDB } from './Inventario_has_productoDB.entity';

@Entity({name:'inventario'})
export class inventarioDB{
  @PrimaryGeneratedColumn()
  idinventario: number;

  @Column()
  cantidad: number;
  
  @Column()
  fechaCreacion:Date;

  @Column
  usuarioId: number;

  @ManyToOne(() =>usuarioDB, usuario=>usuarioDB.inventarios)
  creador: usuarioDB;

  @OneToMany(() => inventario_has_productoDB, producto => inventario_has_productoDB.inventario)
  producto: inventario_has_productoDB[];
}