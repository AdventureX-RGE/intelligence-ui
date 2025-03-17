import { useState } from "react"
import type { Key } from "react-aria-components"
import { InputPhone } from "ui"

export default function InputPhoneDemo() {
  const [phone, setPhone] = useState<Key | null>(null)

  return (
    <div>
      <InputPhone value={phone} onChange={setPhone} isRequired />
    </div>
  )
}
