import ProfileImg from '@assets/images/profile.png';
import BannerImg from '@assets/images/mbti_banner.png';
import AddIcon from '@assets/images/icons/add_icon.png';
import { useNavigate } from 'react-router-dom';

export default function ListPage() {
    const navigate = useNavigate();

    function handleStartButtonClick() {
        window.open('https://www.16personalitylab.com/', '_blank');
    }

    function handleNewChatButtonClick() {
        navigate('/service');
    }

    function handleProfileClick() {
        navigate('/profile');
    }

    return (
        <div className="flex flex-col h-full bg-[#F8F7FC] pt-[60px] px-[24px]">
            <div className="grid grid-cols-[1fr_auto]">
                <div>
                    <p>
                        <span className="text-[#444851] text-[14px] font-[700]">User123님</span>
                        <span className="text-[#878A93] text-[14px] font-[600]">, 환영합니다</span>
                    </p>
                    <h2 className="text-[#020F17] text-[24px]">Your storage</h2>
                </div>
                <div onClick={handleProfileClick} className="w-[46px] h-[46px] bg-[#CEDAF2] p-[2px] rounded-[8px] overflow-hidden cursor-pointer">
                    <img className="w-full h-full object-cover" src={ProfileImg} />
                </div>
            </div>
            <div className="h-[32px]"></div>
            <div className="relative">
                <div className="relative w-full h-[160px] flex justify-between items-center bg-linear-65 from-[#516DF4] to-[#7489F6] rounded-[12px] px-[16px] py-[24px] z-10">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-[#FFF] text-[20px]">나의 MBTI는?</h2>
                            <span className="text-[#D6DDFF] text-[12px]">3분 만에 내 성격 알아보기!</span>
                        </div>
                        <button onClick={handleStartButtonClick} className="w-[100px] h-[36px] rounded-[12px] outline-none border-none">
                            <span className="text-[#5D79F4] font-[700]">시작하기</span>
                        </button>
                    </div>
                    <div className="w-[140px] pr-[8px]">
                        <img src={BannerImg} className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="absolute w-[calc(100%-40px)] bg-[#8EA0F6] h-[160px] top-[10px] left-[20px] rounded-[12px] z-5 opacity-[0.8]"></div>
                <div className="absolute w-[calc(100%-80px)] bg-[#8EA0F6] h-[160px] top-[20px] left-[40px] rounded-[12px] z-0 opacity-[0.6]"></div>
            </div>
            <div className="h-[60px]"></div>
            <div className="w-full flex justify-end">
                <div onClick={handleNewChatButtonClick} className="w-[100px] h-[40px] flex justify-center items-center bg-[#5470F4] rounded-[4px] gap-[4px] cursor-pointer">
                    <img className="w-[24px] h-[24px] object-contain" src={AddIcon} />
                    <span className="text-[#FFF] font-[700]">새 채팅</span>
                </div>
            </div>
            <div className="h-[20px]"></div>
        </div>
    )
}