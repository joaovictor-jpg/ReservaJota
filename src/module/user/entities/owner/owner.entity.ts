import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user.entity';

@Entity({ name: 'owners' })
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column(() => User)
  user: User;
}
