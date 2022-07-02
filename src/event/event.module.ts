import { ConsoleLogger, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { IoGateway } from './io.gateway';
import { WsGateway } from './ws.gateway';
import { EventController } from './event.controller';

@Module({
  imports: [CqrsModule],
  providers: [IoGateway, WsGateway],
  exports: [IoGateway, WsGateway],
  controllers: [EventController],
})
export class EventModule {}
