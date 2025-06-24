const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const formData = {
  email: "",
  message: ""
};

const saved = localStorage.getItem(localStorageKey);
if (saved) {
  const parsed = JSON.parse(saved);
  form.elements.email.value = parsed.email ?? "";
  form.elements.message.value = parsed.message ?? "";

  formData.email = parsed.email ?? "";
  formData.message = parsed.message ?? "";
}

form.addEventListener("input", evt => {
  if (evt.target.name === "email" || evt.target.name === "message") {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

form.addEventListener("submit", evt => {
  evt.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(localStorageKey);

  formData.email = "";
  formData.message = "";
});
