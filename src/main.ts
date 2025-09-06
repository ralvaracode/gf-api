import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 👈 this converts plain objects to class instances
      whitelist: true, // optional: strips unknown properties
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
