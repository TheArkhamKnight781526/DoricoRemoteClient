for %%f in (*.ly) do (
    lilypond -dbackend=svg %%f
    inkscape -o "%%~nf.svg" -D "%%~nf.svg"
)