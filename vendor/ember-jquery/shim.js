/**
 * Created by alberto on 22/10/15.
 *
 * This globalizes jQuery without the need of modify .jshintrc
 *
 * Thanks to John Otander (@4lpine)
 */

define('jquery', [], function() {
  'use strict';

  return {
    'default': $
  };
});

