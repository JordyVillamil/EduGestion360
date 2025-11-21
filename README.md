# EduGestión 360 🎓

**EduGestión 360** es una plataforma web full-stack e integral de gestión académica, diseñada para centralizar y optimizar la comunicación y los procesos entre directivos, docentes y estudiantes. El proyecto está 100% contenedorizado con Docker.

---

## 🚀 Inicio Rápido

### Opción 1: Script Automático (Recomendado para Windows)

Simplemente haz doble clic en:
```
📁 iniciar-app.bat
```

Este script:
- ✅ Verifica que Docker esté corriendo
- ✅ Inicia el backend automáticamente
- ✅ Inicia el frontend automáticamente
- ✅ Abre tu navegador en http://localhost:5173

**Después del primer uso, ejecuta:**
```
📁 crear-usuarios.bat
```
Para crear usuarios de prueba (estudiante1, docente1, directivo1 / password: 123456)

### Opción 2: Manual

```bash
# 1. Inicia Docker Desktop

# 2. Terminal 1 - Backend
docker-compose up --build

# 3. Terminal 2 - Frontend
cd fronted
npm install
npm run dev

# 4. Abre http://localhost:5173
```

📖 **Guía completa:** Ver [INICIAR_APLICACION.md](INICIAR_APLICACION.md)

---

## 📱 Acceder a la Aplicación

| Servicio | URL | Descripción |
|----------|-----|-------------|
| **Frontend** | http://localhost:5173 | Interfaz de usuario React |
| **Backend API** | http://localhost:8000 | API REST Django |
| **Admin Django** | http://localhost:8000/admin/ | Panel de administración |
| **Base de datos** | localhost:3307 | MySQL (usuario: django_user) |

### 🔐 Credenciales de Prueba

Después de ejecutar `crear-usuarios.bat`:
- **Estudiante:** `estudiante1` / `123456`
- **Docente:** `docente1` / `123456`
- **Directivo:** `directivo1` / `123456`

---

## Core del Proyecto: Lógica de Roles Segura

El pilar de esta aplicación es su sistema de autenticación y autorización basado en roles (RBAC).

* **Autenticación:** Realizada mediante `Simple JWT` (JSON Web Tokens). El frontend recibe un `accessToken` y un `refreshToken` al iniciar sesión.
* **Autorización:** El backend utiliza permisos a nivel de API (`IsDirectivo`, `IsDocente`) y lógica de negocio a nivel de *queryset* para asegurar que los usuarios solo puedan acceder y modificar los datos que les corresponden.
    * **Ejemplo (GET):** Un usuario con rol `estudiante` que llama a `GET /api/calificaciones/` solo verá sus propias notas.
    * **Ejemplo (POST):** Un usuario con rol `docente` que llama a `POST /api/calificaciones/` crea una nota, y el backend le asigna automáticamente su `docente_id` como autor.

---

## Stack Tecnológico

Este proyecto demuestra un flujo de trabajo full-stack moderno, desde el desarrollo de la API hasta el despliegue en contenedores.

### Frontend
* **Framework:** React 18+ (con Vite)
* **Gestión de Estado:** React Hooks (`useState`, `useEffect`, `useContext`)
* **Routing:** `react-router-dom`
* **Estilos:** TailwindCSS (Diseño responsivo y moderno)
* **Formularios:** `react-hook-form` (Alto rendimiento) y `yup` (Validación de esquemas)
* **Peticiones API:** `axios`

### Backend
* **Framework:** Python 3.10+ con Django 4+
* **API:** Django REST Framework (DRF)
* **Autenticación:** `djangorestframework-simplejwt` (Tokens JWT)
* **Base de Datos:** MySQL (manejada por Docker)
* **Servidor WSGI:** Gunicorn

### Infraestructura y DevOps
* **Contenerización:** Docker
* **Orquestación:** Docker Compose
* **CORS:** `django-cors-headers` para comunicación segura entre dominios (Frontend/Backend).

---

## ✨ Características Principales

### 🎨 Frontend Moderno
* ✅ **UI/UX Mejorada:** Diseño moderno con animaciones fluidas y fondo animado
* ✅ **Navbar Responsive:** Barra de navegación adaptable con indicadores de estado
* ✅ **Menú Lateral Desplegable:** Navegación intuitiva que no ocupa espacio permanente
* ✅ **Formularios Validados:** Campos con validación en tiempo real y mensajes de error claros
* ✅ **Indicador de Conexión:** Badge que muestra el estado del servidor en tiempo real
* ✅ **Notificaciones Toast:** Sistema de notificaciones elegante y no intrusivo

