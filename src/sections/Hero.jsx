import Button from "../Components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoes, statistics} from "../assets/Constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import ShoeCard from "../Components/ShoeCard.jsx";
import {useState} from "react";

function Hero() {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return (
        <section id={"home"}
                 className={"w-full flex xl:flex-row flex-col justify-center gap-10 max-container min-h-screen"}
        >
            <div className={"relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"}>
                <p className={'text-xl font-montserrat text-coral-red'}>Our Summer Collection</p>
                <h1 className={'mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'}>
                    {/*white space no-wrap to make sure the text-stays in a single-line*/}
                    <span className={'xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 '}>The New Arrival</span>
                    <br/>
                    <span className={'text-coral-red inline-block mt-3'}>Nike</span> Shoes
                </h1>
                {/*set max-with-sm for a tight block*/}
                <p className={'font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'}>Discover stylish Nike arrivals, quality comfort,
                    and innovation for your active life.
                </p>
                <Button label={"Shop Now"}  iconUrl={arrowRight}/>
                <div className={'flex justify-start items-start flex-wrap w-full mt-20 gap-16'}>
                    {statistics.map((statistic, index) => (
                        <div key={index}>
                            <p className={'text-4xl font-palanquin font-bold'}>{statistic.value}</p>
                            <p className={'leading-7 font-montserrat'}>{statistic.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={'relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'}>
                <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className={'object-contain relative z-10'}/>
                <div className={'flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'}>
                    {shoes.map((shoe, index) => (
                        <div key={index}>
                            <ShoeCard imgUrl={shoe} changeBigShowImage={(shoe) => {
                                setBigShoeImg(shoe)
                            }} bigShoeImage={bigShoeImg}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
