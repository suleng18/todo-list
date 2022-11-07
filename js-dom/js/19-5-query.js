// function main() {
//   let channelName = 'Suldev';
//   console.log('🚀 ~ channelName', channelName);
// }
// main();

(() => {
  let channelName = 'Suldev';
  // console.log('🚀 ~ channelName', channelName);
  const h1Element = document.querySelector('#title');
  const a = (h1Element.textContent = 'HUHUHUH');

  const liElementList = document.querySelectorAll('#todoList > li');
  for (let liElement of liElementList) {
  }

  const app = document.querySelector('#app');
  if (app) {
    const h1 = document.createElement('h1');
    h1.textContent = 'con cua long';
    app.appendChild(h1);
  }
})();
