/* eslint-disable */
import common from '../common';
const { modes: { EDIT_MODE, VIEW_MODE, CREATE_MODE, PRACTICE_MODE }, scenarioFields } = common;
const {
	CRITERIAS,
	STEPS,
	SELECTED_USERS,
	BEST_PRACTICE_VIDEOS,
	SCENARIO_NAME,
	SCENARIO_DESCRIPTION,
	VIDEO_ID,
} = scenarioFields;

export default {
	name: 'Italiano',
	common: {
		edit: 'Modifica',
		create: 'Crea',
		addVideo: 'Aggiungi video',
		changeVideo: 'Cambia',
		browse: 'Naviga',
		cancel: 'Annulla',
		done: 'Fatto',
		save: 'Salva',
		confirmPasswordError: 'La password non corrisponde',
		delete: 'Elimina',
		emailError: 'L’e-mail non è valida',
		evaluate: 'Valuta',
		logOutButton: 'Esci',
		logOutMessage: 'Vuoi davvero disconnetterti?',
		mobilePractice: 'Mobile Practice',
		new: 'Nuovo',
		passwordError: 'La password deve contenere almeno 8 caratteri',
		send: 'Invia',
		tryAgain: 'Riprova',
		today: 'Oggi',
		yesterday: 'Ieri',
		openAdminPanel: 'Apri pannello admin',
		newMessage: {
			singular: 'nuovo messaggio',
			plural: 'nuovi messaggi',
		},
		continue: 'Continua',
	},
	home: {
		title: 'Pagina iniziale', //Todo self translation
		connection: {
			titleError: 'Connessione Internet assente',
			titleSuccess: 'La tua connessione è stata ripristinata',
			message: 'Verifica la tua rete',
			button: 'Continua',
		},
		landscape: {
			title: 'Ruota il dispositivo',
			message: 'Mobile Practice funziona meglio in modalità ritratto',
		},
	},
	signIn: {
		description: `Accedi per continuare`, //Todo self translation
		email: 'E-mail',
		forgotPassword: 'Serve una password?',
		password: 'Password',
		signIn: 'Accedi',
		signInError: 'La combinazione di e-mail e password non è valida',
		title: 'Buongiorno!',
	},
	forgotPassword: {
		description: `Inserisci la tua e-mail e ti invieremo un link per reimpostare la tua password`,
		email: 'La tua e-mail',
		reset: 'Invia',
		justRemember: 'Torna ad Accedi',
		title: 'Hai dimenticato la password?',
		success: {
			title: 'Operazione riuscita!',
			message: 'Grazie per la tua richiesta.\n Ti stiamo inviando un’e-mail di conferma.',
			cta: 'Indietro',
		},
		error: {
			title: 'Ops!',
			message: 'Sembra che non sia possibile inviare la tua e-mail',
			cta: 'Riprova',
		},
	},
	resetPassword: {
		confirm: 'Conferma',
		confirmPassword: 'Confermare la password',
		description: 'La password deve contenere almeno 8 caratteri. Non utilizzare la tua password precedente',
		newPassword: 'Nuova password',
		title: 'Buongiorno!',
		success: {
			title: 'Operazione riuscita!',
			message: 'È stata creata una nuova password',
			cta: 'Accedi',
		},
		error: {
			title: 'Ops!',
			message: 'Sembra che non sia possibile creare la tua password',
			cta: 'Riprova',
			alreadyUsed: 'Password già utilizzata. Scegline un’altra',
		},
	},
	createPassword: {
		confirm: 'Conferma',
		confirmPassword: 'Confermare la password',
		description: `Crea una password!`,
		newPassword: 'Nuova password',
		title: 'Buongiorno!',
		success: {
			title: 'Operazione riuscita!',
			message: 'La password è stata creata',
			cta: 'Vai alla home',
		},
		error: {
			title: 'Ops!',
			message: 'Sembra che non sia possibile creare la tua password',
			cta: 'Riprova',
		},
	},
	inbox: {
		deletedUser: 'Utente cancellato',
		newChat: 'Nuova chat',
		editChat: 'Modifica chat',
		everyOne: 'Tutti',
		groups: 'Team',
		inbox: 'Casella di posta',
		inboxMessages: 'Messaggi',
		chatPlaceholder: {
			video: {
				incoming: '{name} ti ha inviato un video.',
				outcoming: 'Hai inviato un video a {name}',
			},
			audio: {
				incoming: '{name} ti ha inviato un audio',
				outcoming: 'Hai inviato un audio a {name}',
			},
			image: {
				incoming: '{name} ti ha inviato un’immagine.',
				outcoming: 'Hai inviato un’immagine a {name}',
			},
			file: {
				incoming: '{name} ti ha inviato un file',
				outcoming: 'Hai inviato un file a {name}',
			}
		},
		groupChatPlaceholder: {
			video: {
				incoming: '{name} ha inviato un video',
				outcoming: 'Hai inviato un video',
			},
			audio: {
				incoming: '{name} ha inviato un audio',
				outcoming: 'Hai inviato un audio',
			},
			image: {
				incoming: '{name} ha inviato un’immagine',
				outcoming: 'Hai inviato un’immagine',
			},
			file: {
				incoming: '{name} ha inviato un file',
				outcoming: 'Hai inviato un file',
			}
		},
		emptyState: 'Non ci sono ancora messaggi. Scrivine uno per iniziare a inviare messaggi.',
		noResults: 'Purtroppo non ci sono risultati. Prova con qualcos’altro.',
		emptyChatUsers: 'Nessun utente con cui chattare',
		emptyChatArea: 'Seleziona una chat o creane una',
		emptyChatAreaNoMessages: 'Ancora nessun messaggio',
		emptyChatAreaNoResult: 'Crea una nuova chat per iniziare a inviare messaggi ',
		deleteMessageConfirmation: 'Vuoi davvero eliminare questo messaggio?',
		saveAsBestPractice: 'Salva come esempio di miglior prassi',
		justSent: 'Ora',
		viewDetails: 'Vedi dettagli',
		viewScenarioDetails: 'Vedi dettagli dello scenario',
		evaluate: 'Valuta',
		sendMessage: 'Invia messaggio...',
		attachPhoto: 'Allega foto',
		attachVideo: 'Allega video',
		you: 'tu',
		searchLabel: 'Cerca',
		scenarioCriterias: [
			{
				id: '590f7d5907e94106bdf393a5',
				title: 'Ti è piaciuta questa esercitazione?',
			},
			{
				id: '591f7d5907e94106bdf393a5',
				title: 'È pertinente per il tuo lavoro?',
			},
			{
				id: '592f7d5907e94106bdf393a5',
				title: 'La consiglieresti ad altri?',
			},
		],
		createBestPractice: 'Crea una miglior prassi',
		giveBestPracticeName: 'Dai un nome alla miglior prassi...',
		bestPracticeError: 'Questo video è già stato salvato come esempio di miglior prassi',
		goBack: 'Indietro',
		inboxError: 'Ops! Questa chat non esiste più',
		deleteChatConfirmation: 'Vuoi davvero eliminare questo messaggio?',
		copy: 'Copia media'
	},
	reminder: {
		sendReminder: 'Invia promemoria',
		sendReminderTitle: 'Invia un promemoria per la pratica',
		reminderDefaultMessage: 'Ehi! Come va con questo scenario? Speriamo di completarlo presto. Inviami un messaggio per qualsiasi domanda.',
		reminderSendSuccess: 'Il promemoria è stato inviato',
		reminderNeeded: 'Promemoria per la pratica necessario!',
		runningOutOfTime: 'Il tempo per completare questo scenario sta per scadere.',
		sent: 'Inviata'
	},
	scenarios: {
		stepExample: 'Esempio: cerca un contatto da chiamare.',
		bestPracticeExample: 'Esempio: video con un grande inizio.',
		evaluationCriteriaExample: 'Esempio: attenzione conquistata.',
		numberOfFinished: '{finished} su {total} completato',
		practiceGroups: {
			waitingOnFeedback: 'In attesa di un feedback',
			inProgress: 'In corso',
			completed: 'Completato',
			notStarted: 'Non ancora iniziato'
		},
		practice: 'Esercitazione',
		finished: 'Concluso',
		unread: 'Non letto',
		all: 'Tutti',
		groupChat: 'Chat di gruppo',
		coach: 'Coach',
		learner: 'Utente',
		instructions: 'Istruzioni',
		emptyState: 'Seleziona scenario',
		myScenarios: 'Scenari',
		newScenario: 'Nuovo scenario',
		newScenarioInstructions: 'Istruzioni nuovo scenario',
		scenario: 'Scenario',
		people: 'persone',
		requiredFields: 'Campi obbligatori: nome dello scenario, descrizione dello scenario, passaggi, criteri, persone.',
		requiredSteps: 'Aggiungi alcuni passaggi per salvare lo scenario',
		requiredCriteria: 'Aggiungi alcuni criteri per salvare lo scenario',
		requiredPeople: 'Aggiungi alcune persone per salvare lo scenario',
		requiredName: 'Dai un nome allo scenario per salvarlo',
		requiredDescription: 'Dai una descrizione allo scenario per salvarlo',
		noScenarios: 'Ancora nessuno scenario',
		videoPlaceholder: '{name} ti ha inviato un video.',
		imagePlaceholder: '{name} ti ha inviato un’immagine.',
		currentText: 'Attuale',
		completedText: 'Completato',
		draftText: 'Bozza',
		addSteps: 'Aggiungi passaggi da seguire',
		addCriterias: 'Aggiungi alcuni nuovi criteri...',
		addBestPracticeExample: 'Aggiungi esempio miglior prassi',
		steps: 'Passaggi',
		evaluationCriteria: 'Criteri di valutazione',
		bestPractice: 'Miglior prassi',
		addBestPractice: 'Aggiungi un’altra miglior prassi',
		deleteBestPractice: 'Cancella miglior prassi',
		bestPracticeCountSeparator: 'di',
		criteriaSection: {
			selectCriteria: 'Aggiungi criteri di valutazione',
			addCriteria: '(aggiungi criteri)',
			notFound: 'Criterio già aggiunto',
		},
		peopleSection: {
			addPerson: 'Aggiungi una persona',
			peoplePracticing: 'Persone che si stanno esercitando su questo scenario',
			groups: 'Team',
			people: 'Persone',
			notFound: 'nessuna corrispondenza trovata',
		},
		headerSection: {
			[EDIT_MODE]: {
				mobileHeader: 'Modifica scenario',
				buttonPrimaryText: 'Invia',
				buttonSecondaryText: 'Annulla',
				namePlaceholder: 'Dai un nome allo scenario...',
				descriptionPlaceholder: 'Descrivi lo scenario...',
			},
			[VIEW_MODE]: {
				mobileHeader: '',
				buttonPrimaryText: 'Modifica',
				buttonSecondaryText: 'Elimina',
			},
			[CREATE_MODE]: {
				mobileHeader: 'New scenario',
				buttonPrimaryText: 'Invia',
				buttonSecondaryText: 'Annulla',
				namePlaceholder: 'Dai un nome allo scenario...',
				descriptionPlaceholder: 'Descrivi lo scenario...',
			},
			[PRACTICE_MODE]: {
				buttonPrimaryText: 'Esercitazione',
				buttonSecondaryText: '',
			},
		},
		validation: {
			buttonLabel: 'Riprova',
			title: 'Compila i campi obbligatori',
			fields: {
				[VIDEO_ID]: {
					name: 'Video scenario',
					errorMessage: 'Questo campo è obbligatorio',
				},
				[BEST_PRACTICE_VIDEOS]: {
					name: 'Video miglior prassi',
					errorMessage: 'Questo campo è obbligatorio',
				},
				[SCENARIO_NAME]: {
					name: 'Nome dello scenario',
					errorMessage: 'Questo campo è obbligatorio',
				},
				[SCENARIO_DESCRIPTION]: {
					name: 'Descrizione dello scenario',
					errorMessage: 'Questo campo è obbligatorio',
				},
				[STEPS]: {
					name: 'Passaggi',
					errorMessage: 'Questo campo è obbligatorio',
				},
				[CRITERIAS]: {
					name: 'Criteri',
					errorMessage: 'Questo campo è obbligatorio',
				},
				[SELECTED_USERS]: {
					name: 'Persone',
				},
			},
			deleteUnsaved: 'Vuoi davvero eliminare le modifiche non salvate?',
			saveDraftMessage: 'Puoi salvare il tuo scenario come bozza',
			deleteChangesButton: 'Elimina modifiche',
		},
		saveDraftButton: 'Salva bozza',
		deleteScenario: 'Vuoi davvero eliminare lo scenario?',
		cancel: 'Annulla',
		delete: 'Elimina',
		emptyGroups: 'I team sono creati e gestiti nella scheda “team”',
		bestPracticeError: 'non deve essere vuoto',
		bestPracticePlaceholder: 'Dai un nome alla miglior prassi',
		saved: 'Salvataggio riuscito',
		dueDate: 'Data scadenza',
		due: 'Scadenza',
		fromNow: 'a partire da ora',
		left: 'rimanenti',
		pastDue: 'Scaduto'
	},
	groupChat: {
		label: 'Chat di gruppo',
		viewParticipants: 'Vedi partecipanti',
		groupChatName: 'Nome chat di gruppo'
	},
	teams: {
		teams: 'Team',
		buttonDelete: 'Elimina',
		buttonEdit: 'Modifica',
		buttonCancel: 'Annulla',
		buttonSave: 'Salva',
		placeholder: 'Inserisci titolo del team...',
		group: 'Team',
		newTeam: 'Nuovo team',
		editTeam: 'Modifica team',
		deleteTeamConfirmation: 'Vuoi davvero eliminare il team?',
		emptyAreaText: 'Seleziona un team o creane uno',
		[EDIT_MODE]: {
			buttonPrimaryText: 'Salva',
			buttonSecondaryText: 'Annulla',
			placeholder: 'Inserisci titolo del team...',
		},
		[VIEW_MODE]: {
			buttonPrimaryText: 'Modifica',
			buttonSecondaryText: 'Elimina',
		},
		[CREATE_MODE]: {
			buttonPrimaryText: 'Salva',
			buttonSecondaryText: 'Annulla',
			placeholder: 'Inserisci titolo del team...',
		},
		wrongName: 'Nome errato',
		teamExists: 'Esiste già un team con questo nome',
		tryAgain: 'Riprova',
		empty: 'Non hai ancora nessun team',
		noUsers: 'Nessun utente',
		noUsersMessage: 'Il team dovrebbe contenere almeno un utente',
		invalidName: 'Nome non valido',
		invalidNameMessage: 'Questo nome del team non è valido',
	},
	primaryNav: {
		inbox: 'MESSAGGI',
		scenarious: 'SCENARI',
		team: 'TEAM',
		profile: 'PROFILO',
		settings: 'IMPOSTAZIONI',
		logOut: 'ESCI',
	},
	dragAndDrop: {
		add: 'Aggiungi',
		change: 'Cambia',
		dropHeading: 'Rilascia i file qui',
		selectFile: 'Trascina e rilascia i file qui o',
		selectImageFile: 'Trascina e rilascia i file qui o',
		errorMessage: 'Ops! Sembra che qualcosa sia andato storto!', //TODO self translation
		fileCount: 'Puoi aggiungere solo 1 file.',
		formats: 'Formati:',
		maxFileSize: 'La dimensione massima del file è',
		multipleFiles: 'Ops! Puoi aggiungere solo un file',
		wrongSize: 'Ops! Sembra che il tuo file sia troppo grande',
		wrongFormat: 'Ops! Sembra che il tuo file sia nel formato sbagliato',
		serverError: 'Ops! Sembra che si sia verificato un errore del server',
		selectAnotherFile: 'Per selezionare un altro file trascina e rilascia il file qui o',
		selectAnotherFileMobile: 'Seleziona un altro file',
		uploadPhoto: 'Carica foto',
		uploadVideo: 'Carica video',
		bestPracticeNote: 'Inserisci una breve nota sul perché questa è una miglior prassi...',
		errorText: 'non deve essere vuoto',
		permissionErrorText: 'Non abbiamo il permesso per questo file. Verifica i tuoi permessi e riprova.',
		bestPractice: 'Dai un nome alla miglior prassi...',
	},
	evaluateDialog: {
		paragraph: '1- per niente, 5- assolutamente',
		userEvaluationCriterias: {
			experience: 'Valuta.Vota.Esercita.Prova',
			work: 'Valuta.Vota.Pertinente.Al.Lavoro',
			recommend: 'Valuta.Vota.Raccomanda.Ad.Altri',
		},
		titleCoach: 'Come si è comportato {fullName} nello {scenario}?',
		titleUser: 'Cosa pensi dello scenario?',
		coachViewOfLearnerEvaluat: 'La valutazione dello scenario {scenario}',
		learnerViewOfEvaluat: 'Come ti sei comportato nello {scenario}?',
		criteriaExperience: '{You} è piaciuta questa esercitazione?',
		criteriaWork: 'È pertinente per il {Your} lavoro?',
		criteriaRecommend: '{You} la consiglieresti ad altri?',
	},
	settings: {
		settings: 'Impostazioni',
		help: {
			title: 'Aiuto/feedback',
			description: 'Se stai riscontrando problemi con l’app o vuoi dirci cosa ne pensi, inviaci una e-mail a',
		},
		resources: {
			title: 'Risorse',
			description: 'Per tutorial e FAQ controlla le nostre risorse:',
			descriptionTutorials: 'Vedi tutorial'
		},
		deleteAccount: {
			title: 'Elimina il mio account',
			description: 'Se vuoi eliminare il tuo account, clicca qui:',
			button: 'Elimina account',
			dialog: 'Vuoi davvero eliminare il tuo account?',
		},
		language: {
			title: 'Cambia lingua',
			languages: {
				en: 'Inglese (English)',
				fr: 'Francese (Français)',
				ru: 'Russa (Русский)',
				it: 'Italiano',
				es: 'Spagnola (Española)',
				de: 'Tedesca (Deutsch)',
				ja: 'Giapponese (日本語)',
				ko: 'Coreano (한국어)',
				ch: 'Cinese (中文)',
				pt: 'Portoghese (Português)',
			},
		},
	},
	profile: {
		editText: 'Modifica',
		profile: 'Profilo',
		settings: 'Impostazioni',
		signout: 'Esci',
	},
	reports: {
		coach: 'Coach',
		learner: 'Utente',
		scorePerScenario: 'Punteggio per scenario',
		scorePerCriteria: 'Punteggio per criteri',
		totalScoreDetails: 'Dettagli punteggio totale',
		scenarioScoreDetails: 'Dettagli punteggio scenario',
		responsivenessDetails: 'Dettagli reattività',
		teamMemberDetails: 'Dettagli membri del team',
		responsivenessPerScenario: 'Reattività per scenario',
		teamMembersRaking: 'Classifica membri del team',
		filters: {
			all: 'Tutti',
			period: 'Periodo',
			lastMonth: 'Ultimo mese',
			last3Months: 'Ultimi 3 mesi',
			lastYear: 'Ultimo anno',
		},
		dataTitles: {
			totalScore: 'Punteggio totale',
			responsiveness: 'Reattività',
			completed: 'Completato',
			current: 'Attuale',
			ranking: 'Classifica'
		},
		dataDescription: {
			totalScore: 'Il punteggio totale è una media basata sui criteri di valutazione',
			responsiveness: 'La reattività corrisponde al numero di giorni impiegato dall’utente per rispondere',
			completed: 'Numero di scenari completati',
			current: 'Numero di scenari attuali',
			ranking: 'La classifica mostra la posizione del tuo team rispetto agli altri team della società',
		},
		dataLabels: {
			score: 'Punteggio',
			responsiveness: 'Reattività',
			team: 'Team',
			me: 'Io',
			user: 'Utente',
			company: 'Società'
		}
	},
	recording: {
		browseVideo: 'Naviga',
		recordVideo: 'Registra video',
		uploadExisting: 'O carica un file video esistente',
		replay: 'Ricomincia',
		recordAgain: 'Registra di nuovo',
		send: 'Invia',
		next: 'Avanti',
		retry: 'Riprova',
		selectAnOption: 'Seleziona un’opzione',
		constraintsError: {
			title: 'Problema dispositivo',
			message: 'Assicurati che la videocamera attualmente collegata supporti la risoluzione minima di 640x480',
		},
		permissionError: {
			title: 'Nessun accesso',
			message: 'Assicurati di aver permesso al browser di accedere alla videocamera/al microfono',
			messageAudio: 'Assicurati di aver permesso al browser di accedere al microfono',
		},
		deviceBusyError: {
			title: 'Dispositivo occupato',
			message: 'Assicurati che nessun altro programma stia usando la videocamera/il microfono',
			messageAudio: 'Assicurati che nessun altro programma stia usando il microfono',
		},
		notFoundError: {
			title: 'Input non trovato',
			message: 'Assicurati di aver collegato correttamente la videocamera al microfono',
			messageAudio: 'Assicurati di aver collegato correttamente la videocamera',
		},
		unknownError: {
			title: 'Errore sconosciuto',
			message: 'Ops! Sembra che qualcosa sia andato storto!', //Todo self translation
		},
	},
	termsAndConditions: {
		error: 'Questo campo è obbligatorio',
		iAgree: 'Accetto',
		theTerms: 'i termini.',
		iRead: 'Ho letto anche le Norme sulla privacy.',
		information: `<p style="text-align: center;"><strong>Termini e condizioni d'uso</strong></p>
		<ol style="text-align: justify;">
		<li><strong> Accesso all'applicazione</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">Sono consapevole che:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp; Il Mobile Practice (di seguito "l'applicazione") mi viene messo a disposizione da MOBILE PRACTICE o da uno dei suoi partner detentori di diritti per fornirmi una formazione su un certo numero di argomenti</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;L'URL della piattaforma "M-Learning" non deve essere inviato o condiviso con nessuno (sia interno che esterno)</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;MOBILE PRACTICE si riserva il diritto, a sua esclusiva discrezione, di sospendere o interrompere l'accesso a tutta o parte dell'Applicazione, al suo contenuto o ai servizi offerti nell'Applicazione, senza preavviso.</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;L'applicazione può fornire link ad altre fonti Internet. Poiché MOBILE PRACTICE non ha alcun controllo sulle fonti esterne, MOBILE PRACTICE non può essere ritenuto responsabile per i loro contenuti, la pubblicità, i prodotti, i servizi o qualsiasi altra cosa disponibile su queste fonti esterne.</span></li>
		</ul>
		<ol style="text-align: justify;" start="2">
		<li><strong> Comportamento dell'utente</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">Ogni utente dell'applicazione garantisce e si impegna:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Utilizzare l'Applicazione per scopi leciti, escludendo qualsiasi scopo commerciale o pubblicitario;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Non comunicare o divulgare a chiunque non goda degli stessi diritti di accesso qualsiasi informazione e/o contenuto dell'Applicazione;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Non disturbare o interrompere il funzionamento dell'Applicazione, dei suoi server o delle reti connesse all'Applicazione o violare i suoi requisiti, procedure, norme o regolamenti;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Non danneggiare il funzionamento dell'Applicazione sovraccaricando la larghezza di banda, sovraccaricando il server, inviando spam o sovraccaricando la casella di posta dell'Applicazione;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Non visualizzare informazioni che non sono destinate a loro, o accedere a un server o a un account a cui non sono autorizzati ad accedere;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Non modificare parti del codice dell'Applicazione per ottenere un accesso non autorizzato all'Applicazione</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Non cercare di valutare, notare o testare le vulnerabilità dell'applicazione, o aggirare le misure di sicurezza o di autenticazione dell'applicazione senza la previa autorizzazione scritta di MOBILE PRACTICE</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Non scaricare sull'applicazione, trasmettere, pubblicare o rendere disponibile con qualsiasi mezzo materiale pubblicitario o promozionale non richiesto o non autorizzato</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Non inviare via e-mail o trasmettere con qualsiasi altro mezzo il contenuto dell'applicazione.</span></li>
		</ul>
		<p style="text-align: justify;"><span style="font-weight: 400;">Se necessario, MOBILE PRACTICE può in qualsiasi momento interrompere l'accesso di un utente all'Applicazione se questi non rispetta i propri obblighi.</span></p>
		<ol style="text-align: justify;" start="3">
		<li><strong> Protezione del contenuto dell'applicazione</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; L'applicazione e ciascuna delle sue parti costitutive (quali testi, gerarchie, software, animazioni, fotografie, illustrazioni, immagini, diagrammi, colonne sonore, loghi, marchi, disegni, modelli, questionari e quiz), compresi i componenti software necessari al funzionamento dell'applicazione e i database (di seguito "Contenuti") possono contenere informazioni e dati riservati protetti dalla legge sulla proprietà intellettuale o da qualsiasi altra legge applicabile. Pertanto, se non diversamente indicato nell'applicazione, i diritti di proprietà intellettuale dei contenuti sono di esclusiva proprietà di MOBILE PRACTICE e/o dei suoi partner detentori di diritti, che non concedono all'utente alcuna licenza o altro diritto oltre a quello di visualizzare l'applicazione.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp;   La riproduzione di tutto o parte del Contenuto è autorizzata solo a scopo di informazione e formazione degli utenti; qualsiasi riproduzione o qualsiasi altro uso di copie del Contenuto effettuate per altri scopi, in qualsiasi modo o forma, è espressamente vietato.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; &nbsp;All'utente è inoltre vietato copiare, modificare, creare un'opera derivata, assemblare, decompilare, vendere, concedere in sublicenza o cedere in qualsiasi modo qualsiasi diritto relativo al Contenuto o all'Applicazione.</span></p>
		<ol style="text-align: justify;" start="4">
		<li><strong> Responsabilità</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE si impegna a garantire che le informazioni fornite sull'Applicazione siano accurate e aggiornate. Tuttavia, MOBILE PRACTICE non può garantire che le informazioni fornite agli utenti sull'applicazione siano accurate o esaustive.</span></p>
		<ol style="text-align: justify;" start="5">
		<li><strong> Dati personali</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; MOBILE PRACTICE e i suoi partner detentori di diritti proteggono i dati personali degli utenti dell'applicazione e rispettano le preoccupazioni dell'utente in merito alla riservatezza delle informazioni personali che ci fornisce. Fornendoci le informazioni e i dati personali, l'utente acconsente al loro utilizzo e alla loro comunicazione alle condizioni di seguito indicate.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Attraverso l'Applicazione, MOBILE PRACTICE e i suoi partner detentori di diritti possono raccogliere dati personali, al fine, ad esempio, di fornire l'accesso all'Applicazione (come nome, cognome, login, indirizzo e-mail dei discenti, tempo trascorso nel reparto, numero di connessioni e numero di punti), solo per gli scopi indicati di seguito:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Gestione della formazione</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Statistiche, studi e analisi delle risposte ai questionari e ai quiz</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Miglioramento dell'applicazione, incluso l'uso di indagini di soddisfazione</span></li>
		</ul>
		<p style="text-align: justify;">&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Accedendo, creando il suo account sull'Applicazione e cliccando sull'icona "Accetto", lei riconosce di aver letto le condizioni e le clausole di cui sopra e le accetta irrevocabilmente. Di conseguenza, l'utente acconsente senza riserve al trattamento dei propri dati personali in conformità ai presenti termini e condizioni e al presente documento da parte della società MOBILE PRACTICE.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Tutte le informazioni personali fornite dall'utente per utilizzare l'applicazione sono soggette alle disposizioni della legge n. 78-17 sull'informatica e le libertà del 6 gennaio 1978.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">L'utente ha il diritto di accedere, correggere e cancellare in qualsiasi momento le informazioni personali che lo riguardano e può interrompere il trattamento di tali dati scrivendo a MOBILE PRACTICE - 224, Rue Saint-Denis; 75002 Parigi o contact@Mobile Practice.com.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">I dati saranno conservati per il tempo necessario agli scopi per i quali sono stati raccolti e saranno in ogni caso distrutti 6 mesi dopo la data di fine dei diritti di accesso all'uso dell'Applicazione. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Solo i destinatari debitamente autorizzati da MOBILE PRACTICE, incaricati della gestione della formazione, avranno accesso ai dati dell'utente. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE si impegna a prendere tutte le precauzioni necessarie per mantenere la riservatezza dei dati personali raccolti ed elaborati, e per evitare che essi vengano deformati, danneggiati o distrutti, o che terzi non autorizzati vi abbiano accesso.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Tuttavia, MOBILE PRACTICE non può gestire tutti i rischi legati al funzionamento di Internet e avverte gli utenti dell'applicazione dell'esistenza di potenziali rischi inerenti al suo uso e funzionamento.</span></p>`,
	},
	mediaUpload: {
		wrongSize: 'Ops! Sembra che il tuo file sia troppo grande',
		wrongFormat: 'Ops! Sembra che il tuo file sia nel formato sbagliato',
		tryAgain: 'Riprova',
		uploadFailed: 'Ops! Caricamento non riuscito.',
		maxFileSize: 'La dimensione massima del file è',
		formats: 'Formati:',
		permissionErrorText: 'Non abbiamo il permesso per questo file. Verifica i tuoi permessi e riprova.',
	},
	onboarding: {
		tutorials: {
			welcome: "Tutorial di benvenuto",
			learner: "Tutorial utente",
			coach: "Tutorial coach",
			scenarioCreation: "Tutorial creazione scenari"
		},
		startExploring: "Comincia ad esplorare",
		close: "chiudi",
		welcome: {
			slide1: {
				title: "Benvenuto/a su Mobile Practice",
				text: "Tecnologia per video e messaggi su dispositivi mobili per la formazione dei team, i coach, e per condividere le miglior prassi"
			},
			slide2: {
				title: "Scenari",
				text: "Sulla pagina “Scenari” puoi consultare una lista degli scenari a cui accedi come utente o come coach"
			},
			slide3: {
				title: "Messaggi",
				text: "Sulla pagina “Messaggi”, puoi controllare le tue chat personali"
			},
			slide4: {
				title: "Team",
				text: "Sulla pagina “Team” puoi gestire i tuoi gruppi"
			},
			slide5: {
				title: "Profilo",
				text: "Sulla pagina “Profilo” puoi caricare il tuo avatar e consultare le tue statistiche e accedere alle impostazioni."
			},
			slide6: {
				title: "Impostazioni",
				text: "Nelle impostazioni puoi cambiare la lingua e consultare ulteriori materiali.",
			},
			slide7: {
				title: "Come procedere",
			},
		},
		learner: {
			slide1: {
				title: "Istruzioni scenario",
				text: "Scegli lo scenario e clicca su “Istruzioni” per aprire la pagina con i relativi dettagli"
			},
			slide2: {
				title: "Inizia la formazione",
				text: "Scegli lo scenario e clicca \"Inizia\""
			},
			slide3: {
				title: "Chat formazione",
				text: "È la chat con il tuo coach. Fai le domande che vuoi e preparati ad inviare il tuo video"
			},
			slide4: {
				title: "Invia video",
				text: "Puoi aggiungere un video già salvato o registrarne uno nuovo. Attendi la valutazione del coach"
			},
			slide5: {
				title: "Valuta scenario",
				text: "Dopo aver ricevuto il feedback del coach, potrai valutare lo scenario."
			},
		},
		coach: {
			slide1: {
				title: "Pannello del coach",
				text: "Scegli lo scenario e clicca su “Coach” per aprire il relativo pannello. Il pannello mostra le prestazioni individuali e il loro stato."
			},
			slide2: {
				title: "Invia promemoria",
				text: "Dal pannello del coach puoi inviare un promemoria agli utenti per ricordare di presentare i loro video. Clicca “Invia promemoria” per inviare un messaggio a tutti gli utenti."
			},
			slide3: {
				title: "Chat formazione",
				text: "Dal pannello del coach puoi avviare chat individuali con gli utenti. Puoi rispondere alle loro domande e fornire istruzioni aggiuntive."
			},
			slide4: {
				title: "Aggiungi miglior prassi da un utente",
				text: "I video degli utenti possono essere molto buoni e rappresentare un’ispirazione e un esempio per gli altri partecipanti. Puoi salvare un buon video come “miglior prassi”."
			},
			slide5: {
				title: "Valuta",
				text: "È ora di valutare i partecipanti. Aggiungi un punteggio per ciascun criterio dello scenario."
			},
		},
		scenarioCreation: {
			slide1: {
				title: "Crea scenario",
				text: "Nella sezione “Scenario”, clicca su \"Nuovo\" per aprire la pagina di creazione scenari"
			},
			slide2: {
				title: "Aggiungi dettagli scenario",
				text: "Completa il modulo con i dettagli dello scenario"
			},
			slide3: {
				title: "Aggiungi titolo e descrizione",
				text: "Aggiungi titolo e descrizione dello scenario"
			},
			slide4: {
				title: "Aggiungi video esplicativo",
				text: "Aggiungi video esplicativo al tuo scenario. Puoi aggiungere un video già salvato o registrarne uno nuovo"
			},
			slide5: {
				title: "Aggiungi fasi",
				text: "Aggiungi fasi per guidare la risposta dei partecipanti"
			},
			slide6: {
				title: "Aggiungi criteri di valutazione",
				text: "Questi criteri saranno utilizzati per valutare lo scenario. Puoi utilizzare criteri esistenti o crearne di personalizzati"
			},
			slide7: {
				title: "Aggiungi utenti",
				text: "Aggiungi utenti allo scenario. Puoi aggiungere singoli utenti o team predefiniti"
			},
			slide8: {
				title: "Lo scenario è pronto",
				text: "È tutto. Lo scenario è pronto per essere inviato ai partecipanti. Devi soltanto cliccare \"Invia\""
			},
		}
	}
};
