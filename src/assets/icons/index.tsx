import React from 'react';
import playSolid from './play-solid.svg';
import { SlideButtonContainer } from './styles';


interface ForwardProps {
  forwardFunction?: () => void
  className: string
}

interface BackProps {
  backFunction?: () => void
  className: string
}


export const KingIcon: React.FC = () => (
  <svg width="65" height="94" viewBox="0 0 65 94" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M36.85 8.59999L34.17 5.92L30.76 2.50002L24.51 8.75999L20.84 5.09001L16.01 0.259995V22.71H45.45V-0.00999451L36.85 8.59999ZM40.63 17.88H20.84V11.88L21.09 12.13L24.51 15.54L27.92 12.13L30.76 9.28999L33.44 11.97L36.85 15.38L40.26 11.97L40.63 11.6V17.88Z" fill="#B27824"/>
      <path d="M51.55 40.82L55.55 37.82L45.55 27.52H19.88C18.56 27.52 12.06 27.87 7.64999 33.03C6.20885 34.7244 5.1574 36.7146 4.56998 38.86C4.07998 42.25 3.57002 45.65 3.11002 49.04C2.79147 49.8086 2.40667 50.5481 1.95999 51.25C1.3894 52.1254 0.718155 52.9309 -0.0400085 53.65C6.37999 67.0633 12.8033 80.4667 19.23 93.86L28.84 87.94C32.3686 85.1147 34.836 81.1774 35.84 76.77C36.26 73.87 36.67 70.98 37.09 68.08L45.79 71.02L48.57 79.12L64.16 64.56L51.55 40.82ZM14.94 69.99C14.6714 70.6048 14.336 71.1883 13.94 71.73C11.18 66.15 8.42335 60.5733 5.67001 55C5.88365 54.2878 6.15799 53.5953 6.49002 52.93C6.89329 52.1353 7.38288 51.3875 7.94998 50.7C8.33998 47.43 8.73004 44.15 9.13004 40.88C9.61359 38.8756 10.6054 37.0296 12.01 35.52C13.8208 33.6017 16.2085 32.3271 18.81 31.89H29.57C26.3578 34.2162 23.6387 37.1562 21.57 40.54C20.2916 42.6592 19.2837 44.9302 18.57 47.3C17.5766 54.12 16.5766 60.9434 15.57 67.77C15.4561 68.534 15.2444 69.2801 14.94 69.99V69.99ZM33.45 57.99L30.33 78.99C29.3465 80.6179 28.1227 82.0878 26.7 83.35C25.079 84.7879 23.2172 85.9287 21.2 86.72C19.8133 83.76 18.4166 80.8 17.01 77.84C18.6923 75.0238 19.8763 71.9386 20.51 68.72C21.55 61.8067 22.5933 54.89 23.64 47.97C26.1101 41.5316 30.3712 35.9346 35.92 31.84L43.07 31.9L48.07 37.34C40.7736 42.1341 35.5614 49.5113 33.48 57.99H33.45ZM49.45 67.58L37.99 63.46C38.33 61.15 38.66 58.82 38.99 56.46C40.7484 51.5507 43.8451 47.2313 47.93 43.99L58.49 63.52L50.49 70.73L49.45 67.58Z" fill="#B27824"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="64.24" height="93.86" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export const Play: React.FC = () => (
  <div>
    <img src={playSolid} alt="play"/>
  </div>
)

export const Forward: React.FC<ForwardProps> = ({forwardFunction, className}) => (
  <SlideButtonContainer className={className} onClick={forwardFunction}>
    <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M11.5128 15.1151L0.512817 1.68797L1.74359 0.153442L22.5128 15.1151L1.74359 30.1534L0.512817 28.5422L11.5128 15.1151Z" fill="#B27824"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="22" height="30" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </SlideButtonContainer>
)

export const Back: React.FC<BackProps> = ({backFunction, className}) => (
  <SlideButtonContainer className={className} onClick={backFunction}>
    <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5128 15.1918L22.5128 28.6189L21.2821 30.1534L0.512817 15.1918L21.2821 0.153442L22.5128 1.7647L11.5128 15.1918Z" fill="#B27824"/>
    </svg>
  </SlideButtonContainer>
)