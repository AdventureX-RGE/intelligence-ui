"use client"

import {
  IconDotsHorizontal,
  IconLayoutAlignLeft,
  IconLayoutAlignTop,
  IconWindowVisit,
} from "justd-icons"
import { Breadcrumbs, Button, Menu } from "ui"

export default function BreadcrumbsMenuDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>

      <Breadcrumbs.Item separator>
        <Menu>
          <Button intent="plain" size="square-petite" className="-mx-1 h-6">
            <IconDotsHorizontal />
          </Button>
          <Menu.Content placement="bottom">
            <Menu.Item href="/docs/components/layouts/sidebar">
              <IconLayoutAlignLeft /> <Menu.Label>Sidebar</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/components/layouts/navbar">
              <IconLayoutAlignTop /> <Menu.Label>Navbar</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/components/overlays/modal">
              <IconWindowVisit /> <Menu.Label>Modal</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/components/collections/menu">
              <Menu.Label>Menu</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/components/charts/setting-up">
              <Menu.Label>Chart</Menu.Label>
            </Menu.Item>
            <Menu.Item href="/docs/components/collections/table">
              <Menu.Label>Table</Menu.Label>
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </Breadcrumbs.Item>

      <Breadcrumbs.Item>Navbar</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
