import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Note from "./pages/note/Note";
import PageNotFound from "./pages/not-found/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import Signin from "./components/auth/signin/Signin";
import Signup from "./components/auth/signup/Signup";
import Modal from "./components/modal/Modal";
import "./App.css"
import ConfirmModal from "./components/modal/ConfirmModal";


function App() {
	const [modalOpen, setModalOpen] = useState(false);
	// const [confirmModalOpen, setConfirmModalOpen] = useState(false);
	const token = localStorage.token;

	return (
		<>
			<div className="main-layout">
				<Header />
				<main>
					{modalOpen && <Modal setOpenModal={setModalOpen} open={modalOpen} />}
					{/* {confirmModalOpen &&
						<ConfirmModal confirm={{ confirmDelete, setConfirmDelete }}
							setOpenConfirmModal={setConfirmModalOpen}
							open={confirmModalOpen}
						/>
					} */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/note/:id" element={<Note />} />
						<Route path="/dashboard"
							element={token ?
								<Dashboard openModal={setModalOpen} /> :
								<Navigate replace to="/signin" />
							}
						/>
						<Route path="/signin" element={<Signin />} />
						<Route path="/signup" element={<Signup />} />

						{/* 404 page not found */}
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
