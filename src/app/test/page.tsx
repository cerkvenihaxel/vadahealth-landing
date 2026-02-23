export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          ✅ Tailwind Funciona!
        </h1>
        <p className="text-gray-600 mb-4">
          Si ves este texto con estilos de Tailwind, todo está funcionando correctamente.
        </p>
        <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
          Botón de Prueba
        </button>
      </div>
    </div>
  );
}

