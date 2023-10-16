import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('test work')
    .setDescription('docs Nest-Seq-PG')
    .setVersion('1.0.0')
    .addTag('Alex@')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(PORT, () => console.log(`Server is runnig on ${PORT}`));
}
bootstrap();
