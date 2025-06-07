import { buildPrompt } from "../utils/promptBuilder";
import { fetchImageFromOpenAI } from "../services/image";
import { useUserStore, type UserInfo } from '@app/store/userInfoStore';

export const runInputForm = async (): Promise<string | null> => {
  const { user } = useUserStore.getState(); // Zustand에서 상태 접근
  const { name, birth, gender, mbti, image } = user;

  const users: UserInfo = { name, birth, gender, mbti, image };

  // ✅ 콘솔에 속성별 출력
  console.log("=== 사용자 정보 ===");
  console.log("이름:", users.name);
  console.log("생년월일:", users.birth);
  console.log("성별:", users.gender);
  console.log("MBTI:", users.mbti);
  console.log("이미지:", users.image);

  const prompt = buildPrompt(users);

  try {
    const base64Url = await fetchImageFromOpenAI(prompt);
    return base64Url;
  } catch (error) {
    console.error("에러:", error);
    return null;
  }
};