const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
    wonders: {
        'great-wall': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d',
        'petra': 'https://images.unsplash.com/photo-1579606037717-e576962c41c8',
        'christ-redeemer': 'https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f',
        'machu-picchu': 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
        'chichen-itza': 'https://images.unsplash.com/photo-1518638150340-f706e86654de',
        'colosseum': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
        'taj-mahal': 'https://images.unsplash.com/photo-1564507592333-c60657eea523'
    },
    cities: {
        'kyoto': [
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
            'https://images.unsplash.com/photo-1493997181344-712f2f19d87a',
            'https://images.unsplash.com/photo-1528360983277-13d401cdc186'
        ],
        'barcelona': [
            'https://images.unsplash.com/photo-1583422409516-2895a77efded',
            'https://images.unsplash.com/photo-1583779457094-ab6f0d952c86',
            'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4'
        ],
        'istanbul': [
            'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b',
            'https://images.unsplash.com/photo-1527838832700-5059252407fa',
            'https://images.unsplash.com/photo-1604941484346-3e321fbe064e'
        ]
    },
    blog: {
        'hero': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828'
    }
};

// Create directories if they don't exist
const dirs = [
    'public/images/wonders',
    'public/images/cities',
    'public/images'
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Download function
function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(`${url}?w=1200&q=80`, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filepath);
            res.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${filepath}`);
                resolve();
            });

            fileStream.on('error', (err) => {
                fs.unlink(filepath, () => reject(err));
            });
        }).on('error', reject);
    });
}

// Download all images
async function downloadAllImages() {
    // Download wonder images
    for (const [wonder, url] of Object.entries(images.wonders)) {
        await downloadImage(url, `public/images/wonders/${wonder}.jpg`);
    }

    // Download city images
    for (const [city, urls] of Object.entries(images.cities)) {
        for (let i = 0; i < urls.length; i++) {
            await downloadImage(urls[i], `public/images/cities/${city}-${i + 1}.jpg`);
        }
    }

    // Download blog hero
    await downloadImage(images.blog.hero, 'public/images/blog-hero.jpg');
}

downloadAllImages().catch(console.error);