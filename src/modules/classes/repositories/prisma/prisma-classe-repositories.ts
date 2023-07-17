import { prisma } from "@/lib/prisma";
import { ClassesRepository } from "../modules-repository";
import { Classe } from "@prisma/client";

export class PrismaClassesRepository implements ClassesRepository {
  async create({ title, description, classe_url, moduleId }: any) {
    const createClasse = await prisma.classe.create({
      data: {
        title,
        description,
        classe_url,
        module: {
          connect: {
            id: moduleId,
          },
        },
      },
    });

    return createClasse;
  }

  async getOne(id: string) {
    const getOneClasse = await prisma.classe.findUnique({
      where: {
        id,
      },
      include: {
        module: true,
      },
    });

    return getOneClasse;
  }

  async delete(id: string) {
    const deleteClasse = await prisma.classe.delete({
      where: {
        id,
      },
    });

    return deleteClasse;
  }

  async update(Classe: Classe) {
    const updateClasse = prisma.classe.update({
      where: {
        id: Classe.id,
      },
      data: Classe,
    });

    return updateClasse;
  }
}
