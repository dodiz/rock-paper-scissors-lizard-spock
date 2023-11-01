import { ComponentProps, FC } from "react";

export const ScissorsIcon: FC<ComponentProps<"svg">> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="151"
      height="154"
      viewBox="0 0 151 154"
      fill="none"
    >
      <g filter="url(#filter0_d_0_1114)">
        <ellipse cx="75.5" cy="74" rx="72.5" ry="74" fill="#C76C1B" />
      </g>
      <ellipse cx="75.5" cy="70.7192" rx="72.5" ry="70.7192" fill="#EB9F0E" />
      <ellipse
        cx="75.5"
        cy="70.7192"
        rx="72.5"
        ry="70.7192"
        fill="url(#paint0_linear_0_1114)"
      />
      <ellipse
        cx="75.5"
        cy="72.1774"
        rx="55.6566"
        ry="55.4089"
        fill="#BABFD4"
      />
      <ellipse
        cx="75.5"
        cy="75.0937"
        rx="55.6566"
        ry="52.4926"
        fill="url(#paint1_linear_0_1114)"
      />
      <path
        d="M60.9707 71.703L66.9826 63.2873C64.4837 62.8727 59.8949 62.7808 56.1362 66.5228C50.2111 72.4215 47.8116 85.164 47.3113 88.2485L62.3699 103.24C65.0807 103.009 77.0829 101.414 88.648 89.9001C88.7708 89.6515 91.5878 87.5791 89.2846 85.2862C88.1853 84.1917 86.3655 84.2121 85.2424 85.3303C84.6705 85.8996 83.7812 85.908 83.2212 85.3505C82.6613 84.7931 82.6697 83.9076 83.2415 83.3384L87.3281 79.2699C89.405 77.2024 87.4473 73.7143 84.5488 74.5523L81.203 77.4037C80.592 77.934 79.6839 77.8421 79.1817 77.2643C78.6628 76.6661 78.7737 75.7603 79.3643 75.2505C91.0512 65.0423 89.3452 66.2717 96.8638 59.2556C99.6731 56.927 96.1393 52.8081 93.371 55.1664L75.1819 71.4502C74.6528 71.8989 73.8418 71.9073 73.3211 71.4297C72.7202 70.9131 72.7063 70.1687 73.0992 69.5807L85.7864 49.9446C87.6409 47.4443 83.991 44.6674 82.0377 47.188L63.2787 73.3073C62.8263 73.9583 61.9147 74.1078 61.2934 73.6524C60.6702 73.2359 60.4996 72.3318 60.9707 71.703Z"
        fill="#3B4262"
      />
      <defs>
        <filter
          id="filter0_d_0_1114"
          x="0"
          y="0"
          width="151"
          height="154"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196706 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1114"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1114"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_1114"
          x1="3"
          y1="0"
          x2="3"
          y2="141.438"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.0966455" />
          <stop offset="1" stopColor="white" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1114"
          x1="130.234"
          y1="127.586"
          x2="130.234"
          y2="24.3412"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F3F3" />
          <stop offset="1" stopColor="#DADADA" />
        </linearGradient>
      </defs>
    </svg>
  );
};
