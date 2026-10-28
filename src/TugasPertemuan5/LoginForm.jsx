
import { useState } from "react";
import "./Login.css";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === "") {
            setErrorMsg("Username tidak boleh kosong");
            return;
        }
        if (password.trim() === "") {
            setErrorMsg("Password tidak boleh kosong");
            return;
        }

        setErrorMsg("");

        setIsLoading(true);
        setTimeout(function() {
            setIsLoading(false);
        alert(`Hallo, ${username}`)
        }, 3000);
    };

    return (
        <div className="login-container">
            <h2>Login Form</h2>

            {errorMsg && (
                <p className="error-message">{errorMsg}</p>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Masukkan username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Masukkan password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />
                </div>
            <br/>
            {isLoading  && <p>Loading...</p>}
            <br/>
            <button type="submit" disabled={isLoading}>Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;
