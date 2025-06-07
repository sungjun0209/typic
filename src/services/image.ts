// export async function fetchImageFromOpenAI(prompt: string): Promise<string> {
//   const response = await fetch("https://api.openai.com/v1/images/generations", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "dall-e-3",
//       prompt: prompt,
//       n: 1,
//       size: "1024x1024",
//     }),
//   });

//   const data = await response.json();
//   return data.data;
// }

//원본 코드
// export async function fetchImageFromOpenAI(prompt: string): Promise<string> {
//   const response = await fetch("https://api.openai.com/v1/images/generations", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "gpt-image-1", // ✅ 여기를 정확히!
//       prompt,
//       n: 1,
//       size: "1024x1024",
//     }),
//   });

//   const text = await response.text();
//   console.log(import.meta.env.VITE_OPENAI_API_KEY);

//   console.log("📦 원시 이미지 응답:", text);

//   try {
//     const data = JSON.parse(text);
//     const url = data?.data?.[0]?.url;

//     if (!url) throw new Error("URL이 없습니다.");
//     return url;
//   } catch (err) {
//     console.error("❌ JSON 파싱 또는 URL 추출 실패:", err);
//     throw err;
//   }
// }

export async function fetchImageFromOpenAI(prompt: string): Promise<string> {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      // model: "dall-e-3",
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: "1024x1024",
      // response_format: "b64_json",
    }),
  });

  const text = await response.text();
  console.log("📦 원시 이미지 응답:", text);

  try {
    const data = JSON.parse(text);
    const base64 = data?.data?.[0]?.b64_json;

    if (!base64) throw new Error("base64 이미지 없음");

    return `data:image/png;base64,${base64}`; // ✅ 여기서 완성된 URL 반환
  } catch (err) {
    console.error("❌ JSON 파싱 또는 base64 추출 실패:", err);
    throw err;
  }
}

// 텍스트 테스트용
// export async function fetchImageFromOpenAI(prompt: string): Promise<string> {
//   try {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: `Hey, just say anything: ${prompt}` }],
//       }),
//     });

//     const data = await response.json();
//     const text = data?.choices?.[0]?.message?.content;

//     if (!text) throw new Error("응답 없음");
//     return text;
//   } catch (err) {
//     console.error("❌ 테스트 응답 실패:", err);
//     return "에러 발생";
//   }
// }