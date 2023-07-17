import { Classe } from "@prisma/client";
import { ClassesRepository } from "../repositories/modules-repository";

interface RegisterClasseUseCaseRequest {
  title: string;
  description: string;
  classe_url: string;
  moduleId: string;
}

interface RegisterClasseUseCaseResponse {
  createClasse: Classe | unknown;
}

export class RegisterClasseUseCase {
  constructor(private classesRepository: ClassesRepository) {}

  async execute({
    title,
    description,
    classe_url,
    moduleId,
  }: RegisterClasseUseCaseRequest): Promise<RegisterClasseUseCaseResponse> {
    const createClasse = this.classesRepository.create({
      title,
      description,
      classe_url,
      moduleId,
    });

    return {
      createClasse,
    };
  }
}
