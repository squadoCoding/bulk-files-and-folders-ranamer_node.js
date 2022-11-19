const fs = require("fs");
const path = require("path");

const replaceThis = "siddhant";
const replaceWith = "pruthvi";
const folder = "./";

const preview = true;

fs.readdir(folder, (err, data) => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const newFile = path.join(
      folder,
      item.replaceAll(replaceThis, replaceWith)
    );

    if (!preview) {
      fs.rename(path.join(folder, item), newFile, () => {
        console.log("Rename successful");
      });
    } else {
      if (item != replaceWith && item == replaceThis) {
        console.log(item + " will be renaimed to " + replaceWith);
      }
    }
  }
});
