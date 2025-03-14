import { Suspense } from "react"

import { Header } from "@/components/header"
import { siteConfig } from "@/resources/config/site"
import type { Metadata } from "next"
import { Container, Loader } from "ui"

import { IconsList } from "./partials/icons-list"

export const metadata: Metadata = {
  title: "Intelligence-UI Icons",
  description:
    " A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user experience of your web applications. ",
  metadataBase: new URL("https://ui.adventure-x.org"),
  applicationName: siteConfig.name,
  keywords: [
    "Intelligence-UI Icons",
    "Tailwind CSS",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "Intelligence-UI",
    "Next.js 15",
    "React Aria",
    "React Aria Components",
    "Server Components",
    "React Components",
    "Next UI Components",
    "UI Design System",
    "UI for Laravel Inertia",
    "Laravel Inertia UI",
    "Laravel Inertia Components",
    "Laravel Inertia UI Components",
    "Laravel Inertia UI Kit",
    "Laravel Inertia UI Library",
    "Laravel Inertia UI Framework",
    "Laravel Inertia Intelligence-UI",
    "Laravel Intelligence-UI",
    "Intelligence-UI Components",
    "Intelligence-UI UI Components",
    "Intelligence-UI UI Kit",
    "Intelligence-UI UI Library",
    "Intelligence-UI UI Framework",
    "Intelligence-UI Laravel Inertia",
    "Intelligence-UI Laravel",
    "Intelligence-UI Inertia",
  ],
  authors: [
    {
      name: "irsyadadl",
      url: "https://x.com/irsyadadl",
    },
  ],
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    query: string
    t: "solid" | "regular"
  }>
}) {
  const { query, t } = await searchParams
  return (
    <>
      <Header>
        Ico
        <span className="text-muted-fg">ns</span>
      </Header>
      <Container className="py-4 sm:py-16">
        <Suspense
          fallback={
            <div className="flex min-h-96 items-center justify-center">
              <Loader />
            </div>
          }
        >
          <IconsList searchParams={{ query, t }} />
        </Suspense>
      </Container>
    </>
  )
}
