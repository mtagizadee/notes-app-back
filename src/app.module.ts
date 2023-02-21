import { Module } from '@nestjs/common';
import { LocalPrismaModule } from './local-prisma/local-prisma.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [LocalPrismaModule, NotesModule],
})
export class AppModule {}
