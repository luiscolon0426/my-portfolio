import React from "react";
import { memo, SVGProps } from "react";

const EmailIconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.83716 3.09491H13.6693C14.3815 3.09491 14.9588 3.67226 14.9588 4.38445V12.1217C14.9588 12.8339 14.3815 13.4112 13.6693 13.4112H2.83716C2.12497 13.4112 1.54762 12.8339 1.54762 12.1217V4.38445C1.54762 3.67226 2.12497 3.09491 2.83716 3.09491Z"
      stroke="white"
      strokeWidth={0.884256}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.8954 5.15822L8.25301 8.76893L3.61067 5.15822"
      stroke="white"
      strokeWidth={0.884256}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(EmailIconIcon);
export { Memo as EmailIconIcon };
