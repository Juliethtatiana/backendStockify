import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProductoDB } from './productoDB.entity';
import { VentaDB } from './ventaDB.entity';

@Entity({name:'producto_has_venta'})
export class producto_has_ventaDB{
    @PrimaryGeneratedColumn()
    idProdVent:number

    @ManyToOne(() =>ProductoDB, producto=>producto.venta)
    producto: ProductoDB;

    @ManyToOne(() =>VentaDB, venta=>venta.producto)
    venta: VentaDB;
}