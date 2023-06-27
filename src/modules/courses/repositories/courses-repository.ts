import { Course, Prisma } from "@prisma/client";

export interface CoursesRepository {
  create(data: Prisma.CourseCreateInput): Promise<Course | unknown>;
  list(): Promise<Course[]>;
  listOne(id: string): Promise<Course | null>;
  delete(id: string): Promise<Course | null>;
  update(data: Prisma.CourseUpdateInput): Promise<Course | unknown>;
}
