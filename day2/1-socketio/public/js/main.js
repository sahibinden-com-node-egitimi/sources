let selectedColor = '';

$(() => {
  const socket = io();

  socket.on('new-color', (color) => {
    console.log(`Data received:`, color);
    changeColor(color);
  });

  $('#submitBtn').on('click', () => {
    socket.emit('new-color', selectedColor);
    changeColor(selectedColor);
  });

  $('#picker').on('change', ({ target }) => {
    console.log(target.value);
    selectedColor = target.value;
  });
});

function changeColor(color) {
  $('.container').css('background-color', color);
  $('.activeColorCode').html(color);
}
