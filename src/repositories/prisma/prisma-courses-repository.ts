import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { CoursesRepository } from "../courses-repository";

export class PrismaCoursesRepository implements CoursesRepository {
  async create(data: Prisma.CourseCreateInput) {
    const course = await prisma.course.create({
      data,
    });

    return course;
  }
}
