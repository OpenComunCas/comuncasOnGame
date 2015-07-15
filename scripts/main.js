
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);
// create the root of the scene graph
var stage = new PIXI.Container();
stage.addChild(creaBasicText());
stage.addChild(creaBoton());
stage.addChild(creaRichText());
// start animating
animate();

main();
function creaRichText(){
    var basicText=creaBasicText();
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
    return richText;
}

function creaBasicText(){

    var basicText = new PIXI.Text('. . .');
    basicText.x = window.innerWidth/2;
    basicText.y = window.innerHeight/4;
    return basicText;
}

function creaBoton(){

/********************************************/
var button = new PIXI.Sprite.fromImage('../img/button.png');
button.buttonMode = true;
button.position.x = window.innerWidth*2/6;
button.position.y = window.innerHeight*2/6;
// make the button interactive...
button.interactive = true;
    button
        // set the mousedown and touchstart callback...
        .on('mousedown', onButtonDown)
        .on('touchstart', onButtonDown)

        // set the mouseup and touchend callback...
        .on('mouseup', onButtonUp)
        .on('touchend', onButtonUp)
        .on('mouseupoutside', onButtonUp)
        .on('touchendoutside', onButtonUp)

        // set the mouseover callback...
        .on('mouseover', onButtonOver)

        // set the mouseout callback...
        .on('mouseout', onButtonOut)

        // you can also listen to click and tap events :
        //.on('click', noop)
        return button;
}

function animate() {

    requestAnimationFrame(animate);
    // render the root container
    renderer.render(stage);
}

function onButtonDown()
{
  console.log("onButtonDown");
}

function onButtonUp()
{
 console.log("onButtonUp");
}

function onButtonOver()
{
 console.log("onButtonOver");
}

function onButtonOut()
{
    console.log("onButtonOut");
}
