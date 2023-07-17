import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaClassesRepository } from "../../repositories/prisma/prisma-classe-repositories";
import { RegisterClasseUseCase } from "../../use-cases/registerModule";

export async function registerClasse(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerClasseBodySchema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    classe_url: z.string().nonempty(),
  });

  const { title, description, classe_url } = registerClasseBodySchema.parse(
    request.body
  );

  const { moduleId } = request.params as any;

  try {
    const classeRepository = new PrismaClassesRepository();
    const registerClasse = new RegisterClasseUseCase(classeRepository);

    await registerClasse.execute({
      title,
      description,
      classe_url,
      moduleId,
    });
  } catch (err) {
    return reply.status(400).send();
  }
  return reply.status(201).send();
}
