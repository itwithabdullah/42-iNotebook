import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            This is About
            This is About {a.state.name} and he is in class {a.state.class}
        </>
  )
}
