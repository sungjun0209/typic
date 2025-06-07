import SplashLogo from '@assets/images/splash_logo.png';
import SplashImg from '@assets/images/splash_img.png';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
    const navigate = useNavigate();

    function handleStartButtonClick() {
        navigate('/profile');
    }

    return (
        <div className="w-full h-full bg-[#5D79F4]">
            <div className='h-full flex flex-col justify-center items-center gap-[60px]'>
                <img src={SplashLogo} />
                <div className="flex flex-col gap-[24px] items-center">
                    <img src={SplashImg} className="w-[260px] h-[260px] object-contain" />
                    <div className="flex flex-col items-center gap-[60px]">
                        <div className="flex flex-col justify-center items-center gap-[12px]">
                            <h2 className="text-[#FFFFFF] text-[24px]">MBTI로 그리는 나의 세계</h2>
                            <p className="text-[#A8B7FA] text-[14px] text-center">
                                MBTI와 사진으로 그려보는 미래, <br/>
                                4컷만화로 보는 나의 일상, <br/>
                                행동으로 해석한 나의 성향, <br/>
                                그리고 어울리는 소개팅 루트까지 <br/>
                                성격 하나로 펼쳐지는 나만의 이야기.
                            </p>
                        </div>
                        <button onClick={handleStartButtonClick} className="w-[100px] h-[36px] rounded-[12px] outline-none border-none">
                            <span className="text-[#5D79F4] font-bold">시작하기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}