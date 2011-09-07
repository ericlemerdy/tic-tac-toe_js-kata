TicTacToeTest = TestCase("TicTacToeTest");
TicTacToeTest.prototype.test_Le_gagnant_est_celui_qui_arrive_a_aligner_trois_symboles_identiques_verticalement = function() {
	var jeu = new Jeu();
	assertEquals(false, jeu.joue(1, 1));
	assertEquals(false, jeu.joue(1, 2));
	assertEquals(false, jeu.joue(2, 1));
	assertEquals(false, jeu.joue(1, 3));
	assertEquals(false, jeu.joue(3, 1));
	assertEquals("X", jeu.joueur);
};
TicTacToeTest.prototype.test_Le_gagnant_est_celui_qui_arrive_a_aligner_trois_symboles_identiques_horizontalement = function() {
	var jeu = new Jeu();
	assertEquals(false, jeu.joue(1, 1));
	assertEquals(false, jeu.joue(2, 1));
	assertEquals(false, jeu.joue(1, 2));
	assertEquals(false, jeu.joue(3, 1));
	assertEquals(false, jeu.joue(1, 3));
	assertEquals("X", jeu.joueur);
};
TicTacToeTest.prototype.test_Ils_jouent_chacun_a_leur_tour_une_case_de_la_grille_avec_O_ou_X = function() {
	var jeu = new Jeu();
	jeu.joue(1, 1);
	assertEquals("O", jeu.joueur);
	jeu.joue(1, 1);
	assertEquals("O", jeu.joueur);
};
TicTacToeTest.prototype.test_Les_joueurs_jouent_chacun_leur_tour = function() {
	var jeu = new Jeu();
	assertEquals("X", jeu.joueur);
	jeu.joue(1, 1);
	assertEquals("O", jeu.joueur);
	jeu.joue(1, 2);
	assertEquals("X", jeu.joueur);
};
TicTacToeTest.prototype.test_Deux_joueurs_s_affrontent = function() {
	var jeu = new Jeu();
	assertEquals(2, jeu.nbJoueur);
};
TicTacToeTest.prototype.test_Le_Tic_tac_toe_se_joue_sur_une_grille_carree_de_3x3_cases = function() {
	var grille = new Grille();
	assertEquals(3, grille.height());
	assertEquals(3, grille.width());
};