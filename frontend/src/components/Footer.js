import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/footer.css';

const Footer = () => {

	const [date, setDate] = React.useState(new Date());

	return (
		<Container>
			<footer className='footer-container'>
				<div className='footer-icons'>
					<a
						href='https://github.com/SwastikArora23'
						aria-label='github account'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fab fa-github footer-icon' />
					</a>
					<a
						href='https://www.linkedin.com/in/swastik-arora-218a24136/'
						aria-label='linkedin account'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fab fa-linkedin-in footer-icon' />
					</a>
				</div>
				<div className='footer-copyright'>&copy;{date.getFullYear()} Kelloggs</div>
			</footer>
		</Container>
	);
};

export default Footer;
