import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Note from "./pages/note/Note";
import PageNotFound from "./pages/not-found/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import Signin from "./components/auth/signin/Signin";
import Signup from "./components/auth/signup/Signup";


function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/note" element={<Note />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/login" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					{/* 404 page not found */}
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
