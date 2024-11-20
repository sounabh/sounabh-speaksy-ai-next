
import Banner from '@/components/ui/home/banner'
import Footer from '@/components/ui/home/Footer'
import HowItWorks from '@/components/ui/home/HowItWorks'
import Pricing from '@/components/ui/home/Pricing'
import DotUi from '@/components/ui/home/DotUi'
import Gradient from '@/components/ui/Gradient'





const Home = () => {

  //landing page 

  return (

    //wrapper div



    <main className='relative w-full mx-auto inset-0 h-full bg-[radial-gradient(#e5e7eb_1px),transparent_1px)][background-size:16px_16px] overflow-hidden'>



      {/*gradient effect*/}

      <Gradient></Gradient>



      {/* banner page */}
      <Banner></Banner>





      {/* Dots */}
      <DotUi></DotUi>




      {/* wokring page */}
      <HowItWorks></HowItWorks>




      {/*pricing cards*/}
      <Pricing></Pricing>



      {/* Dots */}
      <DotUi></DotUi>







      <Footer></Footer>






    </main>


  )
}

export default Home
