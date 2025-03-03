const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
    // Banner images for destinations
    'paris-banner.jpg': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    'tokyo-banner.jpg': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80',
    'new-york-banner.jpg': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80',

    // Carousel banner images
    'santorini-banner.jpg': 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80',
    'machu-picchu-banner.jpg': 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80',
    'bali-banner.jpg': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',

    // Attraction images
    'paris-eiffel-1.jpg': 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800&q=80',
    'paris-louvre-1.jpg': 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    'tokyo-sensoji-1.jpg': 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
    'tokyo-shibuya-1.jpg': 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800&q=80',
    'nyc-central-park-1.jpg': 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&q=80',
    'nyc-times-square-1.jpg': 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=800&q=80'
};

const downloadImage = (url, filename) => {
    const filepath = path.join(__dirname, '../public/images/destinations', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${filename}`);
        });
    }).on('error', (err) => {
        fs.unlink(filepath, () => {});
        console.error(`Error downloading ${filename}:`, err.message);
    });
};

// Create the destinations directory if it doesn't exist
const destinationsDir = path.join(__dirname, '../public/images/destinations');
if (!fs.existsSync(destinationsDir)) {
    fs.mkdirSync(destinationsDir, { recursive: true });
}

// Download all images
Object.entries(images).forEach(([filename, url]) => {
    downloadImage(url, filename);
});