import Image from "next/image"

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor}`
        : "bg-coral-red border-coral-red text-white"}`}>
      {label}
      {iconUrl && <Image src={iconUrl} alt="right arrow icon" width={20} height={20} className="rounded-full ml-2" />}
    </button>
  )
}

export default Button