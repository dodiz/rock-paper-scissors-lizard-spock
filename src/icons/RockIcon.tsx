import { ComponentProps, FC } from "react";

export const RockIcon: FC<ComponentProps<"svg">> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="151"
      height="154"
      viewBox="0 0 151 154"
      fill="none"
    >
      <g filter="url(#filter0_d_0_1124)">
        <ellipse cx="75.5" cy="74" rx="72.5" ry="74" fill="#9D1634" />
      </g>
      <ellipse cx="75.5" cy="70.7192" rx="72.5" ry="70.7192" fill="#DB2E4D" />
      <ellipse
        cx="75.5"
        cy="70.7192"
        rx="72.5"
        ry="70.7192"
        fill="url(#paint0_linear_0_1124)"
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
        fill="url(#paint1_linear_0_1124)"
      />
      <path
        d="M97.0603 64.2197C96.4184 56.1246 87.3264 56.9512 87.3264 56.9512C83.4887 50.1865 77.4937 55.0863 77.4937 55.0863C72.8881 48.4565 67.1134 54.6 67.1134 54.6C57.1569 53.5264 57.5428 61.6664 57.5428 61.6664C57.3085 64.254 58.946 72.2596 58.946 72.2596C57.4689 67.6455 54.265 71.4756 54.265 71.4756C50.3264 77.5534 53.2912 80.8803 53.2912 80.8803C58.6208 87.1266 69.9788 94.6231 69.9788 94.6231C74.0914 96.9791 72.3519 99.0799 72.3519 99.0799L97.2275 94.9697L97.7994 90.2524C101.581 78.8158 97.0603 64.2197 97.0603 64.2197Z"
        fill="#3B4262"
      />
      <defs>
        <filter
          id="filter0_d_0_1124"
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
            result="effect1_dropShadow_0_1124"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1124"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_1124"
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
          id="paint1_linear_0_1124"
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
