// import { useState } from "react";
// import { buildPrompt } from "../utils/promptBuilder";
// import { fetchChatResponse } from "../services/openai";
// import type { UserInfo } from "../types/user";
import { useState } from "react";
import { useUser } from "../contexts/UserContext";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("남성");
  const [mbti, setMbti] = useState("");
  const { setUser } = useUser(); // Context에서 전역 저장 함수만 가져옴

  const handleSubmit = () => {
    const userData = {
      name,
      age: birth.split("-")[0],
      gender,
      mbti,
      image: null,
    };
    setUser(userData); // 전역 상태로 저장
  };

// export default function ProfilePage() {
//   const [name, setName] = useState("");
//   const [birth, setBirth] = useState("");
//   const [gender, setGender] = useState("남성");
//   const [mbti, setMbti] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState("");

//   const handleSubmit = async () => {
//     const user: UserInfo = {
//       name,
//       age: birth.split("-")[0],
//       gender,
//       mbti,
//       image: null,
//     };

//     const prompt = buildPrompt(user);

//     setLoading(true);
//     try {
//       const gptText = await fetchChatResponse(prompt);
//       setResponse(gptText);
//     } catch (error) {
//       console.error("에러:", error);
//       setResponse("에러가 발생했습니다.");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <div className="w-full min-h-screen px-[24px] py-[90px] bg-white">
      <div className="flex flex-col gap-[24px] max-w-[420px] mx-auto">
        <div className="flex flex-col gap-[4px]">
          <h2 className="text-[24px] font-extrabold text-[#2D2D2D]">프로필 설정</h2>
          <p className="text-[#8B8B8B] text-[14px]">프로필을 설정해주세요</p>
        </div>
        {/* 이름 */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-medium text-[#2D2D2D]">이름</label>
          <input
            className="w-full border border-[#DADADA] rounded-[12px] px-[16px] py-[12px] text-[14px] placeholder-[#C2C2C2] focus:outline-none focus:ring-2 focus:ring-[#5D79F4]"
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* 생년월일 */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-medium text-[#2D2D2D]">생년월일</label>
          <input
            className="w-full border border-[#DADADA] rounded-[12px] px-[16px] py-[12px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#5D79F4]"
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>

        {/* 성별 선택 */}
        <div className="flex flex-col gap-[8px]">
  <label className="text-[14px] font-medium text-[#2D2D2D]">성별 선택</label>
  <div className="flex gap-[8px]">
    <button
      className={`w-full py-[12px] rounded-[12px] border text-[14px] font-bold ${
        gender === "남성"
          ? "bg-[#000080] text-[#FFFFFF] border-transparent"
          : "bg-white text-[#2D2D2D] border-[#DADADA]"
      }`}
      onClick={() => setGender("남성")}
    >
      남성
    </button>
    <button
      className={`w-full py-[12px] rounded-[12px] border text-[14px] font-bold ${
        gender === "여성"
          ? "bg-[#000080] text-[#FFFFFF] border-transparent"
          : "bg-white text-[#2D2D2D] border-[#DADADA]"
      }`}
      onClick={() => setGender("여성")}
    >
      여성
    </button>
  </div>
</div>

        {/* MBTI 선택 */}
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-medium text-[#2D2D2D]">MBTI 선택</label>
          <select
            className="w-full border border-[#DADADA] rounded-[12px] px-[16px] py-[12px] text-[14px] text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#5D79F4]"
            value={mbti}
            onChange={(e) => setMbti(e.target.value)}
          >
            <option value="">MBTI를 선택해주세요</option>
            {[
              "INTJ", "INTP", "ENTJ", "ENTP",
              "INFJ", "INFP", "ENFJ", "ENFP",
              "ISTJ", "ISFJ", "ESTJ", "ESFJ",
              "ISTP", "ISFP", "ESTP", "ESFP",
            ].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="py-[12px]">
            {/* 완료 버튼 */}
            <button
            className="w-full border border-[#DADADA] py-[12px] bg-[#000080] text-[#FFFFFF] rounded-[12px] text-[16px] font-bold hover:bg-[#4B66DB] transition"
            onClick={handleSubmit}>완료
            </button>
        </div>
      </div>
    </div>
  );
}