const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = 'Hello Koa';
});

app.listen(3000, () => {
    console.log('server run port 3000');
});