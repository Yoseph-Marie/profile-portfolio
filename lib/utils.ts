import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function withBasePath(path: string) {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:") || path.startsWith("#")) {
    return path
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  return basePath ? `${basePath}/${normalizedPath}` : `/${normalizedPath}`
}