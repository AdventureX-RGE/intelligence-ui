import { forwardRef } from "react"
import { type VariantProps, tv } from "tailwind-variants"

const typographyStyles = tv({
  base: "",
  variants: {
    variant: {
      h1: "font-patika-medium text-[2em] leading-[2.25em]",
      h2: "font-patika-regular text-[1.5em] leading-[2em]",
      h3: "font-patika-medium text-[1.25em] leading-[1.5em]",
      paragraph: "font-patika-regular text-[1.25em] leading-[1.75em]",
      body: "font-patika-regular text-[1em] leading-[1.5em]",
      bodyEmphasized: "font-patika-medium text-[1em] leading-[1.5em]",
      button: "font-patika-medium text-[1.25em] leading-[1.5em]",
      note: "font-patika-regular text-[0.875em] leading-[1.25em]",
      caption: "font-orbix-regular text-[1em] leading-[1.25em]",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
})

type TypographyProps = {
  className?: string
  variant?: VariantProps<typeof typographyStyles>["variant"]
  children?: React.ReactNode
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div"
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as: Tag = "p", children, ...props }, ref) => {
    return (
      <Tag className={typographyStyles({ variant, className })} {...props}>
        {children}
      </Tag>
    )
  },
)

Typography.displayName = "Typography"

export { Typography, typographyStyles }
