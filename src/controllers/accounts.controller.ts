import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AccountsService } from '../services/accounts.service';
import { CreateAccountDto } from '../dtos/create-account.dto';
import { UpdateAccountDto } from '../dtos/update-account.dto';
import { AccountEntity } from '../modules/accounts/account.entity';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async getAllAccounts(): Promise<AccountEntity[]> {
    return this.accountsService.getAllAccounts();
  }

  @Post()
  async createAccount(@Body() createAccountDto: CreateAccountDto): Promise<AccountEntity> {
    return this.accountsService.createAccount(createAccountDto);
  }

  @Put(':id')
  async updateAccount(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Promise<AccountEntity> {
    return this.accountsService.updateAccount(id, updateAccountDto);
  }

  @Delete(':id')
  async deleteAccount(@Param('id') id: string): Promise<void> {
    return this.accountsService.deleteAccount(id);
  }
}