import './App.css';
import Swipers from './components/Swiper';
import Faq from "./components/Faq";
import DayDiscount from "./components/DayDiscount";
import Navbar from "./components/Navbar";
function App() {
  

  return (
    <div className='p-[1%] '>
    <Navbar/>
      <section className='flex flex-col justify-between md:max-w-md md:flex md:flex-row'>
        <DayDiscount/>
        <section className='p-5'>
          <Swipers/>
          <Faq/>
        </section>
      </section>
    </div>
  )
}

export default App
