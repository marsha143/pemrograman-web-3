import { useState } from "react";
import Counter from "./Counter";
import LoggedIn from "./LoggedIn";
import UserProfile from "./UserProfile";

function HalamanJsx() {

    const nama = "Budi";
    const isLoggedIn = true;
    const isAdmin = true;

    const [tab, setTab] = useState('counter');

    const karyawan = [
        {
            nama: 'Budi',
            jabatan: 'Manager',
            divisi: 'Sales'
        },
        {
            nama: 'Rudi',
            jabatan: 'Manager',
            divisi: 'Quality'
        },
        {
            nama: 'Joddy',
            jabatan: 'Manager',
            divisi: 'IT'
        },
    ]

    return (
        <>
            <p style={{
                marginTop: '100px'
            }}>Hello, {nama}</p>

            <p>Total: {10 + 5}</p>

            <LoggedIn login={isLoggedIn} admin={isAdmin} />
            {karyawan.map((kr, i) => (
                <UserProfile key={i} nama={kr.nama} jabatan={kr.jabatan} divisi={kr.divisi} />
            ))}

            <hr />
            <button onClick={() => setTab('counter')}>Counter</button> | <button onClick={() => setTab('komponen_lain')}>Komponen Lain</button>
            {tab == 'counter' ? <Counter /> : <p>Komponen Lain</p>}
        </>
    )
}

export default HalamanJsx;