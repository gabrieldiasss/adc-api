import { expect, describe, it } from "vitest";
import { InMemoryCoursesRepository } from "../repositories/in-memory/in-memory-courses-repository";

describe("get course use case", () => {
  it("should be create new course", async () => {
    const coursesRepository = new InMemoryCoursesRepository();
    const getCoursesCourseUseCase = new GetCoursesCourseUseCase(
      coursesRepository
    );

    const { course } = await getCoursesCourseUseCase.execute({
      title: "JS",
      description: "Curso de JS",
      author: "Gabriel Dias",
    });

    expect(course.id).toEqual(expect.any(String));
  });
});
