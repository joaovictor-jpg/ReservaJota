import { Entity } from 'typeorm';
import { User } from '../user.entity';

@Entity({ name: 'customers' })
export class Customer extends User {}
