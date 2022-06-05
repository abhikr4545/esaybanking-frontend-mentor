
const ArticleCard = ({ img, articleBy, articleHeading, article }) => {
  return (
    <article className="overflow-hidden rounded-lg bg-white mx-auto max-w-[340px] h-[440px] cursor-pointer md:h-[400px]">
      <div>
        <img src={img} className="md:h-[200px]" alt="" />
      </div>
      <div className="text-left px-4 py-4 space-y-2">
        <h6 className="text-xs text-grayish-blue">{ articleBy }</h6>
        <h3 className="text-dark-blue text-[17px]">{ articleHeading }</h3>
        <p className="text-sm text-grayish-blue">
          {article}
        </p>
      </div>
    </article>
  )
}

export default ArticleCard