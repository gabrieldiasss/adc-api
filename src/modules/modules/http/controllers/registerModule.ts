import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaModulesRepository } from "../../repositories/prisma/prisma-module-repositories";
import { RegisterModuleUseCase } from "../../use-cases/registerModule";

export async function registerModule(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerModuleBodySchema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
  });

  const { title, description } = registerModuleBodySchema.parse(request.body);

  const { courseId } = request.params as any;

  try {
    const moduleRepository = new PrismaModulesRepository();
    const registerModule = new RegisterModuleUseCase(moduleRepository);

    await registerModule.execute({
      title,
      description,
      courseId,
    });
  } catch (err) {
    return reply.status(400).send();
  }
  return reply.status(201).send();
}
