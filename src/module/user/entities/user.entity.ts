import { Exclude } from 'class-transformer';
import { Column } from 'typeorm';

export class User {
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
}
