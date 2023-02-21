import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  ParseIntPipe,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { Note } from '@prisma/client';
import { CreateNoteDto } from './dto/create-note.dto';
import { SearchNoteDto } from './dto/search-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async findAll(@Query() { query }: SearchNoteDto): Promise<Note[]> {
    return await this.notesService.findAll(query);
  }

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    return await this.notesService.create(createNoteDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoteDto: UpdateNoteDto
  ): Promise<Note> {
    return await this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number
  ): Promise<{ message: string }> {
    return await this.notesService.remove(id);
  }
}
