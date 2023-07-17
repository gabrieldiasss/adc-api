import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaModulesRepository } from "../../repositories/prisma/prisma-module-repositories";
import { DeleteModuleUseCase } from "../../use-cases/deleteModule";

export async function deleteModule(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const moduleRepository = new PrismaModulesRepository();
  const deleteModuleUseCase = new DeleteModuleUseCase(moduleRepository);

  const { moduleId } = request.params as any;

  const deleteModule = await deleteModuleUseCase.execute(moduleId);

  return reply.status(202).send({ deleteModule });
}
