import React, { useState } from "react";
import MapboxGLMap from "./MapboxGLMap"

const Theme = () => {
    const [theme, setTheme] = useState("streets-v11")
    const [place, setPlace] = useState([10.408773,63.422091])

    const light = () => {
        setTheme("light-v10")
        setPlace([10.74609581269301, 59.912699528986536])
    }

    const normal = () => {
        setTheme("streets-v11")
        setPlace([10.408773,63.422091])
    }

    const dark = () => {
        setTheme("dark-v10")
        setPlace([5.329052425789902, 60.39830030742425])
    }

    const outdoors = () => {
        setTheme("outdoors-v11")
        setPlace([18.958495015329742, 69.65570329855164])
    }

    const satellite = () => {
        setTheme("satellite-v9")
        setPlace([5.717966693598116, 58.96530091816934])
    }
    return (
        <div>
            <div>
                <button onClick={normal}>Trondheim</button>
                <button onClick={light}>Oslo</button>
                <button onClick={dark}>Bergen</button>
                <button onClick={outdoors}>Tromsø</button>
                <button onClick={satellite}>Stavanger</button>
            </div>
            <MapboxGLMap theme={theme} place={place}/>
        </div>
        
    )

}

export default Theme