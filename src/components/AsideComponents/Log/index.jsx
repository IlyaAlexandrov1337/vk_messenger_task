import React, {useCallback, useContext, useState} from 'react';
import {BsJournalText} from 'react-icons/bs';
import Modal from 'react-modal';
import {IconContext} from 'react-icons';
import {ImCancelCircle} from 'react-icons/im';
import style from '../Aside.module.css';
import Context from '../../../context';

const pad = n => (n < 10 ? `0${n}` : n);

export default function Log() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [context] = useContext(Context);

	const openModal = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	return (
		<>
			<IconContext.Provider value={{color: 'blue', size: '2em'}}>
				<button className={style.OpenButton} onClick={openModal}><BsJournalText /></button>
			</IconContext.Provider>
			<Modal
				isOpen={modalIsOpen}
				ariaHideApp={false}
				onRequestClose={closeModal}
				contentLabel="Log Modal"
				overlayClassName={style.LogModalOverlay}
				className={style.LogModalContent}
			>
				<button tabIndex="0" className={style.CloseButton} onClick={closeModal}>
					<IconContext.Provider value={{color: 'red', size: '1.5em'}}>
						<ImCancelCircle />
					</IconContext.Provider>
				</button>
				<div className={style.ModalContentText}>
					{Object.entries(context)
						.sort((a, b) => a[1] - b[1])
						.map(message => {
							const datetime = pad(message[1].getDate()) + '/'
							+ pad(message[1].getMonth() + 1) + '/'
							+ message[1].getFullYear() + ' в '
							+ pad(message[1].getHours()) + ':'
							+ pad(message[1].getMinutes()) + ':'
							+ pad(message[1].getSeconds());
							return (
								<p key={message[0]}>Гифка с <strong>id={message[0]} </strong>
									отправлена <b>{datetime}</b></p>
							);
						})}
				</div>
			</Modal>
		</>
	);
}
