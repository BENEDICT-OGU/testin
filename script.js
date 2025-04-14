function displayName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name !== '') {
      alert(`what kind of name is  ${name} very disgusting`);
      nameInput.value = ''; // clear input field
    } else {
      alert('Please enter your name');
    }
  }