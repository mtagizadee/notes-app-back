import { IsOptional, IsString } from 'class-validator';

export class SearchNoteDto {
  @IsOptional()
  @IsString()
  query?: string;
}
