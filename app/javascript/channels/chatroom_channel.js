import consumer from "./consumer"; // using ActionCable

const initChatroomCable = () => {
  // look for messages div
  const messagesContainer = document.getElementById('messages');
  // if there is a messages div, run the code
  if (messagesContainer) {
    // get the chatroom ID from the HTML
    const id = messagesContainer.dataset.chatroomId;

    // subscribe to that chatroom (using the ID)
    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        console.log(data); // called when data is broadcast in the cable
        messagesContainer.insertAdjacentHTML('beforeend', data)
      },
    });
  }
}

export { initChatroomCable };
