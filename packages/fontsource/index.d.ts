type PatikaFontWeight = 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type PatikaFontStyle =
  | "ExtraLight"
  | "Light"
  | "Regular"
  | "Medium"
  | "SemiBold"
  | "Bold"
  | "ExtraBold"
  | "Black"

declare module "*.woff2" {
  const content: string
  export default content
}

declare module "*.woff" {
  const content: string
  export default content
}

declare module "*/css/Patika*.css" {
  const content: string
  export default content
}

type FontPath = string

export interface FontWeight {
  weight: number
  style: string
  woff2: FontPath
  woff: FontPath
}

export interface PatikaFont {
  extraLight: FontWeight
  light: FontWeight
  regular: FontWeight
  medium: FontWeight
  semiBold: FontWeight
  bold: FontWeight
  extraBold: FontWeight
  black: FontWeight
}

export const patika: PatikaFont
