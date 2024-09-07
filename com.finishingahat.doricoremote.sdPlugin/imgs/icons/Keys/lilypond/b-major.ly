\version "2.24.1"

\new Staff \with {
    \omit TimeSignature
    \omit BarLine
}
{
    \clef treble
    
    \key b \major
    s1 * 3
}

\header {
    tagline = ##f
}
