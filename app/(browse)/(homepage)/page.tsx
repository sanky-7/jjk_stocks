import { getStocks } from "@/lib/stock-services";
import { Contents } from '../_components/contents'
import { Hero } from '../_components/hero-section'

const Homepage = async () => {
  const stocks = await getStocks();
  return (
    <div className='mt-[50px] w-full flex flex-col justify-center items-center'>
      <Hero />
      <Contents stocks={stocks} />
    </div>
  )
}

export default Homepage