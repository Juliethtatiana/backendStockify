import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProductoDB } from './productoDB.entity';
import { VentaDB } from './ventaDB.entity';

@Entity({name:'producto_has_venta'})
export class producto_has_ventaDB{
    @PrimaryGeneratedColumn()
    idProdVent:number

    @Column()
    cantidad:number;

    @Column()
    ventaIdventa:number;

    @Column()
    productoIdproducto:number;

    @ManyToOne(() =>ProductoDB, producto=>producto.idproducto)
    producto: ProductoDB;

    @ManyToOne(() =>VentaDB, venta=>venta.idventa)
    venta: VentaDB;
}