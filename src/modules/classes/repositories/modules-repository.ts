import { Classe, Prisma } from "@prisma/client";

export interface CreateClasse {
  title: string;
  description: string;
  classe_url: string;
  moduleId: string;
}

export interface ClassesRepository {
  create(data: any): Promise<Classe | unknown>;
  getOne(id: string): Promise<Classe | null>;
  delete(id: string): Promise<Classe | null>;
  update(data: Prisma.ClasseUpdateInput): Promise<Classe | unknown>;
}
