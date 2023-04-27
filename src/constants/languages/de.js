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
	name: 'Deutsch',
	common: {
		edit: 'Bearbeiten',
		create: 'Erstellen',
		addVideo: 'Video hinzufügen',
		changeVideo: 'Ändern',
		browse: 'Durchsuchen',
		cancel: 'Abbrechen',
		done: 'Fertig',
		save: 'Speichern',
		confirmPasswordError: 'Passwort stimmt nicht überein',
		delete: 'Löschen',
		emailError: 'E-Mail ist nicht gültig',
		evaluate: 'Bewerten Sie',
		logOutButton: 'Abmelden',
		logOutMessage: 'Sind Sie sicher, dass Sie sich abmelden möchten?',
		mobilePractice: 'Mobile Practice',
		new: 'Neu',
		passwordError: 'Das Passwort muss mindestens 8 Zeichen enthalten',
		send: 'Senden',
		tryAgain: 'Erneut versuchen',
		today: 'Heute',
		yesterday: 'Gestern',
		openAdminPanel: 'Admin-Panel öffnen',
		newMessage: {
			singular: 'neue Nachricht',
			plural: 'neue Nachrichten',
		},
		continue: 'Weiter',
	},
	home: {
		title: 'Startseite', //Todo self translation
		connection: {
			titleError: 'Es besteht keine Internetverbindung',
			titleSuccess: 'Ihre Verbindung wurde wiederhergestellt',
			message: 'Bitte überprüfen Sie Ihr Netzwerk',
			button: 'Weiter',
		},
		landscape: {
			title: 'Bitte drehen Sie Ihr Gerät',
			message: 'Mobile Practice funktioniert besser im Hochformat (Porträt-Modus)',
		},
	},
	signIn: {
		description: `Bitte einloggen, um fortzufahren`, //Todo self translation
		email: 'E-Mail',
		forgotPassword: 'Benötigen Sie ein Passwort?',
		password: 'Kennwort',
		signIn: 'Anmelden',
		signInError: 'E-Mail oder Passwort sind ungültig',
		title: 'Hallo!',
	},
	forgotPassword: {
		description: `Geben Sie Ihre E-Mail ein und wir senden Ihnen einen Link, um ein neues Passwort einzurichten.`,
		email: 'Ihre E-Mail',
		reset: 'Senden',
		justRemember: 'Zurück zur Anmeldung',
		title: 'Haben Sie Ihr Passwort vergessen?',
		success: {
			title: 'Es hat geklappt!',
			message: 'Vielen Dank für Ihre Anfrage. Wir senden Ihnen eine Bestätigungs-E-Mail.',
			cta: 'Zurück',
		},
		error: {
			title: 'Hoppla!',
			message: 'Es scheint so, als ob Ihre E-Mail nicht gesendet werden kann.',
			cta: 'Erneut versuchen',
		},
	},
	resetPassword: {
		confirm: 'Bestätigen',
		confirmPassword: 'Bestätigen Sie Ihr Passwort',
		description: 'Das Passwort muss aus mindestens 8 Zeichen bestehen. Verwenden Sie nicht Ihr bisheriges Passwort',
		newPassword: 'Neues Passwort',
		title: 'Hallo!',
		success: {
			title: 'Es hat geklappt!',
			message: 'Neues Passwort wurde erstellt',
			cta: 'Anmelden',
		},
		error: {
			title: 'Hoppla!',
			message: 'Es scheint so, als ob Ihr Passwort nicht erstellt werden kann.',
			cta: 'Versuchen Sie es erneut',
			alreadyUsed: 'Das Passwort wurde bereits verwendet. Wählen Sie ein anderes.',
		},
	},
	createPassword: {
		confirm: 'Bestätigen',
		confirmPassword: 'Bestätigen Sie Ihr Passwort',
		description: `Lassen Sie uns ein Passwort erstellen!`,
		newPassword: 'Neues Passwort',
		title: 'Hallo!',
		success: {
			title: 'Es hat geklappt!',
			message: 'Das Passwort wurde erstellt!',
			cta: 'Nach Hause gehen',
		},
		error: {
			title: 'Hoppla!',
			message: 'Es scheint so, als ob Ihr Passwort nicht erstellt werden kann.',
			cta: 'Versuchen Sie es erneut',
		},
	},
	inbox: {
		deletedUser: 'Gelöschter Nutzer',
		newChat: 'Neuer Chat',
		editChat: 'Chat bearbeiten',
		everyOne: 'Jeder',
		groups: 'Teams',
		inbox: 'Posteingang',
		inboxMessages: 'Nachrichten',
		chatPlaceholder: {
			video: {
				incoming: '{name} hat Ihnen ein Video geschickt.',
				outcoming: 'Sie haben ein Video gesendet an {name}',
			},
			audio: {
				incoming: '{name} hat Ihnen eine Audioaufnahme geschickt',
				outcoming: 'Sie haben eine Audioaufnahme gesendet an {name}',
			},
			image: {
				incoming: '{name} hat Ihnen ein Bild geschickt.',
				outcoming: 'Sie haben ein Bild gesendet an {name}',
			},
			file: {
				incoming: '{name} hat Ihnen eine Datei geschickt\'',
				outcoming: 'Sie haben eine Datei gesendet an {name}',
			}
		},
		groupChatPlaceholder: {
			video: {
				incoming: '{name} hat ein Video gesendet',
				outcoming: 'Sie haben ein Video gesendet',
			},
			audio: {
				incoming: '{name} hat eine Audioaufnahme gesendet',
				outcoming: 'Sie haben eine Audioaufnahme gesendet',
			},
			image: {
				incoming: '{name} hat ein Bild gesendet',
				outcoming: 'Sie haben ein Bild gesendet',
			},
			file: {
				incoming: '{name} hat eine Datei gesendet',
				outcoming: 'Sie haben eine Datei gesendet',
			}
		},
		emptyState: 'Es sind noch keine Nachrichten vorhanden. Erstellen Sie eine neue, um eine Nachricht zu erstellen.',
		noResults: 'Leider kein Suchergebnis. Bitte versuchen Sie etwas anderes.',
		emptyChatUsers: 'Keine Nutzer, mit denen Sie einen Chat starten könnten',
		emptyChatArea: 'Wählen Sie einen Chat oder erstellen Sie einen neuen',
		emptyChatAreaNoMessages: 'Noch keine Nachrichten',
		emptyChatAreaNoResult: 'Bitte erstellen Sie einen neuen Chat, um mit der Nachrichtenübermittlung zu beginnen. ',
		deleteMessageConfirmation: 'Sind Sie sicher, dass Sie diese Nachricht löschen möchten?',
		saveAsBestPractice: 'Als Best-Practice-Beispiel speichern.',
		justSent: 'Jetzt gleich',
		viewDetails: 'Details anzeigen',
		viewScenarioDetails: 'Details zum Szenario anzeigen',
		evaluate: 'Bewerten Sie',
		sendMessage: 'Nachricht senden...',
		attachPhoto: 'Foto anhängen',
		attachVideo: 'Video anhängen',
		you: 'sie',
		searchLabel: 'Suche',
		scenarioCriterias: [
			{
				id: '590f7d5907e94106bdf393a5',
				title: 'Hat Ihnen diese Übung gefallen?',
			},
			{
				id: '591f7d5907e94106bdf393a5',
				title: 'Ist sie für Ihre Arbeit relevant?',
			},
			{
				id: '592f7d5907e94106bdf393a5',
				title: 'Würden Sie es anderen empfehlen?',
			},
		],
		createBestPractice: 'Erstellen Sie eine Best Practice',
		giveBestPracticeName: 'Geben Sie der bewährten Praxis einen Namen...',
		bestPracticeError: 'Dieses Video wurde bereits als Best Practice-Beispiel gespeichert',
		goBack: 'Zurück',
		inboxError: 'Ups! Der aktuelle Chat existiert nicht mehr',
		deleteChatConfirmation: 'Sind Sie sicher, dass Sie diesen Chat löschen möchten?',
		copy: 'Medien kopieren'
	},
	reminder: {
		sendReminder: 'Erinnerung senden',
		sendReminderTitle: 'Eine Übungserinnerung senden',
		reminderDefaultMessage: 'Hallo, wie kommen Sie mit diesem Szenario voran? Wir wollen dieses bald abschließen. Schreiben Sie mir eine Nachricht, falls Sie Fragen haben.',
		reminderSendSuccess: 'Die Erinnerung wurde gesendet',
		reminderNeeded: 'Übungserinnerung erforderlich!',
		runningOutOfTime: 'Die Teilnehmer haben nicht genug Zeit, um das Szenario abzuschließen.',
		sent: 'Gesendet'
	},
	scenarios: {
		stepExample: 'Beispiel: Einen Kontakt finden, den Sie anrufen möchten.',
		bestPracticeExample: 'Beispiel: Video mit gelungener Einleitung.',
		evaluationCriteriaExample: 'Beispiel: Die Aufmerksamkeit der Person ist erregt.',
		numberOfFinished: '{finished} von {total} abgeschlossen',
		practiceGroups: {
			waitingOnFeedback: 'Warten auf Feedback',
			inProgress: 'In Bearbeitung',
			completed: 'Abgeschlossen',
			notStarted: 'Nicht begonnen'
		},
		practice: 'Übung',
		finished: 'Fertig',
		unread: 'Ungelesen',
		all: 'Alle',
		groupChat: 'Gruppen-Chat',
		coach: 'Coach',
		learner: 'Lerner',
		instructions: 'Anweisungen',
		emptyState: 'Szenario auswählen',
		myScenarios: 'Szenarien',
		newScenario: 'Neues Szenario',
		newScenarioInstructions: 'Neue Szenarioanweisungen',
		scenario: 'Szenario',
		people: 'Personen',
		requiredFields: 'Erforderliche Felder: Szenarioname, Szenariobeschreibung, Schritte, Kriterien, Personen.',
		requiredSteps: 'Bitte fügen Sie einige Schritte hinzu, um das Szenario zu speichern',
		requiredCriteria: 'Bitte fügen Sie einige Kriterien hinzu, um das Szenario zu speichern',
		requiredPeople: 'Bitte fügen Sie Personen hinzu, um das Szenario zu speichern',
		requiredName: 'Bitte geben Sie dem Szenario einen Namen, um es zu speichern',
		requiredDescription: 'Bitte geben Sie die Szenariobeschreibung an, um speichern zu können',
		noScenarios: 'Noch keine Szenarien',
		videoPlaceholder: '{name} hat Ihnen ein Video geschickt.',
		imagePlaceholder: '{name} hat Ihnen ein Bild geschickt.',
		currentText: 'Aktuell',
		completedText: 'Abgeschlossen',
		draftText: 'Entwurf',
		addSteps: 'Folgeschritt hinzufügen',
		addCriterias: 'Ein paar neue Kriterien hinzufügen...',
		addBestPracticeExample: 'Best-Practice-Beispiel hinzufügen',
		steps: 'Schritte',
		evaluationCriteria: 'Bewertungskriterien',
		bestPractice: 'Best Practice',
		addBestPractice: 'Weitere Best Practice hinzufügen',
		deleteBestPractice: 'Best Practice löschen',
		bestPracticeCountSeparator: 'aus',
		criteriaSection: {
			selectCriteria: 'Bewertungskriterien hinzufügen',
			addCriteria: '(Kriterien hinzufügen)',
			notFound: 'Kriterien sind bereits hinzugefügt',
		},
		peopleSection: {
			addPerson: 'Hinzufügen einer Person',
			peoplePracticing: 'Personen, die dies üben',
			groups: 'Teams',
			people: 'Personen',
			notFound: 'keine Übereinstimmungen gefunden',
		},
		headerSection: {
			[EDIT_MODE]: {
				mobileHeader: 'Szenario bearbeiten',
				buttonPrimaryText: 'Senden',
				buttonSecondaryText: 'Abbrechen',
				namePlaceholder: 'Geben Sie dem Szenario einen Namen...',
				descriptionPlaceholder: 'Beschreiben Sie das Szenario...',
			},
			[VIEW_MODE]: {
				mobileHeader: '',
				buttonPrimaryText: 'Bearbeiten',
				buttonSecondaryText: 'Löschen',
			},
			[CREATE_MODE]: {
				mobileHeader: 'Neues Szenario',
				buttonPrimaryText: 'Senden',
				buttonSecondaryText: 'Abbrechen',
				namePlaceholder: 'Geben Sie dem Szenario einen Namen...',
				descriptionPlaceholder: 'Beschreiben Sie das Szenario...',
			},
			[PRACTICE_MODE]: {
				buttonPrimaryText: 'Übung',
				buttonSecondaryText: '',
			},
		},
		validation: {
			buttonLabel: 'Versuchen Sie es erneut',
			title: 'Bitte füllen Sie die erforderlichen Felder aus',
			fields: {
				[VIDEO_ID]: {
					name: 'Szenario-Video',
					errorMessage: 'Dieses Feld ist erforderlich',
				},
				[BEST_PRACTICE_VIDEOS]: {
					name: 'Best-Practice-Video',
					errorMessage: 'Dieses Feld ist erforderlich',
				},
				[SCENARIO_NAME]: {
					name: 'Name des Szenarios',
					errorMessage: 'Dieses Feld ist erforderlich',
				},
				[SCENARIO_DESCRIPTION]: {
					name: 'Beschreibung des Szenarios',
					errorMessage: 'Dieses Feld ist erforderlich',
				},
				[STEPS]: {
					name: 'Schritte',
					errorMessage: 'Dieses Feld ist erforderlich',
				},
				[CRITERIAS]: {
					name: 'Kriterien',
					errorMessage: 'Dieses Feld ist erforderlich',
				},
				[SELECTED_USERS]: {
					name: 'Personen',
				},
			},
			deleteUnsaved: 'Sind Sie sicher, dass Sie nicht gespeicherte Änderungen löschen möchten?',
			saveDraftMessage: 'Sie können Ihr Szenario als Entwurf speichern',
			deleteChangesButton: 'Änderungen löschen',
		},
		saveDraftButton: 'Entwurf speichern',
		deleteScenario: 'Sind Sie sicher, dass Sie das Szenario löschen möchten?',
		cancel: 'Abbrechen',
		delete: 'Löschen',
		emptyGroups: 'Teams werden in der Rubrik Teams erstellt und verwaltet',
		bestPracticeError: 'darf nicht leer sein',
		bestPracticePlaceholder: 'Geben Sie der Best Practice einen Namen',
		saved: 'Gespeichert',
		dueDate: 'Fälligkeitsdatum',
		due: 'Fällig',
		fromNow: 'ab jetzt',
		left: 'verbleiben',
		pastDue: 'Überfällig'
	},
	groupChat: {
		label: 'Gruppen-Chat',
		viewParticipants: 'Teilnehmer anzeigen',
		groupChatName: 'Name Gruppen-Chat'
	},
	teams: {
		teams: 'Teams',
		buttonDelete: 'Löschen',
		buttonEdit: 'Bearbeiten',
		buttonCancel: 'Abbrechen',
		buttonSave: 'Speichern',
		placeholder: 'Team-Namen eingeben...',
		group: 'Team',
		newTeam: 'Neues Team',
		editTeam: 'Team bearbeiten',
		deleteTeamConfirmation: 'Sind Sie sicher, dass Sie ein Team löschen möchten?',
		emptyAreaText: 'Wählen Sie ein Team aus oder erstellen Sie ein neues Team',
		[EDIT_MODE]: {
			buttonPrimaryText: 'Speichern',
			buttonSecondaryText: 'Abbrechen',
			placeholder: 'Team-Namen eingeben...',
		},
		[VIEW_MODE]: {
			buttonPrimaryText: 'Bearbeiten',
			buttonSecondaryText: 'Löschen',
		},
		[CREATE_MODE]: {
			buttonPrimaryText: 'Speichern',
			buttonSecondaryText: 'Abbrechen',
			placeholder: 'Team-Namen eingeben...',
		},
		wrongName: 'Falscher Name',
		teamExists: 'Team mit diesem Namen existiert bereits',
		tryAgain: 'Versuchen Sie es erneut',
		empty: 'Sie haben noch keine Teams',
		noUsers: 'Keine Benutzer',
		noUsersMessage: 'Team sollte mindestens einen Benutzer enthalten',
		invalidName: 'Ungültiger Name',
		invalidNameMessage: 'Dieser Teamname ist ungültig',
	},
	primaryNav: {
		inbox: 'NACHRICHTEN',
		scenarious: 'SZENARIEN',
		team: 'TEAMS',
		profile: 'PROFIL',
		settings: 'EINSTELLUNGEN',
		logOut: 'ABMELDEN',
	},
	dragAndDrop: {
		add: 'Hinzufügen',
		change: 'Ändern',
		dropHeading: 'Dateien hier ablegen',
		selectFile: 'Ziehen Sie Dateien hierher \n oder',
		selectImageFile: 'Ziehen Sie Dateien hierher \n oder',
		errorMessage: 'Hoppla! Anscheinend ist etwas schief gelaufen!',
		fileCount: 'Sie können nur 1 Datei hinzufügen.',
		formats: 'Formate:',
		maxFileSize: 'Die maximale Dateigröße beträgt',
		multipleFiles: 'Hoppla! Sie können nur eine Datei hinzufügen',
		wrongSize: 'Hoppla! Ihre Datei ist anscheinend zu groß',
		wrongFormat: 'Hoppla! Sieht so aus, als hätte Ihre Datei ein falsches Format',
		serverError: 'Hoppla! Sieht aus, als wäre ein Serverfehler aufgetreten',
		selectAnotherFile: 'Um eine andere Datei auszuwählen, ziehen Sie die Datei hierher oder',
		selectAnotherFileMobile: 'Wählen Sie eine andere Datei',
		uploadPhoto: 'Foto hochladen',
		uploadVideo: 'Video hochladen',
		bestPracticeNote: 'Fügen Sie eine kurze Erlärung hinzu, warum dies die Best Practice ist...',
		errorText: 'darf nicht leer sein',
		permissionErrorText: 'Wir haben keine Berechtigung für diese Datei. Bitte überprüfen Sie Ihre Berechtigungen und versuchen Sie es erneut.',
		bestPractice: 'Geben Sie der Best Practice einen Namen',
	},
	evaluateDialog: {
		paragraph: '1- Überhaupt nicht, 5- Absolut',
		userEvaluationCriterias: {
			experience: 'Auswerten. Bewerten. Üben. Erleben.',
			work: 'Auswerten. Bewerten. Arbeit. Bewerten', // todo inaccuracy in translation; self translation
			recommend: 'Auswerten. Bewerten. Anderen. Empfehlen', // todo inaccuracy in translation; self translation
		},
		titleCoach: 'Wie hat {fullName} bei {scenario} abgeschnitten?',
		titleUser: 'Wie hat Ihnen das Szenario gefallen?',
		coachViewOfLearnerEvaluat: 'Die Bewertung von Szenario {scenario}',
		learnerViewOfEvaluat: 'Wie haben Sie bei {scenario} abgeschnitten?',
		criteriaExperience: 'Hat {You} diese Übung gefallen?',
		criteriaWork: 'Ist sie für {Your} Arbeit relevant?',
		criteriaRecommend: 'Würden {You} es anderen empfehlen?',
	},
	settings: {
		settings: 'Einstellungen',
		help: {
			title: 'Hilfe/Feedback',
			description: 'Wenn Sie Probleme mit der App haben oder uns Ihre Meinung mitteilen möchten, senden Sie uns eine E-Mail an:',
		},
		resources: {
			title: 'Ressourcen',
			description: 'Tutorials und häufig gestellte Fragen finden Sie in unseren Ressourcen:',
			descriptionTutorials: 'Unsere Tutorials entdecken:'
		},
		deleteAccount: {
			title: 'Mein Konto löschen',
			description: 'Wenn Sie Ihr Konto löschen möchten, klicken Sie bitte hier:',
			button: 'Konto löschen',
			dialog: 'Sind Sie sicher, dass Sie Ihr Konto löschen möchten?',
		},
		language: {
			title: 'Sprache ändern',
			languages: {
				en: 'Englische (English)',
				fr: 'Französisch  (Français)',
				ru: 'Russische (Русский)',
				it: 'Italienische (Italiano)',
				es: 'Spanische (Española)',
				de: 'Deutsch',
				ja: 'Japanisch (日本語)',
				ko: 'Koreanisch (한국어)',
				ch: 'Chinesisch (中文)',
				pt: 'Portugiesische (Português)',
			},
		},
	},
	profile: {
		editText: 'Bearbeiten',
		profile: 'Profil',
		settings: 'Einstellungen',
		signout: 'Abmelden',
	},
	reports: {
		coach: 'Coach',
		learner: 'Lerner',
		scorePerScenario: 'Punktzahl pro Szenario',
		scorePerCriteria: 'Punktzahl pro Kriterium',
		totalScoreDetails: 'Gesamtpunktzahl im Detail',
		scenarioScoreDetails: 'Szenariopunktzahl im Detail',
		responsivenessDetails: 'Bearbeitungszeit im Detail',
		teamMemberDetails: 'Teammitglied im Detail',
		responsivenessPerScenario: 'Bearbeitungszeit pro Szenario',
		teamMembersRaking: 'Rangliste der Teammitglieder',
		filters: {
			all: 'Alle',
			period: 'Zeitraum',
			lastMonth: 'Letzter Monat',
			last3Months: 'Letzte 3 Monate',
			lastYear: 'Letztes Jahr',
		},
		dataTitles: {
			totalScore: 'Gesamtpunktzahl',
			responsiveness: 'Reaktionsschnelligkeit',
			completed: 'Abgeschlossen',
			current: 'Aktuell',
			ranking: 'Rangliste'
		},
		dataDescription: {
			totalScore: 'Die Gesamtpunktzahl ist ein Durchschnittswert auf Grundlage der Bewertungskriterien',
			responsiveness: 'Die Bearbeitungszeit entspricht der Anzahl der Tage, die ein Lerner für eine Antwort benötigt',
			completed: 'Anzahl der abgeschlossenen Szenarien',
			current: 'Anzahl der aktuellen Szenarien',
			ranking: 'Rangliste entspricht der Position Ihres Teams im Vergleich zu anderen Teams innerhalb des Unternehmens',
		},
		dataLabels: {
			score: 'Wertung',
			responsiveness: 'Reaktionsschnelligkeit',
			team: 'Team',
			me: 'Ich',
			user: 'Nutzer',
			company: 'Unternehmen'
		}
	},
	recording: {
		browseVideo: 'Durchsuchen',
		recordVideo: 'Video aufnehmen',
		uploadExisting: 'Oder laden Sie eine bestehende Videodatei hoch',
		replay: 'Wiederholen',
		recordAgain: 'Erneut aufnehmen',
		send: 'Senden',
		next: 'Weiter',
		retry: 'Erneut versuchen',
		selectAnOption: 'Bitte wählen Sie eine Option',
		constraintsError: {
			title: 'Geräteproblem',
			message: 'Bitte stellen Sie sicher, dass die aktuell angeschlossene Kamera die Mindestauflösung von 640x480 unterstützt',
		},
		permissionError: {
			title: 'Kein Zugriff',
			message: 'Bitte stellen Sie sicher, dass Sie Ihrem Browser den Zugriff auf Kamera / Mikrofon erlaubt haben',
			messageAudio: 'Bitte stellen Sie sicher, dass Sie Ihrem Browser den Zugriff auf das Mikrofon erlaubt haben',
		},
		deviceBusyError: {
			title: 'Kein Zugriff',
			message: 'Bitte stellen Sie sicher, dass Sie Ihrem Browser den Zugriff auf Kamera / Mikrofon erlaubt haben',
			messageAudio: 'Bitte stellen Sie sicher, dass Sie Ihrem Browser den Zugriff auf das Mikrofon erlaubt haben',
		},
		notFoundError: {
			title: 'Eingang nicht gefunden',
			message: 'Bitte stellen Sie sicher, dass Sie Kamera und Mikrofon richtig angeschlossen haben',
			messageAudio: 'Bitte stellen Sie sicher, dass Sie das Mikrofon richtig angeschlossen haben',
		},
		unknownError: {
			title: 'Unbekannter Fehler',
			message: 'Hoppla! Anscheinend ist etwas schief gelaufen!', //todo self translation
		},
	},
	termsAndConditions: {
		error: 'Dieses Feld ist erforderlich',
		iAgree: 'Ich stimme zu',
		theTerms: 'die Bedingungen.',
		iRead: 'Ich habe auch die Datenschutzbestimmungen gelesen.',
		information: `<p style="text-align: center;"><strong>Nutzungsbestimmungen und -bedingungen</strong></p>
		<ol style="text-align: justify;">
		<li><strong> Zugang zur App</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">Mir ist bekannt, dass:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Mobile Practice (nachfolgend "die App") wird mir von MOBILE PRACTICE oder einem ihrer Rechteinhaber-Partner zur Verfügung gestellt, um mich zu einer bestimmten Anzahl von Themen zu schulen</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Die URL der Plattform "M-Learning" darf an niemanden (weder intern noch extern) weitergegeben werden</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;MOBILE PRACTICE behält sich das Recht vor, nach eigenem Ermessen den Zugang zur App, ihren Inhalten oder den in der Anwendung angebotenen Diensten ganz oder teilweise ohne Vorankündigung auszusetzen oder zu beenden.</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Die Anwendung kann Links zu anderen Internetquellen enthalten. Da MOBILE PRACTICE keine Kontrolle über die externen Quellen hat, kann MOBILE PRACTICE nicht für deren Inhalte, Werbung, Produkte, Dienste oder sonstige Elementa, die über diese externen Quellen verfügbar sind, verantwortlich gemacht werden.</span></li>
		</ul>
		<ol style="text-align: justify;" start="2">
		<li><strong> Nutzerverhalten</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">Jeder Nutzer der App sichert zu und verpflichtet sich:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Die Anwendung für rechtmäßige Zwecke zu nutzen, unter Ausschluss jeglicher kommerzieller oder werblicher Zwecke;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Keine Informationen und/oder Inhalte der App an Personen weiterzugeben oder zu verbreiten, die nicht die gleichen Zugangsrechte besitzen;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Den Betrieb der App, ihre Server oder die mit der Anwendung verbundenen Netzwerke nicht zu stören oder zu unterbrechen bzw. deren Anforderungen, Verfahren, Regeln oder Vorschriften zu verletzen;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Den Betrieb der App nicht durch Überlastung der Bandbreite, Überlastung des Servers, Versenden von Spam oder Überlastung des Posteingangs der App zu beeinträchtigen;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Keine Informationen einzusehen, die nicht für ihn bestimmt sind, oder auf einen Server oder ein Konto zuzugreifen, zu dem sie nicht berechtigt sind;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Keine Teile des Codes der App zu modifizieren, um sich unberechtigten Zugang zur App zu verschaffen</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Nicht zu versuchen, Schwachstellen der App zu evaluieren, zu testen oder die Sicherheits- oder Authentifizierungsmaßnahmen der App ohne die vorherige schriftliche Genehmigung von MOBILE PRACTICE zu umgehen</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Kein unaufgefordertes oder unautorisiertes Werbe- oder Verkaufsförderungsmaterial in die App herunterzuladen, zu übertragen, zu posten oder auf irgendeine Weise verfügbar zu machen</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Keine Inhalte der App per E-Mail zu versenden oder auf andere Weise zu übertragen.</span></li>
		</ul>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE kann den Zugang eines Nutzers zur Anwendung gegebenenfalls jederzeit sperren, wenn dieser seinen Verpflichtungen nicht nachkommt.</span></p>
		<ol style="text-align: justify;" start="3">
		<li><strong> Schutz der Inhalte der App</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; Die Anwendung und jeder ihrer Bestandteile (wie z.B. Texte, Hierarchien, Software, Animationen, Fotos, Illustrationen, Bilder, Diagramme, Soundtracks, Logos, Marken, Zeichnungen, Modelle, Fragebögen und Quizze), einschließlich der für den Betrieb der Anwendung erforderlichen Softwarekomponenten und Datenbanken (nachfolgend "Inhalte") können vertrauliche Informationen und Daten enthalten, die durch das Recht des geistigen Eigentums oder andere anwendbare Gesetze geschützt sind. Sofern in der Anwendung nicht anders angegeben, sind die geistigen Eigentumsrechte an den Inhalten daher ausschließliches Eigentum von MOBILE PRACTICE und/oder deren Rechteinhabern, die dem Nutzer keine Lizenz oder ein sonstiges Recht außer dem zur Ansicht der App einräumen.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; Die Vervielfältigung bzw. Reproduktion des gesamten oder eines Teils des Inhalts ist nur zu Informations- und Schulungszwecken der Nutzer gestattet; jede Vervielfältigung / Reproduktion oder sonstige Verwendung von Kopien des Inhalts, die zu anderen Zwecken erstellt wurden, in welcher Art und Weise oder Form auch immer, ist ausdrücklich untersagt.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; &nbsp;Dem Nutzer ist es außerdem untersagt, die Rechte an den Inhalten oder der App zu kopieren, zu modifizieren, ein abgeleitetes Werk daraus zu erstellen, zusallenzustellen, zu zerlegen, zu verkaufen, zu unterlizenzieren oder in irgendeiner Weise abzutreten.</span></p>
		<ol style="text-align: justify;" start="4">
		<li><strong> Haftung</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE ist bemüht, die Richtigkeit und Aktualität der in der App bereitgestellten Informationen sicherzustellen. MOBILE PRACTICE kann jedoch nicht garantieren, dass die Informationen, die den Nutzern in der App zur Verfügung gestellt werden, korrekt oder vollumfänglich sind.</span></p>
		<ol style="text-align: justify;" start="5">
		<li><strong> Personenbezogene Daten</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; MOBILE PRACTICE und seine Rechteinhaber-Partner schützen die persönlichen Daten der Nutzer der App und respektieren Ihre Bedenken hinsichtlich der Vertraulichkeit der persönlichen Informationen, die Sie uns zur Verfügung stellen. Indem Sie uns Ihre persönlichen Informationen und Daten zur Verfügung stellen, stimmen Sie deren Nutzung und Übermittlung unter den nachfolgend genannten Bedingungen zu.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Über die Anwendung können MOBILE PRACTICE und seine Rechteinhaber-Partner personenbezogene Daten sammeln, um z.B. den Zugang zur App zu ermöglichen (wie z.B. Name, Vorname, Login, E-Mail-Adresse der Lernenden, aufgewendete Zeit, Anzahl der Verbindungen und Anzahl der Punkte), und zwar ausschließlich zu den unten genannten Zwecken:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Trainingsmanagement.</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Statistiken, Studien und Analysen von Fragebogen- und Quizantworten</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Verbesserung der App, einschließlich der Verwendung von Zufriedenheitsumfragen</span></li>
		</ul>
		<p style="text-align: justify;">&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Mit dem Zugang, der Erstellung Ihres Kontos in der App und dem Anklicken des Symbols "Ich akzeptiere" bestätigen Sie, die oben genannten Bedingungen und Klauseln gelesen zu haben und akzeptieren diese unwiderruflich. Dementsprechend stimmen Sie vorbehaltlos der Verarbeitung Ihrer personenbezogenen Daten gemäß diesen Bedingungen und Klauseln durch das Unternehmen MOBILE PRACTICE zu.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Alle persönlichen Daten, die Sie für die Nutzung der App zur Verfügung stellen, unterliegen den Bestimmungen des Gesetzes Nr. 78-17 über Informationstechnologie und Freiheiten vom 6. Januar 1978.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Sie haben das Recht, jederzeit auf die Sie betreffenden persönlichen Daten zuzugreifen, sie zu korrigieren und zu löschen, und können die Verarbeitung dieser Daten stoppen, indem Sie an MOBILE PRACTICE - 224, Rue Saint-Denis; 75002 Paris oder contact@Mobile Practice.com schreiben.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Die Daten werden so lange aufbewahrt, wie sie für die Zwecke, für die sie erhoben wurden, notwendig sind, und werden in jedem Fall 6 Monate nach dem Ende des Rechts auf Zugang zur Nutzung der App vernichtet.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Nur die von MOBILE PRACTICE ordnungsgemäß autorisierten Empfänger, die mit der Verwaltung des Trainings beauftragt sind, haben Zugang zu Ihren Daten. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE bemüht sich, alle notwendigen Vorkehrungen zu treffen, um die Vertraulichkeit der erhobenen und verarbeiteten personenbezogenen Daten zu wahren und zu verhindern, dass diese verformt, beschädigt oder zerstört werden oder unbefugten Dritten zugänglich sind.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE kann jedoch nicht alle mit dem Betrieb des Internets verbundenen Risiken beherrschen und weist die Nutzer der App auf mögliche Risiken hin, die mit der Nutzung und dem Betrieb der App verbunden sind.</span></p>`,
	},
	mediaUpload: {
		wrongSize: 'Hoppla! Ihre Datei ist anscheinend zu groß',
		wrongFormat: 'Hoppla! Sieht so aus, als hätte Ihre Datei ein falsches Format',
		tryAgain: 'Versuchen Sie es erneut',
		uploadFailed: 'Hoppla! Upload fehlgeschlagen.',
		maxFileSize: 'Die maximale Dateigröße beträgt',
		formats: 'Formate:',
		permissionErrorText: 'Wir haben keine Berechtigung für diese Datei. Bitte überprüfen Sie Ihre Berechtigungen und versuchen Sie es erneut.',
	},
	onboarding: {
		tutorials: {
			welcome: "Willkommens-Tutorial",
			learner: "Lerner-Tutorial",
			coach: "Coach-Tutorial",
			scenarioCreation: "Tutorial: Ein Szenario erstellen"
		},
		startExploring: "Entdecken",
		close: "Schließen",
		welcome: {
			slide1: {
				title: "Willkommen bei Mobile Practice",
				text: "Mobile Video- & Messaging-Technologie für Teams zum Üben, Coachen und Teilen von Best Practices"
			},
			slide2: {
				title: "Szenarien",
				text: "Im Reiter „Szenarien“ finden Sie eine Liste Ihrer Szenarien, die für Sie als Lerner oder Coach relevant sind"
			},
			slide3: {
				title: "Nachrichten",
				text: "Im Reiter „Nachrichten“ können Sie Nachrichtengruppen mit einem oder mehreren Teilnehmern erstellen."
			},
			slide4: {
				title: "Teams",
				text: "Im Reiter „Teams“ können Sie Ihre Nutzergruppen verwalten"
			},
			slide5: {
				title: "Profil",
				text: "Im Reiter „Profil“ können Sie Ihren persönlichen Avatar hochladen, sich Ihre Statistiken anzeigen lassen und die Einstellungsseite aufrufen."
			},
			slide6: {
				title: "Einstellungen",
				text: "Im Reiter „Einstellungen“ können Sie die Sprache ändern, sich Onboarding-Bildschirme anzeigen lassen und auf Hilfsressourcen zugreifen.",
			},
			slide7: {
				title: "Wie es weiter geht",
			},
		},
		learner: {
			slide1: {
				title: "Szenarioanweisungen",
				text: "Wählen und erweitern Sie das entsprechende Übungsszenario. Auf \"Anweisungen\" klicken"
			},
			slide2: {
				title: "Üben",
				text: "Szenario auswählen und \"Üben\" klicken"
			},
			slide3: {
				title: "Übungs-Chat",
				text: "Hier ist Ihr privater Übungs-Chat mit Ihrem Coach. Stellen Sie Fragen und bereiten Sie sich darauf vor, Ihr Übungsvideo einzureichen."
			},
			slide4: {
				title: "Ein Video senden",
				text: "Nehmen Sie das Video auf, prüfen Sie es und senden Sie es anschließend an Ihren Coach. Sie werden benachrichtigt, sobald ein Feedback verfügbar ist."
			},
			slide5: {
				title: "Szenario bewerten",
				text: "Nachdem Ihr Coach ein Bewertungsfeedback abgegeben hat, haben Sie die Möglichkeit, das Szenario zu bewerten."
			},
		},
		coach: {
			slide1: {
				title: "Coach-Panel",
				text: "Wählen und erweitern Sie das entsprechende Übungsszenario. Klicken Sie auf \"Coach\", um den Status eines jeden Teilnehmers einzusehen."
			},
			slide2: {
				title: "Erinnerung senden",
				text: "Über das Coach-Panel können Sie die Teilnehmer daran erinnern, ihre Videoantworten einzureichen."
			},
			slide3: {
				title: "Übungs-Chat",
				text: "Vom Coach-Panel aus können Sie individuelle Übungs-Chats mit den Lernern beginnen. Hier können Sie mit einem Video oder Text antworten oder ein Dokument hinzufügen."
			},
			slide4: {
				title: "Best Practice von Lerner hinzufügen",
				text: "Teilen Sie besonders gelungene Videoantworten mit der Gruppe. Fragen Sie den Lerner per Chat um Erlaubnis, klicken Sie auf das Video und speichern Sie es als \"Best Practice\". Denken Sie daran, einen Titel hinzuzufügen."
			},
			slide5: {
				title: "Bewerten Sie",
				text: "Bewerten Sie die Leistung des Teilnehmers anhand der Kriterien, die Sie beim Erstellen des Szenarios definiert haben. Damit ist die Übung für den Lerner abgeschlossen."
			},
		},
		scenarioCreation: {
			slide1: {
				title: "Szenario erstellen",
				text: "Im Reiter „Szenarien“ auf \"Neu\" klicken, um die Seite zum Erstellen von Szenarien zu öffnen"
			},
			slide2: {
				title: "Die Details des Szenarios hinzufügen",
				text: "Das Formular mit den Details des Szenarios ausfüllen"
			},
			slide3: {
				title: "Titel und Beschreibung hinzufügen",
				text: "Den Titel und die Beschreibung des Szenarios hinzufügen"
			},
			slide4: {
				title: "Video-Tutorial hinzufügen",
				text: "Nehmen Sie ein Video-Tutorial für Ihre Lerner auf, um den Zweck des Übungsszenarios zu erläutern."
			},
			slide5: {
				title: "Schritte hinzufügen",
				text: "Schritte hinzufügen, um die Antwort der Teilnehmer zu leiten"
			},
			slide6: {
				title: "Bewertungskriterien hinzufügen",
				text: "Diese Kriterien werden zur Bewertung des Szenarios verwendet. Sie können vorhandene Kriterien verwenden oder eigene erstellen"
			},
			slide7: {
				title: "Lerner hinzufügen",
				text: "Fügen Sie Personen zum Übungsszenario hinzu. Sie können sowohl Einzelpersonen als auch vorgegebene Teams hinzufügen"
			},
			slide8: {
				title: "Szenario ist fertig",
				text: "Das war‘s. Das Szenario ist bereit, um an die Teilnehmer gesendet zu werden. Sie müssen nur noch auf \"Senden\" klicken"
			},
		}
	}
};
