import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io'
import { BaseGateway } from './base.gateway';

@WebSocketGateway({
  // path: '/io',
  transports: ['websocket'],
})
export class IoGateway extends BaseGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() protected readonly server: Server;
  protected readonly logger = new Logger(this.constructor.name);

  handleConnection(client: any) {
    this.logger.verbose('connected');
  }

  handleDisconnect(client: any) {
    this.logger.verbose('disconnected');
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    this.logger.debug(payload);
    return 'Hello world!';
  }

  @SubscribeMessage('test1')
  test(client: any, payload: any): string {
    this.logger.debug(payload);
    return 'Wonderful!';
  }
}
