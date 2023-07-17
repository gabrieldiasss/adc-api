import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { appRoutes } from "./modules/courses/http/controllers/routes";
import { appRoutesModules } from "./modules/modules/http/controllers/routes";
import { appRoutesClasse } from "./modules/classes/http/controllers/routes";

export const app = fastify();

app.register(appRoutes);
app.register(appRoutesModules);
app.register(appRoutesClasse);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
  }

  return reply.status(500).send({ message: "Internal server error" });
});
