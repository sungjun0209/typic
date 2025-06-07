import { useEffect, useRef, useState } from "react";
import { runInputForm } from "@app/components/InputForm";

export default function ChatPage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const hasRun = useRef(false); // ✅ 중복 실행 방지용 ref

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const generate = async () => {
      setLoading(true);
      const result = await runInputForm();
      setImageUrl(result);
      setLoading(false);
    };
    generate();
  }, []);

  return (
    <div className="p-[16px] min-h-screen flex justify-center items-center bg-[#F8F7FC]">
      {loading ? (
        <div className="text-[#5D79F4] text-[18px] font-semibold animate-pulse">
          이미지 생성 중입니다...
        </div>
      ) : imageUrl ? (
        <img src={imageUrl} alt="생성된 이미지" className="rounded shadow max-w-full" />
      ) : (
        <div className="text-[#FF4D4F] text-[16px] font-medium">이미지 생성 실패</div>
      )}
    </div>
  );
}