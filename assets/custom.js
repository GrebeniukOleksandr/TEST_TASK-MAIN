let inputField = document.querySelector('.comments');
let container = document.querySelector('.comments_face');
let input = document.createElement('textarea');
let btn = document.createElement('button');
input.classList.add('reply-text');
btn.classList.add('submit-reply');
inputField.appendChild(input); 
inputField.appendChild(btn);
btn.innerText = 'Опубликовать';
btn.onclick = () => {
  const messageText = input.value;
  let newComment = document.createElement("div");
  newComment.classList.add('comments__new');
  let nameParagraph = document.createElement('p');
  nameParagraph.classList.add('name')
  nameParagraph.textContent = 'Анонимний юзер';
  newComment.appendChild(nameParagraph);
  let commentParagraph = document.createElement('p');
  commentParagraph.textContent = messageText;
  newComment.appendChild(commentParagraph);
  container.appendChild(newComment);
  inputField.insertAdjacentElement("afterend", newComment);
  input.value = '';
}