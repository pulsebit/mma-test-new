import React from 'react'
import { ReactComponent as WarningSvg } from 'icons/warning.svg'
import styled from 'styled-components'

export default function Alert(props) {
  return (
    <AlertWrapper>
      <WarningSvg />
      <AlertType>{props.type}</AlertType>
      <AlertMessage>{props.message}</AlertMessage>
      <AlertButton className="btn" onClick={props.onRetry}>Try again</AlertButton>
    </AlertWrapper>
  )
}

const AlertWrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    height: 80px;
  }
`;

const AlertType = styled.h4`
  font-size: 1.5em;
  margin: 16px 0;
  font-weight: 600;
`

const AlertMessage = styled.p`
  color: #575f71bf;
`;

const AlertButton = styled.button`
    background: #ff6b6b;
    margin-top: 20px;
    color: #fff;
    font-weight: 600;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
`
