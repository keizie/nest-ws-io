import { Logger } from "@nestjs/common";
import { OnGatewayInit } from "@nestjs/websockets";

export abstract class BaseGateway implements OnGatewayInit {
	protected server: any;
	getServer() { return this.server; }

	protected logger: Logger;

	afterInit(server: any) {
		this.logger.verbose(`init ${this.constructor.name}`);
		// console.log(server);
	}
}