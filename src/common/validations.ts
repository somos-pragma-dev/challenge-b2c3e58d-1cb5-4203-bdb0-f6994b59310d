import { CreateAccountDto } from '../dtos/create-account.dto';
import { UpdateAccountDto } from '../dtos/update-account.dto';

export class Validations {
  static validateCreateAccount(createAccountDto: CreateAccountDto): void {
    if (createAccountDto.balance < 0) {
      throw new Error('Initial balance must be non-negative');
    }
  }

  static validateUpdateAccount(updateAccountDto: UpdateAccountDto): void {
    if (updateAccountDto.balance!== undefined && updateAccountDto.balance < 0) {
      throw new Error('Balance must be non-negative');
    }
  }
}