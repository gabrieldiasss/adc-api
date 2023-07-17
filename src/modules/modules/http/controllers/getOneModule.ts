import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaModulesRepository } from "../../repositories/prisma/prisma-module-repositories";
import { GetOneModuleUseCase } from "../../use-cases/getOneModule";

export async function getOneModule(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const moduleRepository = new PrismaModulesRepository();
  const getOneModuleUseCase = new GetOneModuleUseCase(moduleRepository);

  const { moduleId } = request.params as any;

  const getOne = await getOneModuleUseCase.execute(moduleId);

  return reply.status(200).send({ getOne });
}
