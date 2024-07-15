import { useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");.lg
  return (
    <div className="w-full h-screen bg-slate-700 flex justify-center items-center">
      <div className="bg-slate-500 p-8 w-[500px] flex justify-center items-center flex-col">
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          className="px-2 py-2 text-xl rounded-md outline-none"
          value={password}
        />
        <div className="flex gap-5">
          <span>UpperCase</span>
          <span>Lowercase</span>
          <span>Number</span>
          <span>Symbols</span>
        </div>
        <div className="text-xl text-white">Length: 3</div>
        <div>Password Type: strong</div>
      </div>
    </div>
  );
};

export default PasswordStrength;
