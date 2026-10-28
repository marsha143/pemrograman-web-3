function UserProfile({ nama, jabatan, divisi }) {
    return (
        <>
            <hr />
            <p>Nama Lengkap: {nama}</p>
            <p>Jabatan: {jabatan}</p>
            <p>divisi: {divisi}</p>
        </>
    )
}

export default UserProfile