
  let input; 
 // input = document.getElementById('button');

 function addingEventListener() {
  alert('I was clicked!');
  input = document.getElementById('button');
  input.addEventListener('click', addingEventListener);
 }
 addingEventListener()
//input.addEventListener('click', addingEventListener);



