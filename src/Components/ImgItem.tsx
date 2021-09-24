import React from 'react';
import styled from 'styled-components';

interface ImgItemProps {
  src: string;
  alt: string;
  id: number;
}

const ImgItem: React.FC<ImgItemProps> = ({ src, alt, id }) => {
  return (
    <a href="./">
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
  
`;
