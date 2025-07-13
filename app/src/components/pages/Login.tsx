import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username !== "" && password !== "";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (res.ok) {
      alert("ログイン成功");
    } else {
      alert("ログイン失敗");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">ログイン</h2>
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
        ログイン
      </button>
      <Link to="/signup" className="text-blue-500 hover:underline">サインアップはこちら</Link>
    </form>
  );
}
