function Button({label, iconUrl}) {
    return (
        <button className={'flex justify-center items-center px-7 py-4 border font-montserrat leading-none bg-coral-red rounded-full text-white border-coral-red'}>
            {label}
            <img src={iconUrl} alt="/" className={'ml-2 rounded-full w-5 h-5'}/>
        </button>
    );
}

export default Button;
