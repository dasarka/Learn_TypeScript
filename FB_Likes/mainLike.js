"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likeComponent_1 = require("./likeComponent");
var component = new likeComponent_1.LikeComponent(10, true);
component.onClick();
console.log("LikesCOunt: " + component.likesCount + ", isSelected: " + component.isSelected);
