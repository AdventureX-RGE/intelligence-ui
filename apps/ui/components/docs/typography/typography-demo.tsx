import { Typography } from "@/components/ui/typography"

export default function TypographyDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="paragraph">Paragraph</Typography>
      <Typography variant="body">Body</Typography>
      <Typography variant="bodyEmphasized">Body Emphasized</Typography>
      <Typography variant="button" as="span">
        Button
      </Typography>
      <Typography variant="note">Note</Typography>
      <Typography variant="caption">Caption</Typography>
    </div>
  )
}
