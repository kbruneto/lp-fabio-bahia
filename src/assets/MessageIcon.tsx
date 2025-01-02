import React from "react";
import { forwardRef, type Ref, type SVGProps } from "react";

function MessageIcon(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.875 19.6458C35.8809 21.9006 35.3541 24.1249 34.3375 26.1375C33.1322 28.5492 31.2792 30.5778 28.9861 31.9959C26.693 33.414 24.0503 34.1656 21.3542 34.1667C19.0994 34.1725 16.8751 33.6457 14.8625 32.6292L5.125 35.875L8.37083 26.1375C7.35426 24.1249 6.82745 21.9006 6.83333 19.6458C6.83438 16.9497 7.58605 14.307 9.00415 12.0139C10.4222 9.72084 12.4508 7.86785 14.8625 6.6625C16.8751 5.64593 19.0994 5.11912 21.3542 5.125H22.2083C25.7691 5.32145 29.1323 6.82439 31.6539 9.34605C34.1756 11.8677 35.6786 15.2309 35.875 18.7917V19.6458Z"
        stroke="#1E1E1E"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export const MessageIconImg = forwardRef(MessageIcon);
