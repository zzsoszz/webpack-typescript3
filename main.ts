import {Greet} from "./greet";
import {Hello} from "./hello";
import * as $  from "jquery";
function User(){
    this.name="aaaa";
    this.say=function(){
        console.log("user:"+this.name);
    };
}
$(document).ready(function(){
    $("#btn").click(function(){
            require.ensure(['./greet'], function(require) {
                var greet =<{Greet:new()=>Greet}>require('./greet');
                var  bbb=new greet.Greet();
                bbb.sayHi();
            });
    });
});
