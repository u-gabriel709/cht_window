const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('connected');

    ws.on('message', message => {
        console.log('was sended:', message.toString());
        wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message.toString());
        }
        });
    });

    ws.on('close', () => console.log('disconnected'));
});


