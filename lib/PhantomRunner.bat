@echo off
setlocal enabledelayedexpansion
set errlvl=0
for /r %%f in (%1\*) do (
 set filename=%%~nf
 if NOT "!filename:~0,1!" == "_" (
  PhantomJs\phantomjs.exe "%1\_CasperRunner.js" CasperJs\ "%%f"
  set /a errlvl=!errlvl! + !errorlevel!
 )
)
exit /b !errlvl!