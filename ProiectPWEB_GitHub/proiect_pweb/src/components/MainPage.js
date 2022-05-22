import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Styles.module.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import IsAuthAndRole from './IsAuthAndRole';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	let navigate = useNavigate();
	return(!isLoading &&
	<div class={styles.mainbackground}>
		<div class={styles.topnav}>
			{isAuthenticated ? <></> :<LoginButton />}
			{isAuthenticated ? <LogoutButton /> : <></>}
			<button class={styles.btn} onClick={() => {
                    navigate("/Contact");
                }}>Contact</button>
			<IsAuthAndRole />	
		</div>
		<div class={styles.mainpagebox}>
			<h2> Log in to view news about the war in Ukraine and to donate to fundraisers</h2>
		</div>
	</div>
	)
}

export default MainPage;