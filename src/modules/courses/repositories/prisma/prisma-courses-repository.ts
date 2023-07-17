import { prisma } from "@/lib/prisma";
import { Course, Prisma } from "@prisma/client";
import { CoursesRepository } from "../courses-repository";

export class PrismaCoursesRepository implements CoursesRepository {
  async create(data: Prisma.CourseCreateInput) {
    const course = await prisma.course.create({
      data,
    });

    return course;
  }

  async list() {
    const courses = await prisma.course.findMany({
      include: {
        modules: true,
      },
    });

    return courses;
  }

  async listOne(id: string) {
    const course = await prisma.course.findUnique({
      where: {
        id,
      },
      include: {
        modules: true,
      },
    });

    return course;
  }

  async delete(id: string) {
    const deleteCourse = await prisma.course.delete({
      where: {
        id,
      },
    });

    return deleteCourse;
  }

  async update(course: Course) {
    const updateCourse = await prisma.course.update({
      where: {
        id: course.id,
      },
      data: course,
    });

    return updateCourse;
  }
}
