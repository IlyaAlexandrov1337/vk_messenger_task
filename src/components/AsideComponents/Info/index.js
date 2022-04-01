import React, { useCallback, useState } from "react";
import style from "../Aside.module.css"
import { BsInfoCircleFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { IconContext } from "react-icons";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function Info() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const openModal= useCallback(() => {
		setIsOpen(true);
	}, [])

	const closeModal= useCallback(() => {
		setIsOpen(false);
	}, [])

	return (
		<>
			<IconContext.Provider value={{ color: "blue", size: "2em" }}>
				<button onClick={openModal}><BsInfoCircleFill /></button>
			</IconContext.Provider>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Info Modal"
				overlayClassName={style.InfoModalOverlay}
				className={style.InfoModalContent}
			>
				<button className={style.Button} onClick={closeModal}>
					<IconContext.Provider value={{ color: "red", size: "1.5em" }}>
						<ImCancelCircle />
					</IconContext.Provider>
				</button>
				<div className={style.ModalContentText}>
				<p>Добро пожаловать в реализацию тестового задания для
					отбор на стажировку (Web-мессенджер ВКонтакте, 2 этап, 2022)</p>
				<p>Интерфейс поиска имеет следующие правила:
					<ul>
						<li>для успешнего поиска необходимо первым словом необходимо ввести "/gif"</li>
						<li>не забывайте разделять слова пробелами!</li>
						<li>если последним словом указано слово вида "#[number]", то загружаться будет не первая
						старница, а страница с  соответствующим номером</li>
					</ul>
				</p>
				</div>
			</Modal>
		</>
	);
}
