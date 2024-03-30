import {offer} from "../assets/images/index.js";
import Button from "../Components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";

function SpecialOffers() {
    return (
        <section className={'flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'}>
            <div className={'flex-1'}>
                <img src={offer} width={773} height={687} className={'object-contain w-full'} alt="/"/>
            </div>
            <div className={'flex flex-1 flex-col'}>
                <h2 className={'font-palanquin text-4xl capitalize font-bold lg:max-w-lg'}>
                    <span className={'text-coral-red'}> Special </span> Offer
                </h2>
                {/*set max-with-sm for a tight block*/}
                <p className={'mt-4 lg:max-w-lg info-text'}>Discover
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt dignissimos dolor
                    facere illum iure iusto molestias neque numquam placeat possimus quae, repellendus,
                    reprehenderit sed sequi sunt temporibus veritatis voluptatibus!
                </p>
                {/*set max-with-sm for a tight block*/}
                <p className={'mt-4 lg:max-w-lg info-text'}>Discover
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt dignissimos dolor
                    facere illum iure iusto molestias neque numquam placeat possimus quae, repellendus,
                    reprehenderit sed sequi sunt temporibus veritatis voluptatibus!
                </p>
                <div className={'mt-11 flex flex-wrap gap-4'}>
                    <Button label={"Shop Now"} iconUrl={arrowRight}/>
                    <Button label={"Learn Now"} backGroundColor={'bg-white'} borderColor={'border-slate-gray'} textColor={'text-slate-gray'}/>
                </div>
            </div>
        </section>
    );
}

export default SpecialOffers;
