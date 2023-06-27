import { Course } from "@prisma/client";
import { CoursesRepository } from "../repositories/courses-repository";

interface RegisterCourseUseCaseRequest {
  title: string;
  description: string;
  author: string;
}

interface RegisterCourseUseCaseResponse {
  course: Course | unknown;
}

export class RegisterCourseUseCase {
  constructor(private coursesRepository: CoursesRepository) {}

  async execute({
    title,
    description,
    author,
  }: RegisterCourseUseCaseRequest): Promise<RegisterCourseUseCaseResponse> {
    const course = await this.coursesRepository.create({
      title,
      description,
      author,
    });

    return {
      course,
    };
  }
}
