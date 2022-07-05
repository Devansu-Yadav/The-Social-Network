import 'styles/App.css';
import { AppRoutes } from "components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <ToastContainer 
				className="toast-alerts"
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
