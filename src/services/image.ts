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
  console.log("프롬프트 : ", prompt);
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