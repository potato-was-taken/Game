let BACKGROUND, CHARACTER, LASER_TRACE, LASER, ROCKET;
let game_running = false
let movementspeed = 6
let playerdirection = 1
let playerxvel = 0
let playeryvel = 0
let dashing = false
let allowmove = true
let allowdash = true






function preload() {
    BACKGROUND = loadImage('media/BACKGROUND.png')
    CHARACTER = loadImage('media/CHARACTER')
    LASER_TRACE = loadImage('media/LASER_TRACE')
    LASER = loadImage('media/LASER')
    ROCKET = loadImage('media/ROCKET')
}

function setup() {
    game_size = [windowWidth, windowHeight];
    createCanvas(game_size[0], game_size[1]);
    BACKGROUND.resize(game_size[0], game_size[1]);
    BASE.resize(game_size[0], BASE.height);
    frameRate(60);
    document.addEventListener("keydown", function(event) {
        if (event.key === 'ArrowLeft') {
          leftpressed = true
          if (playermoved == false)
            playermoved = true
        }
      });
    
      document.addEventListener("keyup", function(event) {
        if (event.key === 'ArrowLeft') {
          leftpressed = false
          playerxvel = 0
          if (playermoved == false)
            playermoved = true
        }
      });
    
      document.addEventListener("keydown", function(event) {
        if (event.key === 'ArrowRight') {
          rightpressed = true
          if (playermoved == false)
            playermoved = true
        }
      });
    
      document.addEventListener("keyup", function(event) {
        if (event.key === 'ArrowRight') {
          rightpressed = false
          playerxvel = 0
          if (playermoved == false)
            playermoved = true
        }
      });
    
      document.addEventListener("keydown", function(event) {
        if (event.key === 'ArrowUp') {
          uppressed = true
          if (playermoved == false)
            playermoved = true
        }
      });
    
      document.addEventListener("keydown", function(event) {
        if (event.key === 'z' && allowdash == true && allowmove == true) {
          dash()
        }
      });
    }



function moveleft() {
    playerxvel = movementspeed * -1
    playerdirection = 0
  }

function moveright() {
    playerxvel = movementspeed
    playerdirection = 1
  }

function moveup(){
      playeryvel = movementspeed
      playerdirection = 1
  }
function movedown() {
    playeryvel = movementspeed * -1
    playerdirection = 0
}
function dash() {
    dashing = true
    allowmove = false
    allowdash = false
    playeryvel = 0
    waitdash()
  }
function draw() {
    image(BACKGROUND, 0,0);
    image(BASE, 0, game_size[1]-BASE.height); 
    if (! game_running) {
        textAlign(CENTER, CENTER);
        textSize(40);
        fill(255);
        text('Bullet Hell', game_size[0]/2, game_size[1]/3);
        text('Click to start', game_size[0]/2, game_size[1]*5/6);
        if(mouseIsPressed) {
            game_running = true;  
        }
    } else {
        play();
    }
}