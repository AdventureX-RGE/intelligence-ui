"use client";

import { useEffect, useState } from "react";
import {
  composeRenderProps,
  TextArea as TextAreaPrimitive,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps,
  type ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { Description, FieldError, Label } from "./field";
import { composeTailwindRenderProps, focusStyles } from "./primitive";

const textareaStyles = tv({
  extend: focusStyles,
  base:
    "field-sizing-content max-h-96 min-h-16 w-full min-w-0 rounded-lg border border-input px-2.5 py-2 pb-6 text-base shadow-xs outline-hidden transition duration-200 disabled:opacity-50 sm:text-sm break-words whitespace-pre-wrap overflow-wrap-anywhere",
});

interface TextareaProps extends TextFieldPrimitiveProps {
  autoSize?: boolean;
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  showCharacterCount?: boolean;
  maxLength?: number;
  height?: string | number;
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
  height,
  ...props
}: TextareaProps) => {
  const [currentLength, setCurrentLength] = useState(
    props.value?.toString().length || 0,
  );

  useEffect(() => {
    setCurrentLength(props.value?.toString().length || 0);
  }, [props.value]);

  const getCountText = () => {
    if (maxLength) {
      return `${currentLength}/${maxLength}`;
    }
    return `${currentLength}字`;
  };

  return (
    <TextFieldPrimitive
      ref={ref}
      {...props}
      className={composeTailwindRenderProps(
        className,
        "group flex flex-col gap-y-1.5",
      )}
    >
      {label && <Label isRequired={props.isRequired}>{label}</Label>}
      <div className="relative">
        <TextAreaPrimitive
          placeholder={placeholder}
          maxLength={maxLength}
          className={composeRenderProps(className, (className, renderProps) =>
            textareaStyles({
              ...renderProps,
              className,
            }))}
          style={{
            height: height ?? undefined,
            wordWrap: "break-word",
            overflowWrap: "break-word",
            ...props.style,
          }}
        />
        {showCharacterCount && currentLength > 0 && (
          <div className="absolute bottom-3 right-3 text-xs text-muted-fg select-none pointer-events-none">
            {getCountText()}
          </div>
        )}
      </div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </TextFieldPrimitive>
  );
};

export type { TextareaProps };
export { Textarea };
