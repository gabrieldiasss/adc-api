import { CoursesRepository } from "../repositories/courses-repository";

export class GetOneCourseUseCase {
  constructor(private coursesRepository: CoursesRepository) {}

  async execute(id: string) {
    const course = this.coursesRepository.listOne(id);

    return course;
  }
}
