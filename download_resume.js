const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b886a6af-44ec-4b22-8bab-0e9e2458e745/Muhammad-Mudassar-Frontend-React-Next-WordPres-Developer-up6-1768762681665.pdf';
const dest = path.join(__dirname, 'public', 'resume.pdf');

const file = fs.createWriteStream(dest);
https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download complete');
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error: ' + err.message);
});
