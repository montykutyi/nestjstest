import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  @MessagePattern({cmd: 'greeting'})
  getGreetingMessage(name: string): string {
    return `Helloka ${name}`;
  }

  @MessagePattern({cmd: 'greeting-async'})
  async getGreetingMessageAysnc(name: string): Promise<string> {
    return `Hello ${name}`;
  }

  @Get()
  async getHello(): Promise<any> {
    return "hello from server"
  }

  count = 0;

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    this.count++;
    console.log('Recieved message number ' + this.count);

    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern({ cmd: 'sub' })
  sub(data: number[]): number {
    this.count--;
    console.log('Recieved message number ' + this.count);

      const list = [];
      setInterval(()=> {
              const record = new MyRecord();
              list.push(record);
      },10);
      function MyRecord() {
              var x='hii';
              this.name = x.repeat(100);
              this.id = x.repeat(100);
              this.account = x.repeat(100);
      }
      setInterval(()=> {
              console.log(process.memoryUsage())
      },100);

    return (data || []).reduce((a, b) => a + b);
  }
}

