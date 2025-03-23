"use client"

import { useState } from "react"

import type { TextInputDOMProps } from "@react-types/shared"
import { IconEye, IconEyeClosed } from "justd-icons"
import {
  Button as ButtonPrimitive,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps,
} from "react-aria-components"

import {FieldError, FieldProps} from "./field"
import { Description, FieldGroup, Input, Label } from "./field"
import { Loader } from "./loader"
import { composeTailwindRenderProps } from "./primitive"

type InputType = Exclude<TextInputDOMProps["type"], "password">

interface BaseTextFieldProps extends TextFieldPrimitiveProps, FieldProps {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  isPending?: boolean
  className?: string
  leftDescription?: React.ReactNode
  rightDescription?: React.ReactNode
}

interface RevealableTextFieldProps extends BaseTextFieldProps {
  isRevealable: true
  type: "password"
}

interface NonRevealableTextFieldProps extends BaseTextFieldProps {
  isRevealable?: never
  type?: InputType
}

type TextFieldProps = RevealableTextFieldProps | NonRevealableTextFieldProps

const TextField = ({
                     placeholder,
                     label,
                     description,
                     errorMessage,
                     prefix,
                     suffix,
                     isPending,
                     className,
                     isRevealable,
                     type,
                     leftDescription,
                     rightDescription,
                     ...props
                   }: TextFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [autoError, setAutoError] = useState<string | null>(null)

  const inputType = isRevealable ? (isPasswordVisible ? "text" : "password") : type

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const handleInvalid: React.FormEventHandler<HTMLInputElement> = (e) => {
    const validationMessage = (e.target as HTMLInputElement).validationMessage
    setAutoError(validationMessage)
  }

  const handleInput: React.FormEventHandler<HTMLInputElement> = (e) => {
    const value = (e.target as HTMLInputElement).value
    if (value && autoError) {
      setAutoError(null)
    }
  }

  return (
      <TextFieldPrimitive
          type={inputType}
          {...props}
          className={composeTailwindRenderProps(className, "group flex flex-col gap-y-1")}
      >
        {!props.children ? (
            <>
              {label && <Label isRequired={props.isRequired}>{label}</Label>}
              <FieldGroup
                  isDisabled={props.isDisabled}
                  isInvalid={!!errorMessage || !!autoError}
                  data-loading={isPending ? "true" : undefined}
              >
                {prefix && typeof prefix === "string" ? (
                    <span className="ml-2 text-muted-fg">{prefix}</span>
                ) : (
                    prefix
                )}
                <Input
                    placeholder={placeholder}
                    onInvalid={handleInvalid}
                    onInput={handleInput}
                />
                {isRevealable ? (
                    <ButtonPrimitive
                        type="button"
                        aria-label="Toggle password visibility"
                        onPress={handleTogglePasswordVisibility}
                        className="relative mr-1 grid shrink-0 place-content-center rounded-sm border-transparent outline-hidden data-focus-visible:*:data-[slot=icon]:text-primary *:data-[slot=icon]:text-muted-fg"
                    >
                      {isPasswordVisible ? <IconEyeClosed /> : <IconEye />}
                    </ButtonPrimitive>
                ) : isPending ? (
                    <Loader variant="spin" />
                ) : suffix ? (
                    typeof suffix === "string" ? (
                        <span className="mr-2 text-muted-fg">{suffix}</span>
                    ) : (
                        suffix
                    )
                ) : null}
              </FieldGroup>

              {description && <Description>{description}</Description>}

              {(leftDescription || autoError || rightDescription) && (
                  <div className="mt-1 flex justify-between text-sm text-muted-fg">
                    <div>{autoError ? <FieldError>{autoError}</FieldError> : leftDescription}</div>
                    <div>{rightDescription}</div>
                  </div>
              )}
            </>
        ) : (
            props.children
        )}
      </TextFieldPrimitive>
  )
}

export type { TextFieldProps }
export { TextField }
