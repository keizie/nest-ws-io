import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { on } from 'events';
import { Server } from 'ws';
import { BaseGateway } from './base.gateway';

@WebSocketGateway({
  // path: '/ws',
  transports: ['websocket'],
})
export class WsGateway extends BaseGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() protected readonly server: Server;
  protected readonly logger = new Logger(this.constructor.name);

  handleConnection(client: any) {
    this.logger.verbose('connected');
    // client.on('message', (data, isBinary) => {
    //   const message = isBinary ? data : data.toString();
    //   console.log('onmessage', message)
    // });
  }

  handleDisconnect(client: any) {
    this.logger.verbose('disconnected');
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    this.logger.debug(payload);
    return 'Hallo Welt!';
  }

  @SubscribeMessage('test2')
  test(client: any, payload: any): string {
    this.logger.debug(payload);
    return 'Wunderwar!';
  }
}
