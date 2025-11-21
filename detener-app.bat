@echo off
chcp 65001 >nul
echo ========================================
echo   🛑 EduGestión 360 - Detener Aplicación
echo ========================================
echo.

echo [1/2] Deteniendo Backend (Docker)...
cd /d "%~dp0"
docker-compose stop
echo ✅ Backend detenido
echo.

echo [2/2] Cerrando ventanas de Frontend...
taskkill /FI "WINDOWTITLE eq EduGestion360 - Frontend*" /F >nul 2>&1
taskkill /FI "WINDOWTITLE eq EduGestion360 - Backend*" /F >nul 2>&1
echo ✅ Ventanas cerradas
echo.

echo ========================================
echo   ✅ Aplicación detenida
echo ========================================
echo.
echo 💡 Para reiniciar, ejecuta: iniciar-app.bat
echo.
pause
