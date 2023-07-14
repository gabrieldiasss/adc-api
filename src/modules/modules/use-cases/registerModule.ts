import { Module } from "@prisma/client";
import { ModulesRepository } from "../repositories/modules-repository";

interface RegisterModuleUseCaseRequest {
  title: string;
  description: string;
  courseId: string;
}

interface RegisterModuleUseCaseResponse {
  createModule: Module | unknown;
}

export class RegisterModuleUseCase {
  constructor(private modulesRepository: ModulesRepository) {}

  async execute({
    title,
    description,
    courseId,
  }: RegisterModuleUseCaseRequest): Promise<RegisterModuleUseCaseResponse> {
    const createModule = this.modulesRepository.create({
      title,
      description,
      courseId,
    });

    return {
      createModule,
    };
  }
}
