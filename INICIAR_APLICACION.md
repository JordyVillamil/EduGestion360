# 🚀 Guía de Inicio - EduGestión 360

## Requisitos Previos

✅ **Instalar antes de comenzar:**
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) para Windows
- [Node.js 18+](https://nodejs.org/) (recomendado LTS)
- [Git](https://git-scm.com/) (si no lo tienes)

---

## 🎯 Inicio Rápido (Primera vez)

### Paso 1: Iniciar Docker Desktop
1. Abre **Docker Desktop** desde el menú de inicio
2. Espera a que el ícono de Docker en la barra de tareas deje de parpadear
3. Verifica que muestre "Docker Desktop is running"

### Paso 2: Iniciar el Backend
Abre una terminal PowerShell en la raíz del proyecto:

```powershell
# Navega al directorio del proyecto
cd "C:\Sistema Educativo Integral\edugestion360-fullstack"

# Construye e inicia los contenedores (primera vez puede tardar 5-10 minutos)
docker-compose up --build

# En las siguientes veces, usa solo:
docker-compose up
```

**Espera estos mensajes:**
```
✓ edugestion360_mysql  ... done
✓ edugestion360_django ... done
Listening on http://0.0.0.0:8000
```

**Verifica el backend:** Abre http://localhost:8000/admin/

### Paso 3: Instalar dependencias del Frontend (solo primera vez)
Abre una **nueva terminal** PowerShell:

```powershell
cd "C:\Sistema Educativo Integral\edugestion360-fullstack\fronted"

# Instalar dependencias
npm install

# Si hay errores, intenta:
npm install --legacy-peer-deps
```

### Paso 4: Iniciar el Frontend
En la misma terminal del frontend:

```powershell
npm run dev
```

**Deberías ver:**
```
  VITE v5.2.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Paso 5: Abrir la Aplicación
Abre tu navegador en: **http://localhost:5173**

---

## 🔐 Credenciales de Prueba

Si aún no tienes usuarios, necesitas crearlos en el backend:

```powershell
# En la terminal donde corre Docker, presiona Ctrl+C para detener
# Luego ejecuta:
docker-compose exec backend python manage.py createsuperuser

# Sigue las instrucciones para crear un usuario administrador
```

O usa estos comandos para crear usuarios de prueba:

```powershell
docker-compose exec backend python manage.py shell

# Dentro del shell de Django, ejecuta:
from django.contrib.auth import get_user_model
User = get_user_model()

# Crear estudiante
User.objects.create_user(username='estudiante1', password='123456', email='estudiante@test.com', role='estudiante')

# Crear docente
User.objects.create_user(username='docente1', password='123456', email='docente@test.com', role='docente')

# Crear directivo
User.objects.create_user(username='directivo1', password='123456', email='directivo@test.com', role='directivo')

exit()
```

---

## 📊 Verificación del Sistema

### Backend funcionando correctamente:
- ✅ http://localhost:8000/admin/ → Muestra el panel de Django
- ✅ http://localhost:8000/api/ → Muestra la API REST

### Frontend funcionando correctamente:
- ✅ http://localhost:5173 → Muestra la página de login
- ✅ Badge verde "✓ Servidor conectado" visible en el login

### Base de datos funcionando:
```powershell
docker-compose exec db mysql -u django_user -pdjango_password edugestion360_db

# Dentro de MySQL:
SHOW TABLES;
exit;
```

---

## 🛑 Detener la Aplicación

### Detener manteniendo los datos:
```powershell
# Terminal del backend
Ctrl + C

# O desde otra terminal:
docker-compose stop
```

### Detener y limpiar todo:
```powershell
docker-compose down

# Para limpiar completamente (¡CUIDADO! Borra la base de datos):
docker-compose down -v
```

### Detener el frontend:
```powershell
# En la terminal del frontend
Ctrl + C
```

---

## 🔄 Reinicios Posteriores

Después de la primera instalación, solo necesitas:

### Opción 1: Modo desarrollo (recomendado)
```powershell
# Terminal 1 - Backend
cd "C:\Sistema Educativo Integral\edugestion360-fullstack"
docker-compose up

# Terminal 2 - Frontend
cd "C:\Sistema Educativo Integral\edugestion360-fullstack\fronted"
npm run dev
```

### Opción 2: Modo segundo plano
```powershell
# Backend en segundo plano
docker-compose up -d

# Ver logs cuando quieras
docker-compose logs -f backend

# Frontend normal
cd fronted
npm run dev
```

---

## 🐛 Solución de Problemas Comunes

### ❌ "Docker no responde"
```powershell
# Reinicia Docker Desktop desde la aplicación
# O desde PowerShell como administrador:
Restart-Service docker
```

### ❌ "Puerto 8000 ya está en uso"
```powershell
# Encuentra qué proceso usa el puerto
netstat -ano | findstr :8000

# Detén el proceso (reemplaza PID con el número que aparece)
taskkill /PID <PID> /F
```

### ❌ "Puerto 5173 ya está en uso"
```powershell
# Detén otros servidores Vite o cambia el puerto en vite.config.js
```

### ❌ "Network Error" en el login
1. Verifica que Docker esté corriendo: `docker ps`
2. Verifica que el backend responda: http://localhost:8000/admin/
3. Revisa los logs: `docker-compose logs backend`

### ❌ Error "No module named X"
```powershell
# Reconstruye el contenedor del backend
docker-compose build --no-cache backend
docker-compose up
```

### ❌ "npm install falla"
```powershell
# Limpia el caché e intenta de nuevo
npm cache clean --force
rm -r node_modules
rm package-lock.json
npm install --legacy-peer-deps
```

---

## 📱 Probar la Aplicación

### Flujo de prueba completo:

1. **Login**
   - Usuario: `estudiante1` / Password: `123456`
   - Deberías ver el mensaje verde "✓ Servidor conectado"
   - Clic en "Iniciar Sesión"

2. **Dashboard Estudiante**
   - Ver estadísticas y calificaciones
   - Navegar entre las pestañas
   - Probar el menú lateral (botón hamburguesa)

3. **Cambiar de Rol**
   - Clic en el avatar (esquina superior derecha)
   - Seleccionar "Docente"
   - Ver el dashboard de docente

4. **Probar Funcionalidades**
   - ✅ Calificaciones (leer y crear)
   - ✅ Navegación entre páginas
   - ✅ Menú desplegable
   - ✅ Notificaciones
   - ✅ Responsive design (redimensiona el navegador)

---

## 🎨 Características Implementadas

✅ Sistema de autenticación con JWT
✅ Dashboard diferente por rol (Estudiante, Docente, Directivo)
✅ Gestión de calificaciones
✅ Menú lateral desplegable
✅ Navbar moderno y responsive
✅ Animaciones de fondo
✅ Notificaciones toast
✅ Indicador de estado del servidor
✅ Formularios validados
✅ Diseño moderno con Tailwind CSS

---

## 📞 Soporte

Si encuentras algún problema:
1. Revisa los logs: `docker-compose logs backend`
2. Verifica la consola del navegador (F12)
3. Consulta `docs/SOLUCION_NETWORK_ERROR.md`

---

## 🎉 ¡Listo!

Tu aplicación EduGestión 360 está corriendo en:
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:8000
- **Admin Django:** http://localhost:8000/admin/
- **Base de datos:** localhost:3307
