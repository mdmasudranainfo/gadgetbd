import Bannar from '../../Components/Bannar/Bannar'
import NewArrivals from '../../Components/NewArrivals/NewArrivals'
import PopularCategory from '../../Components/PopularCategory/PopularCategory'
import TrendingProduct from '../../Components/TrendingProduct/TrendingProduct'

const Home = () => {
  return (
    <div>
      <Bannar />
      <TrendingProduct />
      <PopularCategory />
      <NewArrivals title=" New Arrivals" />
    </div>
  )
}

export default Home
