import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../enum/role.enum';
import { IsEnum } from 'class-validator';
@Entity({ name: 'users' })
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', name: 'name', length: 100, nullable: true })
  name: string;
  @Column({
    type: 'varchar',
    name: 'email',
    length: 70,
    nullable: true,
    unique: true,
  })
  email: string;
  @Column({ type: 'varchar', name: 'telephone', length: 11, nullable: true })
  telephone: string;
  @Column({ name: 'roles', enum: Role, nullable: false })
  @IsEnum(Role)
  role: Role;
  @Exclude()
  @Column({ type: 'varchar', name: 'password', length: 255, nullable: true })
  password: string;
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: string;
  @UpdateDateColumn({ name: 'update_at' })
  public updatedAt: string;
  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: string;
}
