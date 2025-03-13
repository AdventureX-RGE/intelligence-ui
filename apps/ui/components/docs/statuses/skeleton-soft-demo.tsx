"use client"

import { Card, Skeleton } from "ui"

export default function SkeletonSoftDemo() {
  return (
    <Card className="p-4">
      <div className="flex gap-2">
        <Skeleton className="size-8" />
        <div className="space-y-1">
          <Skeleton soft className="h-3.5 w-20" />
          <Skeleton soft className="h-3.5 w-48" />
        </div>
      </div>
    </Card>
  )
}
