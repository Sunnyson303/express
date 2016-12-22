import http from 'http'
import Router from './router'
import Route from './router/route'

var app = {
  init() {
    this.cache = {}
    this.engines = {}
    this.settings = {}
    this.defaultConfiguration()
  },
  defaultConfiguration() {
    let env = processs.env.NODE_ENV || 'development'
  },
  handle(req, res, next) {
    res.end('hello world')
  },
  use() {

  },
  all() {

  },
  set() {

  },
  get() {

  },
  listen(port) {
    let server = http.createServer(this)
    return server.listen(port)
  }
}

export default app