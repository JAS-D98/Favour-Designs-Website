const Button = ({label, iconURL, backgroundColor, textColor,borderColor,fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-4 py-3 sm:px-7 sm:py-3 text-xl border font-montserrat sm:text-lg leading-none hover:opacity-80 shadow-md
    ${
      backgroundColor 
      ? `${backgroundColor} ${textColor} ${borderColor}`:
   "bg-gradient-to-t from-black to-red-600 text-white border-firebrick"} rounded-full ${fullwidth && 'w-full'}"}`}>
         {label}
       {iconURL && <img src={iconURL} alt='arrow right icon' className='ml-2 rounded-full w-5 h-5'/>} 
    </button>
  )
}

export default Button