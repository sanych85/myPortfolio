import styled from 'styled-components';
import React, {useState, useEffect} from "react"
import { device } from './devices';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

interface SliderPropsInterface {
    imgs:string[]
}

const Slider:React.FC<SliderPropsInterface> = ({imgs}) => {
     let [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (type: string): void => {
        console.log(type);
        console.log(imgs);
    
        if (type === 'left') {
          currentIndex === 0
            ? setCurrentIndex(imgs.length - 1)
            : setCurrentIndex((prev) => prev - 1);
        } else if (type === 'right') {
          console.log('currentIndex  in function', currentIndex);
          currentIndex === imgs.length - 1
            ? setCurrentIndex(0)
            : setCurrentIndex((prev) => prev + 1);
        }
    
    
      };
      useEffect(() => {
        console.log("in use Effect")
        const interval = setInterval(()=>handleClick('right'), 4000)
        return () => clearInterval(interval);
        }
      )
    return (
        <ImgWrapper>
        {imgs.map((image: string, i: number) => (
            <Figure key={i}>
                <BsCaretLeftFill
                  onClick={() => handleClick('left')}
                  className="left-arrow"
                />
                <SliderImage src = {imgs[currentIndex]} alt="" />
                <BsCaretRightFill
                  onClick={() => handleClick('right')}
                  className="right-arrow"
                />
              </Figure>
        ))}
      </ImgWrapper>
    )
}

export default Slider


const Figure = styled.figure`
  /* position: relative; */
  width: 519px;
  height: 357px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 1rem;
  svg {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #412e861f;
    transition: all 0.3s ease;
    &:hover {
      cursor: pointer;
      color: #412e86dd;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 110%;
        height: 110%;
      }
    }
  }
  .left-arrow {
    left: -26px;
  }
  .right-arrow {
    right: -26px;
  }

`;

const ImgWrapper = styled.div`
  /* overflow: hidden; */
  position: relative;
  display: flex;
  width: 519px;
  height: 360px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  @media ${device.tablet} {
    width: 390px;
    height: 240px;
  }
  @media ${device.mobileXL} {
    width: 320px;
    height: 240px;
  }
  @media ${device.mobileL} {
    width: 290px;
    height: 200px;
  }
  @media ${device.mobileM} {
    width: 260px;
  
  }
`;

const SliderImage = styled.img`
  width: 519px;
  height: 360px;
  position: absolute;
  transition: all 0.3s ease;
  top: 0;
  left: 0;
  @media ${device.tablet} {
    width: 390px;
    height: 240px;
  }
  @media ${device.mobileXL} {
    width: 320px;
    height: 240px;
  }
  @media ${device.mobileL} {
    width: 290px;
    height: 200px;
  }
  @media ${device.mobileM} {
    width: 260px;
  
  }
  /* &:hover {
    width: 600px;
    height: 400px;
} */
`;
