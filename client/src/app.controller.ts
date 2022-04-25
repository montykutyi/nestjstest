import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {  MessagePattern } from '@nestjs/microservices';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get("/hellobello")
  async getHelloBello() {
    const x1 = await this.appService.getHelloBello();
    return x1;
  }


  @MessagePattern({ cmd: 'sum' })
  async accumulate(data: number[]): Promise<number> {
//    console.log('Recieved message');
    if (Math.random() < 0.01)
      await delay(Math.random()* 400);
    return (data || []).reduce((a, b) => a * b);
    
  }

}
