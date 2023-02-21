import { IsString, IsOptional, Length } from 'class-validator';
import { notesConstant } from '../constants';

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  @Length(notesConstant.minContentLength, notesConstant.maxContentLength)
  content: string;

  @IsOptional()
  @IsString()
  title: string;
}
