import React, {useEffect, useRef, useState} from 'react';
import * as Frames from "./components/Frames/frames";
import BackgroundBox from "./components/background-box";
import Meta from "./components/Meta";
import ContactFormPay from "./components/FormPay/ContactFormPay";
import ModalContext from "./components/FormPay/ModalContext";
import LanguageContext from "./components/LanguageContext";
import Loader from './components/Loader';
import imgBg from './assets/bg.webp'

function App()
{
    const [isLoading, setIsLoading] = useState(true);
    const [startFadeOut, setStartFadeOut] = useState(false);
    const [language, setLanguage] = useState('ru');
    const [showModal, setShowModal] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [currentFrameIndex=0, setCurrentFrameIndex] = useState(0);
    const [bgtypebg, setBgtypebg] = useState('bg-img-1');
    const isSwiping = useRef(false);


    useEffect(() => {
        let shouldswitch = true;
        const frames = document.querySelectorAll('.content');
        setCurrentFrame(frames[currentFrameIndex]);

        function handleTouchStart(e) {
            // Сохранение начальной точки касания
            this.touchStartY = e.touches[0].clientY;
            isSwiping.current = false;
        }



        function handleTouchMove(e) {
            if (isSwiping.current) {
                return;
            }
            // Вычисление направления свайпа
            const touchEndY = e.changedTouches[0].clientY;
            const yDiff = this.touchStartY - touchEndY;
            if (yDiff > 25 || yDiff < -25){
                handleScroll(yDiff > 0 ? 'up' : 'down');
                isSwiping.current = true ;
            }
        }

        function scrollwheel(e){
            if (document.querySelector('.modal'))
                return;
                
            const direction = e.deltaY > 0 ? 'up' : 'down';
            handleScroll(direction);
        }

        async function switchFrames(nextFrame, thisframe, direction) {
            const currentTranslate = direction === 'up' ? '-100vh' : '100vh';
            const nextInitialTranslate = direction === 'up' ? '100vh' : '-100vh';

            nextFrame.style.transform = `translateY(${nextInitialTranslate})`;
            nextFrame.style.opacity = '1';
            nextFrame.style.pointerEvents = 'auto';
            thisframe.style.opacity = '0';
            thisframe.style.pointerEvents = 'none';

            await new Promise(resolve => requestAnimationFrame(resolve));

            nextFrame.style.transform = 'translateY(0vh)';
            thisframe.style.transform = `translateY(${currentTranslate})`;

            await new Promise(resolve => {
                nextFrame.addEventListener('transitionend', resolve, {once: true});
            });
        }

        function switchFrame(direction) 
        {
            if (shouldswitch) {

                // Определение следующего кадра в зависимости от направления прокрутки
                let nextFrameIndex;

                if (direction === 'up') 
                {
                    // Если это последний элемент, прекратить прокрутку
                    if (currentFrameIndex === frames.length - 1)
                        return;
                    
                    nextFrameIndex = currentFrameIndex + 1;
                } 
                else 
                {
                    // Если это первый элемент, прекратить прокрутку
                    if (currentFrameIndex === 0)
                        return; 
                        
                    nextFrameIndex = currentFrameIndex - 1;
                }

                const nextFrame = frames[nextFrameIndex];

                if (nextFrame && !animating) 
                {
                    setAnimating(true);
                    setCurrentFrameIndex(nextFrameIndex);

                    switchbg(nextFrameIndex, direction);


                    // Обновление индекса здесь
                    switchFrames(nextFrame, currentFrame, direction).then(() => {
                        setTimeout(() => {
                            setAnimating(false);
                        }, 300);
                        setCurrentFrame(nextFrame);
                    });
                }
            }
        }

        function handleScroll(direction) 
        {
            // Определение направления прокрутки

            const scroll = currentFrame.querySelector('.scrolldiv');
            const block = currentFrame.querySelector('.contentblock');
            const container = currentFrame.parentElement.parentElement;
            if (currentFrame.id === "content13" && direction==="down" && !shouldswitch ){
                document.getElementById('footer').style.opacity = '0';
                document.getElementById('footer').style.transform = `translateY(100vh)`;
                setTimeout(() => {
                    shouldswitch = true;
                }, 300);
            }



            if ((scroll.scrollHeight >= container.offsetHeight && block.offsetHeight > 500) && (container.offsetHeight !== 0)) 
            {
                if (animating)
                    return;

                if (window.innerWidth < 320 || window.innerWidth > 960) 
                {
                    if (direction === 'up') 
                    {
                        let scrollAmount = 0;
                        const slideTimer = setInterval(function(){
                            scroll.scrollTop +=  5;
                            scrollAmount += 10;
                            if(scrollAmount >= 100)
                                window.clearInterval(slideTimer);                                
                        }, 10);
                    } else {
                        let scrollAmount = 0;
                        const slideTimer = setInterval(function(){
                            scroll.scrollTop -= 5;
                            scrollAmount += 10;
                            if(scrollAmount >= 100)
                                window.clearInterval(slideTimer);
                        }, 10);
                    }
                }

                if ((direction === 'up' && (scroll.scrollTop+20 >= block.offsetHeight - container.offsetHeight))
                    ||
                    (direction === 'down' && scroll.scrollTop === 0))
                {
                    if (!shouldswitch)
                        setTimeout(() => {
                            shouldswitch = true;
                        }, 300);
                    
                    switchFrame(direction);

                }

                if (shouldswitch)
                    shouldswitch = false;
            } 
            else 
            {
                if (container.offsetWidth<block.offsetWidth) 
                {
                    if (animating)
                        return;

                    if ((direction === 'up' && (scroll.scrollLeft >= block.offsetWidth - container.offsetWidth))
                        ||
                        (direction === 'down' && scroll.scrollLeft === 0))
                    {
                        if (!shouldswitch)
                            setTimeout(() => {
                                shouldswitch = true;
                            }, 300);
                        
                        switchFrame(direction);
                    }

                    if (shouldswitch) 
                        shouldswitch = false;
                }

                if (currentFrame.id === "content13" && direction==="up" && !animating) {
                    shouldswitch=false
                    document.getElementById('footer').style.opacity = '1';
                    document.getElementById('footer').style.transform = `translateY(0)`;
                }
                switchFrame(direction);
            }
        }

        async function switchbg (index,direction) {
            const isbg1 = index < 3 || index === 11;
            const isbg2 = index >= 3 && index < 8;
            const isPhone1 = index >= 1;
            const isPhone2 = index > 8 && index!== 11  ;
            const isFullWidth = index === 8;
            const isbg3 = index === 9 ;
            const isbg4 = index === 10;
            const isbg5 =  index === 11;
            const lastframe = index === 12;


            if (isbg1)
                setBgtypebg ('bg-img-1')

            if (isPhone1) {
                if(index === 1 && direction === "up")
                    await switchFrames(document.getElementById('frame2'), document.getElementById('frame1'), direction);
            }
            else
                await switchFrames(document.getElementById('frame1'), document.getElementById('frame2'), direction);

            if (isbg2)
                setBgtypebg ('bg-img-2')

            if (isFullWidth)
            {
                setBgtypebg ('')
                document.getElementById('box1').classList.add('fullwidthbg');
                if (direction === "up")
                    await switchFrames(document.getElementById('frame3'), document.getElementById('frame2'), direction);
                else
                    await switchFrames(document.getElementById('frame3'), document.getElementById('frame4'), direction);
            }
            else
            {
                if(!lastframe) document.getElementById('box1').classList.remove('fullwidthbg');
                if (direction === 'down' && index === 7) {
                    await switchFrames(document.getElementById('frame2'), document.getElementById('frame3'), direction);
                }


                if (isPhone2)
                    await switchFrames(document.getElementById('frame4'), document.getElementById('frame3'), direction);
            }

            if (isbg3)
                setBgtypebg ('bg-img-3')

            if (isbg4)
                setBgtypebg ('bg-img-4')

            if (isbg5)
                setBgtypebg ('bg-img-5')


            if (lastframe)
            {
                document.getElementById('box1').classList.add('fullwidthbg');
                switchFrames(document.getElementById('frame4'), document.getElementById('frame5'), direction);

                if (direction === "up"){
                    await switchFrames(document.getElementById('frame5'), document.getElementById('frame4'), direction);
                } else{
                    if (direction==='down'){
                        switchFrames(document.getElementById('frame4'), document.getElementById('frame5'), direction);
                    }
                }
                }
                else {
                    if(index === 11 && direction==='down')  {
                        switchFrames(document.getElementById('frame4'), document.getElementById('frame5'), direction);
                    }
                }
            }


        window.addEventListener('wheel', scrollwheel);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        window.addEventListener('load', () => {
            setStartFadeOut(true);
      
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
        });

        setTimeout(() => {
            setIsLoading(false);
        }, 3500);

        return () => {
            window.removeEventListener('wheel', scrollwheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [currentFrame, currentFrameIndex, animating]);
      
    return (
        <div className="App">
            {isLoading && (
                <Loader className={startFadeOut ? 'fadeOutUp' : ''} />
            )}
            <LanguageContext.Provider value={{ language, setLanguage }}>
            <ModalContext.Provider value={{ showModal, setShowModal }}>
                <Meta/>
                <BackgroundBox bg="cosmos" bgtype={bgtypebg} bgimg={imgBg}>
                    {/*<select style={{ position: 'absolute', zIndex: 9999 }} onChange={(event) => setLanguage(event.target.value)}>*/}
                    {/*    <option value="ru">Русский</option>*/}
                    {/*    <option value="en">English</option>*/}
                    {/*    <option value="uk">Українська</option>*/}
                    {/*</select>*/}
                    <Frames.Frame1/>
                    <Frames.Frame2/>
                    <Frames.Frame3/>
                    <Frames.Frame4
                        animating={animating}
                        currentframe = {currentFrame}
                    />
                    <Frames.Frame5/>
                </BackgroundBox>
                <ContactFormPay />
            </ModalContext.Provider>
            </LanguageContext.Provider>
        </div>
    );
}

export default App;