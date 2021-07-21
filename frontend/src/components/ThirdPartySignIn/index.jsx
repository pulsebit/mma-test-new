import React from 'react'
import * as S from './style'
import Facebook from './Facebook'
import Google from './Google'

export default function Index({ redirectTo, googleButtonText, fbButtonText }) {
  return (
    <S.ThirdParty>
      <Google redirectTo={redirectTo} buttonText={googleButtonText} />
      <Facebook redirectTo={redirectTo} buttonText={fbButtonText} />
    </S.ThirdParty>
  )
}
