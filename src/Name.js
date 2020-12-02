import React, { useState, useEffect } from 'react'

function Name() {
    const [language, setLanguage] = useState("") // setting initial state

    const changeLanguage = () => {
        let theName = (language === "Ruby" ? "Javascript" : "Ruby")
        setLanguage(theName) // updating state
    }

    useEffect(() => { // first arg is your function - whatever logic you want
        console.log("my method call")
        setLanguage("React")
    }, [language]) // item(s) in branch are the value(s) you're tracking - if the value changes, the effect runs
    // if you leave the [] empty, the effect runs only once

    return (
        <div>
            {language}
            <br />
            <button onClick={changeLanguage}>Change Language</button>
        </div>
    )
}

export default Name