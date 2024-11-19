<style>
input{width:100%;}
input[type=submit]{width:max-content;}
</style>

<fieldset style=width:max-content;>
	<legend>Sign Up</legend>
	<form method=post action=/php/actions/signup.php>
	<table>
	
	<tr>
	<td><span>Pseudonyme:</span></td>
	<td><input name=username type=text placeholder=Pseudonyme required></td>
	</tr>

	<tr>
	<td><span>Prénom:</span></td>
	<td><input name=fname type=text placeholder=Prénom required></td>
	</tr>

	<tr>
	<td><span>Nom:</span></td>
	<td><input name=lname type=text placeholder=Nom required></td>
	</tr>

	<tr>
	<td><span>Sexe:</span></td>
	<td>
	<table>
		<tr><td><input type=radio value=h name=gender checked></td>
		<td><span>Homme</span></td></tr>

		<tr><td><input type=radio value=f name=gender></td>
		<td><span>Femme</span></td></tr>
	</table>
	</td>
	</tr>
	
	<tr>
	<td><span>E-mail:</span></td>
	<td><input name=email type=email placeholder="Adresse e-mail" required></td>
	</tr>

	<tr>
	<td><span>Date de naissance:</span></td>
	<td><input type=date name=bdate required></td>
	</tr>

	<tr>
	<td><span>Mot de passe:</span></td>
	<td><input name=password1 type=password placeholder=Password required></td>
	</tr>

	<tr>
	<td><span>Confirmer le mot de passe:</span></td>
	<td><input name=password2 type=password placeholder="Confirm password" required></td>
	</tr>
	
	</table>
	<br/>
	<input type=submit value="S'inscrire">
	<p>Déja inscrit? <a href="login.php">Connectez vous</a>.</p>	
	</form>
</fieldset>