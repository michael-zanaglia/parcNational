<fieldset style=width:max-content;>
	<legend>Se connecter</legend>
	<form method=post action=/php/actions/login.php>
	<table><tr>
	<td><span>Pseudonyme:</span></td>
	<td><input name=username type=text placeholder=Pseudonyme></td>
	</tr><tr>
	<td><span>Mot de passe:</span></td>
	<td><input name=password type=password placeholder="Mot de passe"></td>
	</tr></table><br/>
	<input type=submit value="Se connecter">
	<p>Vous n'êtes pas inscrit? <a href="signup.php">S'inscrire</a>.</p>
	</form>
</fieldset>