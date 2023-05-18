import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { inventarioDB } from './inventarioDB.entity';
import { ProductoDB } from './productoDB.entity';

@Entity({name:'inventario_has_producto'})
export class inventario_has_productoDB{
    @PrimaryGeneratedColumn()
    idInvProd:number
  
    @ManyToOne(() =>inventarioDB, inventario=>inventario.idinventario)
    inventario: inventarioDB;

    @ManyToOne(() =>ProductoDB, producto=>producto.idproducto)
    producto: ProductoDB;
}