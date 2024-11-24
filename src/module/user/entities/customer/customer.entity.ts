import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user.entity';

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column(() => User)
  user: User;
}
