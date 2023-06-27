import { FastifyInstance } from "fastify";
import { registerCourse } from "./registerCourse";
import { getCourses } from "./getCourses";
import { getOneCourse } from "./getOneCourse";
import { deleteCourse } from "./deleteCourse";
import { updateCourse } from "./updateCourse";

export async function appRoutes(app: FastifyInstance) {
  app.post("/courses", registerCourse);
  app.get("/courses", getCourses);
  app.get("/courses/:id", getOneCourse);
  app.delete("/courses/:id", deleteCourse);
  app.patch("/courses/:id", updateCourse);
}
