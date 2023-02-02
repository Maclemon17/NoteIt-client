import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404/NotFound.Js";


function App() {
	return (
		<>
			
			<Routes>
				<Route path="/" element={<Home />} />


				{/* 404 page not found */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
