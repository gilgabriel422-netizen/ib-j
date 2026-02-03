# 🔌 ENDPOINTS DISPONIBLES - API COMPLETA

## 📌 BASE URL
```
http://localhost:5000
```

---

## 👤 USUARIOS & AUTENTICACIÓN

### Login
```http
POST /api/usuarios/login
Content-Type: application/json

{
  "email": "admin@crm.com",
  "password": "admin123"
}

Response: {
  "token": "jwt_token",
  "usuario": { ... }
}
```

### Listar usuarios
```http
GET /api/usuarios
Authorization: Bearer token
Response: [{ id, nombre, email, rol, ... }]
```

### Obtener usuario por ID
```http
GET /api/usuarios/:id
Authorization: Bearer token
Response: { id, nombre, email, rol, ... }
```

### Crear usuario
```http
POST /api/usuarios
Authorization: Bearer token
Content-Type: application/json

{
  "nombre": "Juan",
  "email": "juan@crm.com",
  "password": "password123",
  "rol": "cobranzas"
}
Response: { usuario creado }
```

---

## 👥 CLIENTES ⭐ (AHORA FUNCIONA CORRECTAMENTE)

### Listar todos los clientes
```http
GET /api/clientes
Response: {
  "clients": [{ id, first_name, last_name, email, ... }],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 150,
    "totalPages": 3
  }
}
```

### Clientes creados por admin
```http
GET /api/clientes/admin
Response: {
  "clients": [...],
  "pagination": {...}
}
```

### Buscar clientes
```http
GET /api/clientes/search?q=juan
Response: {
  "clients": [...],
  "pagination": {...}
}
```

### Obtener cliente por ID
```http
GET /api/clientes/:id
Response: { cliente }
```

### Crear cliente
```http
POST /api/clientes
Content-Type: application/json

{
  "first_name": "Juan",
  "last_name": "Pérez",
  "email": "juan@email.com",
  "phone": "+593999999999",
  "document_number": "1234567890",
  "contract_number": "CRM-2024-001",
  "ciudad": "Quito",
  "pais": "Ecuador",
  ...
}
Response: { cliente creado }
```

### Actualizar cliente
```http
PUT /api/clientes/:id
Content-Type: application/json
Body: { campos a actualizar }
Response: { cliente actualizado }
```

### Eliminar cliente
```http
DELETE /api/clientes/:id
Content-Type: application/json

{
  "adminEmail": "admin@crm.com",
  "adminPassword": "admin123"
}
Response: { "mensaje": "Cliente eliminado exitosamente" }
```

---

## 📦 PAQUETES ⭐ (DE INNOVATION)

### Listar paquetes
```http
GET /api/paquetes
Response: [
  {
    id: 1,
    nombre: "Galápagos Plus",
    descripcion: "Tour completo...",
    precio: 5999.99,
    duracion: "7 días",
    imagen: "url",
    grupo: "Premium",
    calificacion: 4.8,
    tipo: "tour",
    activo: true
  },
  ...
]
```

### Obtener paquete por ID
```http
GET /api/paquetes/:id
Response: { paquete }
```

### Crear paquete
```http
POST /api/paquetes
Content-Type: application/json

{
  "nombre": "Nuevo paquete",
  "descripcion": "Descripción",
  "precio": 2999.99,
  "duracion": "5 días",
  "imagen": "url",
  "grupo": "Estándar",
  "calificacion": 4.5,
  "tipo": "tour",
  "activo": true
}
Response: { paquete creado }
```

### Actualizar paquete
```http
PUT /api/paquetes/:id
Content-Type: application/json
Body: { campos a actualizar }
Response: { paquete actualizado }
```

### Eliminar paquete
```http
DELETE /api/paquetes/:id
Response: { "mensaje": "Paquete eliminado" }
```

---

## 💬 CHATBOT ⭐ (DE INNOVATION)

### Preguntar al chatbot
```http
POST /api/chatbot/ask
Content-Type: application/json

{
  "question": "¿Qué servicios ofrecen?",
  "conversation_id": "optional-id"
}
Response: {
  "answer": "Ofrecemos paquetes turísticos...",
  "category": "Información General",
  "confidence": 0.95
}
```

### Obtener FAQ
```http
GET /api/chatbot/faq
Response: [
  {
    id: 1,
    category: "Información General",
    question: "¿Qué servicios ofrecen?",
    answer: "Ofrecemos paquetes turísticos...",
    keywords: ["servicios", "qué"]
  },
  ...
]
```

---

## 📬 MENSAJES & NOTIFICACIONES ⭐ (DE INNOVATION)

### Obtener mensajes
```http
GET /api/mensajes/:conversacion_id
Response: [
  {
    id: 1,
    remitente_id: 1,
    destinatario_id: 2,
    contenido: "Hola, ¿cómo estás?",
    fecha_creacion: "2024-02-02T10:30:00Z",
    leido: false
  },
  ...
]
```

### Enviar mensaje
```http
POST /api/mensajes
Content-Type: application/json

{
  "remitente_id": 1,
  "destinatario_id": 2,
  "contenido": "Hola, ¿cómo estás?"
}
Response: { mensaje creado }
```

