import { Selectionbox } from "ui"

export default function SelectionBoxDemo() {
  return (
    <Selectionbox className="flex" aria-label="Select items" selectionMode="multiple">
      <Selectionbox.Item title="Chinese" />
      <Selectionbox.Item title="Japanese" />
      <Selectionbox.Item title="English" />
      <Selectionbox.Item title="English" />
    </Selectionbox>
  )
}
