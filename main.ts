import {Greet} from "./greet";
import {Hello} from "./hello";
import * as $  from "jquery";
$(document).ready(function(){
    $("#btn").click(function(){
            require.ensure(['./greet',"./hello"], function(require) {
                //{Greet:{new():Greet}}  {Greet:new()=>Greet}
                var greetmodule =<{Greet:{new():Greet}}>require('./greet');
                var  greet=new greetmodule.Greet();
                greet.sayHi();
                
                var hellomodule =<{Hello:{new():Hello}}>require('./hello');
                var hello=new hellomodule.Hello();
                hello.sayHello();
            });
    });
});
