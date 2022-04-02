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
				<button className={style.OpenButton} onClick={openModal}><BsInfoCircleFill /></button>
			</IconContext.Provider>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Info Modal"
				overlayClassName={style.InfoModalOverlay}
				className={style.InfoModalContent}
			>
				<button className={style.CloseButton} onClick={closeModal}>
					<IconContext.Provider value={{ color: "red", size: "1.5em" }}>
						<ImCancelCircle />
					</IconContext.Provider>
				</button>
				<p>Добро пожаловать в реализацию тестового задания для
					отбор на стажировку (Web-мессенджер ВКонтакте, 2 этап, 2022)</p>
				<p>Интерфейс поиска имеет следующие правила:</p>
					<ul>
						<li>для успешнего поиска необходимо первым словом ввести "/gif"</li>
						<li>не забывайте разделять слова пробелами!</li>
						<li>если последним словом имеет вид "#[number]", то загружаться будет не первая
						старница, а страница с номером [number]</li>
					</ul>
				<p>В качестве хранилища дат отправки используется контекст React'а. Можно было бы использовать и
				localStorage, но разве есть какая-то разница в рамках реализации тестового задания?</p>
			</Modal>
		</>
	);
}
