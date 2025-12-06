import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // set validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // removes unknown properties
      forbidNonWhitelisted: true, // throws error if extra props are passed
      transform: true, // auto transform payloads to DTO classes
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
