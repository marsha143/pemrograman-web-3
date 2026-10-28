import { useState } from "react"

function Input() {

    const [nama, setNama]  = useState('')

    const handleChange = (e) => {

        setNama(e.target.value)

    }

    return (
        <div>
            <input type="text" value={nama} onChange={handleChange}/>
            <p>Nama saya adalah {nama}</p>
        </div>
    )

}

export default Input