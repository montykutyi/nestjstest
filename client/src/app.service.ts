import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable()
export class AppService implements OnModuleInit {

  async onModuleInit() {

    while (true) {
      await delay(2000);

      const requests = [];


      for (let i = 0; i < 1000; i++) {

        const prom = new Promise(async (res, rej) => {
          res(await this.getHelloBello());
        })
        requests.push(prom);
      }

      await Promise.all(requests);
    }
  }

  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy){}

  async getHello(){
    return this.client.send({cmd: 'greeting'}, 'Progressive Coder');
  }

  async getHelloAsync() {
    const message = await this.client.send({ cmd: 'greeting-async' }, 'Progressivesdf Coder');
    return message;
  }

  async getHelloBello(): Promise<any> {
    const pattern = { cmd: 'sum' };
    return this.client.send(pattern, [1, 2, 3]).toPromise();
  }

}


