import { CoursesRepository } from "../repositories/courses-repository";

export class DeleteCourseUseCase {
  constructor(private coursesRepository: CoursesRepository) {}

  async execute(id: string) {
    const deleteCourse = await this.coursesRepository.delete(id);

    return deleteCourse;
  }
}
