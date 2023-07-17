import { prisma } from "@/lib/prisma";
import { ModulesRepository } from "../modules-repository";
import Module from "module";

export class PrismaModulesRepository implements ModulesRepository {
  async create({ title, description, courseId }: any) {
    const createModule = await prisma.module.create({
      data: {
        title,
        description,
        course: {
          connect: {
            id: courseId,
          },
        },
      },
    });

    return createModule;
  }

  async getOne(id: string) {
    const getOneModule = await prisma.module.findUnique({
      where: {
        id,
      },
      include: {
        classes: true,
      },
    });

    return getOneModule;
  }

  async delete(id: string) {
    const deleteModule = await prisma.module.delete({
      where: {
        id,
      },
    });

    return deleteModule;
  }

  async update(module: Module) {
    const updateModule = prisma.module.update({
      where: {
        id: module.id,
      },
      data: module,
    });

    return updateModule;
  }
}
