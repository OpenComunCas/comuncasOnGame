
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);
// create the root of the scene graph
var stage = new PIXI.Container();
//stage.addChild(creaBasicText());
var botonInit=creaBoton();
stage.addChild(botonInit);
stage.addChild(creaRichText());
// start animating
animate();

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
        wordWrapWidth : 550
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
//var button = new PIXI.Sprite.fromImage('../img/boton_inicio.png');
var texture  = PIXI.BaseTexture.fromImage('../img/boton_inicio.png');
var spriteTexture1 = new PIXI.Texture(texture, new PIXI.Rectangle(0, 0, 314, 314));
var spriteTexture2 = new PIXI.Texture(texture, new PIXI.Rectangle(322, 0, 314, 314));
var button = new PIXI.Sprite(spriteTexture1);
button.spriteTexture1=spriteTexture1;
button.spriteTexture2=spriteTexture2;
button.buttonMode = true;
button.position.x = window.innerWidth*3/6-window.innerWidth/24;
button.position.y = window.innerHeight*3/6;
button.width=window.innerWidth/12;
button.height=window.innerWidth/12;
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
botonInit.texture=botonInit.spriteTexture2;
console.log("onButtonDown");
}

function onButtonUp()
{
botonInit.texture=botonInit.spriteTexture1;
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
