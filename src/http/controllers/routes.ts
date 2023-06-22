import { FastifyInstance } from "fastify";
import { registerCourse } from "./registerCourse";

export async function appRoutes(app: FastifyInstance) {
  app.post("/courses", registerCourse);
}
