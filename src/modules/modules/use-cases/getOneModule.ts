import { ModulesRepository } from "../repositories/modules-repository";

export class GetOneModuleUseCase {
  constructor(private modulesRepository: ModulesRepository) {}

  async execute(id: string) {
    const getOneModule = this.modulesRepository.getOne(id);

    return getOneModule;
  }
}
