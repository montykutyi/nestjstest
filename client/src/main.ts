import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  for (var i = 12000; i < 12010; i++) {
  //  console.log(i);
  const app = await NestFactory.create(AppModule);
    app.listen(i);

  }

}
bootstrap();
