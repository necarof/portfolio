import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

const Parallax = require('parallax-js')

const swipper = require('swiper')

import "./scripts/mainparallax";
import "./scripts/skills";
import "./scripts/works";