import { Controller, Get, Render, Res } from '@nestjs/common';
import { RenderableResponse } from 'nest-next';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  @Render('Index')
  public index() {
    // initial props
    return {
      title: 'Next with Nest',
    };
  }

  @Get('2')
  public index2(@Res() res: RenderableResponse) {
    res.render('Index', {
      title: 'Next with Nest',
    });
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
