import GameManager from './controller/GameManager.js';
class App {
  constructor() {
    this.gameManager = new GameManager();
  }
  async play() {
    await this.gameManager.playGame();
  }
}

export default App;
