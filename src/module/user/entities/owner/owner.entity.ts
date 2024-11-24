import { Entity } from 'typeorm';
import { User } from '../user.entity';

@Entity({ name: 'owners' })
export class Owner extends User {}
