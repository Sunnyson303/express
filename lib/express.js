import {
  EventEmitter
} from 'events'
import serve from 'serve-static'

import proto from './application'
import req from './request'
import res from './response'
import Router from './router'


class createApplication{
  constructor() {
    var app =  function(req, res, next) {
      app.handle(req, res, next)
    }
    Object.assign(app, EventEmitter)
    Object.assign(app, proto)
    return app
  }
};


export {
  createApplication,
  serve
}