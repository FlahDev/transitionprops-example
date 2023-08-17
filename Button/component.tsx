import React from 'react'

import { ButtonProps } from './types'
import { StyledButton } from './styles'

export function Button({ variant, fullWidth, ...props }: ButtonProps) {
  return <StyledButton $variant={variant} $fullWidth={fullWidth} {...props} />
}
