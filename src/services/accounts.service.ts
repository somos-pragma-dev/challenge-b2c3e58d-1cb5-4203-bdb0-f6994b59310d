import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from '../modules/accounts/account.entity';
import { CreateAccountDto } from '../dtos/create-account.dto';
import { UpdateAccountDto } from '../dtos/update-account.dto';
import { Validations } from '../common/validations';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  async getAllAccounts(): Promise<AccountEntity[]> {
    return this.accountRepository.find();
  }

  async createAccount(createAccountDto: CreateAccountDto): Promise<AccountEntity> {
    Validations.validateCreateAccount(createAccountDto);
    const account = this.accountRepository.create(createAccountDto);
    return this.accountRepository.save(account);
  }

  async updateAccount(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<AccountEntity> {
    Validations.validateUpdateAccount(updateAccountDto);
    const account = await this.accountRepository.findOne(id);
    if (!account) {
      throw new Error('Account not found');
    }
    Object.assign(account, updateAccountDto);
    return this.accountRepository.save(account);
  }

  async deleteAccount(id: string): Promise<void> {
    const account = await this.accountRepository.findOne(id);
    if (!account) {
      throw new Error('Account not found');
    }
    await this.accountRepository.remove(account);
  }
}