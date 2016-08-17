/*
 FileName: app.js
 Author: Christopher Ritchil 
 Student # : 300702644
 Date Created: August 17, 2016
 Date updated: August 17, 2016
 Description: COMP125-FinalExam Java script file for the web application
 MS Azure Link: http://comp125-finalexam-300702644.azurewebsites.net
 Github Link: https://github.com/RSIRHC/COMP125-FINALEXAM-300702644.git
 */

var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var diceRollButton; 
    var dice1 = createjs.Bitmap("../Assets/images/1.png"); 
    var dice2 = createjs.Bitmap("../Assets/images/2.png"); 
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        // after everything is set up - call main
        main();
    }
    function gameLoop() {
        stage.update(); // refresh the stage container
    }
    function main() {
        stage.addChild(dice1);
        stage.addChild(dice2);
        // button bitmap
        diceRollButton = new objects.Button("../Assets/images/rollButton.png", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(diceRollButton);
      }
        // call init funciton when window finishes loading
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map