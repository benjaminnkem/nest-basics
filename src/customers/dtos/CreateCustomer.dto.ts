import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsInt()
  id: number;

  @IsNotEmpty()
  name: string;
}
