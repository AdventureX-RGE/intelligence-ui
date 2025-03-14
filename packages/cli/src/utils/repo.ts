import { availableGrays } from "@/commands/change-gray"
import { error } from "@/utils/logging"

const REPO = "https://cdn.jsdelivr.net/gh/AdventureX-RGE/intelligence-ui/apps/ui"
const CDN_REPO = "/resources/styles/themes/zinc.css"
// const branchWorkingOn = isTailwind(3) ? "1.x" : "2.x"
// const BRANCH = "main";

const THEMES_URL = `${REPO}/resources/styles/themes`
/**
 *  This function is used to get the URL for the themes repo
 *  @param gray string
 *  @returns string
 */
export const getThemesRepoUrl = (gray: string): string => {
  if (!availableGrays.includes(gray)) {
    error(`Invalid gray provided: ${gray}`)
    process.exit(1)
  }

  const selectedGray = `${THEMES_URL}/${gray}.css`

  if (!selectedGray) {
    error("Failed to get the gray url")
    process.exit(1)
  }

  return selectedGray
}

/**
 *  This function is used to get the URL for a component
 *  @param componentName string
 *  @param type
 *  @returns string
 */
export const getRepoUrlForComponent = (
  componentName: string,
  type: "intelligence-ui" | "block",
) => {
  if (type === "block") {
    return `https://blocks.ui.adventure-x.org/api/registry/ui/${componentName}.tsx`
  }

  return `${REPO}/components/ui/${componentName}.tsx`
}

/**
 *  This function is used to get the URL for a utils
 *  @param componentName string
 *  @returns string
 */
export const getRepoUrlForUtils = (utilsName: string) => {
  return `${REPO}/utils/${utilsName}.ts`
}

/**
 *  This function is used to get the URL for the classes file
 *  @param file
 *  @returns string
 */
export const getUtilsFolder = (file: string): string => {
  const utils = `${REPO}/utils/${file}`
  if (!utils) {
    throw new Error("REPO_URL environment variable is not set")
  }
  return utils
}
