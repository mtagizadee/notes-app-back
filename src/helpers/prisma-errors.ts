import { Prisma } from '@prisma/client';

/**
 * Prisma errors checker class for checking error codes.
 * I didn't want to remember all error codes, so I created this class.
 */
export class PrismaErrorsChecker {
  static isPrismaError = (error: any): boolean => {
    return error instanceof Prisma.PrismaClientKnownRequestError;
  };

  static isUniqeConstraintError(
    error: Prisma.PrismaClientKnownRequestError
  ): boolean {
    return error.code === 'P2002';
  }

  static isNotFoundError(error: Prisma.PrismaClientKnownRequestError): boolean {
    return error.code === 'P2025';
  }

  static isForeignKeyConstraintError(
    error: Prisma.PrismaClientKnownRequestError
  ): boolean {
    return error.code === 'P2003';
  }
}
