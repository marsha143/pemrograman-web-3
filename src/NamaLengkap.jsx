import { useState } from "react"

function NamaLengkap() {

    const [namaDepan, setNamaDepan] = useState('')
    const [namaBelakang, setNamaBelakang] = useState('')
    const [alamat, setAlamat] = useState('')
    const [isLoading, setIsLoading] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true);
        setTimeout(function() {
            setIsLoading(false);
        alert(`Hallo, ${namaDepan} ${namaBelakang} tinggal di ${alamat}`)
        }, 3000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Masukan nama depan"
                value={namaDepan}
                onChange={(e) => setNamaDepan(e.target.value)}
            />
            <input
                type="text"
                placeholder="Masukan nama belakang"
                value={namaBelakang}
                onChange={(e) => setNamaBelakang(e.target.value)}
            />
            <br/>
            <textarea value={alamat} onChange={(e) => setAlamat (e.target.value)}></textarea>
            {isLoading  && <p>Loading...</p>}
            <br/>
            <button type="submit" disabled={isLoading}>Submit</button>
            
        </form>
    )

}

export default NamaLengkap