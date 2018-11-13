var counter = 0;

$('button').on('click', function () {
  var button = $(this);
  var classText;
  counter += 1;
  
  button.text(counter);

  if (counter % 4 === 0) {
    classText = 'zero';
  } else if (counter % 4 === 1) {
    classText = 'one';
  } else if (counter % 4 === 2) {
    classText = 'two';
  } else {
    classText = 'three';
  }

  button.prop('class', classText);
});