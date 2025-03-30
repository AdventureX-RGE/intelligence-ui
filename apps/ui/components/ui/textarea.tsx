"use client"

import { useEffect, useState } from "react"
import {
  TextArea as TextAreaPrimitive,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps,
  type ValidationResult,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { Description, FieldError, Label } from "./field"
import { composeTailwindRenderProps, focusStyles } from "./primitive"
import { Typography } from "./typography"

const textareaStyles = tv({
  extend: focusStyles,
  base: "field-sizing-content overflow-wrap-anywhere max-h-96 min-h-16 w-full min-w-0 whitespace-pre-wrap break-words rounded-lg border border-input px-2.5 py-2 pb-6 text-base shadow-xs outline-hidden transition duration-200 disabled:opacity-50 sm:text-sm",
})

interface TextareaProps extends TextFieldPrimitiveProps {
  autoSize?: boolean
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  className?: string
  ref?: React.Ref<HTMLDivElement>
  showCharacterCount?: boolean
  maxLength?: number
}

const Textarea = ({
  className,
  placeholder,
  label,
  description,
  errorMessage,
  ref,
  showCharacterCount,
  maxLength,
  ...props
}: TextareaProps) => {
  const [currentLength, setCurrentLength] = useState(props.value?.toString().length || 0)

  useEffect(() => {
    setCurrentLength(props.value?.toString().length || 0)
  }, [props.value])

  const getCountText = () => {
    if (maxLength) {
      return `${currentLength}/${maxLength}`
    }
    return `${currentLength}字`
  }

  return (
    <TextFieldPrimitive
      ref={ref}
      {...props}
      className={composeTailwindRenderProps(className, "group flex flex-col gap-y-1.5")}
    >
      {label && <Label isRequired={props.isRequired}>{label}</Label>}
      <div className="relative">
        <Typography as="div">
          <TextAreaPrimitive
            placeholder={placeholder}
            maxLength={maxLength}
            className={composeRenderProps(className, (className, renderProps) =>
              textareaStyles({
                ...renderProps,
                className,
              }),
            )}
            style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
          />
        </Typography>
        {showCharacterCount && currentLength > 0 && (
          <div className="pointer-events-none absolute right-2.5 bottom-1 select-none text-muted-fg text-xs">
            {getCountText()}
          </div>
        )}
      </div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextFieldPrimitive>
  )
}

export type { TextareaProps }
export { Textarea }
