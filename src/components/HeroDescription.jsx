import InviteButton from "./InviteButton"

const HeroDescription = () => {
  return (
    <div className="text-center container mx-auto md:text-left">
      <h1 className="text-4xl pb-4 w-[320px] mx-auto text-dark-blue md:mx-0">Next generation digital banking</h1>
      <p className="text-grayish-blue pb-8 leading-5 w-[280px] mx-auto text-xs md:mx-0 md:text-base md:w-[440px]">Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.
      </p>
      <InviteButton />
    </div>
  )
}

export default HeroDescription