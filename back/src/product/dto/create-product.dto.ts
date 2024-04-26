import {
    IsAlphanumeric,
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';

export class CreateProductDto {
 
    @IsString()
    @MinLength(2, { message: 'Name of product have at lest 2 charachters' })
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    @MinLength(15, { message: 'Description must have atleast 15 characters.' })
    description: string;
  


}
