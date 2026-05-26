import app from "./app";
import { envVars } from "./app/config/env";

const bootstrap = () => {
  try {
    app.listen(envVars.PORT, () => {
      console.log(`Server is running on port https://localhost:${envVars.PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

bootstrap();
