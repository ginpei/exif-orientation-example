const exif = require("@ginpei/exif-orientation");
const fs = require('fs');

const path = process.argv[2];
console.log('Read image from:', path);

// read file as buffer
const buffer = fs.readFileSync(path);

// get orientation
exif.getOrientation(buffer).then((orientation) => {
  console.log(
    `Rotation: ${orientation.rotation} degree,`,
    `Flipped: ${orientation.flipped}.`,
  );
});
