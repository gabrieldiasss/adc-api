import { FastifyInstance } from "fastify";
import { deleteClasse } from "./deleteClasse";
import { registerClasse } from "./registerClasse";
import { getOneClasse } from "./getOneClasse";
import { updateClasse } from "./updateClasse";

export async function appRoutesClasse(app: FastifyInstance) {
  app.post("/classes/:moduleId", registerClasse);
  app.get("/classes/:classeId", getOneClasse);
  app.delete("/classes/:classeId", deleteClasse);
  app.patch("/classes/:id", updateClasse);
}
