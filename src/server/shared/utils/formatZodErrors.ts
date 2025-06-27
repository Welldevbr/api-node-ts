import { ZodIssue } from 'zod'

type TIssue = Record<string, string>

export function formatZodErrors(issues: ZodIssue[]): TIssue {
  return issues.reduce((acc, { path, message }) => {
    const field = path[0]

    if (!!field) acc[String(field)] = message

    return acc
  }, {} as TIssue)
}
