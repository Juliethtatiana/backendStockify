import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { inventarioDB } from './inventarioDB.entity';
import { ProductoDB } from './productoDB.entity';

@Entity({name:'Inventario_has_proeducto'})
export class inventario_has_productoDB{
  
    @ManyToOne(() =>inventarioDB, inventario=>inventarioDB.producto)
    inventario: inventarioDB;

    @ManyToOne(() =>ProductoDB, producto=>ProductoDB.inventario)
    producto: ProductoDB;
}