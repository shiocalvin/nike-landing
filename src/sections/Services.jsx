import {services} from "../assets/Constants/index.js";
import ServiceCard from "../Components/ServiceCard.jsx";

function Services() {
    return (
        <section className={'max-container flex justify-center flex-wrap gap-9'}>
            {services.map((service) => (
                <ServiceCard key={service?.label} {...service}/>
            ))}
        </section>
    );
}

export default Services;
