
function validatefunction(){

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID="Please enter a valid email";
const SUBJECT_REQUIRED="Please enter the subject";
const MESSAGE_REQUIRED="Please enter the message";
let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
let subjectValid = hasValue(form.elements["subject"], SUBJECT_REQUIRED);
let messageValid=hasValue(form.elements["message"],MESSAGE_REQUIRED);

if(nameValid && emailValid && subjectValid && messageValid){

	sendMail();

}else{
  /*  alert("failed");*/
}


}
function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}
function showError(input, message) {
	return showMessage(input, message, false);
}
function showSuccess(input) {
	return showMessage(input, "", true);
}
function showMessage(input, message, type) {

const msg = input.parentNode.querySelector("small");
msg.innerText = message;
  console.log(input.value);
/*input.className = type ? "success" : "error";*/
return type;
}
function validateEmail(input, requiredMsg, invalidMsg) {
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}
function sendMail(){

	$("#signup").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbyux-Z9fqUxZ-8SYI3FR1zsCMlZBvVxfbOyznlEFo2OJuZFMp2CFK6SCgBOH5A96ioH/exec",
            data:$("#signup").serialize(),
            method:"post",
            success:function (response){
                alert("Message send successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })

}
  