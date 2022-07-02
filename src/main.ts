import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(4000);

  const app2 = await NestFactory.create(AppModule);
  app2.useWebSocketAdapter(new WsAdapter(app2));
  await app2.listen(4001);
}
bootstrap();
