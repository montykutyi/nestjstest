import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


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
    await this.appService.getHelloBello();
    // const requests = [];
    // for (let i = 0; i < 2; i++) {
    //   const prom = new Promise(async (res, rej) => {
    //     res(await this.appService.getHelloBello());
    //   })
    //   requests.push(prom);
    // }

    // await Promise.all(requests);


    return 11;

  }

  @Get("/hellosub")
  async getHelloSub() {

    const requests = [];


    for (let i = 0; i < 2; i++) {
      const prom = new Promise(async (res, rej) => {
        res(await this.appService.getHelloSub());
      })
      requests.push(prom);
    }

    await Promise.all(requests);


    return 11;

  }
}
