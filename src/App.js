import 'styles/App.css';
import { AppRoutes } from "components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserData, getAllUsers, getExplorePosts } from "common/services";

function App() {
	const dispatch = useDispatch();
	const authToken = localStorage.getItem("authToken");

	// Persisting user Data on reload of any page.
	useEffect(() => {
		if(authToken) {
			dispatch(getUserData(authToken));
			dispatch(getAllUsers());
			dispatch(getExplorePosts());
		}
	}, [authToken]);

	return (
		<div className="App">
			<ToastContainer
				className="toast-alerts z-20"
				position="bottom-right"
				autoClose={1000}
				draggable
				hideProgressBar={false}
				pauseOnHover
				pauseOnFocusLoss
				newestOnTop={true}
			/>
			<AppRoutes />
		</div>
	);
}

export default App;
