import express from './index'
import http from 'http'
import koa from 'koa'

// const app = new express()
const app = new koa()
app.use((ctx, next) => {
   console.log('this is first middleware')
   next()
})

app.use((ctx, next) => {
   console.log('this is second middleware')
  //  ctx.body = 'hello world'
})

// const app = http.createServer((req, res) => {
//   res.end('hello world')
// })

app.listen('4000')


console.log('app listen port: ', 4000);  