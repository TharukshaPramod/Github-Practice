document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert('Pretend login for: ' + email);
});

