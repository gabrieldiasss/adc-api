import Module from "module";
import { ModulesRepository } from "../repositories/modules-repository";

interface UpdateModuleUseCaseRequest {
  id: string;
  title: string;
  description: string;
}

interface UpdateModuleUseCaseResponse {
  updateModule: Module | unknown;
}

export class UpdateModuleUseCase {
  constructor(private modulesRepository: ModulesRepository) {}

  async execute({
    id,
    title,
    description,
  }: UpdateModuleUseCaseRequest): Promise<UpdateModuleUseCaseResponse> {
    const updateModule = await this.modulesRepository.update({
      id,
      title,
      description,
    });

    return {
      updateModule,
    };
  }
}
