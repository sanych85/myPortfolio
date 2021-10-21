import React from 'react';
import styled, {keyframes} from 'styled-components';

interface ImgItemProps {
  src: string;
  alt: string;
  id: number;
}

interface ImgStylesInterface {
  id: any
}

const ImgItem: React.FC<ImgItemProps> = ({ src, alt, id }) => {
  console.log("id in img item", id)
  const href = `./${id}`
  return (
    <a href={href}>
      <Figure  id = {id}>
        <Img src={src} alt={alt} />
      </Figure>
    </a>
  );
};

export default ImgItem;

const AnotherProjectAnimation = keyframes `
0% {
  transform: translateY(-50px);
  opacity:0;
}
100% {
  transform: translateY(0px);
  opacity:1;
}
`
const Figure = styled.figure<ImgStylesInterface>`
  margin-left: 5px;
  margin-right: 5px;
  animation-name: ${AnotherProjectAnimation};
  animation-duration: ${({id})=>`${id/2+1}s`};
  animation-fill-mode: forwards;
`;

const Img = styled.img`
  width: 107px;
  height: 67px;
  transition: all 0.9s ease;
  &:hover {
 
    box-sizing: border-box;
 
    transform: translateY(10px)
  }
`;
