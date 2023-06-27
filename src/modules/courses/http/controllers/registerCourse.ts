import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { RegisterCourseUseCase } from "../../use-cases/registerCourse";
import { PrismaCoursesRepository } from "../../repositories/prisma/prisma-courses-repository";

export async function registerCourse(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerCourseBodyShema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    author: z.string().nonempty(),
  });

  const { title, description, author } = registerCourseBodyShema.parse(
    request.body
  );

  try {
    const coursesRepository = new PrismaCoursesRepository();
    const registerUseCase = new RegisterCourseUseCase(coursesRepository);

    await registerUseCase.execute({
      title,
      description,
      author,
    });
  } catch (err) {
    return reply.status(400).send();
  }

  return reply.status(201).send();
}
