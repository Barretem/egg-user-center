'use strict';
/* eslint-disable no-undef */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /user-center', () => {
    return app.httpRequest()
      .get('/user-center')
      .expect('{"success":true,"payload":{"msg":"hi, guy"}}')
      .expect(200)
  });
});
