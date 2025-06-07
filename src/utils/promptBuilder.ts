import type { UserInfo } from "../types/user";

export function buildPrompt(user: UserInfo): string {
  return `
A Ghibli-style portrait of a person.
The person is a ${user.age}-year-old ${user.gender === "남" ? "male" : "female"} with an MBTI of ${user.mbti}.
Please generate an image based on this description.
  `.trim();
}

// 텍스트 테스트용
// export function buildPrompt(user: UserInfo): string {
//   return `
// Hey, just say anything ${user.age}
//   `.trim();
// }