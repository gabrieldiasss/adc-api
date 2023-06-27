import { Course } from "@prisma/client";
import { CoursesRepository } from "../repositories/courses-repository";

interface UpdateCourseUseCaseRequest {
  id: string;
  title: string;
  description: string;
  author: string;
}

interface UpdateCourseUseCaseResponse {
  updateCourse: Course | unknown;
}

export class UpdateCourseUseCase {
  constructor(private coursesRepository: CoursesRepository) {}

  async execute({
    id,
    title,
    description,
    author,
  }: UpdateCourseUseCaseRequest): Promise<UpdateCourseUseCaseResponse> {
    const updateCourse = await this.coursesRepository.update({
      id,
      title,
      description,
      author,
    });

    return {
      updateCourse,
    };
  }
}
