import { FastifyInstance } from "fastify";
import { registerModule } from "./registerModule";

export async function appRoutesModules(app: FastifyInstance) {
  app.post("/modules/:courseId", registerModule);
}
