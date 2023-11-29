var typed = new Typed('#element', {
    strings: ['Engineer',  'Coder' , 'WebDeveloper.'],
    typeSpeed: 50,
  });

  function submitForm(event) {
    event.preventDefault();
    alert('Form submitted!'); // Replace with actual submission logic
}