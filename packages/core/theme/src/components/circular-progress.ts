import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

/**
 * CircularProgress **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, svgWrapper, svg, circle, value, label} = circularProgress({...})
 *
 * <div className={base()} aria-label="progress" role="progressbar" aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}>
 *   <div className={svgWrapper()}>
 *      <svg className={svg()}>
 *        <circle className={circle()} style={{width: `${value}%`}} />
 *      </svg>
 *      <span className={value()}>{value}</span>
 *   </div>
 *    <span className={label()}>{label}</span>
 * </div>
 * ```
 */
const circularProgress = tv({
  slots: {
    base: "flex flex-col justify-center gap-1 max-w-fit items-center",
    label: "",
    svgWrapper: "relative block",
    svg: "z-0 relative overflow-hidden",
    circle: "h-full stroke-current",
    value: "absolute font-normal top-0 left-0 w-full h-full flex items-center justify-center",
  },
  variants: {
    color: {
      neutral: {
        svg: "text-neutral-400",
      },
      primary: {
        svg: "text-primary",
      },
      secondary: {
        svg: "text-secondary",
      },
      success: {
        svg: "text-success",
      },
      warning: {
        svg: "text-warning",
      },
      danger: {
        svg: "text-danger",
      },
    },
    size: {
      xs: {
        svg: "w-6 h-6",
        label: "text-xs",
        value: "text-[0.4rem]",
      },
      sm: {
        svg: "w-8 h-8",
        label: "text-sm",
        value: "text-[0.5rem]",
      },
      md: {
        svg: "w-10 h-10",
        label: "text-sm",
        value: "text-[0.6rem]",
      },
      lg: {
        svg: "w-12 h-12",
        label: "text-base",
        value: "text-xs",
      },
      xl: {
        svg: "w-14 h-14",
        label: "text-lg",
        value: "text-xs",
      },
    },
    isIndeterminate: {
      true: {
        svg: "animate-spinner-ease-spin",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-50 cursor-not-allowed",
      },
    },
    disableAnimation: {
      true: {},
      false: {
        circle: "transition-all !duration-500",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    isIndeterminate: false,
    isDisabled: false,
    disableAnimation: false,
  },
  compoundVariants: [
    // disableAnimation && !isIndeterminate
    {
      disableAnimation: true,
      isIndeterminate: false,
      class: {
        svg: "!transition-none motion-reduce:transition-none",
      },
    },
  ],
});

export type CircularProgressVariantProps = VariantProps<typeof circularProgress>;
export type CircularProgressSlots = keyof ReturnType<typeof circularProgress>;

export {circularProgress};
