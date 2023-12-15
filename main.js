import CenaCarregamento from './cena-carregamento.js'; 
import CenaJogo from './cena-jogo.js'; 
import CenaJogo2 from './cena-jogo2.js'; 
import CenaJogo3 from './cena-jogo3.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'canvas',
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: [
        CenaCarregamento,
        CenaJogo,
        CenaJogo2,
        CenaJogo3
    ]
}

const jogo = new Phaser.Game(config);