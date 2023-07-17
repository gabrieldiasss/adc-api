import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClassesRepository } from "../../repositories/prisma/prisma-classe-repositories";
import { DeleteClasseUseCase } from "../../use-cases/deleteModule";

export async function deleteClasse(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const classeRepository = new PrismaClassesRepository();
  const deleteClasseUseCase = new DeleteClasseUseCase(classeRepository);

  const { classeId } = request.params as any;

  const deleteClasse = await deleteClasseUseCase.execute(classeId);

  return reply.status(202).send({ deleteClasse });
}
