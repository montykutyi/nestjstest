import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable()
export class AppService implements OnModuleInit {

  async onModuleInit() {
  }

  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy){}


  async getHelloBello(): Promise<any> {
    const pattern = { cmd: 'sum' };
    return this.client.send(pattern, [1, 2, 3]).toPromise();
  }

}


