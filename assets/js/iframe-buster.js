// Copyright (c) 2018, The TurtleCoin Developers, 2019 The SecurusCoin Project
//
// Please see the included LICENSE file for more information.

/* ---- super simple iframe busting ---- */
(function(window) {
  if (window.location !== window.top.location) {
    window.top.location = window.location;
  }
})(this);
