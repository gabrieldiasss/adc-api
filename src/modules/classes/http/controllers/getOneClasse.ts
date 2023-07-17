import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClassesRepository } from "../../repositories/prisma/prisma-classe-repositories";
import { GetOneClasseUseCase } from "../../use-cases/getOneClasse";

export async function getOneClasse(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const moduleRepository = new PrismaClassesRepository();
  const getOneModuleUseCase = new GetOneClasseUseCase(moduleRepository);

  const { classeId } = request.params as any;

  const getOne = await getOneModuleUseCase.execute(classeId);

  return reply.status(200).send({ getOne });
}
