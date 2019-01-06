# Example for exif-orientation

See https://github.com/ginpei/exif-orientation.

## From web

Check `src/index.js`.

```console
$ npm run start
...
```

Then open `http://localhost:8080/` and select an image from `sample-images` directory.

## From Node.js

Check `from-node.js`.

Give an image file as the first parameter to it.

```console
$ node from-node.js sample-images/090-flipped-5.jpg
Read image from: sample-images/090-flipped-5.jpg
Rotation: 90 degree, Flipped: true.
```
