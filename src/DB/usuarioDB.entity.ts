/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'usuario'})
export class UsuarioDB{
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

}