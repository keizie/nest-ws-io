# nest-ws-io

Try IoAdapter and WsAdapter together.
- Each adapters initialized separately.
- Single NestApplication hold only one adapter, and accept single type of connection.
- Two NestApplication hold own adapter each, and accept both type of connections.
- With two NestApplication, both adapter share subscription with same event name. eg. `@SubscribeMessage('message')`
