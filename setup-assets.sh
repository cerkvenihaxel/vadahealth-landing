#!/bin/bash
cd /mnt/293bdd39-2619-4ab3-a74c-638b135b4c0f/vada/vadahealth-landing

echo "Creando directorio de assets..."
mkdir -p public/assets

echo "Copiando logo..."
cp "../VADA Health Service/VADA Health Service/VADA LOGO.png" public/assets/vada-logo.png

echo "Copiando encabezados..."
cp "../VADA Health Service/VADA Health Service/encabezado arriba.jpg" public/assets/header-top.jpg
cp "../VADA Health Service/VADA Health Service/encabezado abajo.jpg" public/assets/header-bottom.jpg

echo "✅ Assets copiados exitosamente!"
echo ""
echo "Ahora ejecuta: npm run dev"
