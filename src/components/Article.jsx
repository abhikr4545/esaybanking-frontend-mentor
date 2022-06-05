import articleData from "../articleData";
import ArticleCard from "./ArticleCard";

const Article = () => {
  return (
    <div className="bg-shifted-white">
      <section className="container py-24 text-center text-dark-blue mx-auto md:text-left">
        <h2 className="text-3xl w-[230px] mx-auto pb-6 md:mx-0">Latest Articles</h2>
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
          {
            articleData.map((item) => {
              return <ArticleCard img={item.img} articleBy={item.articleBy} articleHeading={item.articleHeading} article={item.article} />
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Article