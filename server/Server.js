import Koa from 'koa';
import Router from '@koa/router';

export default class Server {
  constructor() {
    this.app = new Koa();
    this.router = new Router();

    this.router.get('/health', ctx => {
      ctx.status = 200;
    });
    this.router.get('/message', ctx => {
      ctx.body = 'Hello world!';
    });

    this.app //
      .use(this.router.routes())
      .use(this.router.allowedMethods());
  }
  start(port) {
    this.app.listen(port);
  }
}
