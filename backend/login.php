<style>
form{margin:0px;}
input{transition:250ms;}
input::placeholder{color:#f00;position:absolute;top:0;left:0;}
input:focus input::placeholder{color:#ff0;}
</style>
<fieldset style=width:max-content;>
	<legend>Login</legend>
	<form method=post action=/backend/php/actions/login.php>
	<table><tr>
	<td><span>Username or email:</span></td>
	<td><input name=username type=text placeholder="Username or email.."></td>
	</tr><tr>
	<td><span>Password:</span></td>
	<td><input name=password type=password placeholder=Password...></td>
	</tr></table><br/>
	<input type=submit value="Log in">
	</form>
</fieldset>