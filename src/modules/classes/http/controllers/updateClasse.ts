import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateModuleUseCase } from "../../use-cases/updateModule";
import { z } from "zod";
import { PrismaClassesRepository } from "../../repositories/prisma/prisma-classe-repositories";

export async function updateClasse(
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
    const moduleRepository = new PrismaClassesRepository();
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
