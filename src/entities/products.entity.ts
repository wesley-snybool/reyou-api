import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    uuid: string;
}