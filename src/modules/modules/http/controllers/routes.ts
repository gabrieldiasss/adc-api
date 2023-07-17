import { FastifyInstance } from "fastify";
import { registerModule } from "./registerModule";
import { deleteModule } from "./deleteModule";
import { updateModule } from "./updateModule";
import { getOneModule } from "./getOneModule";

export async function appRoutesModules(app: FastifyInstance) {
  app.post("/modules/:courseId", registerModule);
  app.get("/modules/:moduleId", getOneModule);
  app.delete("/modules/:moduleId", deleteModule);
  app.patch("/modules/:id", updateModule);
}
