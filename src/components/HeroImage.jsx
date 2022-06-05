import mockup from '../images/image-mockups.png';

const HeroImage = () => {
  return (
    <div className="bg-no-repeat bg-center bg-cover bg-hero-pattern-mobile md:bg-hero-pattern-desktop  mb-10 md:mb-0">
      <img src={mockup} className="-mt-36 md:-mt-0 md:scale-150 z-30" alt="" />
    </div>
  )
}

export default HeroImage