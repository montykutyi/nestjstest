import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

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


