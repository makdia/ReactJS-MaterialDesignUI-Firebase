import { BrowserRouter as Router, Link } from "react-router-dom";

const LayoutFooter = () => {
    return (
		<footer style={{ textAlign: 'center' }}>
			<p>© 2022 SJI, LLC. All rights reserved.</p>
			<p>
			    <a href="/terms-and-conditions">Terms & Conditions</a> | <a href="/privacy-policy">Privacy Policy</a>
			</p> 
		</footer>
	)
}
export default LayoutFooter
