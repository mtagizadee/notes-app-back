import { Module } from '@nestjs/common';
import { LocalPrismaModule } from './local-prisma/local-prisma.module';

@Module({
  imports: [LocalPrismaModule],
})
export class AppModule {}
