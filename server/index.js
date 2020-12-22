const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const router = require('./router');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connection', (socket) => { // a new connection
	socket.on('join', ({ name, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });

		if (error) return callback(error); //if there errors then the function will stop

		socket.join(user.room);

		//admin messages
		//broadcast send the message to everyone except for the socket user.
		socket.emit('message', { user: 'Admin', text: `🎊 ${user.name}, welcome to room ${user.room} 🎊` });
		socket.broadcast.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has joined!` });


		io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

		callback(); // trigger a response after the socket is emitted, error handling
	});

	// when the client emits 'typing', broadcast typing it to others users
	socket.on('typing', (name, typing, callback) => {
		if (typing === true) {
			socket.broadcast.emit('typing', { data: `${name} is typing ... ` });
		} else {
			socket.broadcast.emit('typing', { data: ` ` });
		}
		callback();

	});


	//user messages waiting on sendMessages from frontend
	socket.on('sendMessage', (message, time, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit('message', { user: user.name, text: message, time: time });

		callback();// do something after the message is send on the fronten
	});

	//specific socket that will be disconnected when user leaves the application
	socket.on('disconnect', () => {
		const user = removeUser(socket.id);

		if (user) {
			io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
			io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
		}
	})
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));