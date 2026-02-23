#!/bin/bash
set -e

cd /mnt/293bdd39-2619-4ab3-a74c-638b135b4c0f/vada/vadahealth-landing

echo "🛑 Deteniendo servidor..."
pkill -f "next dev" 2>/dev/null || true

echo "🧹 Limpiando todo..."
rm -rf node_modules package-lock.json .next

echo "📦 Instalando dependencias básicas..."
npm install

echo "🎨 Verificando Tailwind..."
npm list tailwindcss autoprefixer postcss

echo ""
echo "✅ Listo! Ahora ejecuta: npm run dev"
echo "   Y abre: http://localhost:3000/test"
