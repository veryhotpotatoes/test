function showContent(option) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; // 이전 콘텐츠 초기화
  
    if (option === 1) {
      // 입력 창
      const inputBox = document.createElement('input');
      inputBox.type = 'text';
      inputBox.placeholder = '여기에 입력하세요...';
      contentArea.appendChild(inputBox);
  
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Submit';
      submitButton.style.marginLeft = '10px';
      contentArea.appendChild(submitButton);
  
      submitButton.onclick = () => alert(`입력한 내용: ${inputBox.value}`);
    } else if (option === 2) {
      // 지도 (Google Maps 예제)
      contentArea.innerHTML = `<iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509413!2d144.9537363155045!3d-37.81627944202162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57792d7b9f1db0!2sGoogle!5e0!3m2!1sen!2sus!4v1614099088668!5m2!1sen!2sus" 
        width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else if (option === 3) {
      // 채팅 창
      const chatBox = document.createElement('div');
      chatBox.style.border = '1px solid #ccc';
      chatBox.style.padding = '10px';
      chatBox.style.height = '150px';
      chatBox.style.overflowY = 'auto';
      contentArea.appendChild(chatBox);
  
      const messageInput = document.createElement('input');
      messageInput.type = 'text';
      messageInput.placeholder = '메시지를 입력하세요...';
      contentArea.appendChild(messageInput);
  
      const sendButton = document.createElement('button');
      sendButton.textContent = 'Send';
      sendButton.style.marginLeft = '10px';
      contentArea.appendChild(sendButton);
  
      sendButton.onclick = () => {
        const message = messageInput.value;
        if (message.trim()) {
          const newMessage = document.createElement('p');
          newMessage.textContent = `You: ${message}`;
          chatBox.appendChild(newMessage);
          chatBox.scrollTop = chatBox.scrollHeight; // 스크롤 자동 이동
          messageInput.value = '';
        }
      };
    }
  }
  