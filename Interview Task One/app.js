const url = 'https://api.npoint.io/fa393fa40840f5dc89a1';

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { href, text, color = 'black', target, number1, number2 } = item;
      return `<ul class="list">
      <li ><a href="https://${href}" class="link" style="color:${color}" ${
        target ? `target="${target}"` : ''
      }>${text}</a></li>
      ${number1 ? `<li>Number 1: ${number1}</li>` : ''}
      ${number2 ? `<li>Number 2: ${number2}</li>` : ''}
    </ul>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
