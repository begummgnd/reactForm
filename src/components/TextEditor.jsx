import MDEditor from '@uiw/react-md-editor';
import React from 'react'

export default function TextEditor() {
    const [value, setValue] = React.useState("**Hello world!!!**");

    return (
        <>
            <MDEditor
                value={value}
                onChange={setValue}
            />
      

        </>

    )
}