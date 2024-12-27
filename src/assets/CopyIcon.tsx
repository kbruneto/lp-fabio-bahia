import React from "react";
import { forwardRef, type Ref, type SVGProps } from "react";

function CopyIcon(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.54166 25.6251H6.83332C5.92717 25.6251 5.05812 25.2651 4.41737 24.6244C3.77663 23.9836 3.41666 23.1146 3.41666 22.2084V6.83341C3.41666 5.92726 3.77663 5.05822 4.41737 4.41747C5.05812 3.77672 5.92717 3.41675 6.83332 3.41675H22.2083C23.1145 3.41675 23.9835 3.77672 24.6243 4.41747C25.265 5.05822 25.625 5.92726 25.625 6.83341V8.54175M18.7917 15.3751H34.1667C36.0536 15.3751 37.5833 16.9048 37.5833 18.7917V34.1667C37.5833 36.0537 36.0536 37.5834 34.1667 37.5834H18.7917C16.9047 37.5834 15.375 36.0537 15.375 34.1667V18.7917C15.375 16.9048 16.9047 15.3751 18.7917 15.3751Z"
        stroke="#F8A82D"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export const CopyIconImg = forwardRef(CopyIcon);
