const container = document.getElementById("image-container");

// Array of image URLs
const imageUrl = [
  "https://cdn4.premiumread.com/?url=https://makkahnewspaper.com/uploads/images/2022/09/21/1513429.jpeg&w=900&q=100&f=jpg",
  "https://pbs.twimg.com/media/DKfgdNPXUAEjeLU.jpg",
  "https://cdn4.premiumread.com/?url=https://alyaum.com/uploads/images/2023/09/25/2138871.jpg&w=500&q=100&f=jpg"
];

function randomImageUrl() {
  return imageUrl[Math.floor(Math.random() * imageUrl.length)];
}

function addDynamicImage() {
  // Create div element
  const div = document.createElement('div');
  div.classList.add('nine', 'my-2', 'hover-2');

  // Create h2 element
  const h2 = document.createElement('h2');
  h2.textContent = 'كاركتير اليوم الوطني';

  // Create img element
  const imgElement = document.createElement('img');
  imgElement.src = randomImageUrl();  
  imgElement.alt = 'كاركتير اليوم الوطني';
  imgElement.style.maxWidth = '400px';
  imgElement.style.width = '100%';
  imgElement.style.height = 'auto';
  imgElement.classList.add('text-center');

  // Append h2 and img to div
  div.appendChild(h2);
  div.appendChild(imgElement);

  // Append div to container
  container.appendChild(div);

  // Change the image every 5 seconds
  setInterval(() => {
    imgElement.src = randomImageUrl();
  }, 5000);
}

// Call the function to add the image dynamically
addDynamicImage();