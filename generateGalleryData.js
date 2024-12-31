const fs = require('fs');
const path = require('path');

const galleryTypes = ['fotografia-reconstruida', 'eucastica', 'arte-colorido'];

galleryTypes.forEach((type) => {
  const dirPath = path.join(__dirname, 'src/assets/images', type);
  const files = fs.readdirSync(dirPath);
  const images = files.map((file) => {
    // Strip the .jpg extension if it exists
    let title = file.replace('.jpg', '');
    // Replace - with spaces
    title = title.replace(/-/g, ' ');
    // Capitalize the title
    title = title.replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      src: `/images/${type}/${file}`,
      title: title,
    };
  });

  fs.writeFileSync(
    path.join(__dirname, `src/data/${type}.json`),
    JSON.stringify(images, null, 2)
  );
});