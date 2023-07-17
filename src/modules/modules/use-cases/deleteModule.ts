import { ModulesRepository } from "../repositories/modules-repository";

export class DeleteModuleUseCase {
  constructor(private modulesRepository: ModulesRepository) {}

  async execute(moduleId: string) {
    const deleteModule = this.modulesRepository.delete(moduleId);

    return deleteModule;
  }
}
