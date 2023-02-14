import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Note from "./pages/note/Note";
import PageNotFound from "./pages/not-found/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import Signin from "./components/auth/signin/Signin";
import Signup from "./components/auth/signup/Signup";
import { useState } from "react";
import Modal from "./components/modal/Modal";


function App() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<Header />
			<main>
				{modalOpen && <Modal setOpenModal={setModalOpen} open={modalOpen} />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/note" element={<Note />} />
					<Route path="/dashboard" element={<Dashboard openModal={setModalOpen} />} />
					<Route path="/signin" element={<Signin />} />
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
