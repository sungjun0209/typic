import { useState } from "react";
import { buildPrompt } from "../utils/promptBuilder";
import { fetchChatResponse } from "../services/openai";
import type { UserInfo } from "../types/user";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("남성");
  const [mbti, setMbti] = useState("");

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const user: UserInfo = {
      name,
      age,
      gender,
      mbti,
      image: null,
    };

    const prompt = buildPrompt(user);

    setLoading(true);
    try {
      const gptText = await fetchChatResponse(prompt);
      setResponse(gptText);
    } catch (error) {
      console.error("에러:", error);
      setResponse("에러가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white min-h-screen space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">프로필 설정</h2>
        <p className="text-gray-500">프로필을 설정해주세요</p>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">이름</label>
        <input
          className="w-full border border-gray-300 px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">생년월일</label>
        <input
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="date"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">성별 선택</label>
        <div className="flex space-x-2">
          <button
            className={`w-1/2 px-4 py-3 rounded-lg border font-semibold ${gender === "남성" ? "bg-indigo-600 text-white" : "bg-white border-gray-300"}`}
            onClick={() => setGender("남성")}
          >
            남성
          </button>
          <button
            className={`w-1/2 px-4 py-3 rounded-lg border font-semibold ${gender === "여성" ? "bg-indigo-600 text-white" : "bg-white border-gray-300"}`}
            onClick={() => setGender("여성")}
          >
            여성
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">MBTI 선택</label>
        <select
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={mbti}
          onChange={(e) => setMbti(e.target.value)}
        >
          <option value="">MBTI를 선택해주세요</option>
          {["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"].map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <button
        className="w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "처리 중..." : "완료"}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <p className="whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
