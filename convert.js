const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public');

// Rozmiary w px
const sizes = [400, 800, 1200, 1600, 1920];

// Funkcja sprawdzająca rozszerzenie pliku
function isImage(file) {
  return /\.(png|jpe?g)$/i.test(file);
}

// Usuwa istniejące pliki *.webp o wzorze nazwa-rozmiar.webp
function removeExistingWebpFiles(folder) {
  const files = fs.readdirSync(folder);
  for (const file of files) {
    if (/^.+-\d+\.webp$/.test(file)) {
      const filePath = path.join(folder, file);
      fs.unlinkSync(filePath);
      console.log(`🗑️  Usunięto ${filePath}`);
    }
  }
}

// Konwertuje obraz do webp z obsługą błędów
async function convertImage(inputPath, outputPath, width) {
  try {
    await sharp(inputPath)
      .resize(width)
      .toFormat('webp')
      .toFile(outputPath);
    console.log(`✔️  Wygenerowano ${outputPath}`);
  } catch (error) {
    console.error(`❌ Błąd konwersji pliku ${inputPath} (rozmiar ${width}):`, error.message);
  }
}

// Główna funkcja przetwarzająca folder - REKURENCJA
async function processFolder(folderPath) {
  console.log(`🔍 Przetwarzanie folderu: ${folderPath}`);

  if (!fs.existsSync(folderPath)) {
    console.error(`❌ Folder nie istnieje: ${folderPath}`);
    return;
  }

  const allFiles = fs.readdirSync(folderPath);

  // Rozdziel pliki i foldery
  const files = allFiles.filter(file => fs.statSync(path.join(folderPath, file)).isFile());
  const subdirs = allFiles.filter(file => fs.statSync(path.join(folderPath, file)).isDirectory());

  // Usuń stare pliki .webp w tym folderze
  removeExistingWebpFiles(folderPath);

  const imageFiles = files.filter(isImage);

  if (imageFiles.length === 0) {
    console.warn(`⚠️  Brak obrazów do przetworzenia w ${folderPath}`);
  } else {
    for (const file of imageFiles) {
      const baseName = path.parse(file).name;
      const inputFile = path.join(folderPath, file);

      for (const size of sizes) {
        const outputFile = path.join(folderPath, `${baseName}-${size}.webp`);
        await convertImage(inputFile, outputFile, size);
      }
    }
  }

  // REKURENCJA - przetwarzaj podfoldery
  for (const subdir of subdirs) {
    const subdirPath = path.join(folderPath, subdir);
    await processFolder(subdirPath);
  }
}

// Uruchomienie
(async () => {
  await processFolder(inputDir);
  console.log('✅ Konwersja zakończona!');
})();
