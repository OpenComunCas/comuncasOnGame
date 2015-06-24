var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
var sprite = new PIXI.Sprite.fromImage('../img/sprites/sprite.png');
var basicText = new PIXI.Text('. . .');
basicText.x = window.innerWidth/2;
basicText.y = window.innerHeight/4;

stage.addChild(basicText);

var style = {
    font : '36px Arial bold italic',
    fill : '#F7EDCA',
    stroke : '#4a1850',
    strokeThickness : 5,
    dropShadow : true,
    dropShadowColor : '#000000',
    dropShadowAngle : Math.PI / 6,
    dropShadowDistance : 6,
    wordWrap : true,
    wordWrapWidth : 440
};

var richText = new PIXI.Text('COMUNCAS GAME DEV ',style);
richText.x = window.innerWidth*2/6;
richText.y = basicText.y+60;

stage.addChild(richText);
stage.addChild(sprite);
// start animating
animate();

function animate() {

    requestAnimationFrame(animate);
    // render the root container
    renderer.render(stage);
}
