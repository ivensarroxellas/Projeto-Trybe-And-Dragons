import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public player: Fighter;
  public player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this.player = player;
    this.player2 = player2;
  }

  fight(): number {    
    this.player.attack(this.player2);
    if (this.player2.lifePoints < 0) {
      return this.player.lifePoints === -1 ? -1 : 1;
    } 
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
