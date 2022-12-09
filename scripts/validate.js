configValidation = {
  formSelector: ".feedback__form",
  inputSelector: ".feedback__input",
  submitButtonSelector: ".feedback__button",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "feedback__input_type_error",
  errorClass: "feedback__input-error_active",
};
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(configValidation.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configValidation.errorClass);
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(configValidation.inputErrorClass);
  errorElement.classList.remove(configValidation.errorClass);
  errorElement.textContent = "";
}

const enableValidation = (enterOptions) => {
  const validationOptions = enterOptions;
  const formElement = document.querySelector(validationOptions.formSelector);
  setEventListeners(formElement);

  function setEventListeners(form) {
    const inputList = Array.from(
      form.querySelectorAll(validationOptions.inputSelector)
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(form, inputElement);
        toggleButtonState(hasInvalidInput(inputList), form, validationOptions);
      });
    });
  }

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
};

// переключатель кнопки submit

function toggleButtonState(bool, key, validationOptions) {
  const buttonElement = key.querySelector(
    validationOptions.submitButtonSelector
  );
  if (bool) {
    buttonElement.classList.add(validationOptions.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validationOptions.inactiveButtonClass);
  }
  buttonElement.disabled = bool;
}

enableValidation(configValidation);
