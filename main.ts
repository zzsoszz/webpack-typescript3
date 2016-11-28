import {Greet} from "./greet";
import {Hello} from "./hello";
import {Say} from "./say";
import * as $  from "jquery";
$(document).ready(function(){
    $("#btn").click(function(){
            
            require.ensure(['./greet',"./hello"], function(require) {
                //{Greet:{new():Greet}}  {Greet:new()=>Greet}
                var greetmodule =<any>require('./greet');
                var  greet:Say=new greetmodule.Greet();
                greet.say();
                
                var hellomodule =<{Hello:{new():Hello}}>require('./hello');
                var hello:Say=new hellomodule.Hello();
                hello.say();
            });
            
            // require.ensure(["./hello"], function(require) {
            //     var hellomodule =<{Hello:{new():Hello}}>require('./hello');
            //     var hello:Say=new hellomodule.Hello();
            //     hello.say();
            // });
            
    });
});
