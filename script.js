const createButton = document.querySelector(".create_button")
const passwordInput = document.querySelector("#password")
const confirmPasswordInput = document.querySelector("#confirm_password")
const errorLabel = document.querySelector("#errorPasswords")

createButton.addEventListener("click", () => {

    if (passwordInput.value == confirmPasswordInput.value && passwordInput.value != "")  {
        alert("Account has created")
        return
    }
    changeErrorVisibility(false)

})

function changeErrorVisibility(value) {
    if (value) {
        errorLabel.style.visibility = "hidden"
    } else {
        errorLabel.style.visibility = "visible"
        for (input of [passwordInput, confirmPasswordInput]) {
            input.style.borderColor = "red"
            input.style.borderStyle = "dotted"
            input.style.borderRadius = "5px"
        }    
    }
}
