@echo off
set /p commitMsg="Enter commit message: "
if "%commitMsg%"=="" set commitMsg="Automatic update via deploy script"

echo Staging changes...
git add .

echo Committing: %commitMsg%
git commit -m "%commitMsg%"

echo Pushing to GitHub (Production)...
git push origin main

echo Done! Vercel build will trigger automatically.
pause
