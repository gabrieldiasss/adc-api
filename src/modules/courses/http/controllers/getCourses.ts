import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaCoursesRepository } from "../../repositories/prisma/prisma-courses-repository";
import { GetCoursesUseCase } from "../../use-cases/getCourses";

export async function getCourses(request: FastifyRequest, reply: FastifyReply) {
  const coursesRepository = new PrismaCoursesRepository();
  const getCoursesUseCase = new GetCoursesUseCase(coursesRepository);

  const courses = await getCoursesUseCase.execute();

  return reply.status(200).send({ courses });
}
