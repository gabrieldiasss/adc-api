export class DeleteClasseUseCase {
  constructor(private classesRepository: ClassesRepository) {}

  async execute(ClasseId: string) {
    const deleteClasse = this.classesRepository.delete(ClasseId);

    return deleteClasse;
  }
}
