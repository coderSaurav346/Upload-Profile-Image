const inp = document.querySelector(".inp")
const img = document.querySelector(".img");
document.addEventListener('DOMContentLoaded', (event) => {
  const savedImage = localStorage.getItem("imgFile");
if (savedImage) {
  img.src = savedImage;
  img.style.opacity = 1;
} else {
  img.src = "/test/defaultImg.png";
  img.style.opacity = 0.5;
}
})

inp.addEventListener("change", (e) => {
  img.style.opacity = 1;
  let file = e.target.files[0];
  if (file) {
    if (file.type.startsWith("image/")) {
      let filePath = URL.createObjectURL(inp.files[0]);
      img.src = filePath;
      localStorage.setItem("imgFile", filePath);
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
