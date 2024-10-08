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
      
      
        <section className='max-w-[970px] '>
          <p className='play-bold text-[#023131] text-[44px]'>
          FAQ
          </p>
          
          <div className='box'>
            {questions.map((item, index) => (
              <div key={index}>
                <button className='realative' onClick={() => toggle(index)}>
                  <h2 className={click === index ? "border-b-2 border-black text-xl": "text-xl text-[#3C5858]"}>{item.question}</h2>
                  <span className='absolute '>
                    {click === index ? <CiCircleChevUp/> : <CiCircleChevDown/>}
                  </span>
                </button>
                {click === index && (
                  <div className='p-3 ml-[10%]'>
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
