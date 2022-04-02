import React, { useCallback, useState } from "react";
import style from "../Aside.module.css"
import { BsInfoCircleFill, BsJournalText } from "react-icons/bs";
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
				ariaHideApp={false}
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
				<div className={style.ModalContentText}>
					<p>Добро пожаловать в реализацию тестового задания для
						отбора на стажировку (Web-мессенджер ВКонтакте, 2 этап, 2022)</p>
					<p>Интерфейс поиска имеет следующие правила:</p>
						<ul>
							<li>для успешнего поиска необходимо первым словом ввести "/gif"</li>
							<li>все слова, кроме первого, будут поисковым запросом</li>
							<li>если последнее слово имеет вид "#[number]", то загружаться будет не первая страница,
								а страница с номером [number], а слово "#[number]" не войдёт в поисковый запрос</li>
							<li>не забывайте разделять слова пробелами!</li>
						</ul>
					<IconContext.Provider value={{ color: "blue" }}>
						<p><BsInfoCircleFill style={{display:"inline-block", marginBottom:'-4px'}}/> &ndash; общее описание
							проекта, как можно было догадаться :)</p>
						<p><BsJournalText style={{display:"inline-block", marginBottom:'-4px'}}/> &ndash; журнал (лог),
						в котором отображаются даты отправок гифок вместе с их <b>id</b></p>
					</IconContext.Provider>
					<p>В качестве хранилища дат отправки используется контекст React'а. Можно было бы использовать и
						localStorage, но разве есть какая-то разница в рамках реализации тестового задания?</p>
				</div>
			</Modal>
		</>
	);
}
