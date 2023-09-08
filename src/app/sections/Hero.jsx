import { statistics } from "@/constants"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text=[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover Stylish Nike Arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconUrl={'/assets/icons/arrow-right.svg'}/>
        <div className="flex justify-start items-start flex-wrap mt-20 gap-16 w-full">
          {statistics.map((stat)=>(
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.label}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero