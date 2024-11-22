import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";

@Entity('Roles')
export class Role {
    @PrimaryColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    detalle:string;
    
    @ManyToMany(()=>User)
    @JoinTable({name:'role_user'})
    users:User[]
}
