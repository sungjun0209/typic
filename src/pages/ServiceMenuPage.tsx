import { serviceMenuData } from "@app/constants/serviceMenuData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceMenuPage = () => {
    const navigate = useNavigate();
    const [present, setPresent] = useState<number>(0);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = e.currentTarget.id;
        setPresent(Number(id));
    }

    function handleSelectButtonClick() {
        navigate('/chat');
    }

    return (
        <div className="w-full h-full">
            {
                serviceMenuData.map((item, index_st) => (
                    <div key={index_st} className={`w-full h-full flex flex-col justify-between ${present === index_st ? 'flex' : "hidden"}`}
                        style={{ backgroundColor: item.bgColor }}
                    >
                        <div className={`h-2/3 flex items-center justify-center  bg-[${item.bgColor}]`}>
                            <img key={index_st} src={item.src} className="w-full" />
                        </div>
                        <div className="w-full h-3/7 flex flex-col items-center justify-between bg-[#ffffff] rounded-t-[10px] pt-[32px] p-[20px] shadow-[10px]">
                            <div className="flex flex-col items-center gap-[16px]">
                                <h2>{item.title}</h2>
                                <p className="leading-[22px] text-[15px] text-[#666666] whitespace-pre-line">{item.description}</p>
                            </div>
                            <div className="w-full flex flex-col items-center gap-[12px]">
                                <div className="w-full flex itmes-center justify-center gap-[5px]">
                                    {
                                        serviceMenuData.map((_, index_nd) => (
                                            <button key={index_nd} id={index_nd.toString()} onClick={handleClick} className={`w-[15px] h-[15px] rounded-[100%] border-none bg-[${present === index_nd ? '#3c388f' : ''}]`}></button>
                                        ))
                                    }
                                </div>

                                <button onClick={handleSelectButtonClick} className="w-full h-[50px] bg-[#3c388f] border-none rounded-[10px] text-[#ffffff] text-[15px] font-bold">
                                    선택
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ServiceMenuPage