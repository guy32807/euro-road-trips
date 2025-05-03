const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const svgPath = path.resolve(__dirname, '../src/assets/favicon.svg');
const outputDir = path.resolve(__dirname, '../public/favicon');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Sizes for favicon
const sizes = [16, 32, 48, 64, 96, 128, 192, 256, 512];

// Generate PNGs
sizes.forEach(size => {
  console.log(`Generating ${size}x${size} favicon...`);
  const outputPath = path.join(outputDir, `favicon-${size}x${size}.png`);
  execSync(`npx svg2png-cli -i ${svgPath} -o ${outputPath} -w ${size} -h ${size}`);
});

// Copy SVG to output
fs.copyFileSync(svgPath, path.join(outputDir, 'favicon.svg'));

console.log('Favicon generation complete!');

const pngToIco = require('png-to-ico');

// Create favicon.ico with multiple sizes
const pngPaths = [16, 32, 48].map(size => path.join(outputDir, `favicon-${size}x${size}.png`));

pngToIco(pngPaths)
  .then(buf => {
    fs.writeFileSync(path.join(outputDir, '../favicon.ico'), buf);
    console.log('favicon.ico created successfully!');
  })
  .catch(err => console.error('Error creating favicon.ico:', err));