const picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

const validate = new JustValidate(
  '#form', 
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
)
validate
  .addField('#name',[
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatorio!',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'No mínimo 10 caracteres',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'No maximo 40 caracteres',
    },
  ])
  .addField('#e-mail', [
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatorio!',
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido!',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.',
    },
  ])
  .addField('#textoresposta', [
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatório!',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres',
    },
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'Esse campo é obrigatório.',
    }
  ])

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
};

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-button');
  const agreement = document.querySelector('#option2');
  if (agreement.checked === false) {
    submitBtn.disabled 
  }
}
window.onload = function() {
  const clearBtn = document.querySelector('#reset-button');
  clearBtn.addEventListener('click', clearFields);
  const agreement = document.querySelector('#option2');
  agreement.addEventListener('change', enableSubmit);
};
