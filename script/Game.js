
function Game() {
  this.colorSequence = new ColorSequence();
                              //generates a sequence and builds ui elements
  this.player = new Player("You"); //in the future will add a method to take player name when
                              //multiplayeris enabled
  const currentGame = this;
  this.gamePlay = new GamePlay(currentGame);     //the actual gameplay happens here until it's game over
  this.announce = new Announcements();
                              //will create announcements based on results
  this.play = function(){
    this.colorSequence.sequenceGenerator();
    //this.colorSequence.createButtons(); to be defined
    this.gamePlay.flash();
    //do {
      //this.gamePlay.flash();
      //this.gamePlay.playerSelects();
      //this.Player.sequenceLength++;
    //}
    //while (this.gameplay.match);
    //this.announce.rounds;

  }
}