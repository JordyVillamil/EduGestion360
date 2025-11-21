📁 iniciar-app.bat@echo off
chcp 65001 >nul
echo ========================================
echo   🚀 EduGestión 360 - Inicio Completo
echo ========================================
echo.

REM Verificar si Docker está corriendo
echo [1/4] Verificando Docker Desktop...
docker ps >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker Desktop no está ejecutándose
    echo.
    echo 💡 Por favor:
    echo    1. Abre Docker Desktop desde el menú de inicio
    echo    2. Espera a que esté completamente iniciado
    echo    3. Ejecuta este script nuevamente
    echo.
    pause
    exit /b 1
)
echo ✅ Docker Desktop está corriendo
echo.

REM Iniciar backend
echo [2/4] Iniciando Backend (Docker)...
echo    Esto puede tardar unos minutos la primera vez...
echo.
start "EduGestion360 - Backend" cmd /k "cd /d "%~dp0" && docker-compose up"
timeout /t 15 /nobreak >nul

REM Verificar si el backend está listo
echo [3/4] Esperando a que el backend esté listo...
:wait_backend
timeout /t 2 /nobreak >nul
curl -s http://localhost:8000/admin/ >nul 2>&1
if %errorlevel% neq 0 (
    echo    ⏳ Esperando backend...
    goto wait_backend
)
echo ✅ Backend listo en http://localhost:8000
echo.

REM Verificar si node_modules existe
if not exist "%~dp0fronted\node_modules\" (
    echo [3.5/4] Instalando dependencias del frontend...
    cd /d "%~dp0fronted"
    call npm install
    echo.
)

REM Iniciar frontend
echo [4/4] Iniciando Frontend (Vite)...
start "EduGestion360 - Frontend" cmd /k "cd /d "%~dp0fronted" && npm run dev"
timeout /t 5 /nobreak >nul

echo.
echo ========================================
echo   ✅ ¡Aplicación iniciada con éxito!
echo ========================================
echo.
echo 📱 Frontend:  http://localhost:5173
echo 🔧 Backend:   http://localhost:8000
echo 👤 Admin:     http://localhost:8000/admin/
echo.
echo 💡 Credenciales de prueba:
echo    Usuario: estudiante1
echo    Contraseña: 123456
echo.
echo 🛑 Para detener:
echo    - Cierra las ventanas del Backend y Frontend
echo    - O ejecuta: detener-app.bat
echo.

REM Esperar 3 segundos y abrir el navegador
timeout /t 3 /nobreak >nul
start http://localhost:5173

pause
