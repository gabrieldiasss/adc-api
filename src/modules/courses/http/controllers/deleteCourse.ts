import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaCoursesRepository } from "../../repositories/prisma/prisma-courses-repository";
import { z } from "zod";
import { DeleteCourseUseCase } from "../../use-cases/deleteCourse";

export async function deleteCourse(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const coursesRepository = new PrismaCoursesRepository();
  const deleteCourseUseCase = new DeleteCourseUseCase(coursesRepository);

  const registerCourseBodyShema = z.object({
    id: z.string().uuid(),
  });

  const { id } = registerCourseBodyShema.parse(request.params);

  const deleteCourse = await deleteCourseUseCase.execute(id);

  return reply.status(202).send({ deleteCourse });
}
