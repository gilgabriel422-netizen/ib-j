# Innovation Business - Sistema CRM Completo

Sistema completo de CRM para agencia de viajes Innovation Business con gestión de clientes, contratos, paquetes turísticos, cobranzas y más.

## 🚀 Estructura del Proyecto

El proyecto contiene dos aplicaciones principales:

### 📁 `innovationbussines/`
Sistema principal de CRM con todas las funcionalidades integradas.

- **Backend**: Node.js + Express + PostgreSQL + Sequelize
- **Frontend**: React + Vite + TailwindCSS

### 📁 `ib-frontend/`
Versión alternativa/backup del frontend.

## 📋 Requisitos Previos

- Node.js v16 o superior
- PostgreSQL 12 o superior
- npm o yarn

## 🔧 Instalación y Configuración

### 1. Backend (innovationbussines/backend)

```bash
cd innovationbussines/backend
npm install
```

Crear archivo `.env`:
```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=crm_database
DB_PORT=5432
JWT_SECRET=tu_secreto_jwt
PORT=5000
NODE_ENV=development
```

Inicializar base de datos:
```bash
node init-database.js
```

Crear usuarios de ejemplo (opcional):
```bash
node crear-usuario-contratos.js
```

Iniciar servidor:
```bash
node server.js
```

### 2. Frontend (innovationbussines/frontend)

```bash
cd innovationbussines/frontend
npm install
```

Crear archivo `.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_OFFLINE_MODE=false
```

Iniciar aplicación:
```bash
npm run dev
```

## 🌐 Acceso

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Admin Panel**: http://localhost:3000/admin

### 👥 Usuarios por Defecto

**Admin:**
- Email: `admin@crm.com`
- Password: `admin123`

**Contratos:**
- Email: `contratos@crm.com`
- Password: `admin123`

**Cobranzas:**
- Email: `cobranzas@crm.com`
- Password: `admin123`

**Atención:**
- Email: `atencion@crm.com`
- Password: `admin123`

**Postventa:**
- Email: `postventa@crm.com`
- Password: `admin123`

## 🎯 Funcionalidades Principales

### Panel de Administración
- Dashboard con estadísticas en tiempo real
- Gestión completa de clientes
- Sistema de cobranzas
- Gestión de reservas
- Administración de paquetes turísticos
- Gestión de locaciones y departamentos
- Sistema de reportes
- Gestión de usuarios

### Paneles Específicos
- **Dashboard Contratos**: Gestión de contratos y clientes
- **Dashboard Cobranzas**: Seguimiento de pagos y deudas
- **Dashboard Atención**: Atención al cliente y requerimientos
- **Dashboard Postventa**: Seguimiento post-venta

### Paneles de Cliente
- **Cliente Gold**: Panel básico con beneficios
- **Cliente Blue**: Panel intermedio (IB1)
- **Cliente Black**: Panel premium (IB2)

### Módulos Adicionales
- Chatbot integrado
- Sistema de notificaciones
- Sistema de mensajes
- Contratos físicos escaneados
- WhatsApp flotante
- Sistema de puntos/compensación

## 🗂️ Estructura de Archivos

```
frontendmigi/
├── innovationbussines/
│   ├── backend/
│   │   ├── config/          # Configuración DB
│   │   ├── controllers/     # Controladores de API
│   │   ├── models/          # Modelos Sequelize
│   │   ├── routes/          # Rutas de API
│   │   ├── middleware/      # Middleware de autenticación
│   │   └── server.js        # Servidor principal
│   └── frontend/
│       ├── src/
│       │   ├── components/  # Componentes reutilizables
│       │   ├── contexts/    # Context API (Auth, etc)
│       │   ├── pages/       # Páginas/Vistas
│       │   ├── services/    # Servicios API
│       │   └── App.jsx      # Componente principal
│       └── public/          # Archivos estáticos
└── ib-frontend/             # Frontend alternativo
```

## 🔐 Seguridad

- Autenticación JWT
- Rutas protegidas con middleware
- Verificación de tokens
- Roles y permisos de usuario
- Sesiones con expiración automática

## 📱 Características Técnicas

### Backend
- API RESTful
- PostgreSQL con Sequelize ORM
- Autenticación JWT
- CORS configurado
- Validación de datos
- Manejo de errores centralizado

### Frontend
- React 18 con Hooks
- React Router v6
- Context API para estado global
- Axios para peticiones HTTP
- Tailwind CSS para estilos
- Lazy loading de componentes
- Hot Module Replacement (HMR)

## 🐛 Solución de Problemas

### Backend no inicia
- Verificar que PostgreSQL esté corriendo
- Revisar credenciales en `.env`
- Ejecutar `node init-database.js`

### Frontend muestra error de conexión
- Verificar que el backend esté corriendo en puerto 5000
- Revisar `VITE_API_URL` en `.env.local`
- Verificar que `VITE_OFFLINE_MODE=false`

### Problemas de autenticación
- Limpiar localStorage del navegador
- Verificar que el token JWT no haya expirado
- Reiniciar ambos servidores

## 📞 Contacto

Innovation Business
- WhatsApp: +593 999845693
- Email: innovationbussines@gmail.com

## 📄 Licencia

Propiedad de Innovation Business. Todos los derechos reservados.

---

**Nota**: Este sistema está en desarrollo activo. Para cualquier consulta o soporte, contactar al equipo de desarrollo.
