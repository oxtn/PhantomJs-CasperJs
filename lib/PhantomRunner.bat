@echo off
setlocal enabledelayedexpansion
set errlvl=0
for %%d in (%*) do (
	for /r %%f in (%%d\*) do (
	 set filename=%%~nf
	 if NOT "!filename:~0,1!" == "_" (
	  PhantomJs\phantomjs.exe "%1\_CasperRunner.js" CasperJs\ "%%f"
	  set /a errlvl=!errlvl! + !errorlevel!
	 )
	)
)
exit /b !errlvl!