import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgressConfigServer } from './config/postgress.config.server';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgressConfigServer,
      inject: [PostgressConfigServer],
    }),
  ],
})
export class AppModule {}
