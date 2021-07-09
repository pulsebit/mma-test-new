import React from 'react'
import  { Link } from 'react-router-dom'
import {Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<>
			<Container fluid><hr className="footer-hr"/></Container>
			<footer className='site-footer'>
				<Container fluid>
					<Row>
						<Col sm={12} md={8} className="copyright">
							<div className="site-footer-wrapper">
								<div className="text-wrapper">
									<span>  &copy; Copyright 2021 Medical Marketing Group </span>
									<span> Designed & Built by SMRT Digital </span>
								</div>
							</div>
						</Col>
						<Col sm={12} md={4}>
							<div className="links">
								<Link to='#'>Link</Link>
								<Link to='#'>Link</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	)
}

export default Footer