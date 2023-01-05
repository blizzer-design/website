import cx from 'classnames'
import { type FunctionComponent, type ReactNode } from 'react'

export type Props = {
  children: ReactNode
  width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Container: FunctionComponent<Props> = ({
  width = 'lg',
  children,
}) => {
  return (
    <div
      className={cx('mx-auto w-full px-8', {
        'max-w-screen-sm': width === 'sm',
        'max-w-screen-md': width === 'md',
        'max-w-screen-lg': width === 'lg',
        'max-w-screen-xl': width === 'xl',
        'max-w-screen-2xl': width === '2xl',
      })}
    >
      {children}
    </div>
  )
}
