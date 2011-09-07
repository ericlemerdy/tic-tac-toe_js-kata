var Grille = function() {
	this.grid = Array(Array(".", ".", "."), Array(".", ".", "."), Array(".", ".", "."));
	this.height = function() {
		return 3;
	};
	this.width = function() {
		return 3;
	};
	this.isFree = function(x, y) {
		return this.grid[x-1][y-1] === ".";
	};
	this.markPlayer = function(x, y, mark) {
		this.grid[x-1][y-1] = mark;
	};
	this.win = function() {
		for (var i = 0; i < this.grid.length; i++) {
			row = this.grid[i];
			if (row.join("") === "XXX" || row.join("") === "OOO") {
				return true;
			}
		}
		return false;
	};
};
var Jeu = function() {
	this.nbJoueur = 2;
	this.joueur = 'X';
	this.grille = new Grille();
	this.joue = function(x, y) {
		if (this.grille.isFree(x, y)) {
			this.grille.markPlayer(x, y, this.joueur);
			isFini = this.grille.win();
			if (!isFini) {
				if (this.joueur === 'X')
					this.joueur = 'O';
				else this.joueur = 'X';
			}
			return isFini;
		}
	};
};