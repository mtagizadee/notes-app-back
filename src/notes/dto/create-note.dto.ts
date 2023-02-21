import { IsString, IsNotEmpty, Length } from 'class-validator';
import { notesConstant } from '../constants';

export class CreateNoteDto {
  @IsNotEmpty()
  @IsString()
  @Length(notesConstant.minContentLength, notesConstant.maxContentLength)
  content: string;

  @IsNotEmpty()
  @IsString()
  title: string;
}
