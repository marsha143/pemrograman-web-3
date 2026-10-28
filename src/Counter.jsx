import { useEffect, useState } from "react"

function Counter() {

    const [counter, setCounter] = useState(0)

    const onClickTambah = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        // setCounter(1);
        const interval = setInterval(() => {
            console.log('Interval ' + new Date())
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    const onClickKurang = () => {
        if (counter <= 0) {
            alert('Minimal 0')
            setCounter(0)
        }
        else
            setCounter(counter - 1)
    }

    return (
        <div>
            Komponen Counter: <button onClick={onClickKurang}>Kurang</button> {counter} <button onClick={onClickTambah}>Tambah</button>
        </div>
    )

    /**
     * Browser -> localhost:5173 -> Komponen Counter: [Kurang] 0 [Tambah] (Mounting) -> useEffect -> render component
     * Klik Tambah -> counter + 1 -- 0 + 1 = 1 (Updating)
     * render: Komponen Counter: [Kurang] 1 [Tambah] (Rendering)
     * Klik Tambah -> counter + 1 -- 1 + 1 = 2 (Updating)
     * render: Komponen Counter: [Kurang] 2 [Tambah] (Rendering)
     * Klik Kurang -> counter - 1 -- 2 - 1 = 1 (Updating)
     * render: Komponen Counter: [Kurang] 1 [Tambah] (Rendering)
     */
}

export default Counter