REM set mypath=%cd%
REM cd %mypath%
set /P comment=Enter commit comment here: 
echo %comment%
call npm run build
git add .
git commit -m "%comment%"
git push origin master
pause