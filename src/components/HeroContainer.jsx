import HeroDescription from "./HeroDescription"
import HeroImage from "./HeroImage"

const HeroContainer = () => {
  return (
    <section className='flex overflow-hidden flex-col items-center justify-center pb-24 md:pb-0 md:container md:flex-row-reverse '>
      <HeroImage />
      <HeroDescription />
    </section>
  )
}

export default HeroContainer