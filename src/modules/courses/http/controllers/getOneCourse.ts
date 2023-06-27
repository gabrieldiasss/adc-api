import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaCoursesRepository } from "../../repositories/prisma/prisma-courses-repository";
import { GetOneCourseUseCase } from "../../use-cases/getOneCourse";
import { z } from "zod";

export async function getOneCourse(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const coursesRepository = new PrismaCoursesRepository();
  const getOneCourseUseCase = new GetOneCourseUseCase(coursesRepository);

  const registerCourseBodyShema = z.object({
    id: z.string().uuid(),
  });

  const { id } = registerCourseBodyShema.parse(request.params);

  const course = await getOneCourseUseCase.execute(id);

  return reply.status(200).send({ course });
}
