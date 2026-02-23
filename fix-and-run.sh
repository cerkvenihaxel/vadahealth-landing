#!/bin/bash
set -e

cd /mnt/293bdd39-2619-4ab3-a74c-638b135b4c0f/vada/vadahealth-landing

echo "🧹 Limpiando instalación anterior..."
rm -rf node_modules package-lock.json .next

echo "📦 Instalando dependencias con npm..."
npm install

echo "📁 Creando directorio de assets..."
mkdir -p public/assets

echo "🖼️ Copiando assets del brochure..."
cp "../VADA Health Service/VADA Health Service/VADA LOGO.png" public/assets/vada-logo.png 2>/dev/null || echo "⚠️ Logo no encontrado"
cp "../VADA Health Service/VADA Health Service/encabezado arriba.jpg" public/assets/header-top.jpg 2>/dev/null || echo "⚠️ Header top no encontrado"
cp "../VADA Health Service/VADA Health Service/encabezado abajo.jpg" public/assets/header-bottom.jpg 2>/dev/null || echo "⚠️ Header bottom no encontrado"

echo ""
echo "✅ Todo listo! Ahora ejecuta:"
echo "   npm run dev"
