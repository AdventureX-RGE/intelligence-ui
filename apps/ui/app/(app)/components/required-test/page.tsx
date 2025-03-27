"use client"

import { Header } from "@/components/header"
import { Container, Heading } from "ui"
import {
  Checkbox,
  CheckboxGroup,
  ComboBox,
  DateField,
  NumberField,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Textarea,
  TimeField,
} from "ui"

export default function RequiredTestPage() {
  return (
    <div>
      <Header>
        <span className="text-fg tracking-tight">Required Fields</span>
        <span className="text-muted-fg tracking-tight"> Test</span>
      </Header>
      <div className="bg-muted/35 py-10 lg:py-16">
        <Container>
          <div className="grid gap-10">
            <div>
              <Heading level={2} className="mb-6">
                Text Input Components
              </Heading>
              <div className="grid gap-8 md:grid-cols-2">
                <TextField
                  label="Required Text Field"
                  isRequired={true}
                  placeholder="Type here..."
                />
                <TextField label="Optional Text Field" placeholder="Type here..." />

                <Textarea label="Required Textarea" isRequired={true} placeholder="Type here..." />
                <Textarea label="Optional Textarea" placeholder="Type here..." />

                <NumberField
                  label="Required Number Field"
                  isRequired={true}
                  placeholder="Enter a number"
                />
                <NumberField label="Optional Number Field" placeholder="Enter a number" />
              </div>
            </div>

            <div>
              <Heading level={2} className="mb-6">
                Select Components
              </Heading>
              <div className="grid gap-8 md:grid-cols-2">
                <Select
                  label="Required Select"
                  isRequired={true}
                  placeholder="Please select an option"
                >
                  <Select.Trigger />
                  <Select.List>
                    <Select.Option>Option 1</Select.Option>
                    <Select.Option>Option 2</Select.Option>
                  </Select.List>
                </Select>

                <Select label="Optional Select" placeholder="Please select an option">
                  <Select.Trigger />
                  <Select.List>
                    <Select.Option>Option 1</Select.Option>
                    <Select.Option>Option 2</Select.Option>
                  </Select.List>
                </Select>

                <ComboBox label="Required ComboBox" isRequired={true} placeholder="Select or type">
                  <ComboBox.Input />
                  <ComboBox.List>
                    <ComboBox.Option>Option 1</ComboBox.Option>
                    <ComboBox.Option>Option 2</ComboBox.Option>
                  </ComboBox.List>
                </ComboBox>

                <ComboBox label="Optional ComboBox" placeholder="Select or type">
                  <ComboBox.Input />
                  <ComboBox.List>
                    <ComboBox.Option>Option 1</ComboBox.Option>
                    <ComboBox.Option>Option 2</ComboBox.Option>
                  </ComboBox.List>
                </ComboBox>
              </div>
            </div>

            <div>
              <Heading level={2} className="mb-6">
                Date & Time Components
              </Heading>
              <div className="grid gap-8 md:grid-cols-2">
                <DateField label="Required Date Field" isRequired={true} />

                <DateField label="Optional Date Field" />

                <TimeField label="Required Time Field" isRequired={true} />

                <TimeField label="Optional Time Field" />
              </div>
            </div>

            <div>
              <Heading level={2} className="mb-6">
                Checkbox & Radio Components
              </Heading>
              <div className="grid gap-8 md:grid-cols-2">
                <CheckboxGroup label="Required Checkbox Group" isRequired={true}>
                  <Checkbox label="Option 1" />
                  <Checkbox label="Option 2" />
                </CheckboxGroup>

                <CheckboxGroup label="Optional Checkbox Group">
                  <Checkbox label="Option 1" />
                  <Checkbox label="Option 2" />
                </CheckboxGroup>

                <RadioGroup label="Required Radio Group" isRequired={true}>
                  <Radio label="Option 1" value="1" />
                  <Radio label="Option 2" value="2" />
                </RadioGroup>

                <RadioGroup label="Optional Radio Group">
                  <Radio label="Option 1" value="1" />
                  <Radio label="Option 2" value="2" />
                </RadioGroup>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
