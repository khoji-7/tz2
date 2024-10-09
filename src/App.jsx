import './App.css';
import Swipers from './components/Swiper';
import Faq from "./components/Faq";
import DayDiscount from "./components/DayDiscount";
import Navbar from "./components/Navbar";
function App() {
  

  return (
    <div className='p-[1%]'>
    <Navbar/>
      <section className='flex flex-row justify-between '>
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
