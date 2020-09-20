"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseRandomlyFrom = void 0;
exports.chooseRandomlyFrom = (array) => array[Math.floor(Math.random() * array.length)];
exports.default = exports.chooseRandomlyFrom;
