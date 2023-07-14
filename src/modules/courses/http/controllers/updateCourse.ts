import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaCoursesRepository } from "../../repositories/prisma/prisma-courses-repository";
import { UpdateCourseUseCase } from "../../use-cases/updateCourse";

export async function updateCourse(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const updateCourseBodyShema = z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
  });

  const { title, description, author } = updateCourseBodyShema.parse(
    request.body
  );

  const { id } = request.params as any;

  try {
    const coursesRepository = new PrismaCoursesRepository();
    const updateUseCase = new UpdateCourseUseCase(coursesRepository);

    await updateUseCase.execute({
      id,
      title,
      description,
      author,
    });
  } catch (err) {
    console.log(err);
  }

  return reply.status(201).send();
}
