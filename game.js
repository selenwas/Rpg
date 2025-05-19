const socket = io();

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

let player;

function preload() {
  this.load.image('player', 'assets/characters/player.png');
}

function create() {
  player = this.physics.add.sprite(400, 300, 'player');
  this.cameras.main.startFollow(player);
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  player.setVelocity(0);
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
  }
  if (cursors.up.isDown) {
    player.setVelocityY(-160);
  } else if (cursors.down.isDown) {
    player.setVelocityY(160);
  }
}
