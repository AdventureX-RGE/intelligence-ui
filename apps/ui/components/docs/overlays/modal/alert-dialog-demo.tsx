"use client"

import { Button, Modal, buttonStyles } from "ui"

export default function AlertDialogDemo() {
  return (
    <Modal>
      <Modal.Trigger className={buttonStyles({ intent: "danger" })}>Delete</Modal.Trigger>
      <Modal.Content role="alertdialog">
        <Modal.Header>
          <Modal.Title>Delete file</Modal.Title>
          <Modal.Description>
            This will permanently delete the selected file. Continue?
          </Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button intent="danger">Continue</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
