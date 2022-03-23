import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/greeting")
  async getHello() {
    return this.appService.getHello();
  }

  @Get("/greeting-async")
  async getHelloAsync() {
    return this.appService.getHelloAsync();
  }

  @Get("/hellobello")
  async getHelloBello() {

    const requests = [];


    for (let i = 0; i < 2; i++) {
      const prom = new Promise(async (res, rej) => {
        res(await this.appService.getHelloBello());
      })
      requests.push(prom);
    }

    await Promise.all(requests);


    return 11;

  }
}
