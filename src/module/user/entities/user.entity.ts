import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
@Unique(['email'])
export abstract class User {
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
