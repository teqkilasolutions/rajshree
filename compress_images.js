const fs = require('fs');
const path = require('path');

// Configuration
const TARGET_DIR = path.join(__dirname, 'assets/images');
const MAX_WIDTH = 1920; // Max width for resizing
const QUALITY = 80; // Compression quality (0-100)

async function compressImages(directory) {
    // Check if sharp is installed
    try {
        require('sharp');
    } catch (e) {
        console.error('\x1b[31m%s\x1b[0m', 'Error: "sharp" library is missing.');
        console.log('Please run: npm install sharp');
        process.exit(1);
    }
    const sharp = require('sharp');

    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await compressImages(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                console.log(`Optimizing: ${file}`);
                const buffer = await sharp(filePath)
                    .resize(MAX_WIDTH, MAX_WIDTH, { fit: 'inside', withoutEnlargement: true })
                    .jpeg({ quality: QUALITY, mozjpeg: true })
                    .png({ quality: QUALITY, compressionLevel: 8 })
                    .toBuffer();
                
                fs.writeFileSync(filePath, buffer);
            }
        }
    }
}

console.log('Starting image compression...');
compressImages(TARGET_DIR).then(() => console.log('Compression complete!'));