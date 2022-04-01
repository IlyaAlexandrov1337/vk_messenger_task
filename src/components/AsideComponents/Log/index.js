import React, {useCallback, useContext, useState} from "react";
import {Context} from "../../../context";
import { BsJournalText } from "react-icons/bs";
import style from "../Aside.module.css"
import Modal from "react-modal";
import  {IconContext } from "react-icons";
import { ImCancelCircle } from "react-icons/im";

export default function Log() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [context] = useContext(Context);

	const openModal= useCallback(() => {
		setIsOpen(true);
	}, [])

	const closeModal= useCallback(() => {
		setIsOpen(false);
	}, [])

	return (
		<>
			<IconContext.Provider value={{ color: "blue", size: "2em" }}>
			<button onClick={openModal}><BsJournalText /></button>
			</IconContext.Provider>
			<Modal
				isOpen={modalIsOpen}
				ariaHideApp={false}
				onRequestClose={closeModal}
				contentLabel="Log Modal"
				overlayClassName={style.LogModalOverlay}
				className={style.LogModalContent}
			>

					<button className={style.Button} onClick={closeModal}>
						<IconContext.Provider value={{ color: "red", size: "1.5em" }}>
							<ImCancelCircle />
						</IconContext.Provider>
					</button>
					<div className={style.LogModalContentText}>
					{Object.entries(context).map(message =>
						<div>Гифка с id={message[0]} отправлена {message[1]}</div>)}</div>
			</Modal>
		</>
	);
}
