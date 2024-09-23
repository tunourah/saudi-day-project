// Array of image URLs
const imageUrl = [
   
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2FYkPjzEjdc3XPFXb8DMaiutJPfkJyY5x0AZB8kHhM.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2FMV06VmkARiq4fLqkHGGlDh6S7xrUUj5fo7UX7DMO.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2Fma3LZknFqHTSnRt8Sb0qYGLRWtDWZq2LKlsa0iEM.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2F10FQ5c1wkbkYbV9kBrYsMKCUKDHtlTucOiaAc8DG.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2FmONAQ6avOqa9m9qCjhoiezV5NpxD5lJ5CgQIPkQG.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2FMGr48hi3qJHmNo0gNGTrXvupE3Dj9pfezUFQGtP5.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2FYkPjzEjdc3XPFXb8DMaiutJPfkJyY5x0AZB8kHhM.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2FMV06VmkARiq4fLqkHGGlDh6S7xrUUj5fo7UX7DMO.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2Fma3LZknFqHTSnRt8Sb0qYGLRWtDWZq2LKlsa0iEM.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2F10FQ5c1wkbkYbV9kBrYsMKCUKDHtlTucOiaAc8DG.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2FLvQLJqc1ryBaN2jtZGKAWrJo9uc9vcHuMsEN8Udp.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2F1sbkQoWwE75TrKS9erIN2uZcZHj5JDX7yX73gVIo.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2FXlPjh5y6PtpTCgTpXsMGah6YbzXdYnwF7RiwG5OI.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2F2AnzwZWKB0EQwayGXDGjvYbGcRVx2p3k6givdcXp.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2F9pGihe6WIJeMnQIMSrNANxb6q0XXFFxlRc3q7ir2.jpg&w=3840&q=75",
    "https://www.spa.gov.sa/_next/image?url=https%3A%2F%2Fportalcdn.spa.gov.sa%2Fbackend%2Foriginal%2F202409%2FmONAQ6avOqa9m9qCjhoiezV5NpxD5lJ5CgQIPkQG.jpg&w=3840&q=75",
    "https://vid.alarabiya.net/images/2024/08/25/f57a345e-864a-4a2b-8e41-2f96fb4c3939/f57a345e-864a-4a2b-8e41-2f96fb4c3939_16x9_1200x676.jpg?width=801&format=jpg"
  ];
  
  
  function randomImageUrl() {
    return imageUrl[Math.floor(Math.random() * imageUrl.length)];
  }
  
   
  function kingImage() {
    const altText = "king photo";  
    const container = document.getElementById("king");  
    
 
    imageUrl.forEach((url, index) => {
      const holdDiv = document.createElement("div");
      holdDiv.classList.add("hold-img");
    
      if (index === 8) {
        holdDiv.classList.add("nine");
      }
     
      const imgElement = document.createElement("img");
      imgElement.src = url;  
      imgElement.alt = altText;
  
       
      holdDiv.appendChild(imgElement);
      container.appendChild(holdDiv);
  
       
      setInterval(() => {
        imgElement.src = randomImageUrl(); 
      }, 5000);
    });
  }
  
   
  kingImage();
  