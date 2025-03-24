import { type VariantProps, tv } from "tailwind-variants"

const typographyStyles = tv({
  base: "",
  variants: {
    variant: {
      h1: "font-patika-medium text-[2rem] leading-[2.25rem]",
      h2: "font-patika-bold text-[1.5rem] leading-[2rem]",
      h3: "font-patika-medium text-[1.25rem] leading-[1.5rem]",
      paragraph: "font-patika-regular text-[1.25rem] leading-[1.75rem]",
      body: "font-patika-regular text-[1rem] leading-[1.5rem]",
      bodyEmphasized: "font-patika-medium text-[1rem] leading-[1.5rem]",
      button: "font-patika-medium text-[1rem] leading-[1.5rem]",
      note: "font-patika-regular text-[0.75rem] leading-[1.25rem]",
      caption: "font-orbix-regular text-[1rem] leading-[1.25rem]",
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

const Typography = ({ className, variant, as: Tag = "p", children, ...props }: TypographyProps) => {
  return (
    <Tag className={typographyStyles({ variant, className })} {...props}>
      {children}
    </Tag>
  )
}

Typography.displayName = "Typography"

export { Typography, typographyStyles }
