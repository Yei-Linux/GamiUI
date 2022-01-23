import classNames from 'classnames'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import React from 'react'
import { defaultTheme } from 'styles/tokens'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import Icon from '../Icon'
import * as S from './Pulser.styles'

interface IPulser extends IGeneralProps {
  /**
   * Content Pulser
   */
  children: React.ReactNode
  /**
   * Is active Pulser
   */
  isActive?: boolean
  /**
   * Is bloqued Pulser
   */
  isBloqued?: boolean
  /**
   * Border Pulser
   */
  borderColor: string
  /**
   * Progress Text
   */
  progressText: string
  /**
   * Background color
   */
  backgroundColor?: string
}

const Pulser = ({
  children,
  isActive = false,
  isBloqued = false,
  borderColor = defaultTheme.light.primary.jordyBlue,
  backgroundColor = defaultTheme.light.neutral[800],
  progressText,
  ...genericsProps
}: IPulser) => {
  return (
    <S.Pulser>
      <S.PulserContent>
        {isActive && <S.PulseTransition className="one" />}
        {isActive && <S.PulseTransition className="two" />}

        <S.PulserBody
          {...getGenericPropStyles(genericsProps)}
          className={classNames({
            bloqued: isBloqued,
            unbloqued: !isBloqued,
          })}
          $backgroundColor={backgroundColor}
          $borderColor={borderColor}
        >
          {children}
        </S.PulserBody>

        {isBloqued && (
          <S.PulserLock>
            <Icon fill="none" size="30px" name="sad" />
          </S.PulserLock>
        )}
      </S.PulserContent>
      <S.PulserProgress>{progressText}</S.PulserProgress>
    </S.Pulser>
  )
}

export default Pulser
