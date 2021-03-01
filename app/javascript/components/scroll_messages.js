const scrollMessages = () => {
  const messages = document.getElementById('messages');
  if (messages) {
    const containers = document.querySelectorAll('.message-container');
    if (containers.length > 0) {
      const lastMsg = containers[containers.length - 1]
      lastMsg.scrollIntoView();
    }
  }
}

export { scrollMessages }
