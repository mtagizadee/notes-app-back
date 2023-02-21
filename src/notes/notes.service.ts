import { Injectable, NotFoundException } from '@nestjs/common';
import { Note, Prisma } from '@prisma/client';
import { PrismaErrorsChecker } from 'src/helpers/prisma-errors';
import { LocalPrismaService } from '../local-prisma/local-prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: LocalPrismaService) {}

  async findAll(query?: string): Promise<Note[]> {
    const where: Prisma.NoteWhereInput = {};

    if (query) {
      where.title = {
        contains: query,
      };
    }

    return await this.prisma.note.findMany({
      where,
      orderBy: {
        id: 'asc',
      },
    });
  }

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    return await this.prisma.note.create({
      data: createNoteDto,
    });
  }

  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<Note> {
    try {
      return await this.prisma.note.update({
        where: { id },
        data: updateNoteDto,
      });
    } catch (error) {
      if (PrismaErrorsChecker.isPrismaError(error)) {
        if (PrismaErrorsChecker.isNotFoundError(error)) {
          throw new NotFoundException('Note is not found.');
        }
      }
    }
  }

  async remove(id: number): Promise<{ message: string }> {
    try {
      await this.prisma.note.delete({
        where: { id },
      });

      return { message: 'Note is deleted.' };
    } catch (error) {
      if (PrismaErrorsChecker.isPrismaError(error)) {
        if (PrismaErrorsChecker.isNotFoundError(error)) {
          throw new NotFoundException('Note is not found.');
        }
      }
    }
  }
}
