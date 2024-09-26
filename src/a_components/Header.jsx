import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ValueContext from "../context/global";

const Header = () => {
  const { cartItems } = useContext(ValueContext);
  return (
    <header>
      <a className="logo" href="/">
        {/* <SVG /> */}nobox
      </a>
      <div>
        <Link to={"/cart"}>✪{cartItems ? cartItems.length : 0}</Link>
      </div>
      <nav>
        <Link to={"/contact"}>контакты</Link>
        <Link to={"/404"}>ошибка 404</Link>
        <Link to={"/post"}>Детально</Link>
      </nav>
    </header>
  );
};
const SVG = () => {
  return (
    <svg
      width="145"
      height="56"
      viewBox="0 0 145 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.2798 44H22.3445L9.5351 21.7246H9.35383C9.40754 22.651 9.45454 23.5842 9.49482 24.5241C9.5351 25.464 9.57538 26.4039 9.61566 27.3438C9.65594 28.2702 9.69622 29.2034 9.7365 30.1433V44H4.15758V14.5545H12.0325L24.8218 36.6084H24.9627C24.9359 35.6954 24.9023 34.7891 24.862 33.8895C24.8218 32.9898 24.7815 32.0902 24.7412 31.1906C24.7143 30.291 24.6875 29.3914 24.6606 28.4918V14.5545H30.2798V44ZM64.4382 29.237C64.4382 31.5062 64.1562 33.5739 63.5923 35.4403C63.0284 37.2932 62.169 38.891 61.0143 40.2337C59.873 41.5764 58.4229 42.6103 56.6639 43.3354C54.905 44.047 52.8238 44.4028 50.4204 44.4028C48.0169 44.4028 45.9358 44.047 44.1768 43.3354C42.4179 42.6103 40.961 41.5764 39.8063 40.2337C38.665 38.891 37.8124 37.2865 37.2485 35.4201C36.6845 33.5538 36.4026 31.4793 36.4026 29.1967C36.4026 26.1488 36.8994 23.4969 37.893 21.2412C38.9 18.972 40.4441 17.2131 42.5253 15.9644C44.6065 14.7157 47.2516 14.0913 50.4607 14.0913C53.6563 14.0913 56.2813 14.7157 58.3356 15.9644C60.4034 17.2131 61.934 18.972 62.9276 21.2412C63.9347 23.5104 64.4382 26.1756 64.4382 29.237ZM42.9482 29.237C42.9482 31.2913 43.2034 33.0637 43.7136 34.5541C44.2372 36.0311 45.0496 37.1724 46.1506 37.978C47.2516 38.7702 48.6749 39.1663 50.4204 39.1663C52.1927 39.1663 53.6294 38.7702 54.7305 37.978C55.8315 37.1724 56.6304 36.0311 57.1272 34.5541C57.6374 33.0637 57.8925 31.2913 57.8925 29.237C57.8925 26.1488 57.3152 23.7185 56.1604 21.9461C55.0057 20.1738 53.1058 19.2876 50.4607 19.2876C48.7017 19.2876 47.265 19.6904 46.1506 20.496C45.0496 21.2882 44.2372 22.4295 43.7136 23.9199C43.2034 25.3969 42.9482 27.1692 42.9482 29.237ZM70.5408 14.5545H79.7047C83.6254 14.5545 86.5928 15.105 88.6068 16.2061C90.6209 17.3071 91.6279 19.2406 91.6279 22.0065C91.6279 23.121 91.4466 24.128 91.0841 25.0276C90.735 25.9272 90.2248 26.6657 89.5534 27.2431C88.8821 27.8204 88.063 28.1964 87.0963 28.3709V28.5724C88.0765 28.7738 88.9626 29.1229 89.7548 29.6197C90.547 30.103 91.1781 30.8147 91.6481 31.7546C92.1314 32.681 92.3731 33.9163 92.3731 35.4604C92.3731 37.2462 91.9367 38.7769 91.064 40.0525C90.1912 41.328 88.9425 42.3082 87.3178 42.993C85.7066 43.6643 83.7865 44 81.5576 44H70.5408V14.5545ZM76.7843 26.2159H80.4096C82.2223 26.2159 83.4777 25.9339 84.1759 25.37C84.8741 24.7926 85.2232 23.9467 85.2232 22.8323C85.2232 21.7044 84.807 20.8988 83.9745 20.4154C83.1555 19.9186 81.853 19.6702 80.0672 19.6702H76.7843V26.2159ZM76.7843 31.1705V38.844H80.8527C82.7325 38.844 84.0416 38.4815 84.7801 37.7564C85.5186 37.0314 85.8879 36.0579 85.8879 34.8361C85.8879 34.111 85.7267 33.4732 85.4045 32.9227C85.0822 32.3722 84.5384 31.9425 83.7731 31.6337C83.0212 31.3249 81.9806 31.1705 80.6513 31.1705H76.7843Z"
        fill="#0E0E0E"
      />
      <path
        d="M143.948 44H136.818L129.971 32.8623L123.123 44H116.436L126.204 28.814L117.061 14.5545H123.949L130.293 25.1485L136.516 14.5545H143.243L133.999 29.1564L143.948 44Z"
        fill="#0E0E0E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M95.5715 22.8657C95.5715 22.074 96.2134 21.4321 97.0051 21.4321H113.148C113.94 21.4321 114.582 22.074 114.582 22.8657V39.0085C114.582 39.8003 113.94 40.4421 113.148 40.4421H112.303V30.5748C112.303 30.179 111.982 29.858 111.586 29.858H106.518C106.122 29.858 105.801 30.179 105.801 30.5748V40.4421H97.0051C96.2134 40.4421 95.5715 39.8003 95.5715 39.0085V22.8657ZM97.6916 30.5599C97.6916 30.164 98.0125 29.8431 98.4084 29.8431H102.514C102.91 29.8431 103.23 30.164 103.23 30.5599V34.8019C103.23 35.1978 102.91 35.5187 102.514 35.5187H98.4084C98.0125 35.5187 97.6916 35.1978 97.6916 34.8019V30.5599Z"
        fill="#0E0E0E"
      />
      <rect
        x="106.307"
        y="35.0059"
        width="1.64115"
        height="1.64115"
        rx="0.820575"
        fill="#0E0E0E"
      />
      <path
        d="M94.9678 16.2611C95.2391 15.9066 95.66 15.6986 96.1064 15.6986L114.014 15.6986C114.469 15.6986 114.897 15.9146 115.167 16.2807L116.225 17.7143C116.924 18.6607 116.248 19.9994 115.072 19.9994H95.0096C93.8219 19.9994 93.1493 18.6379 93.871 17.6947L94.9678 16.2611Z"
        fill="#0E0E0E"
      />
    </svg>
  );
};
export default Header;
