
const photoInput = document.querySelector('input[type="file"]');
const img = document.createElement('img');
 
img.src = URL.createObjectURL(file);
document.querySelector('.register-form').appendChild(img);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  

  photoInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
  
    // Validate the file
    if (!file.type.match('image/.*')) {
      alert('Please upload an image file.');
      return;
    }
  });
    
  const form = document.querySelector('form');
  
  
  // Validate the email address
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  const companyName = form.company_name.value;
  const Email = form.Email.value;
  const Password = form.Password.value;
  const introduction = form.introduction.value;
  const file = form.profileImage.value;

  // Submit the form
  form.submit();
});


