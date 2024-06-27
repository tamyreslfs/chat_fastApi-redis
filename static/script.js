var ws = new WebSocket("ws://localhost:8000/ws");

ws.onmessage = function(event) {
    var messages = document.getElementById('messages');
    var message = document.createElement('li');
    var content = document.createTextNode(event.data);
    message.appendChild(content);
    message.classList.add('message', 'received'); // Adiciona classes para mensagens recebidas
    messages.appendChild(message);
};

function sendMessage(event) {
    var input = document.getElementById("messageText");
    if (input.value.trim() !== "") {
        ws.send(input.value);

        var messages = document.getElementById('messages');
        var message = document.createElement('li');
        var content = document.createTextNode(input.value);
        message.appendChild(content);
        message.classList.add('message', 'sent'); // Adiciona classes para mensagens enviadas
        messages.appendChild(message);

        input.value = '';
    }
    event.preventDefault();
}
