import Button from "../Components/Button.jsx";
import {shoe8} from "../assets/images/index.js";

function SuperQuality() {
    return (
        <section id={'about-us'} className={'flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'}>
            <div className={'flex flex-1 flex-col'}>
                <h2 className={'font-palanquin text-4xl capitalize font-bold lg:max-w-lg'}>
                    We Provide You
                    <span className={'text-coral-red'}> Super Quality</span> Shoes
                </h2>
                {/*set max-with-sm for a tight block*/}
                <p className={'mt-4 lg:max-w-lg info-text'}>Discover
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt dignissimos dolor
                    facere illum iure iusto molestias neque numquam placeat possimus quae, repellendus,
                    reprehenderit sed sequi sunt temporibus veritatis voluptatibus!
                </p>
                <p className={'mt-6 lg:max-w-lg info-text'}>Our Dedication to detail and excellence ensures your satisfaction</p>
                <div className={'mt-11'}>
                    <Button label={"View Details"}/>
                </div>
            </div>
            <div className={'flex flex-1 justify-center items-center'}>
                <img src={shoe8} alt="shoe" width={570} height={522} className={'object-contain'}/>
            </div>
        </section>
    );
}

export default SuperQuality;
