const exif = require("@ginpei/exif-orientation");

document.querySelector("#file").addEventListener("change", async event => {
  const el = event.target;

  // get file
  const file = el.files[0];
  if (!file) {
    return;
  }
  el.value = "";

  // get orientation
  const orientation = await exif.getOrientation(file);

  // show result
  document.querySelector("#result").textContent =
    `Rotation: ${orientation.rotation} degree, ` +
    `Flipped: ${orientation.flipped}.`;

  // showing image... but not works correctly if orientated.
  // you have to rotate and flip to see the actual image!
  // (hint: canvas)
  document.querySelector("#image").src = await readImage(file);
});

function readImage (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
