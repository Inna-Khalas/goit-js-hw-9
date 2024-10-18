const formData = { email: "", message: "" };
const feedbackForm = document.querySelector(".feedback-form");
const key = "feedback-form-state";

window.addEventListener("DOMContentLoaded", loadFormData);

feedbackForm.addEventListener("input", handleFeedback)
feedbackForm.addEventListener("submit", submitForm)

function handleFeedback(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(key, JSON.stringify(formData));
}
function submitForm(event) {
    event.preventDefault()

    if (!formData.email || !formData.message) {
        return alert("Fill please all fields!!!")
    }

    feedbackForm.reset();
    localStorage.removeItem(key);
    formData.email = "";
    formData.message = "";
}

function loadFormData() {
    const savedAll = localStorage.getItem(key);
    if (savedAll) {
        const parsedAll = JSON.parse(savedAll);

        formData.email = parsedAll.email || "";
        formData.message = parsedAll.message || "";

        feedbackForm.elements.email.value = formData.email;
        feedbackForm.elements.message.value = formData.message;
    }
}

