import { CreateTransitionPropsType } from '../style.utils'

export interface ButtonProps {
  onClick: () => void
  type: 'button' | 'submit' | 'reset'
  variant: 'primary' | 'secondary'
  fullWidth?: boolean
}

export type ButtonStyleProps = CreateTransitionPropsType<Pick<ButtonProps, 'variant' | 'fullWidth'>>
