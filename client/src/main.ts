import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const app1 = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.REDIS,
        options: {
          url: 'redis://192.168.40.109:6379'
          //host: '127.0.0.1',
          //port: 8080,
        }
      }
    )
    app1.listen(() => console.log(`server started`));


    const app2 = await NestFactory.create(AppModule);
    await app2.listen(process.argv[2]);
}

bootstrap();
