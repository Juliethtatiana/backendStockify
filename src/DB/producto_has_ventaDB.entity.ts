import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProductoDB } from './productoDB.entity';
import { VentaDB } from './ventaDB.entity';

@Entity({name:'producto_has_venta'})
export class producto_has_ventaDB{

    @ManyToOne(() =>ProductoDB, producto=>ProductoDB.venta)
    producto: ProductoDB;

    @ManyToOne(() =>VentaDB, venta=>VentaDB.producto)
    venta: VentaDB;
}