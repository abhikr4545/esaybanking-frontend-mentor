const FeatureCard = ({ img, serviceName, serviceDescription }) => {
  return (
    <article className="pt-16 space-y-6">
      <img src={img} className="mx-auto md:mx-0" alt="" />
      <h3 className="text-dark-blue text-2xl">{ serviceName }</h3>
      <p className="max-w-[324px] text-grayish-blue mx-auto">{serviceDescription}</p>
    </article>
  )
}

export default FeatureCard