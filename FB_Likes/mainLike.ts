import { LikeComponent } from "./likeComponent";

let component=new LikeComponent(10,true);
component.onClick();
console.log(`LikesCOunt: ${component.likesCount}, isSelected: ${component.isSelected}`);