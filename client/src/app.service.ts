import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable()
export class AppService implements OnModuleInit {

  async onModuleInit() {
  /*  await delay(2000);

    var alma = 0;
    while (alma < 1) {
      alma++;
      const requests = [];

      for (let i = 0; i < 2; i++) {

        const prom = new Promise(async (res, rej) => {
          res(await this.getHelloBello());

        })
        requests.push(prom);
      }

      for (let i = 0; i < 2; i++) {

        const prom = new Promise(async (res, rej) => {
          res(await this.getHelloSub());
        })
        requests.push(prom);
      }

      await Promise.all(requests);
    }*/
  }

  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy){}

  async getHello(){
    return this.client.send({cmd: 'greeting'}, 'Progressive Coder');
  }

  async getHelloAsync() {
    const message = await this.client.send({ cmd: 'greeting-async' }, 'Progressivesdf Coder');
    return message;
  }

  async getHelloSub(): Promise<any> {
    const pattern = { cmd: 'sub' };
    return this.client.send(pattern, [1, 2, 3]).toPromise();
  }

  async getHelloBello(): Promise<any> {
    const pattern = { cmd: 'sum' };
    return this.client.send(pattern, [1, 2, 3]).toPromise();
  }

}


