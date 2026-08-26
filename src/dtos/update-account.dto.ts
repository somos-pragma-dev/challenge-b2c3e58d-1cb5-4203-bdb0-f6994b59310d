import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateAccountDto {
  @IsString()
  accountNumber?: string;

  @IsString()
  accountType?: string;

  @IsNumber()
  balance?: number;
}