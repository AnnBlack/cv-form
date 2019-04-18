var Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
const koaRouter = require('koa-router');
const router = new koaRouter();
const koaBody = require('koa-body');
const fs = require('fs');
const os = require('os');
const path = require('path');
var serveStatic = require('serve-static');

var email = require("emailjs");
var server = email.server.connect({
  user:    "trarobotics@fastmail.com",
  password:"umw8z7g98v9gdghv",
  host:    "smtp.fastmail.com",
  post: 465,
  authentication: 'PLAIN',
  ssl:     true
});

router.post('/api/mail', koaBody({ multipart: true }), (ctx, next) => {
  const body = ctx.request.body;
  const file = ctx.request.files.file;
  const serverSend = (body, file, path) => {
    const attachment = file ? [{path: path, type:file.type, name:file.name}] : [];
    server.send({
      text:    `You get a CV to ${body.jobTitle} position form ${body.name} ${body.lastName}. Email - ${body.email} and mobile number ${body.number}. ${body.comments} ${body.link} `,
      from:    "trarobotics@fastmail.com",
      to:      "anastasiapurtova@mail.ru",
      cc:      "",
      subject: `${body.name} ${body.lastName}. You get a CV from TRA Robotics app`,
      attachment: attachment,
    },
    (err, message) => {
      console.log('send', err || message); 
      ctx.body = err || 'success';
    });
  }
  if(file) {
    const reader = fs.createReadStream(file.path);
    const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
    reader.pipe(stream);
    reader.on('end', () => {
      serverSend(body, file, stream.path);
    });
  } else {
    serverSend(body);
  }
  ctx.body = 'success';
});
  
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
// app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;

var proxy = require('koa-proxy');
app.use(proxy({
  host: 'http://localhost:3000'
}));

app.listen({ port }, () =>{
    console.log(`🚀 Server ready ${port}`)
});