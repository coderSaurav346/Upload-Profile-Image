const inp = document.querySelector(".inp")
let img = document.querySelector(".img");
document.addEventListener('DOMContentLoaded', (event) => {
  
  const savedImage = localStorage.getItem('profileImage');
  let image = document.querySelector(".img");
  if (savedImage) {
    image.src = savedImage;
    image.style.opacity = 1;
  } else {
    image.src = '//test/defaultImg.png'; // Set a default image
  }
})

  inp.addEventListener("change", (e) => {
    img.style.opacity = 1;
    let file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        let filePath = URL.createObjectURL(inp.files[0]);
        localStorage.setItem("profileImage", filePath);
        img.src = localStorage.getItem("profileImage");
      }
      else {
        alert('Please upload an image file.');
        img.src = "/test/defaultImg.png";
        img.style.opacity = 0.5;
      }
    }
  })

function handleImageError(image) {
  img.src = "/test/defaultImg.png";
  img.style.opacity = 0.5;
}
