import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function EnviarAtencion() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [asunto, setAsunto] = useState('');
  const [loading, setLoading] = useState(true);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    const loadMensajes = async () => {
      try {
        const api = await import('../services/api');
        const response = await api.default.get('/mensajes');
        setMensajes(response.data || []);
      } catch (error) {
        console.error('Error loading mensajes:', error);
      } finally {
        setLoading(false);
      }
    };
    loadMensajes();
  }, []);

  const handleEnviarMensaje = async () => {
    if (!asunto.trim() || !nuevoMensaje.trim()) {
      alert('Por favor llena el asunto y el mensaje');
      return;
    }

    setEnviando(true);
    try {
      const api = await import('../services/api');
      const response = await api.default.post('/mensajes', {
        asunto,
        contenido: nuevoMensaje,
        cliente: user?.name || 'Cliente'
      });
      
      // Agregar el mensaje a la lista
      setMensajes([...mensajes, response.data]);
      setAsunto('');
      setNuevoMensaje('');
      alert('Mensaje enviado exitosamente');
    } catch (error) {
      console.error('Error enviando mensaje:', error);
      alert('Error al enviar el mensaje');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-black">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-3 bg-yellow-100 rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Menú</h2>
          <ul className="space-y-2 text-sm">
            <li className="py-2 px-3 rounded hover:bg-yellow-200 cursor-pointer" onClick={() => navigate('/dashboard-contratos')}>Contratos</li>
            <li className="py-2 px-3 rounded hover:bg-yellow-200 cursor-pointer" onClick={() => navigate('/reservas')}>Reservas</li>
            <li className="py-2 px-3 rounded hover:bg-yellow-200 cursor-pointer" onClick={() => navigate('/beneficios')}>Beneficios</li>
            <li className="py-2 px-3 rounded hover:bg-yellow-200 cursor-pointer" onClick={() => navigate('/contratos-fisicos')}>Contratos Físicos</li>
            <li className="py-2 px-3 bg-yellow-200 rounded cursor-pointer hover:bg-yellow-300">Enviar a Atención</li>
            <li className="py-2 px-3 rounded hover:bg-red-200 cursor-pointer text-red-700 font-semibold" onClick={logout}>Salir</li>
          </ul>
        </aside>

        {/* Main content */}
        <main className="col-span-9">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Enviar a Atención</h1>
          </div>

          {/* Formulario de nuevo mensaje */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Enviar Mensaje</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Asunto</label>
                <input
                  type="text"
                  value={asunto}
                  onChange={(e) => setAsunto(e.target.value)}
                  placeholder="Ingresa el asunto de tu consulta"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  value={nuevoMensaje}
                  onChange={(e) => setNuevoMensaje(e.target.value)}
                  placeholder="Escribe tu mensaje aquí..."
                  rows="6"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              <button
                onClick={handleEnviarMensaje}
                disabled={enviando}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-700 text-black font-semibold py-3 rounded-lg hover:opacity-90 disabled:opacity-50"
              >
                {enviando ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </div>

          {/* Historial de mensajes */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Historial de Mensajes</h3>
            {loading ? (
              <p>Cargando mensajes...</p>
            ) : mensajes.length > 0 ? (
              <div className="space-y-4">
                {mensajes.map((msg, index) => (
                  <div key={msg.id || index} className="p-4 border rounded-lg bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{msg.asunto}</h4>
                      <span className="text-sm text-gray-600">
                        {msg.fecha ? new Date(msg.fecha).toLocaleDateString() : 'Hoy'}
                      </span>
                    </div>
                    <p className="text-gray-700">{msg.contenido}</p>
                    {msg.respuesta && (
                      <div className="mt-3 p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                        <p className="text-sm font-semibold text-blue-900">Respuesta del equipo:</p>
                        <p className="text-gray-700">{msg.respuesta}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay mensajes enviados aún</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
