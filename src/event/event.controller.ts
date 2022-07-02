import { Controller, Get } from '@nestjs/common';
import { IoGateway } from './io.gateway';
import { WsGateway } from './ws.gateway';

@Controller('event')
export class EventController {
  constructor(
    private readonly wsGateway: WsGateway,
    private readonly ioGateway: IoGateway,
  ) {}

  @Get()
  getHello(): string {
    console.log(
      this.ioGateway.getServer(),
      this.wsGateway.getServer(),
    );
    return 'Hallo';
  }
}
