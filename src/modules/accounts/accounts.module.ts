import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsController } from '../controllers/accounts.controller';
import { AccountsService } from '../services/accounts.service';
import { AccountEntity } from './account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}