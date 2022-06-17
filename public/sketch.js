// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Plinko
// Video 1: https://youtu.be/KakpnfDv_f0
// Video 2: https://youtu.be/6s4MJcUyaUE
// Video 3: https://youtu.be/jN-sW-SxNzk
// Video 4: https://youtu.be/CdBXmsrkaPs

// module aliases
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var plinkos = [];
var bounds = [];
var cols = 11;
var rows = 10;

function preload() {
  ding = loadSound('ding.mp3');
}

function setup() {
  createCanvas(600, 700);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  //world.gravity.y = 2;

  function collision(event) {
    var pairs = event.pairs;
    for (var i = 0; i < pairs.length; i++) {
      var labelA = pairs[i].bodyA.label;
      var labelB = pairs[i].bodyB.label;
      if (labelA == 'particle' && labelB == 'plinko') {
        //ding.play();
      }
      if (labelA == 'plinko' && labelB == 'particle') {
        //ding.play();
      }
    }
  }

  Events.on(engine, 'collisionStart', collision);


  var button = document.getElementById('addPlinko');
  if(button) {
    button.addEventListener("click", () => {
      randomNum();
      newParticle();
    });
  }
  var spacing = width / cols;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols + 1; i++) {
      var x = i * spacing;
      if (j % 2 == 0) {
        x += spacing / 2;
      }
      var y = spacing + j * spacing;
      var p = new Plinko(x, y, 16);
      plinkos.push(p);
    }
  }

  var b = new Boundary(width / 2, height + 50, width, 100);
  bounds.push(b);

  for (var i = 0; i < cols + 2; i++) {
    var x = i * spacing;
    var h = 100;
    var w = 10;
    var y = height - h / 2;
    var b = new Boundary(x, y, w, h);
    bounds.push(b);

  }


}
var randomStart = null;
function randomNum() {
  randomStart = Math.floor(Math.random()*600);
}

console.log(randomStart);
function newParticle() {
  var p = new Particle(randomStart, 0, 10);
  particles.push(p);
}

function activateNavItem(value) {

  const allNavItems = document.querySelectorAll('.nav');
  const removeAllItems = () => {
    allNavItems.forEach(navItem => {
      navItem.classList.remove('active');
    });
  }

  if (value === 1 || value === 2 || value === 3) {
    removeAllItems();
    document.getElementById('home').classList.add('active');
  } else if (value === 4 || value === 5 || value === 6) {
    removeAllItems();
    document.getElementById('about').classList.add('active');
  } else if (value === 7 || value === 8 || value === 9) {
    removeAllItems();
    document.getElementById('team').classList.add('active');
  } else if (value === 10 || value === 11 || value === 12) {
    removeAllItems();
    document.getElementById('objective').classList.add('active');
  }
}

function draw() {
  background(0, 0, 0);
  if (frameCount % 20 == 0) {
    // newParticle();
  }
  Engine.update(engine, 1000 / 30);
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
    if (particles[i].isOffScreen()) {
      World.remove(world, particles[i].body);
      particles.splice(i, 1);
      i--;
    }
    activateNavItem(particles[i].body.region.endCol);
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
  }
  for (var i = 0; i < bounds.length; i++) {
    bounds[i].show();
  }
}