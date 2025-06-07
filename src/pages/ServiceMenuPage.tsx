const ServiceMenuPage = () => {
    const coverImg = [1, 2, 3, 4]

    return (
        <div className="w-full bg-black">
            {
                coverImg.map((id, index_st) => (
                    <div key={index_st} className="w-full h-[300px] relative">
                        <img key={index_st} src={`/service${id + 1}.png`} className="" />
                        <div>
                            <h1></h1>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ServiceMenuPage;