const inputLink = document.querySelector(".input-link");
const generateBtn = document.querySelector("#generateBtn");
const qrImage = document.querySelector("#qrImage");

generateBtn.addEventListener("click", () => {
  let link = inputLink.value.trim();

  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(link);

  inputLink.value = "";
});
