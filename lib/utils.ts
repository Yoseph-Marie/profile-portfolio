import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function withBasePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  if (!basePath) {
    return `/${normalizedPath}`
  }

  return `${basePath}/${normalizedPath}`
}