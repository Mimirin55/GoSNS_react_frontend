import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username !== "" && password !== "";

  const handleSignup = async () => {
    const res = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  
    if (res.ok) {
      alert("サインアップ成功");
    } else {
      alert("サインアップ失敗");
    }
  };
  return (
    <form onSubmit={handleSignup} className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">サインアップ</h2>
      <input
        className="w-[300px] p-2 border border-gray-300 rounded-md mb-4"
        type="text"
        placeholder="ユーザー名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className="w-[300px] p-2 border border-gray-300 rounded-md mb-4"
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-[300px] p-2 rounded-md mb-4 font-semibold ${
          isFormValid
            ? "text-blue-600 font-bold hover:bg-blue-600"
            : "text-gray-600"
        }`}
      >
        サインアップ
      </button>
      <Link to="/login">ログインはこちら</Link>
    </form>
  );
}
