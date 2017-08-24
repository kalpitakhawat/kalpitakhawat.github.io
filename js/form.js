var a=document.getElementById('sbmit')
a.addEventListener("submit",sendRequest);
function sendRequest() {
	var name=document.getElementById('name').value;
	var email=document.getElementById('email').value;
	var msg=document.getElementById('message').value;
	if (name.trim() != "" && email.trim() != "" && msg.trim() != "") {
		alert(name + email + msg);
		return false;
	}
}