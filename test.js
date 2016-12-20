import express from './index'
import http from 'http'

const app = http.createServer(new express())
app.listen('4000')

console.log('app listen port: ', 4000);