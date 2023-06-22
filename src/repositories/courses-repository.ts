import { Course, Prisma } from "@prisma/client";

export interface CoursesRepository {
  create(data: Prisma.CourseCreateInput): Promise<Course>;
}
