import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  try {

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379'
          //host: '127.0.0.1',
          //port: 8080,
        }
      }
    )
    await app.listen(() => console.log(`server started`));
  }catch(e){
    console.log("ASSDASDASDASDDS")
    console.log(e.Message);
}
}
bootstrap();
