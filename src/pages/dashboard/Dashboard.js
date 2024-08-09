import React, { useEffect, useState } from 'react'
import NoteContainer from '../../components/notes/NoteContainer'
import styles from './dashboard.module.css'
import axios from 'axios'
import { deleteNoteRoute, profileRoute } from '../../utils/APIRoutes'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ConfirmModal from '../../components/modal/ConfirmModal'

const Dashboard = ({ openModal }) => {
	const [profileData, setProfileData] = useState(null);
	const token = localStorage.token;
	const navigate = useNavigate();

	const [confirmModalOpen, setConfirmModalOpen] = useState(false);
	const [noteId, setNoteId] = useState(undefined);


	const toastOptions = {
		position: "top-right",
		autoClose: 3000,
		pauseOnHover: true,
		theme: "dark",
	}

	useEffect(() => {
		if (!token) {
			console.log("no token");
			navigate("/signin");
		}

		async function authUser() {
			if (token)
				try {
					const response = await axios.get(profileRoute, {
						headers: {
							"Authorization": `Bearer ${token}`,
							"Accept": "application/json",
							"Content-Type": "application/json"
						}
					})
					// check 1f user is valid
					const { data, status } = await response.data;
					// console.log(response.data.status);
					if (status) {
						setProfileData(data);
						localStorage.setItem("profileData", JSON.stringify(data));
					}

				} catch (err) {
					const { data: error } = await err.response;
					if (error.message === "Bad or Expired Token") {
						toast.error("Session Expired", toastOptions);
						localStorage.removeItem("token");
						navigate("/signin");
					} else {
						toast.error(error.message, toastOptions)
					}

				}

		}

		authUser();
	}, [navigate, token]);

	// EDIT NO
	const editNote = (note) => {
		console.log("Edit.....", note);
		openModal(true)
	}

	// DELETE NOTE
	const deleteNote = async (noteId) => {
		try {
			const response = await axios.delete(`${deleteNoteRoute}/${noteId}`, {
				headers: {
					"Authorization": `Bearer ${token}`,
					"Accept": "application/json",
					"Content-Type": "application/json"
				}
			});
			
			const { data } = response;
			if (data.status) {
				toast.success("Note deleted", toastOptions);
				setConfirmModalOpen(false);
			}

		} catch (error) {
			console.log(error.message);
			toast.error("Unable to delete note", toastOptions)
		}
	}

	const onConfirm = (id) => {
		setNoteId(id);
		setConfirmModalOpen(true)
	}

	return (
		<section className={`${styles.dash}`}>
			<NoteContainer profileData={profileData}
				setOpenModal={openModal}
				edit={editNote}
				handleDelete={onConfirm}
			/>

			{confirmModalOpen &&
				<ConfirmModal setOpenConfirmModal={setConfirmModalOpen}
					deleteNote={deleteNote}
					noteId={noteId}
				/>
			}
			<ToastContainer />
		</section>
	)
}

export default Dashboard