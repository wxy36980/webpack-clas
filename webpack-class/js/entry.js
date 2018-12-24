
alert(122235);

//引入别的js模块
require('./model1.js');
require('./model2.js');
require('./../css/index.css');
require('./../css/test.less');
require('./../css/test1.scss');


import "babel-polyfill";
import Es6 from "./es6.js";
console.log(Es6.a);

let arr = function (...arg) {
    console.log(arg);
}
arr(1,2,3,4);