// import { useState } from "react";
// import { buildPrompt } from "../utils/promptBuilder";
// import { fetchChatResponse } from "../services/openai";
// import { fetchImageFromOpenAI } from "../services/image";
// import type { UserInfo } from "../types/user";

// const InputForm = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("남");
//   const [mbti, setMbti] = useState("");
//   const [image, setImage] = useState<File | null>(null);

//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   const handleSubmit = async () => {
//     const user: UserInfo = { name, age, gender, mbti, image };
//     const prompt = buildPrompt(user);

//     setLoading(true);
//     try {
//       const gptText = await fetchChatResponse(prompt);
//       const imageUrl = await fetchImageFromOpenAI(prompt);

//       setResponse(`${gptText}\n\n👇 생성된 이미지\n${imageUrl}`);
//       setImageUrl(imageUrl);
//     } catch (error) {
//       console.error("에러:", error);
//       setResponse("에러가 발생했습니다.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
//       <h2 className="text-xl font-semibold">당신의 정보를 입력해주세요</h2>

//       <input
//         className="w-full border px-3 py-2 rounded"
//         type="text"
//         placeholder="이름"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         className="w-full border px-3 py-2 rounded"
//         type="number"
//         placeholder="나이"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />

//       <select
//         className="w-full border px-3 py-2 rounded"
//         value={gender}
//         onChange={(e) => setGender(e.target.value)}
//       >
//         <option value="남">남</option>
//         <option value="여">여</option>
//       </select>

//       <input
//         className="w-full border px-3 py-2 rounded"
//         type="text"
//         placeholder="MBTI (예: INFP)"
//         value={mbti}
//         onChange={(e) => setMbti(e.target.value.toUpperCase())}
//       />

//       <input
//         className="w-full"
//         type="file"
//         accept="image/*"
//         onChange={(e) => setImage(e.target.files?.[0] || null)}
//       />

//       <button
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//         onClick={handleSubmit}
//         disabled={loading}
//       >
//         {loading ? "처리 중..." : "제출"}
//       </button>

//       {response && (
//         <div className="mt-4 p-4 bg-gray-100 rounded">
//           <h3 className="font-semibold mb-2">AI 응답:</h3>
//           <p className="mb-4 whitespace-pre-line">{response}</p>
//           {imageUrl && <img src={imageUrl} alt="생성 이미지" className="rounded shadow" />}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InputForm;

import { useState } from "react";
import { buildPrompt } from "../utils/promptBuilder";
import { fetchChatResponse } from "../services/openai";
import { fetchImageFromOpenAI } from "../services/image";
import type { UserInfo } from "../types/user";

const InputForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("남");
  const [mbti, setMbti] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async () => {
    const user: UserInfo = { name, age, gender, mbti, image };
    const prompt = buildPrompt(user);

    setLoading(true);
    try {
      const gptText = await fetchChatResponse(prompt);
      const base64Url = await fetchImageFromOpenAI(prompt); // 이미 data:image/png;base64, 포함됨

      setResponse(`${gptText}\n\n👇 생성된 이미지`);
      setImageUrl(base64Url); // 그대로 저장
    } catch (error) {
      console.error("에러:", error);
      setResponse("에러가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">당신의 정보를 입력해주세요</h2>

      <input
        className="w-full border px-3 py-2 rounded"
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border px-3 py-2 rounded"
        type="number"
        placeholder="나이"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <select
        className="w-full border px-3 py-2 rounded"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="남">남</option>
        <option value="여">여</option>
      </select>

      <input
        className="w-full border px-3 py-2 rounded"
        type="text"
        placeholder="MBTI (예: INFP)"
        value={mbti}
        onChange={(e) => setMbti(e.target.value.toUpperCase())}
      />

      <input
        className="w-full"
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "처리 중..." : "제출"}
      </button>

      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">AI 응답:</h3>
          <p className="mb-4 whitespace-pre-line">{response}</p>
          {imageUrl && <img src={imageUrl} alt="생성 이미지" className="rounded shadow" />}
        </div>
      )}
    </div>
  );
};

export default InputForm;