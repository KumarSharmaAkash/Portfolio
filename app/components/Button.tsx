import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { MdArrowUpward} from "react-icons/md";
import clsx from "clsx";
import { KeyTextField, LinkField } from "@prismicio/client";

type ButtonProps = {
  linkField: LinkField;
  label: KeyTextField;
  showIcon?: boolean;
  className?: string;
};

export default function Button({
  linkField,
  label,
  showIcon = true,
  className,
}: ButtonProps) {
  return (
    <PrismicNextLink
      field={linkField}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out text-slate-800  hover:scale-105  p-4 hover:shadow-blue",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-blue-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <MdArrowUpward className="inline-block" />}
      </span>
    </PrismicNextLink>
  );
}