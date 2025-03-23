"use client"

import { Button, ChatInput, PromptInputAction, PromptInputActions, PromptInputTextarea } from "ui"
import { ArrowUp, Square } from "lucide-react"
import { useState } from "react"

export default function PromptInputBasic() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleValueChange = (value: string) => {
    setInput(value)
  }

  return (
    <ChatInput
      value={input}
      onValueChange={handleValueChange}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      className="w-full max-w-(--breakpoint-md)"
    >
      <PromptInputTextarea placeholder="Ask me anything..." />
      <PromptInputActions className="justify-end pt-2">
        <PromptInputAction tooltip={isLoading ? "Stop generation" : "Send message"}>
          <Button size="square-petite" onPress={handleSubmit} className="h-8 w-8 rounded-full">
            {isLoading ? (
              <Square className="size-5 fill-current" />
            ) : (
              <ArrowUp className="size-5" />
            )}
          </Button>
        </PromptInputAction>
      </PromptInputActions>
    </ChatInput>
  )
}
