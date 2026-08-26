import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  accountNumber: string;

  @IsNotEmpty()
  @IsString()
  accountType: string;

  @IsNotEmpty()
  @IsNumber()
  balance: number;
}