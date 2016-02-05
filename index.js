"use strict";


async function foo () {
  var s = await bar();
  console.log(s);
}

function bar () {
  return "bar";
}

foo();