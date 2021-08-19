import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LoginImage from '../assets/images/login-image.png'
import Outlines from '../assets/images/outlines.png'

const FormContainer = ({children}) => {
	return (
		<Container>
			<Row className='justify-content-md-center'>
				<img className="custom-pos-outline" src={Outlines} alt='Medical Marketing' />
				<Col xs={12} md={6} className='login-image'>
					<div className="image-wrapper">
						<img src={LoginImage} alt="Medical Marketing" />
					</div>
				</Col>
				<Col xs={12} md={6}>{children}</Col>
			</Row>
		</Container>
	)
}

export default FormContainer