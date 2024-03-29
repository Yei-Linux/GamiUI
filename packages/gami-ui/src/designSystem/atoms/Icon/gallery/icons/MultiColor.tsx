import React from 'react'
import { Foods, SocialNetworks } from '../packages'

export const MultiColor = (color = '#7f9cf5') => ({
  ...Foods(color),
  ...SocialNetworks(color),
  share: {
    viewBox: '0 0 24 24',
    svg: (
      <>
        <path
          fill={color}
          d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"
        ></path>
      </>
    ),
  },
  heart: {
    viewBox: '0 0 24 24',
    svg: (
      <>
        <path
          fill={color}
          d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"
        />
      </>
    ),
  },
  plus: {
    viewBox: '0 0 24 24',
    svg: (
      <>
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" fill={color} />
      </>
    ),
  },
  mark: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z"
          fill={color}
        />
        <path
          d="M24 12V28"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  code: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <path
          d="M16 13L4 25.4322L16 37"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 13L44 25.4322L32 37"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 4L21 44"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  twitter: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  github: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M29.3444 30.4767C31.7481 29.9771 33.9292 29.1109 35.6247 27.8393C38.5202 25.6677 40 22.3137 40 19C40 16.6754 39.1187 14.5051 37.5929 12.6669C36.7427 11.6426 39.2295 4.00001 37.02 5.02931C34.8105 6.05861 31.5708 8.33691 29.8726 7.8341C28.0545 7.29577 26.0733 7.00001 24 7.00001C22.1992 7.00001 20.4679 7.22313 18.8526 7.63452C16.5046 8.23249 14.2591 6.00001 12 5.02931C9.74086 4.05861 10.9736 11.9633 10.3026 12.7946C8.84119 14.6052 8 16.7289 8 19C8 22.3137 9.79086 25.6677 12.6863 27.8393C14.6151 29.2858 17.034 30.2077 19.7401 30.6621"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M19.7402 30.662C18.5817 31.9372 18.0024 33.148 18.0024 34.2946C18.0024 35.4411 18.0024 38.3465 18.0024 43.0108"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M29.3443 30.4767C30.4421 31.9175 30.991 33.2112 30.991 34.3577C30.991 35.5043 30.991 38.3886 30.991 43.0108"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M6 31.2156C6.89887 31.3255 7.56554 31.7388 8 32.4555C8.65169 33.5304 11.0742 37.5181 13.8251 37.5181C15.6591 37.5181 17.0515 37.5181 18.0024 37.5181"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  linkedin: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <circle
          cx="9"
          cy="8.00012"
          r="4"
          fill="none"
          stroke={color}
          strokeWidth="4"
        />
        <rect
          x="5"
          y="18.0001"
          width="8"
          height="25"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M21 27.5V43H28V29C28 26.5 29.5 24.5 32 24.5C34.5 24.5 36 27 36 29V43H43V27.5C43 24.5 39.5 18 32 18C24.5 18 21 24.5 21 27.5Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  youtube: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M11.0634 10.4144C16.6066 10.1381 20.9181 10 23.9978 10C27.0778 10 31.3908 10.1382 36.9368 10.4145V10.4145C39.9389 10.5641 42.367 12.9119 42.6174 15.9072C42.871 18.9412 42.9978 21.6134 42.9978 23.9238C42.9978 26.2626 42.8679 28.972 42.608 32.0522H42.608C42.3584 35.0103 39.9831 37.3412 37.0207 37.5349C32.2793 37.845 27.9383 38 23.9978 38C20.0578 38 15.7184 37.845 10.9796 37.5351V37.5351C8.01828 37.3414 5.64346 35.0119 5.39264 32.055C5.12941 28.9518 4.9978 26.2414 4.9978 23.9238C4.9978 21.6341 5.12627 18.961 5.3832 15.9044L5.38321 15.9044C5.6349 12.9103 8.06249 10.564 11.0634 10.4144Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M21 19.6092V28.4061C21 28.8794 21.3838 29.2632 21.8571 29.2632C22.0252 29.2632 22.1896 29.2138 22.3298 29.1211L28.9274 24.7606C29.3223 24.4996 29.4308 23.9678 29.1698 23.5729C29.1074 23.4785 29.0269 23.3973 28.933 23.3342L22.3354 18.8979C21.9426 18.6338 21.41 18.7381 21.1458 19.131C21.0508 19.2724 21 19.4389 21 19.6092Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  voice: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <rect
          x="17"
          y="4"
          width="14"
          height="27"
          rx="7"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M9 23C9 31.2843 15.7157 38 24 38C32.2843 38 39 31.2843 39 23"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 38V44"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  hear: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M42 30V24.4615C42 14.2655 33.9411 6 24 6C14.0589 6 6 14.2655 6 24.4615V30"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 32C34 29.7909 35.7909 28 38 28H42V42H38C35.7909 42 34 40.2091 34 38V32Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M42 32H44C45.1046 32 46 32.8954 46 34V36C46 37.1046 45.1046 38 44 38H42V32Z"
          fill={color}
        />
        <path
          d="M6 32H4C2.89543 32 2 32.8954 2 34V36C2 37.1046 2.89543 38 4 38H6V32Z"
          fill={color}
        />
        <path
          d="M6 28H10C12.2091 28 14 29.7909 14 32V38C14 40.2091 12.2091 42 10 42H6V28Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  remind: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M24 4C16.268 4 10 10.268 10 18V38H38V18C38 10.268 31.732 4 24 4Z"
          fill="none"
        />
        <path
          d="M10 38V18C10 10.268 16.268 4 24 4C31.732 4 38 10.268 38 18V38M4 38H44"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 44C26.7614 44 29 41.7614 29 39V38H19V39C19 41.7614 21.2386 44 24 44Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  visual: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <path
          d="M4 10C4 8.89543 4.89543 8 6 8H34C35.1046 8 36 8.89543 36 10V19L44 13V36L36 30V38C36 39.1046 35.1046 40 34 40H6C4.89543 40 4 39.1046 4 38V10Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="17"
          cy="21"
          r="5"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  speed: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M30.2972 18.7786C30.2972 18.7786 27.0679 27.8808 25.5334 29.4699C23.9988 31.0591 21.4665 31.1033 19.8774 29.5687C18.2882 28.0341 18.244 25.5018 19.7786 23.9127C21.3132 22.3236 30.2972 18.7786 30.2972 18.7786Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M38.8492 38.8492C42.6495 35.049 45 29.799 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 29.799 5.35051 35.049 9.15076 38.8492"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 4V8"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.8454 11.1421L35.7368 13.6593"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42.5225 27.2328L38.6251 26.333"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.47749 27.2328L9.37497 26.333"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.15463 11.1421L12.2632 13.6593"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  volume: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  pause: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M19 18V30"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29 18V30"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  play: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  controls: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <rect
          x="4"
          y="28"
          width="16"
          height="16"
          rx="2"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <rect
          x="28"
          y="4"
          width="16"
          height="16"
          rx="2"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M28 28H44"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 36H44"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 44H44"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  delete: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M9 10V44H39V10H9Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M20 20V33"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 20V33"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 10H44"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 10L19.289 4H28.7771L32 10H16Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  books: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <path
          d="M32 6H22V42H32V6Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M42 6H32V42H42V6Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M10 6L18 7L14.5 42L6 41L10 6Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M37 18V15"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 18V15"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  hamburger: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M7.94977 11.9498H39.9498"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.94977 23.9498H39.9498"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.94977 35.9498H39.9498"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  notes: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M8 6C8 4.89543 8.89543 4 10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M16 20H32"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 28H32"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  bullet: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M10.0266 40.9736L10.0266 18.9736H4.02661L4.02661 40.9736H10.0266Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0266 18.9736C17.1495 12.4546 21.2774 8.71403 22.4104 7.75178C24.1098 6.30839 26.0306 6.91448 26.0306 10.5266C26.0306 14.1388 20.7452 16.222 20.7452 18.9736C20.7418 18.99 27.5009 18.9911 41.0226 18.9769C42.6799 18.9752 44.0249 20.3173 44.0266 21.9746L44.0266 21.9778C44.0266 23.637 42.6816 24.982 41.0224 24.982H33.013C31.8042 32.9547 31.1373 37.2893 31.0122 37.9856C30.8247 39.0302 29.8276 40.9736 26.9586 40.9736C25.0459 40.9736 20.0686 40.9736 10.0266 40.9736V18.9736Z"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  help: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M24 28.6249V24.6249C27.3137 24.6249 30 21.9386 30 18.6249C30 15.3112 27.3137 12.6249 24 12.6249C20.6863 12.6249 18 15.3112 18 18.6249"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 37.6249C25.3807 37.6249 26.5 36.5056 26.5 35.1249C26.5 33.7442 25.3807 32.6249 24 32.6249C22.6193 32.6249 21.5 33.7442 21.5 35.1249C21.5 36.5056 22.6193 37.6249 24 37.6249Z"
          fill={color}
        />
      </>
    ),
  },
  rocket: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <g>
          <rect
            width="48"
            height="48"
            fill="white"
            fillOpacity="0.01"
            strokeLinejoin="round"
            strokeWidth="4"
            stroke="none"
            fillRule="evenodd"
          />
          <g transform="translate(7.000000, 4.000000)">
            <path
              d="M11.7050001,3.89449161 L17,0 L22.2949999,3.89449161 C25.8819274,6.53268984 28,10.7198227 28,15.172478 L28,33 L6,33 L6,15.172478 C6,10.7198227 8.11807256,6.53268984 11.7050001,3.89449161 Z"
              fill="none"
              fillRule="nonzero"
              strokeLinejoin="round"
              strokeWidth="4"
              stroke={color}
            />
            <polygon
              strokeLinecap="round"
              points="6 13 -2.83106871e-14 19 -2.83106871e-14 27 6 24"
              strokeLinejoin="round"
              strokeWidth="4"
              stroke={color}
              fill="none"
              fillRule="evenodd"
            />
            <polygon
              strokeLinecap="round"
              points="28 13 34 19 34 27 28 24"
              strokeLinejoin="round"
              strokeWidth="4"
              stroke={color}
              fill="none"
              fillRule="evenodd"
            />
            <path
              d="M11,35 L11,38"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              stroke={color}
              fill="none"
              fillRule="evenodd"
            />
            <path
              d="M17,35 L17,40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              stroke={color}
              fill="none"
              fillRule="evenodd"
            />
            <path
              d="M23,35 L23,38"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              stroke={color}
              fill="none"
              fillRule="evenodd"
            />
          </g>
        </g>
      </>
    ),
  },

  camera: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M15 12L18 6H30L33 12H15Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <rect
          x="4"
          y="12"
          width="40"
          height="30"
          rx="3"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  plane: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M37.5641 15.5098V15.5098C41.7833 15.878 44.6787 17.1724 45.2504 19.306C46.3939 23.5737 37.8068 29.5827 26.0705 32.7274C14.3343 35.8721 3.89316 34.9617 2.74963 30.694C2.1505 28.458 4.22245 25.744 8.01894 23.2145V23.2145"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  preview: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 40.9999C33.9411 40.9999 42 32.6778 42 26.9999C42 21.3219 33.9411 12.9999 24 12.9999C14.0589 12.9999 6 21.3277 6 26.9999C6 32.6721 14.0589 40.9999 24 40.9999Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M24 32.9999C27.3137 32.9999 30 30.3136 30 26.9999C30 23.6862 27.3137 20.9999 24 20.9999C20.6863 20.9999 18 23.6862 18 26.9999C18 30.3136 20.6863 32.9999 24 32.9999Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M13.2637 11.266L15.8582 14.8862"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M35.625 11.7103L33.0304 15.3305"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M24.0088 6.99988V12.9999"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  preview__close: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M6 16C6.63472 17.2193 7.59646 18.3504 8.82276 19.3554C12.261 22.1733 17.779 24 24 24C30.221 24 35.739 22.1733 39.1772 19.3554C40.4035 18.3504 41.3653 17.2193 42 16"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.9777 24L31.0482 31.7274"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37.3535 21.3536L43.0104 27.0104"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.99998 27.0104L10.6568 21.3536"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.9276 31.7274L18.9982 24"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  setting: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M36.686 15.171C37.9364 16.9643 38.8163 19.0352 39.2147 21.2727H44V26.7273H39.2147C38.8163 28.9648 37.9364 31.0357 36.686 32.829L40.0706 36.2137L36.2137 40.0706L32.829 36.686C31.0357 37.9364 28.9648 38.8163 26.7273 39.2147V44H21.2727V39.2147C19.0352 38.8163 16.9643 37.9364 15.171 36.686L11.7863 40.0706L7.92939 36.2137L11.314 32.829C10.0636 31.0357 9.18372 28.9648 8.78533 26.7273H4V21.2727H8.78533C9.18372 19.0352 10.0636 16.9643 11.314 15.171L7.92939 11.7863L11.7863 7.92939L15.171 11.314C16.9643 10.0636 19.0352 9.18372 21.2727 8.78533V4H26.7273V8.78533C28.9648 9.18372 31.0357 10.0636 32.829 11.314L36.2137 7.92939L40.0706 11.7863L36.686 15.171Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  arrow__left: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M31 36L19 24L31 12"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  arrow__right: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M19 12L31 24L19 36"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  like: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M27.6 18.6V11.4C27.6 8.41766 25.1823 6 22.2 6L15 22.2V42H35.916C37.7111 42.0203 39.2468 40.7149 39.516 38.94L42 22.74C42.1585 21.6957 41.8504 20.6346 41.1573 19.8375C40.4643 19.0405 39.4561 18.588 38.4 18.6H27.6Z"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M15 22.0002H10.194C8.08532 21.9629 6.2827 23.7096 6 25.7996V38.3996C6.2827 40.4896 8.08532 42.0369 10.194 41.9996H15V22.0002Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  close: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M14 14L34 34"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 34L34 14"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  sad: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M31 18V19"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 18V19"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31 30.9999C31 30.9999 29 26.9999 24 26.9999C19 26.9999 17 30.9999 17 30.9999"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  lock: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <rect
          x="6"
          y="22"
          width="36"
          height="22"
          rx="2"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 30V36"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },

  unlock: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <rect
          x="7"
          y="22.0476"
          width="34"
          height="22"
          rx="2"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 30V36"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  brain: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M19.036 44.0001C18.0561 40.8045 16.5778 38.4222 14.6011 36.8532C11.636 34.4997 6.92483 35.9624 5.18458 33.5349C3.44433 31.1073 6.40382 26.6431 7.44234 24.009C8.48086 21.375 3.46179 20.4436 4.04776 19.6958C4.43842 19.1973 6.97471 17.7587 11.6567 15.3801C12.987 7.79346 17.9008 4.00014 26.3982 4.00014C39.1441 4.00014 44 14.8061 44 21.679C44 28.552 38.1201 35.9563 29.7441 37.5528C28.9951 38.6436 30.0754 40.7927 32.9848 44.0001"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.4997 14.5C18.8464 17.0342 19.0408 18.8138 20.0829 19.8385C21.125 20.8633 22.9011 21.5334 25.4112 21.8489C24.8417 25.1176 25.5361 26.6511 27.4942 26.4493C29.4524 26.2475 30.6289 25.4338 31.0239 24.0083C34.0842 24.8684 35.7428 24.1486 35.9997 21.8489C36.3852 18.3993 34.525 15.6475 33.7624 15.6475C32.9997 15.6475 31.0239 15.5547 31.0239 14.5C31.0239 13.4452 28.7159 12.8493 26.6329 12.8493C24.5499 12.8493 25.8035 11.4452 22.9432 12C21.0363 12.3698 19.8885 13.2031 19.4997 14.5Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M30.5002 25.5001C29.4833 26.1311 28.0878 27.1804 27.5002 28.0001C26.0313 30.0496 24.8398 31.2975 24.5791 32.6082"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  edit: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M7 42H43"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  check: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M43 11L16.875 37L5 25.1818"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  delete__one: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M15 12L16.2 5H31.8L33 12"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M6 12H42"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37 12L35 43H13L11 12H37Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 35H29"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  user: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <circle
          cx="24"
          cy="12"
          r="8"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  phone: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30"
          stroke={color}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M22 37H26"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  two__fingers: {
    viewBox: '0 0 48 48',
    svg: (
      <>
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M12.5658 27.1826C10.8553 28.3544 10 30.2936 10 33.0003C10 37.0604 14.9753 44.0003 19.4618 44.0003C23.9483 44.0003 26.5502 44.0003 30.9415 44.0003C35.3328 44.0003 38 40.1497 38 37.0604C38 32.7101 38 28.3597 38 24.0094C38 22.3526 36.6569 21.0094 35 21.0094H34.9909C33.3391 21.0094 32 22.3485 32 24.0003"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M13.9812 29.4453V11.006C13.9812 9.35049 15.3233 8.00844 16.9788 8.00844C16.9815 8.00844 16.9843 8.00844 16.9871 8.00845C18.6485 8.01305 19.9929 9.36119 19.9929 11.0226V24.5921"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M19.9929 24.0085V7.01562C19.9929 5.35022 21.343 4.00014 23.0084 4.00014C24.6738 4.00014 26.0239 5.35022 26.0239 7.01562V24.0085"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 23.7159V21.0036C26 19.3467 27.3431 18.0036 29 18.0036C30.6569 18.0036 32 19.3467 32 21.0036V24.0036"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  prevskip: {
    viewBox: '0 0 448.005 448.005',
    svg: (
      <>
        <g transform="rotate(-179.784 224.003 224.003)" id="svg_1">
          <path
            id="svg_2"
            fill={color}
            d="m444.453,213.947l-142.496,-176c-5.504,-6.784 -15.424,-7.872 -22.336,-2.496l-49.536,39.072c-3.36,2.656 -5.504,6.56 -5.984,10.816s0.768,8.512 3.456,11.84l102.752,126.816l-102.752,126.816c-2.688,3.328 -3.936,7.584 -3.456,11.84s2.624,8.128 6.016,10.784l49.504,39.104c2.912,2.336 6.4,3.456 9.888,3.456c4.672,0 9.28,-2.016 12.448,-5.952l142.496,-176c4.736,-5.824 4.736,-14.24 0,-20.096z"
          />
          <path
            id="svg_3"
            fill={color}
            d="m77.957,37.947c-5.504,-6.816 -15.456,-7.904 -22.368,-2.528l-49.504,39.104c-3.36,2.656 -5.504,6.56 -5.984,10.816s0.768,8.512 3.456,11.84l102.752,126.816l-102.752,126.816c-2.688,3.328 -3.936,7.584 -3.456,11.84c0.48,4.256 2.624,8.128 6.016,10.784l49.504,39.104c2.912,2.336 6.4,3.456 9.888,3.456c4.672,0 9.28,-2.016 12.448,-5.952l142.496,-176c4.736,-5.856 4.736,-14.272 0,-20.128l-142.496,-175.968z"
          />
        </g>
        <g id="svg_4" />
        <g id="svg_5" />
        <g id="svg_6" />
        <g id="svg_7" />
        <g id="svg_8" />
        <g id="svg_9" />
        <g id="svg_10" />
        <g id="svg_11" />
        <g id="svg_12" />
        <g id="svg_13" />
        <g id="svg_14" />
        <g id="svg_15" />
        <g id="svg_16" />
        <g id="svg_17" />
        <g id="svg_18" />
      </>
    ),
  },
  nextskip: {
    viewBox: '0 0 448.005 448.005',
    svg: (
      <>
        <g>
          <path
            fill={color}
            d="M444.453,213.947l-142.496-176c-5.504-6.784-15.424-7.872-22.336-2.496l-49.536,39.072
		c-3.36,2.656-5.504,6.56-5.984,10.816s0.768,8.512,3.456,11.84l102.752,126.816L227.557,350.811
		c-2.688,3.328-3.936,7.584-3.456,11.84s2.624,8.128,6.016,10.784l49.504,39.104c2.912,2.336,6.4,3.456,9.888,3.456
		c4.672,0,9.28-2.016,12.448-5.952l142.496-176C449.189,228.219,449.189,219.803,444.453,213.947z"
          />
          <path
            fill={color}
            d="M77.957,37.947c-5.504-6.816-15.456-7.904-22.368-2.528L6.085,74.523
		c-3.36,2.656-5.504,6.56-5.984,10.816s0.768,8.512,3.456,11.84l102.752,126.816L3.557,350.811
		c-2.688,3.328-3.936,7.584-3.456,11.84c0.48,4.256,2.624,8.128,6.016,10.784l49.504,39.104c2.912,2.336,6.4,3.456,9.888,3.456
		c4.672,0,9.28-2.016,12.448-5.952l142.496-176c4.736-5.856,4.736-14.272,0-20.128L77.957,37.947z"
          />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </>
    ),
  },
})
