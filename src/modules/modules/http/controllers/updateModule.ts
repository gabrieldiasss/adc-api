import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaModulesRepository } from "../../repositories/prisma/prisma-module-repositories";
import { UpdateModuleUseCase } from "../../use-cases/updateModule";
import { z } from "zod";

export async function updateModule(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const updateModuleBodyShema = z.object({
    title: z.string(),
    description: z.string(),
  });

  const { title, description } = updateModuleBodyShema.parse(request.body);

  const { id } = request.params as any;

  try {
    const moduleRepository = new PrismaModulesRepository();
    const updateUseCase = new UpdateModuleUseCase(moduleRepository);

    await updateUseCase.execute({
      id,
      title,
      description,
    });
  } catch (err) {
    console.log(err);
  }

  return reply.status(201).send();
}
