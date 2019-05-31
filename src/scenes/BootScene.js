import 'phaser';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 
  preload () {
    this.load.image('zlogo', '../assets/zenva_logo.png');
  }
 
  create () {
    this.scene.start('Preloader')
  }
};