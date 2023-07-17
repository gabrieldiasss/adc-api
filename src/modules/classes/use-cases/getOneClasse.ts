import { ClassesRepository } from "../repositories/modules-repository";

export class GetOneClasseUseCase {
  constructor(private classesRepository: ClassesRepository) {}

  async execute(id: string) {
    const getOneClasse = this.classesRepository.getOne(id);

    return getOneClasse;
  }
}
