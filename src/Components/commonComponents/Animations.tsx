import  {keyframes} from 'styled-components';


export const ShowAnimation = keyframes `

0% {
  opacity:0;
  transform: translateY(300px);
}
5% {
  opacity:0;
  transform: translateY(100px);
}

100% {
  opacity:1;
  transform: translateY(0px);
}

`