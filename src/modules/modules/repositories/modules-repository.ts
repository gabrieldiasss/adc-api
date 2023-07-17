import { Module, Prisma } from "@prisma/client";

export interface CreateModule {
  title: string;
  description: string;
  courseId: string;
}

export interface ModulesRepository {
  create(data: any): Promise<Module | unknown>;
  getOne(id: string): Promise<Module | null>;
  delete(id: string): Promise<Module | null>;
  update(data: Prisma.ModuleUpdateInput): Promise<Module | unknown>;
}
