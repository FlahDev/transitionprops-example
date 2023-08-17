import styled, { css } from 'styled-components'

import { ButtonStyleProps } from './types'

export const StyledButton = styled.button<ButtonStyleProps>`
  ${({ $variant, $fullWidth }) => css`
    background-color: ${$variant === 'primary' ? 'blue' : 'orange'};
    width: ${$fullWidth ? '100%' : 'auto'};
  `};
`
