!macro customInstall
  DetailPrint "Register mobilepractice URI Handler"
  DeleteRegKey HKCU "mobilepractice"
  WriteRegStr HKCU "mobilepractice" "" "URL:mobilepractice"
  WriteRegStr HKCU "mobilepractice" "URL Protocol" ""
  WriteRegStr HKCU "mobilepractice\DefaultIcon" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME}"
  WriteRegStr HKCU "mobilepractice\shell" "" ""
  WriteRegStr HKCU "mobilepractice\shell\Open" "" ""
  WriteRegStr HKCU "mobilepractice\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"
!macroend