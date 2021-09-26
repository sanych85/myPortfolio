import React from 'react';
import styled from 'styled-components';

interface ImgItemProps {
  src: string;
  alt: string;
  id: number;
}

const ImgItem: React.FC<ImgItemProps> = ({ src, alt, id }) => {
  console.log("id in img item", id)
  const href = `./${id}`
  return (
    <a href={href}>
      <Figure>
        <Img src={src} alt={alt} />
      </Figure>
    </a>
  );
};

export default ImgItem;
const Figure = styled.figure`
  margin-left: 5px;
  margin-right: 5px;
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
