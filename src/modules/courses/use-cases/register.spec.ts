import { expect, describe, it } from "vitest";
import { RegisterCourseUseCase } from "./registerCourse";
import { InMemoryCoursesRepository } from "../repositories/in-memory/in-memory-courses-repository";

describe("Register use case", () => {
  it("should be create new course", async () => {
    const coursesRepository = new InMemoryCoursesRepository();
    const registerCourseUseCase = new RegisterCourseUseCase(coursesRepository);

    const { course } = await registerCourseUseCase.execute({
      title: "JS",
      description: "Curso de JS",
      author: "Gabriel Dias",
    });

    expect(course.id).toEqual(expect.any(String));
  });
});
