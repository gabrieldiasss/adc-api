import { Module } from "@prisma/client";

export interface CreateModule {
  title: string;
  description: string;
  courseId: string;
}

export interface ModulesRepository {
  create(data: any): Promise<Module | unknown>;
}
