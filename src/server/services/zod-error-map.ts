import { z, ZodErrorMap, ZodIssueCode, ZodIssueOptionalMessage } from 'zod'

const errorMessages: Partial<Record<ZodIssueCode, string>> = {
  invalid_type: 'Campo obrigatório ou tipo inválido',
  too_small: 'Valor abaixo do mínimo permitido',
  too_big: 'Valor acima do máximo permitido',
  invalid_string: 'Formato de texto inválido',
  invalid_enum_value: 'Valor inválido para o campo',
  unrecognized_keys: 'Chaves não reconhecidas no objeto',
  invalid_union: 'Valor não corresponde a nenhum dos formatos esperados',
  invalid_literal: 'Valor literal inválido',
  custom: 'Valor inválido',
  invalid_arguments: 'Argumentos inválidos',
  invalid_return_type: 'Tipo de retorno inválido',
  not_multiple_of: 'O valor deve ser múltiplo de um número específico'
}

const ptBrErrorMap: ZodErrorMap = (issue: ZodIssueOptionalMessage, ctx) => {
  if (issue.code === 'too_small' && typeof issue.minimum === 'number') {
    if (issue.type === 'string') {
      return {
        message: `O texto deve ter pelo menos ${issue.minimum} caractere${issue.minimum > 1 ? 's' : ''}`
      }
    }
    return { message: `O valor deve ser maior ou igual a ${issue.minimum}` }
  }

  if (issue.code === 'too_big' && typeof issue.maximum === 'number') {
    if (issue.type === 'string') {
      return {
        message: `O texto deve ter no máximo ${issue.maximum} caractere${issue.maximum > 1 ? 's' : ''}`
      }
    }
    return { message: `O valor deve ser menor ou igual a ${issue.maximum}` }
  }

  return {
    message: errorMessages[issue.code] ?? ctx.defaultError
  }
}

z.setErrorMap(ptBrErrorMap)
