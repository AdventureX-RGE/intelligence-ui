import { ListSites } from "@/app/(app)/showcase/partials/list-sites"
import { Header } from "@/components/header"
import { siteConfig } from "@/resources/config/site"
import type { Metadata } from "next"
import { Container } from "ui"

export const metadata: Metadata = {
  title: "Showcase",
  description: "A showcase of justd components, tools, and more.",
  metadataBase: new URL("https://ui.adventure-x.org"),
  applicationName: siteConfig.name,
}

export default async function Page() {
  // const res = await fetch(
  //   "https://raw.githubusercontent.com/justdlabs/showcase/refs/heads/main/sites.json",
  //   {
  //     next: { revalidate: 3600 },
  //   },
  // )
  // const sites = await res.json()
  return (
    <>
      <Header>
        <span className="tracking-tight">Show</span>
        <span className="text-muted-fg tracking-tight">case</span>
      </Header>
      <Container className="py-4 sm:py-16">
        <ListSites sites={[]} />
      </Container>
    </>
  )
}
