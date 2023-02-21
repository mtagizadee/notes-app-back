import { Injectable } from '@nestjs/common';
import { LocalPrismaService } from '../local-prisma/local-prisma.service';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: LocalPrismaService) {}
}
