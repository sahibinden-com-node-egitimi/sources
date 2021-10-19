$(() => {
  const socket = io();

  $('#submitBtn').on('click', () => {
    socket.emit('new-color', 'Selam')
  });
});
