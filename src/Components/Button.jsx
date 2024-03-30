function Button({label, iconUrl, fullWidth, backGroundColor, borderColor, textColor}) {
    return (
        <button className={`flex justify-center items-center px-7 py-4 border font-montserrat leading-none  rounded-full ${backGroundColor ? `${backGroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red '} ${fullWidth && 'w-full'}`}>
            {label}
            {iconUrl && <img src={iconUrl} alt="/" className={'ml-2 rounded-full w-5 h-5'}/>}
        </button>
    );
}

export default Button;
