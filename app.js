new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns:[] 
    },
    watch: {

    },
    methods:  {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },

        stopGame: function() {
            this.gameIsRunning = false;
        },

        attack: function() {
            var damage = this.calcDamage(2,10)
            this.monsterHealth = this.monsterHealth - damage;
            this.turns.unshift({isPlayer:true, text: 'Player hits Monster by '+ damage});
            if (this.checkWon()) {
                return;
            }
            var damage = this.calcDamage(2,10)
            this.playerHealth = this.playerHealth - damage;
            this.turns.unshift({isPlayer:false, text: 'Monster hits Player by '+ damage});
            this.checkWon();
        },
        checkWon: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won ! New Game?')) {
                    this.startGame();
                } else {
                this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost ! New Game?')) {
                    this.startGame();
                } else {
                this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        calcDamage: function(min, max) {
            return Math.max(Math.floor(Math.random()*max), min);
        },
        heal: function() {
            this.monsterHealth = this.monsterHealth + this.calcDamage(2,10);
            if (this.monsterHealth >= 100) {
                this.monsterHealth = 100;
            }
            this.playerHealth = this.playerHealth + this.calcDamage(2,10); 
            if (this.playerHealth >= 100) {
                this.playerHealth = 100;
            }
        },
        specialAttack: function() {

        },
        stopGame: function() {
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100
        }
    }
});