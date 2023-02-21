import { IsString } from 'class-validator';
import { IsNotEmpty, Length } from 'class-validator/types/decorator/decorators';
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
