/* demo
html:
  #form
  |---form-group
      |--form-control: input, checkbox ....
      |--form-error: hien ti message khi co form-control validate tre ve false

js:
Validator({
  form: selector, 
  rules: [
    isRequired(selector, messageError),
    isEmail(selector, messageError),
    minLength(selector, min, messageError),
    isConfirmed(selector, getConfirmValue(), messageError),
  ],
  formGroupSelector: selector,
  errorSelector: selector,
  classDanger: Class, // classDanger for form group
  onSubmit: submit()
});
*/
//Đối tượng `Validator`

class Validator {
  constructor($$options) {
    const $selectorRules = {};
    const $formElement = document.querySelector($$options.form);

    const removeError = (inputElement) => {
      let elParent = getParent(inputElement, $$options.formGroupSelector);
      let errorElement = elParent.querySelector($$options.errorSelector);
      if (errorElement) errorElement.innerText = "";
      if (elParent.matches(`.${$$options.classDanger}`)) elParent.classList.remove($$options.classDanger);
    };
    const setError = (inputElement, errorMessage) => {
      let elParent = getParent(inputElement, $$options.formGroupSelector);
      let errorElement = elParent.querySelector($$options.errorSelector);
      if (errorElement) errorElement.innerText = errorMessage;
      if (!elParent.matches(`.${$$options.classDanger}`)) elParent.classList.add($$options.classDanger);
    };
    const validate = (inputElement, rule) => {
      let errorMessage;
      const rulesElement = $selectorRules[rule.selector];
      for (let i = 0; i < rulesElement.length; ++i) {
        if (inputElement.type === "radio" || inputElement.type === "checkbox")
          errorMessage = rulesElement[i]($formElement.querySelector(`${rule.selector}:checked`));
        else errorMessage = rulesElement[i](inputElement.value);

        if (errorMessage) break;
      }
      if (errorMessage) setError(inputElement, errorMessage);
      else removeError(inputElement);
      return !errorMessage;
    };
    const checkAllRules = () => {
      const isValid = { isValid: true };
      $$options?.rules.forEach((rule) => {
        const inputElement = $formElement.querySelector(rule.selector);
        const valid = validate(inputElement, rule);
        if (!valid) {
          isValid.isValid = valid;
          return false;
        }
      });
      return isValid;
    };
    const getAllDataForm = (formElement) => {
      const enableInputs = [
        ...formElement.querySelectorAll("input[name]:not([disabled])"),
        ...formElement.querySelectorAll("textarea[name]:not([disabled])"),
      ];
      const formValues = enableInputs.reduce((values, input) => {
        switch (input.type) {
          case "text":
          case "email":
            values[input.name] = input.value.trim();
            break;
          case "radio":
            // trường hợp đã có dữ liệu thì lấy dữ liệu cũ, nếu là undefined thì kiểu tra giá trị radio
            values[input.name] = values[input.name] || (input.checked ? input.value : "");
            break;
          case "checkbox":
            if (!input.matches(":checked") && !values[input.name]) {
              values[input.name] = "";
              return values;
            }
            // checkbox có thể có nhiều nên cần để là dạng mảng
            if (!Array.isArray(values[input.name])) values[input.name] = [];
            if (input.matches(":checked")) values[input.name].push(input.value);
            break;
          case "file":
            values[input.name] = input.files;
            break;
          default:
            values[input.name] = input.value;
        }
        return values;
      }, {});
      return formValues;
    };
    const getParent = (element, selector) => {
      while (element.parentElement) {
        if (element.parentElement.matches(selector)) return element.parentElement;
        element = element.parentElement;
      }
    };
    const validateAllRules = () => {
      $$options.rules.forEach((rule) => {
        if (Array.isArray($selectorRules[rule.selector])) $selectorRules[rule.selector].push(rule.test);
        else $selectorRules[rule.selector] = [rule.test];

        const inputElements = [...$formElement.querySelectorAll(rule.selector)];

        inputElements.forEach((inputElement) => {
          inputElement.onblur = () => {
            validate(inputElement, rule);
          };
          inputElement.oninput = () => {
            removeError(inputElement);
          };
          inputElement.onchange = () => {
            validate(inputElement, rule);
          };
          inputElement.onload = () => {
            removeError(inputElement);
          };
        });
      });
    };
    const submitForm = () => {
      $formElement.onsubmit = (e) => {
        e.preventDefault();
        const { isValid } = checkAllRules();

        if (isValid) {
          if (typeof $$options.onSubmit === "function") {
            const dataForm = getAllDataForm($formElement);
            $$options.onSubmit(dataForm);
          } else {
            $formElement.submit();
          }
        }
      };
    };

    if ($formElement) {
      validateAllRules();
      submitForm();
    }
  }
}
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Please enter this field";
    },
  };
};
Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // copy regex from https://github.com/Darling-coding/regex-mail/blob/main/regexMail.txt
      return regex.test(value.trim()) ? undefined : message || "This field must be email";
    },
  };
};
Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim().length >= min ? undefined : message || "Please enter at least " + min + " characters";
    },
  };
};
Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue() ? undefined : message || `Input value is incorrect`;
    },
  };
};

export { Validator };
