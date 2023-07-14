import { prisma } from "@/lib/prisma";
import { ModulesRepository } from "../modules-repository";

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
}
