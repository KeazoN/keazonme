function verifyModal() {
	$('.mail-verify').addClass('show');
}

function modalClose(){
	$('.mail-verify').removeClass('show');
}

$( "#formMail" ).submit((event) => {
	event.preventDefault();
	Email.send({
		SecureToken: "",
		To: "",
		From: "",
		Subject: "",
		Body: "",
	}).then((message) => {
		verifyModal()
	});
});