### Obtener notificaciones
```http
GET /api/notificaciones/:usuario_id
Response: [
  {
    id: 1,
    usuario_id: 1,
    titulo: "Nuevo cliente",
    contenido: "Se registró un nuevo cliente",
    tipo: "cliente",
    leido: false,
    fecha_creacion: "2024-02-02T10:30:00Z"
  },
  ...
]
```

### Crear notificación
```http
POST /api/notificaciones
Content-Type: application/json

{
  "usuario_id": 1,
  "titulo": "Nueva notificación",
  "contenido": "Contenido de la notificación",
  "tipo": "mensaje"
}
Response: { notificación creada }
```

---

## 📋 CONTACTOS

### Listar contactos de un cliente
```http
GET /api/contactos/cliente/:cliente_id
Response: [
  {
    id: 1,
    cliente_id: 1,
    tipo: "email",
    valor: "contacto@email.com",
    principal: true
  },
  ...
]
```

### Crear contacto
```http
POST /api/contactos
Content-Type: application/json

{
  "cliente_id": 1,
  "tipo": "email",
  "valor": "nuevo@email.com",
  "principal": false
}
Response: { contacto creado }
```

---

## 📅 ACTIVIDADES

### Listar todas las actividades
```http
GET /api/actividades
Response: [
  {
    id: 1,
    cliente_id: 1,
    tipo: "llamada",
    titulo: "Seguimiento",
    descripcion: "Llamada de seguimiento",
    fecha_actividad: "2024-02-02T15:00:00Z",
    completada: false
  },
  ...
]
```

### Actividades de un cliente
```http
GET /api/actividades/cliente/:cliente_id
Response: [...]
```

### Crear actividad
```http
POST /api/actividades
Content-Type: application/json

{
  "cliente_id": 1,
  "tipo": "reunion",
  "titulo": "Reunión con cliente",
  "descripcion": "Discutir contrato",
  "fecha_actividad": "2024-02-15T10:00:00Z"
}
Response: { actividad creada }
```

---

## 📍 LOCACIONES & DEPARTAMENTOS ⭐ (DE INNOVATION)

### Listar locaciones
```http
GET /api/locaciones
Response: [
  {
    id: 1,
    nombre: "Quito",
    ciudad: "Quito",
    pais: "Ecuador",
    descripcion: "Capital de Ecuador"
  },
  ...
]
```

### Listar departamentos
```http
GET /api/departamentos
Response: [
  {
    id: 1,
    nombre: "Contratos",
    descripcion: "Departamento de contratos",
    ubicacion: "Quito"
  },
  ...
]
```

### Crear locación
```http
POST /api/locaciones
Content-Type: application/json

{
  "nombre": "Guayaquil",
  "ciudad": "Guayaquil",
  "pais": "Ecuador",
  "descripcion": "Puerta del Pacífico"
}
Response: { locación creada }
```

---

## 📄 CONTRATOS FÍSICOS ⭐ (DE INNOVATION)

### Listar contratos
```http
GET /api/contratos-fisicos
Response: [
  {
    id: 1,
    cliente_id: 1,
    numero_contrato: "CTR-2024-001",
    fecha_creacion: "2024-02-02",
    estado: "activo",
    documento_url: "url/documento.pdf"
  },
  ...
]
```

### Crear contrato
```http
POST /api/contratos-fisicos
Content-Type: application/json

{
  "cliente_id": 1,
  "numero_contrato": "CTR-2024-002",
  "estado": "activo"
}
Response: { contrato creado }
```

---

## 💳 PAGOS

### Listar pagos
```http
GET /api/payments
Response: [...]
```

### Acuerdos de pago
```http
GET /api/payment-agreements
Response: [...]
```

---

## 📊 REPORTES

### Dashboard
```http
GET /api/reports/dashboard
Response: {
  "total_clientes": 150,
  "clientes_activos": 120,
  "paquetes_vendidos": 45,
  "ingresos_mes": 125000.00,
  ...
}
```

---

## 🧪 CÓMO PROBAR

### Usar curl
```bash
# Todos los clientes
curl http://localhost:5000/api/clientes

# Buscar clientes
curl "http://localhost:5000/api/clientes/search?q=juan"

# Paquetes
curl http://localhost:5000/api/paquetes

# Con autenticación
curl -H "Authorization: Bearer TOKEN" http://localhost:5000/api/usuarios
```

### Usar Postman
1. Abre Postman
2. Importa `http://localhost:5000` como base URL
3. Crea requests con los métodos y paths anteriores

### Usar el frontend
```
http://localhost:3000/paquetes      → Ver paquetes
http://localhost:3000/paquetes-admin → Administrar paquetes
http://localhost:3000/soporte-panel  → Panel de soporte (con cliente list)
```

---

## ✅ ESTADO

```
✅ 22+ endpoints funcionales
✅ Autenticación con JWT
✅ Manejo de errores
✅ Validación de datos
✅ Logging en consola
```

---

**Todos los endpoints están listos para usar. ¡Disfruta de tu API! 🚀**
