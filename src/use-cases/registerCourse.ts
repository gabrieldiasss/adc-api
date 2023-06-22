import { CoursesRepository } from "@/repositories/courses-repository";

interface RegisterCourseUseCaseRequest {
  title: string;
  description: string;
  author: string;
}

export class RegisterCourseUseCase {
  constructor(private coursesRepository: CoursesRepository) {}

  async execute({ title, description, author }: RegisterCourseUseCaseRequest) {
    this.coursesRepository.create({
      title,
      description,
      author,
    });
  }
}
