/**
 * maezato
 * https://github.com/paazmaya/maezato
 *
 * Clone all repositories of a given user at GitHub,
 * by ordering them according to fork/contributing/mine
 * @see https://developer.github.com/v3/repos/#list-user-repositories
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license
 */

'use strict';

const tape = require('tape');

const addRemote = require('../../lib/add-remote'),
  literals = require('../../lib/literals');

tape('addRemote - adding remote hoplaa to a non-existing project', (test) => {
  test.plan(1);

  addRemote({}, 'fork cloned somewhere here', 'hoplaa', 'git:////////hoplaa', {
    verbose: true
  }).then().catch(() => {
    test.ok('failed as expected');
  });

});