$root = 'C:\Users\ic\Downloads\NALEDI INTERIORS WEBSITE-20260730T095456Z-1-001\NALEDI INTERIORS WEBSITE\'
Get-ChildItem -Recurse -File $root | ForEach-Object {
    $rel = $_.FullName.Substring($root.Length)
    Write-Output ("$rel  |  $($_.Length)")
}
