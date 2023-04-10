var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e3968cde-50cd-41ab-b656-1886f171d779","23491514-6a9e-4bbe-8ee7-aaa394fdb791","86e6264f-cd9a-4728-9f29-61fb81b3001d","e5f97b41-cc95-4616-b5f9-cc3f8b5a4f36","0da2b0a8-b8df-4d20-af64-e5fbc3a55c54","031b7953-8491-4cf6-bdfa-e58f0b353e02","d66057dc-ba08-475b-b25e-7c15bd00f81d"],"propsByKey":{"e3968cde-50cd-41ab-b656-1886f171d779":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/1XboOXf7BfBau7lfL8Hn7CkmXSU7l8rC/category_backgrounds/sports_track.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"1XboOXf7BfBau7lfL8Hn7CkmXSU7l8rC","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1XboOXf7BfBau7lfL8Hn7CkmXSU7l8rC/category_backgrounds/sports_track.png"},"23491514-6a9e-4bbe-8ee7-aaa394fdb791":{"name":"j","sourceUrl":"assets/api/v1/animation-library/gamelab/L2gaYVZg4m0BbMaQe6HwMw.RnEhSrMKx/category_people/blue_sweater_one_hand_in_pocket.png","frameSize":{"x":125,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"L2gaYVZg4m0BbMaQe6HwMw.RnEhSrMKx","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/L2gaYVZg4m0BbMaQe6HwMw.RnEhSrMKx/category_people/blue_sweater_one_hand_in_pocket.png"},"86e6264f-cd9a-4728-9f29-61fb81b3001d":{"name":"o","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"},"e5f97b41-cc95-4616-b5f9-cc3f8b5a4f36":{"name":"a","sourceUrl":"assets/api/v1/animation-library/gamelab/s5YSy2PjXDzTfuoGo3oL.NBC0ewOit1D/category_people/blue_shirt_arms_crossed.png","frameSize":{"x":133,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"s5YSy2PjXDzTfuoGo3oL.NBC0ewOit1D","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":133,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/s5YSy2PjXDzTfuoGo3oL.NBC0ewOit1D/category_people/blue_shirt_arms_crossed.png"},"0da2b0a8-b8df-4d20-af64-e5fbc3a55c54":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png","frameSize":{"x":126,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png"},"031b7953-8491-4cf6-bdfa-e58f0b353e02":{"name":"c","sourceUrl":"assets/api/v1/animation-library/gamelab/LNbz7bNdm8d9YODrbq3PjsZ3e_nL6RHO/category_people/blue_shirt_hand_up.png","frameSize":{"x":190,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"LNbz7bNdm8d9YODrbq3PjsZ3e_nL6RHO","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LNbz7bNdm8d9YODrbq3PjsZ3e_nL6RHO/category_people/blue_shirt_hand_up.png"},"d66057dc-ba08-475b-b25e-7c15bd00f81d":{"name":"bomba","sourceUrl":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png","frameSize":{"x":360,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ouSniUdBPmByS9qdf395XpliE0eUsMAm","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Você não pode passar da linha 5 para a esquerda
var fundo = createSprite(200, 200, 20, 20);
var a = createSprite(200, 320, 20, 20);
var b = createSprite(135, 320, 20, 20);
var c = createSprite(70, 320, 20, 20);
var d = createSprite(265, 320, 20, 20);
var e = createSprite(325, 320, 20, 20);
var f = createSprite(325, 228, 20, 20);
var g = createSprite(370, 100, 20, 20);
var linha = createSprite(200, 5, 400, 10);
linha.shapeColor = "black";
//Você começa no número 5
a.velocityY = -2;
b.velocityY = -1;
c.velocityY = -2;
d.velocityY = -3;
e.velocityY = -5;
//Seu objetivo é chegar na linha de chegada primeiro
a.scale = 0.2;
b.scale = 0.2;
c.scale = 0.2;
d.scale = 0.2;
e.scale = 0.2;
f.scale = 0.1;
g.scale = 0.1;
fundo.setAnimation("fundo");
g.setAnimation("bomba");
f.setAnimation("bomba");
e.setAnimation("c");
d.setAnimation("b");
c.setAnimation("a");
b.setAnimation("o");
a.setAnimation("j");
function draw() {
  e.x = World.mouseX;
  e.y = World.mouseY;
  if (e.isTouching(f)) {
    e.x = 325;
    e.y = 320;
  }
  if (e.isTouching(g)) {
    e.x = 325;
    e.y = 320;
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
