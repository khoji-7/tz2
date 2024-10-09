import React, { useState } from 'react'; 
import { CiCircleChevDown, CiCircleChevUp} from "react-icons/ci";




const Faqs = () => {
  const [click, setClick] = useState(null); 

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index); 
  };

  const questions = [
    {
      question: "Какие компании представлены на сайте?",
      answer: "Чтобы быть в курсе новых скидок и акций на сайте, вы можете подписаться на наш телеграм-канал или следить за новостями.Мы регулярно отправляем информацию о новых предложениях и акциях нашим подписчикам, чтобы они всегда могли быть в курсе последних скидок и эксклюзивных предложений.Также можно регулярно посещать сайт и проверять разделы с акциями и скидками"
    },{
      question: "Как я могу быть в курсе новых скидок и акций на сайте?",
      answer: "Чтобы быть в курсе новых скидок и акций на сайте, вы можете подписаться на наш телеграм-канал или следить за новостями.Мы регулярно отправляем информацию о новых предложениях и акциях нашим подписчикам, чтобы они всегда могли быть в курсе последних скидок и эксклюзивных предложений.Также можно регулярно посещать сайт и проверять разделы с акциями и скидками"
    },
    {
      question: "Могу ли я поделиться найденными скидками и акциями с друзьями?",
      answer: "Чтобы быть в курсе новых скидок и акций на сайте, вы можете подписаться на наш телеграм-канал или следить за новостями.Мы регулярно отправляем информацию о новых предложениях и акциях нашим подписчикам, чтобы они всегда могли быть в курсе последних скидок и эксклюзивных предложений.Также можно регулярно посещать сайт и проверять разделы с акциями и скидками"
    },
    // Qo'shimcha savollar qo'shishingiz mumkin
  ];

  return (
    <>
        <section className='max-w-[970px]'>
          <p className='play-bold text-[#023131] text-3xl '>
          Добро пожаловать на сайт
          </p>
          <p className='text-[18px] play-bold text-[#001C1C] '>
          Ваш надёжный помощник в поиске лучших скидок и акций различных компаний!
          </p>
          <p className='play-regular text-[17px] text-[#3C5858]'>
          Мы собрали для вас все самые выгодные предложения, чтобы вы могли сэкономить свои деньги и получить максимум удовольствия от покупок.
          </p>
          <p className='play-regular text-[#607282] text-[17px]'>
          Развернуть текст
          </p>
        </section>
        <section className='max-w-[970px] '>
          <p className='play-bold text-[#023131] text-[44px]'>
          FAQ
          </p>
          
          <div className='box'>
            {questions.map((item, index) => (
              <div key={index}>
                <button className='flex items-center justify-between text-left w-[100%] border-b pb-3 border-[#3C5858] ' onClick={() => toggle(index)}>
                  <h2 className={click === index ? " text-xl": "text-xl text-[#3C5858] hover:text-black ease-in-out duration-300"}>{item.question}</h2>
                  <span className=' hover:text-red-500 ease-in  duration-300 '>
                    {click === index ? <CiCircleChevUp className='text-[30px]'/> : <CiCircleChevDown className='text-[30px]'/>}
                  </span>
                </button>
                {click === index && (
                  <div className='p-3 ml-[10%] mr-[5%]'>
                    <p className='text-xl play-regular '>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          
        </div>
      </section>
      
    </>
  );
}

export default Faqs;
