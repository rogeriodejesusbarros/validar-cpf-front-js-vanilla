const URL="https://valida-cpf-bakc-rogerio.herokuapp.com/validacpf?cpf="
//https://java-api-https://valida-cpf-bakc-rogerio.herokuapp.com/-bot.herokuapp.com/validacpf?cpf=
//https://valida-cpf-bakc-rogerio.herokuapp.com/
function validar(){

	var txtCPF = document.getElementById("txtCpf").value;

	fetch(URL+txtCPF)
	   .then(res=>res.json())
	   .then(res=>verifica(res))
}

function verifica(res){
	if (res.status == "valido"){
		document.getElementById("msgResult").innerHTML = "<h3 class=\"valido\"> CPF Valido </h3>";

	}
	else{
		document.getElementById("msgResult").innerHTML = "<h3 class=\"invalido\"> CPF Invalido </h3>";
	}
}
