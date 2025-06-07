import type { UserInfo } from "@app/store/userInfoStore";

export function buildPrompt(user: UserInfo): string {
  return `
A Ghibli-style portrait of a person.
They are a ${user.gender === "남성" ? "male" : "female"} born in ${user.birth}, with the MBTI type ${user.mbti}.
Please generate an image based on this description.
  `.trim();
}

// 텍스트 테스트용
// export function buildPrompt(user: UserInfo): string {
//   return `
// Hey, just say anything ${user.age}
//   `.trim();
// }