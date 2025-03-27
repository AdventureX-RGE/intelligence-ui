"use client"

import { IconCalendarDays } from "justd-icons"
import {
  DatePicker as DatePickerPrimitive,
  type DatePickerProps as DatePickerPrimitiveProps,
  type DateValue,
  type DialogProps,
  type PopoverProps,
  type ValidationResult,
} from "react-aria-components"

import { cn } from "@/utils/classes"
import type { DateDuration } from "@internationalized/date"
import { Button } from "./button"
import { Calendar } from "./calendar"
import { DateInput } from "./date-field"
import { Description, FieldError, FieldGroup, Label } from "./field"
import { Popover } from "./popover"
import { composeTailwindRenderProps } from "./primitive"
import { RangeCalendar } from "./range-calendar"
import { Typography } from "./typography"

interface DatePickerOverlayProps
  extends Omit<DialogProps, "children" | "className" | "style">,
    Omit<PopoverProps, "children" | "className" | "style"> {
  className?: string | ((values: { defaultClassName?: string }) => string)
  children?: React.ReactNode
  closeButton?: boolean
  range?: boolean
  visibleDuration?: DateDuration
  pageBehavior?: "visible" | "single"
}

const DatePickerOverlay = ({
  visibleDuration = { months: 1 },
  closeButton = true,
  pageBehavior = "visible",
  range,
  ...props
}: DatePickerOverlayProps) => {
  return (
    <Popover.Content
      isDismissable={false}
      showArrow={false}
      className={cn(
        "flex min-w-auto max-w-none snap-x justify-center p-4 sm:min-w-[16.5rem] sm:p-2 sm:pt-3",
        visibleDuration?.months === 1 ? "sm:max-w-2xs" : "sm:max-w-none",
      )}
      {...props}
    >
      {range ? (
        <RangeCalendar pageBehavior={pageBehavior} visibleDuration={visibleDuration} />
      ) : (
        <Calendar />
      )}
      {closeButton && (
        <div className="mx-auto flex w-full max-w-[inherit] justify-center py-2.5 sm:hidden">
          <Popover.Close shape="circle" className="w-full">
            Close
          </Popover.Close>
        </div>
      )}
    </Popover.Content>
  )
}

const DatePickerIcon = () => (
  <Button
    size="square-petite"
    intent="plain"
    className="mr-1 h-7 w-8 rounded outline-offset-0hover:bg-transparent pressed:bg-transparent **:data-[slot=icon]:text-muted-fg"
  >
    <IconCalendarDays aria-hidden className="ml-2 group-open:text-fg" />
  </Button>
)

interface DatePickerProps<T extends DateValue> extends DatePickerPrimitiveProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  leftDescription?: React.ReactNode
  rightDescription?: React.ReactNode
}

const DatePicker = <T extends DateValue>({
  label,
  className,
  description,
  errorMessage,
  leftDescription,
  rightDescription,
  ...props
}: DatePickerProps<T>) => {
  return (
    <DatePickerPrimitive
      {...props}
      className={composeTailwindRenderProps(className, "group flex w-full flex-col gap-y-1")}
    >
      {label && 
        <Typography as="div">
          <Label isRequired={props.isRequired}>{label}</Label>
        </Typography>
      }
      <FieldGroup className="min-w-40 h-10">
        <DateInput className="w-full px-2 text-base sm:text-sm" />
        <DatePickerIcon />
      </FieldGroup>
      {description && 
        <Typography as="div">
          <Description>{description}</Description>
        </Typography>
      }
      
      {(leftDescription || errorMessage || rightDescription) && (
        <Typography as="div">
          <div className="mt-1 flex justify-between text-sm text-muted-fg">
            <div>{errorMessage ? <FieldError>{errorMessage}</FieldError> : leftDescription}</div>
            <div>{rightDescription}</div>
          </div>
        </Typography>
      )}
      
      <DatePickerOverlay />
    </DatePickerPrimitive>
  )
}
export type { DatePickerProps, DateValue, ValidationResult }
export { DatePicker, DatePickerIcon, DatePickerOverlay }