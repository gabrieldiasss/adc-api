import { Course, Prisma } from "@prisma/client";
import { CoursesRepository } from "../courses-repository";

export class InMemoryCoursesRepository implements CoursesRepository {
  public items: Course[] = [];

  async create(data: Prisma.CourseCreateInput) {
    const course = {
      id: "course-1",
      title: data.title,
      descritpion: data.description,
      author: data.author,
    };

    this.items.push(course);

    return course;
  }

  async list() {
    const courses = this.items;

    return courses;
  }

  async listOne() {}
}
