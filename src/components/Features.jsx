import data from "../imagesData"
import FeatureCard from "./FeatureCard"

const Features = () => {
  return (
    <div className="bg-light-grayish-blue">
      <section className="container py-24 text-center mx-auto md:text-left">
        <h2 className="text-3xl text-dark-blue w-[180px] mx-auto pb-6 md:mx-0">Why choose EasyBank?</h2>
        <p className="max-w-[340px] text-grayish-blue mx-auto md:mx-0 md:max-w-[620px]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>
        <div className="md:grid md:grid-cols-4 md:gap-3">
          {
            data.map((item) => {
              return <FeatureCard img={item.img} serviceName={item.serviceName} serviceDescription={item.serviceDescription} />
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Features