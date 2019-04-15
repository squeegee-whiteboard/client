import io from 'socket.io-client';

let socket = io('http://localhost:3000/dash');

socket.on('connect', () => {
    socket.emit('boardId', 'no');
});

socket.on('newevent', () => {
    console.log('hello');
});

socket.emit('changeBoard');

socket.on('refreshBoards', () => {
    console.log('doing a board refresh');
});