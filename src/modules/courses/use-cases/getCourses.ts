import { CoursesRepository } from "../repositories/courses-repository";

export class GetCoursesUseCase {
  constructor(private coursesRepository: CoursesRepository) {}

  async execute() {
    const courses = this.coursesRepository.list();

    return courses;
  }
}
