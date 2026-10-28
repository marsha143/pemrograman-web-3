function LoggedIn({ login, admin }) {
    // console.log(props)
    // {
    //    isLoggedIn: true,
    //    isAdmin: true
    // }
    return (
        <>
            {login ? (
                admin ? <p>Kamu adalah admin</p> : <p>Kamu adalah user</p>
            ) : <p>User Belum Login</p>}
        </>
    )
}

export default LoggedIn