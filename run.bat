@echo off
  echo.>".\.env.production.local"
echo APP_API_BASE=%1> ".\.env.production.local"
start npm run init