#!/bin/bash
# Script para copiar assets del brochure

SOURCE_DIR="/mnt/293bdd39-2619-4ab3-a74c-638b135b4c0f/vada/VADA Health Service/VADA Health Service"
DEST_DIR="/mnt/293bdd39-2619-4ab3-a74c-638b135b4c0f/vada/vadahealth-landing/public/assets"

# Crear directorio de destino
mkdir -p "$DEST_DIR"

# Copiar logo
cp "$SOURCE_DIR/VADA LOGO.png" "$DEST_DIR/vada-logo.png"

# Copiar encabezados
cp "$SOURCE_DIR/encabezado arriba.jpg" "$DEST_DIR/header-top.jpg"
cp "$SOURCE_DIR/encabezado abajo.jpg" "$DEST_DIR/header-bottom.jpg"

echo "Assets copiados exitosamente a $DEST_DIR"