### 🔐 Sistema de Autenticación Robusto
* ✅ **JWT Seguro:** Autenticación con tokens Access y Refresh
* ✅ **Roles Granulares:** Estudiante, Docente, Directivo con permisos específicos
* ✅ **Cambio de Rol Dinámico:** Interfaz que se adapta según el rol activo
* ✅ **Sesiones Persistentes:** Opción "Recordarme" para mantener sesión

### 📊 Dashboards por Rol
* 👨‍🎓 **Portal del Estudiante:** 
  - Ver calificaciones en tiempo real
  - Promedios por materia y general
  - Historial académico detallado
  
* 👩‍🏫 **Panel del Docente:**
  - Crear y gestionar calificaciones
  - Filtrar por materia y curso
  - Lista de estudiantes con formularios rápidos
  
* 💼 **Panel del Directivo:**
  - Gestión completa de usuarios (CRUD)
  - Estadísticas globales
  - Reportes y análisis

### 🛠️ Características Técnicas
* ✅ **API RESTful Completa:** Endpoints modulares y seguros
* ✅ **Manejo de Errores Mejorado:** Mensajes descriptivos y soluciones sugeridas
* ✅ **CORS Configurado:** Comunicación segura entre frontend y backend
* ✅ **Docker Compose:** Toda la infraestructura en contenedores
* ✅ **Base de Datos Persistente:** Datos preservados entre reinicios

---

## API Endpoints (Muestra)

| Método | Endpoint | Rol Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/login/` | Público | Obtiene tokens JWT (Access y Refresh). |
| `GET` | `/api/calificaciones/` | Estudiante | Devuelve **solo** las calificaciones del estudiante autenticado. |
| `GET` | `/api/calificaciones/` | Docente | Devuelve las calificaciones creadas **por** el docente autenticado. |
| `POST` | `/api/calificaciones/` | Docente | Crea una nueva calificación. El `docente_id` se asigna automáticamente. |
| `GET` | `/api/users/?role=estudiante` | Docente | Devuelve una lista filtrada de todos los usuarios con rol `estudiante`. |
| `GET` | `/api/me/` | Autenticado | Devuelve los datos del usuario (`user`) almacenados en el token. |

---

## 🛠️ Gestión de la Aplicación

### Detener la Aplicación
```bash
# Usando el script (Windows)
📁 detener-app.bat

# O manualmente
docker-compose stop
```

### Reiniciar después del primer uso
```bash
# Solo necesitas:
📁 iniciar-app.bat

# El script verificará todo automáticamente
```

### Ver logs del backend
```bash
docker-compose logs -f backend
```

### Acceder a la base de datos
```bash
docker-compose exec db mysql -u django_user -pdjango_password edugestion360_db
```

---

## 🐛 Solución de Problemas

Si encuentras el error "Network Error":
1. Verifica que Docker Desktop esté ejecutándose
2. Ejecuta: `docker ps` para ver los contenedores activos
3. Consulta: [docs/SOLUCION_NETWORK_ERROR.md](docs/SOLUCION_NETWORK_ERROR.md)

Otros problemas comunes:
- **Puerto ocupado:** Ver [INICIAR_APLICACION.md](INICIAR_APLICACION.md) sección "Solución de Problemas"
- **Dependencias del frontend:** `npm install --legacy-peer-deps`
- **Reconstruir contenedores:** `docker-compose build --no-cache`

---

## 📚 Documentación Adicional

- 📖 [Guía completa de inicio](INICIAR_APLICACION.md)
- 🔧 [Solución Network Error](docs/SOLUCION_NETWORK_ERROR.md)
- 🎨 [Mejoras de UI implementadas](docs/MEJORAS_UI.md) (si existe)

---

## 🚀 Cómo Ejecutar Localmente (Detallado)

Este proyecto está diseñado para ejecutarse con Docker.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/JordyVillamil/edugestion360-fullstack.git
    cd edugestion360-fullstack
    ```

2.  **Asegurarse de que Docker Desktop esté corriendo**

3.  **Construir y Levantar los Contenedores:**
    ```bash
    docker-compose up --build
    ```

4.  **En otra terminal, instalar dependencias del frontend:**
    ```bash
    cd fronted
    npm install
    npm run dev
    ```

5.  **Crear usuarios de prueba (opcional):**
    ```bash
    docker-compose exec backend python manage.py shell
    # Luego ejecuta el código de crear-usuarios.bat
    ```

6.  **¡Listo!**
    * **Frontend (React):** `http://localhost:5173`
    * **Backend (Django API):** `http://localhost:8000`

---

## Autor

* **Jordy Fabian Villamil Letrado**
* [LinkedIn](https://www.linkedin.com/in/jordy-fabian-villamil-letrado-32378b232/)
* [Portafolio web](https://jordyvillamil.github.io/#contactame)