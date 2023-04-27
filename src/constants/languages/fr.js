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
	name: 'Français',
	common: {
		edit: 'Modifier',
		create: 'Créer',
		addVideo: 'AJOUTER VIDÉO',
		changeVideo: 'CHANGER',
		browse: 'Sélectionner',
		cancel: 'Annuler',
		done: 'Terminé',
		save: 'Sauvegarder',
		confirmPasswordError: 'Mot de passe incorrect',
		delete: 'Supprimer',
		emailError: 'Email incorrect',
		evaluate: 'Évaluer',
		logOutButton: 'Déconnexion',
		logOutMessage: 'Êtes-vous sûr de vouloir vous déconnecter ?',
		mobilePractice: 'Mobile Practice',
		new: 'Nouveau',
		passwordError: 'Le mot de passe doit contenir au moins 8 caractères',
		send: 'Envoyer',
		tryAgain: 'Réessayer',
		today: 'Aujourd’hui',
		yesterday: 'Hier',
		openAdminPanel: 'Ouvrir la console administrateur',
		newMessage: {
			singular: 'Nouveau message',
			plural: 'Nouveaux messages',
		},
		continue: 'Continuez',
	},
	home: {
		title: 'Page d’accueil',
		connection: {
			titleError: 'Aucune connexion Internet n’est ',
			titleSuccess: 'Votre connexion a été restaurée',
			message: 'Vérifiez votre réseau',
			button: 'Continuez',
		},
		landscape: {
			title: 'Faites tourner votre appareil',
			message: 'MobilePractice fonctionne mieux en mode portrait',
		},
	},
	signIn: {
		description: `Merci de vous identifier`,
		email: 'Email',
		forgotPassword: 'J’ai besoin d’un mot de passe',
		password: 'Mot de Passe',
		signIn: 'S’identifier',
		signInError: 'Email ou mot de passe incorrect',
		title: 'Hello!',
	},
	forgotPassword: {
		description: `Entrer votre email afin de recevoir un lien de réinitialisation du mot de passe`,
		email: 'Votre email',
		reset: 'Envoyer',
		justRemember: 'Retour à la page de connexion',
		title: 'Mot de passe oublié ?',
		success: {
			title: 'Bien joué!',
			message: 'Votre demande a été traitée.\nVous allez recevoir un email de confirmation',
			cta: 'Retour',
		},
		error: {
			title: 'Oups!',
			message: `L’email n'a pas pu être envoyé`,
			cta: 'Réessayer',
		},
	},
	resetPassword: {
		confirm: 'Confirmer',
		confirmPassword: 'Confirmer votre mot de passe',
		description: 'Le mot de passe doit comporter au moins 8 caractères. N\'utilisez pas votre ancien mot de passe.',
		newPassword: 'Nouveau mot de passe',
		title: 'Bonjour!',
		success: {
			title: 'Bien joué!',
			message: 'Le nouveau mot de passe a été créé',
			cta: `S'identifier`,
		},
		error: {
			title: 'Oups!',
			message: 'Le mot de passe n’a pas pu être créé',
			cta: 'Réessayer',
			alreadyUsed: 'Le mot de passe a déjà été utilisé. Veuillez sélectionner un autre',
		},
	},
	createPassword: {
		confirm: 'Confirmer',
		confirmPassword: 'Confirmer votre mot de passe',
		description: `Merci de créer un mot de passe`,
		newPassword: 'Création d’un mot de passe',
		title: 'Hello!',
		success: {
			title: 'Bien joué!',
			message: 'Le mot de passe a été créé',
			cta: 'Revenir à la page d’accueil',
		},
		error: {
			title: 'Oups!',
			message: 'Le mot de passe n’a pas pu être créé',
			cta: 'Réessayer',
		},
	},
	inbox: {
		deletedUser: 'Utilisateur supprimé',
		newChat: 'Nouveau chat',
		editChat: 'Modifier le chat',
		everyOne: 'Toutes les personnes',
		groups: 'Équipes',
		inbox: 'Inbox',
		inboxMessages: 'Messages',
		chatPlaceholder: {
			video: {
				incoming: '{name} vous a envoyé une vidéo',
				outcoming: 'Vous avez envoyé une vidéo à {name}',
			},
			audio: {
				incoming: '{name} vous a envoyé une audio',
				outcoming: 'Vous avez envoyé une audio à {name}',
			},
			image: {
				incoming: '{name} vous a envoyé une image',
				outcoming: 'Vous avez envoyé une image à {name}',
			},
			file: {
				incoming: '{name} vous a envoyé un fichier',
				outcoming: 'Vous avez envoyé un fichier à {name}',
			}
		},
		groupChatPlaceholder: {
			video: {
				incoming: '{name} a envoyé une vidéo',
				outcoming: 'Vous avez envoyé une vidéo',
			},
			audio: {
				incoming: '{name} a envoyé un enregistrement audio',
				outcoming: 'Vous avez envoyé un enregistrement audio',
			},
			image: {
				incoming: '{name} a envoyé une image',
				outcoming: 'Vous avez envoyé une image',
			},
			file: {
				incoming: '{name} a envoyé un fichier',
				outcoming: 'Vous avez envoyé un fichier',
			}
		},
		emptyState: 'Pas de message disponible. Créer une nouvelle conversation pour envoyer un message',
		noResults: 'Aucune correspondance. Merci d’essayer une autre recherche',
		emptyChatUsers: 'Aucun utilisateur avec qui créer un chat',
		emptyChatArea: 'Sélectionner une conversation ou en créer un nouveau',
		emptyChatAreaNoMessages: 'Pas de message disponible.',
		emptyChatAreaNoResult: 'Merci de créer une nouvelle conversation pour envoyer un message',
		deleteMessageConfirmation: 'Êtes-vous sûr de vouloir supprimer ce message ?',
		saveAsBestPractice: 'Enregistrer comme Best Practice',
		justSent: 'À l’instant',
		viewDetails: 'Afficher les détails',
		viewScenarioDetails: 'VOIR',
		evaluate: 'Evaluer',
		sendMessage: 'Envoyer un message...',
		attachPhoto: 'Ajouter une photo',
		attachVideo: 'Ajouter une vidéo',
		you: 'you',
		searchLabel: 'Recherche',
		scenarioCriterias: [
			{
				id: '590f7d5907e94106bdf393a5',
				title: `Qu’avez-vous pensé de cet exercice ?`,
			},
			{
				id: '591f7d5907e94106bdf393a5',
				title: 'Cet exercice vous a-ti-l paru pertinent ?',
			},
			{
				id: '592f7d5907e94106bdf393a5',
				title: `Recommanderiez-vous cet exercice à d’autres personnes ?`,
			},
		],
		createBestPractice: 'Créer une Best Practice',
		giveBestPracticeName: 'Nommer cette Best Practice...',
		bestPracticeError: 'This video was already saved as best practice example',
		goBack: 'Retour',
		inboxError: 'Ooops! La discussion n\'existe plus',
		deleteChatConfirmation: 'Êtes-vous certain de vouloir effacer cette discussion ?',
		copy: 'Copier des médias',
	},
	reminder: {
		sendReminder: 'Envoyer un rappel',
		sendReminderTitle: 'Envoyer un rappel de pratique',
		reminderDefaultMessage: 'Hey, comment cela se passe avec ce scénario ? Nous allons bientôt le fermer donc n\'hésitez pas à me laisser un message si vous avez des questions.',
		reminderSendSuccess: 'Un rappel a été envoyé',
		reminderNeeded: 'Il est nécessaire de faire un rappel!',
		runningOutOfTime: 'Les gens sont à court de temps pour terminer le scénario.',
		sent: 'Envoyé'
	},
	scenarios: {
		stepExample: 'Exemple : rechercher un contact à appeler',
		bestPracticeExample: 'Exemple : vidéo avec une excellente phase d\'ouverture',
		evaluationCriteriaExample: 'Exemple: l’attention de la personne a été saisie.',
		numberOfFinished: '{finished} sur {total} terminé',
		practiceGroups: {
			waitingOnFeedback: 'En attente de commentaires',
			inProgress: 'En cours',
			completed: 'Terminé',
      notStarted: 'Pas commencé'
		},
		practice: 'S’entraîner',
		finished: 'Fini',
		unread: 'Non lu',
		all: 'Tout',
		groupChat: 'Discussion de groupe',
		coach: 'Coach',
		learner: 'Apprenant',
		instructions: 'Instructions',
		emptyState: 'Sélectionner un scénario',
		myScenarios: 'Mes scénarios',
		newScenario: 'Nouveau scénario',
		newScenarioInstructions: 'Nouvelles instructions de scénario',
		scenario: 'Scénario',
		people: 'Personnes',
		/* eslint-disable-next-line max-len */
		requiredFields: 'Champs obligatoires : Nom du scénario, Description, Étapes, Critères d’évaluation et Destinataires',
		requiredSteps: 'Merci d’ajouter des étapes à votre scénario',
		requiredCriteria: 'Merci d’ajouter des critères d’évaluation à votre scénario',
		requiredPeople: 'Merci d’ajouter des destinataires à votre scénario',
		requiredName: 'Merci de nommer votre scénario',
		requiredDescription: 'Merci d’ajouter une description à votre scénario',
		noScenarios: 'Aucun scénario disponible',
		videoPlaceholder: '{name} vous a envoyé une vidéo',
		imagePlaceholder: '{name} vous a envoyé une image',
		currentText: 'En cours',
		completedText: 'Terminés',
		draftText: 'Brouillons',
		addSteps: 'Ajouter une étape',
		addCriterias: 'Ajouter un critère d’évaluation',
		addBestPracticeExample: 'Ajouter un exemple de bonne pratique',
		steps: 'Étapes',
		evaluationCriteria: 'Critères d’évaluation',
		bestPractice: 'Meilleures pratiques',
		addBestPractice: 'Ajouter une autre Best Practice',
		deleteBestPractice: 'Supprimer cette Best Practice',
		bestPracticeCountSeparator: 'sur',
		criteriaSection: {
			selectCriteria: 'Sélectionner des critères d’évaluation',
			addCriteria: '(Ajouter un critère d’évaluation)',
			notFound: 'critère existe déjà',
		},
		peopleSection: {
			addPerson: 'Ajouter une personne',
			peoplePracticing: 'Personnes en cours de pratique',
			groups: 'Équipes',
			people: 'Personnes',
			notFound: 'Aucune correspondance trouvée',
		},
		headerSection: {
			[EDIT_MODE]: {
				mobileHeader: 'Modifier votre scénario',
				buttonPrimaryText: 'Envoyer',
				buttonSecondaryText: 'Annuler',
				namePlaceholder: 'Donner un nom à votre scénario...',
				descriptionPlaceholder: 'Décrire votre scénario…',
			},
			[VIEW_MODE]: {
				mobileHeader: 'Modifier votre scénario',
				buttonPrimaryText: 'Modifier',
				buttonSecondaryText: 'Supprimer',
			},
			[CREATE_MODE]: {
				mobileHeader: 'Scénario',
				buttonPrimaryText: 'Envoyer',
				buttonSecondaryText: 'Annuler',
				namePlaceholder: 'Donner un nom à votre scénario...',
				descriptionPlaceholder: 'Décrire votre scénario…',
			},
			[PRACTICE_MODE]: {
				buttonPrimaryText: 'C’est parti!',
				buttonSecondaryText: '',
			},
		},
		validation: {
			buttonLabel: 'Réessayer',
			title: 'Merci de compléter les champs demandés',
			fields: {
				[VIDEO_ID]: {
					name: 'Vidéo du scénario',
					errorMessage: 'Champ obligatoire',
				},
				[BEST_PRACTICE_VIDEOS]: {
					name: 'Les bonnes pratiques',
					errorMessage: 'Champ obligatoire',
				},
				[SCENARIO_NAME]: {
					name: 'Nom du scénario',
					errorMessage: 'Champ obligatoire',
				},
				[SCENARIO_DESCRIPTION]: {
					name: 'Description du scénario',
					errorMessage: 'Champ obligatoire',
				},
				[STEPS]: {
					name: 'Étapes',
					errorMessage: 'Champ obligatoire',
				},
				[CRITERIAS]: {
					name: 'Critères d’évaluation',
					errorMessage: 'Champ obligatoire',
				},
				[SELECTED_USERS]: {
					name: 'Destinataires',
				},
			},
			deleteUnsaved: 'Êtes-vous sûr de vouloir supprimer vos modifications non sauvegardées ?',
			saveDraftMessage: 'Vous pouvez sauvegarder votre scénario en tant que brouillon',
			deleteChangesButton: 'Supprimer les modifications',
		},
		saveDraftButton: 'Sauvegarder le brouillon',
		deleteScenario: 'Voulez-vous vraiment supprimer ce scénario ?',
		cancel: 'Annuler',
		delete: 'Supprimer',
		emptyGroups: 'Aller dans l’onglet Équipes pour créer un équipe',
		bestPracticeError: 'Ne peut être vide',
		bestPracticePlaceholder: 'Nommer cette Best Practice',
		saved: 'Sauvegardé',
		dueDate: 'Date d\'échéance',
		due: 'Dû',
		fromNow: 'à partir de maintenant',
		left: 'restants',
		pastDue: 'En retard'
	},
	groupChat: {
		label: 'Discussion de groupe',
		viewParticipants: 'Voir les participants',
		groupChatName: 'Nom du chat de groupe'
	},
	teams: {
		teams: 'Équipes',
		buttonDelete: 'Supprimer',
		buttonEdit: 'Modifier',
		buttonCancel: 'Annuler',
		buttonSave: 'Sauvegarder',
		placeholder: 'Saisir le nom du équipe',
		group: 'Équipe',
		newTeam: 'Nouvelle équipe',
		editTeam: 'Modifier l\'équipe',
		deleteTeamConfirmation: 'Voulez-vous vraiment supprimer le équipe ?',
		emptyAreaText: 'Sélectionner un équipe ou en créer un nouveau',
		[EDIT_MODE]: {
			buttonPrimaryText: 'Sauvegarder',
			buttonSecondaryText: 'Annuler',
			placeholder: 'Saisir le nom du équipe',
		},
		[VIEW_MODE]: {
			buttonPrimaryText: 'Modifier',
			buttonSecondaryText: 'Supprimer',
		},
		[CREATE_MODE]: {
			buttonPrimaryText: 'Sauvegarder',
			buttonSecondaryText: 'Annuler',
			placeholder: 'Saisir le nom du équipe',
		},
		wrongName: 'Mauvais nom',
		teamExists: 'Ce nom d’équpe existe déjà',
		tryAgain: 'Réessayer',
		empty: 'Vous n’avez pas encore de équipe',
		noUsers: 'Pas d’utilisateur',
		noUsersMessage: 'Une équipe doit contenir au moins un utilisateur',
		invalidName: 'Nom incorrect',
		invalidNameMessage: 'Le nom du équipe est incorrect',
	},
	primaryNav: {
		inbox: 'MESSAGES',
		scenarious: 'SCÉNARIOS',
		team: 'ÉQUIPE',
		profile: 'PROFIL',
		settings: 'PARAMÈTRES',
		logOut: 'Déconnexion',
	},
	dragAndDrop: {
		add: 'Ajouter',
		change: 'Changement',
		dropHeading: 'Ajouter votre fichier',
		selectFile: 'Sélectionner et ajouter votre fichier ici',
		selectImageFile: 'Sélectionner et ajouter votre image ici',
		errorMessage: 'Oups! Une erreur est survenue',
		fileCount: 'Vous ne pouvez ajouter qu’un seul fichier.',
		formats: 'Formats supportés:',
		maxFileSize: 'La taille maximum du fichier est de',
		multipleFiles: 'Oups! Vous ne pouvez ajouter qu’un seul fichier',
		wrongSize: 'Oups! Votre fichier dépasse la taille maximum supportée',
		wrongFormat: 'Oups! Votre fichier est dans un format inconnu',
		serverError: 'Oups! Une erreur de chargement est survenue',
		selectAnotherFile: 'Pour ajouter un autre fichier, le déposer ici',
		selectAnotherFileMobile: 'Sélectionner',
		uploadPhoto: 'Ajouter une photo',
		uploadVideo: 'Ajouter une vidéo',
		bestPracticeNote: 'Précisez pourquoi il s’agit d’une Best Practice...',
		errorText: 'Ce champ doit être renseigné',
		permissionErrorText: "Nous n'avons pas la permission pour ce fichier. Veuillez vérifier vos autorisations et réessayer.",
		bestPractice: 'Nommer la Best Practice',
	},
	evaluateDialog: {
		paragraph: '1 Pas du tout/Très mauvais · 5 Absolument/Très bien',
		userEvaluationCriterias: {
			experience: 'Evaluate.Rate.Practice.Experience',
			work: 'Evaluate.Rate.Pertinent.To.Work',
			recommend: 'Evaluate.Rate.Recommend.To.Others',
		},
		titleCoach: 'Évaluer {fullName} sur {scenario}',
		titleUser: 'Qu’avez-vous pensé du scénario ?',
		coachViewOfLearnerEvaluat: 'L’avis de {fullName} sur le scenario {scenario}',
		learnerViewOfEvaluat: 'Mon évaluation sur {scenario} ?',
		criteriaExperience: `{You} a t'il/elle apprécié l'exercice ?`,
		criteriaWork: `{You} a t'il/elle trouvé l'exercice pertinent ?`,
		criteriaRecommend: `{You} recommanderait t'il/elle l'exercice ?`,

	},
	settings: {
		settings: 'Paramètres',
		help: {
			title: 'Aide/Feedback',
			/* eslint-disable-next-line max-len */
			description: `Si vous rencontrez des difficultés avec l'application ou si vous souhaitez simplement nous parler, envoyez-nous un mail :`,
		},
		resources: {
			title: 'FAQ',
			description: 'Des tutos et questions fréquentes sont disponibles dans la bibliothèque ci-dessous :',
			descriptionTutorials: 'Consultez nos tutoriels:'
		},
		deleteAccount: {
			title: 'Supprimer mon compte',
			description: 'Si vous souhaitez supprimer votre compte, cliquez ici :',
			button: 'Supprimer le compte',
			dialog: 'Êtes-vous sûr de vouloir supprimer votre compte ?',
		},
		language: {
			title: 'Changer de langue',
			languages: {
				en: 'Anglais (English)',
				fr: 'Français',
				ru: 'Russe (Русский)',
				it: 'Italien (Italiano)',
				es: 'Espagnole (Española)',
				de: 'Allemand (Deutsch)',
				ja: 'Japonais (日本語)',
				ko: 'Coréen (한국어)',
				ch: 'Chinois (中文)',
				pt: 'Portugaise (Português)',
			},
		},
	},
	profile: {
		editText: 'Modifier',
		profile: 'Profil',
		settings: 'Paramètres',
		signout: 'Déconnexion',
	},
	reports: {
		coach: 'Coach',
		learner: 'Apprenant',
		scorePerScenario: 'Score par scénario',
		scorePerCriteria: 'Score par critère',
		totalScoreDetails: 'Détails du score total',
		scenarioScoreDetails: 'Détails du score du scénario',
		responsivenessDetails: 'Evaluation de la réactivité',
		teamMemberDetails: 'Détails des membres de l\'équipe',
		responsivenessPerScenario: 'Réactivité par scénario',
		teamMembersRaking: 'Classement des membres de l\'équipe',
		filters: {
			all: 'Tout',
			period: 'Période',
			lastMonth: 'Le mois dernier',
			last3Months: '3 derniers mois',
			lastYear: 'L\'année dernière',
		},
		dataTitles: {
			totalScore: 'Score total',
			responsiveness: 'Réactivité',
			completed: 'Terminé',
			current: 'Actuel',
			ranking: 'Classement',
		},
		dataDescription: {
			totalScore: 'Le score total est une valeur moyenne selon les critères d\'évaluation',
			responsiveness: 'La réactivité est le nombre de jours pendant lequel un apprenant envoie une réponse',
			completed: 'Nombre de scénarios achevés',
			current: 'Nombre de scénarios actuels',
			ranking: 'Le classement montre la position de votre équipe par rapport aux autres équipes de l\'entreprise',
		},
		dataLabels: {
			score: 'Score',
			responsiveness: 'Réactivité',
			team: 'Équipe',
			me: 'Moi',
			user: 'Utilisateur',
			company: 'Entreprise',
		},
	},
	recording: {
		browseVideo: 'Sélectionner',
		recordVideo: 'Enregistrer une vidéo',
		uploadExisting: 'Ou, télécharger une vidéo existante',
		replay: 'Rejouer',
		recordAgain: 'Réenregistrer',
		send: 'Envoyer',
		next: 'Suivant',
		retry: 'Refaire',
		selectAnOption: 'Merci de sélectionner une des deux options ci-dessous',
		constraintsError: {
			title: 'Problème de périphérique',
			message: 'Assurez-vous que la caméra connectée prend en charge la résolution minimale de 640x480',
		},
		permissionError: {
			title: 'Pas d\'accès',
			message: 'Veuillez vous assurer que vous avez autorisé le navigateur à accéder à la caméra / au microphone',
			messageAudio: 'Veuillez vous assurer que vous avez autorisé le navigateur à accéder au microphone',
		},
		deviceBusyError: {
			title: 'Le périphérique est occupé',
			message: 'Veuillez vous assurer que les autres programmes n\'utilisent pas caméra / microphone',
			messageAudio: 'Veuillez vous assurer que les autres programmes n\'utilisent pas microphone',
		},
		notFoundError: {
			title: 'Entrée non trouvée',
			message: 'Veuillez vous assurer que la caméra et le microphone sont correctement connectés',
			messageAudio: 'Veuillez vous assurer que le microphone sont correctement connectés',
		},
		unknownError: {
			title: 'Erreur inconnue',
			message: 'Ooops! On dirait que quelque chose s\'est mal passé!',
		},
	},
	termsAndConditions: {
		error: 'Champ obligatoire',
		iAgree: `J'accepte` ,
		theTerms: 'les conditions',
		iRead: `générales d'utilisation du service et atteste avoir lu la politique de confidentialité.`,
		information: `<p style="text-align: center;"><strong>CONDITIONS G&Eacute;N&Eacute;RALES D&rsquo;UTILISATION</strong></p>
		<ol>
		<li style="text-align: left;"><strong> Acc&egrave;s &agrave; l&rsquo;Application</strong></li>
		</ol>
		<p><span style="font-weight: 400;">Je reconnais que:</span></p>
		<ul>
		<li style="text-align: justify;"><span style="font-weight: 400;">La plateforme M-Learning de MOBILE PRACTICE (ci-apr&egrave;s <br>&laquo; l&rsquo;Application &raquo;) est mise &agrave; ma disposition par l&rsquo;entreprise MOBILE PRACTICE ou par un de ses partenaires ayants-droit dans le but de me former &agrave; un certain nombre de sujets.</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">L&rsquo;adresse URL de la plateforme <br>&laquo; M-Learning &raquo; ne doit &ecirc;tre transf&eacute;r&eacute;e ni communiqu&eacute;e &agrave; personne, qui que ce soit (que ce soit en interne ou en externe).</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE se r&eacute;serve le droit, &agrave; sa seule discr&eacute;tion, de suspendre ou mettre fin &agrave; l&rsquo;acc&egrave;s &agrave; tout ou partie de l&rsquo;Application, de son contenu ou services propos&eacute;s sur l&rsquo;Application, sans notification pr&eacute;alable.</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">L&rsquo;Application peut pr&eacute;senter des liens vers d'autres sources Internet. Dans la mesure o&ugrave; MOBILE PRACTICE ne peut contr&ocirc;ler ces sources externes, MOBILE PRACTICE ne saurait &ecirc;tre tenue responsable du contenu, publicit&eacute;s, produits, services ou tout autre &eacute;l&eacute;ment disponible sur ces sources externes.</span></li>
		</ul>
		<ol start="2">
		<li style="text-align: left;"><strong> Comportement des utilisateurs</strong></li>
		</ol>
		<p><span style="font-weight: 400;">Chaque utilisateur de l&rsquo;Application garantit et s&rsquo;engage &agrave; :</span></p>
		<ul>
		<li style="text-align: justify;"><span style="font-weight: 400;">Utiliser l&rsquo;Application &agrave; des fins licites, &agrave; l&rsquo;exclusion de toute utilisation &agrave; des fins commerciales ou publicitaires;</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">Ne pas communiquer ou d&eacute;voiler &agrave; toute personne ne b&eacute;n&eacute;ficiant pas des m&ecirc;mes acc&egrave;s toute information et/ou contenu de l&rsquo;Application ;</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">Ne pas perturber ou interrompre le fonctionnement de l&rsquo;Application, des serveurs ou r&eacute;seaux connect&eacute;s &agrave; l&rsquo;Application ou enfreindre les exigences, proc&eacute;dures, r&egrave;gles ou r&eacute;glementations ;</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">Ne pas tenter de porter atteinte au fonctionnement de l&rsquo;Application en causant une surcharge de consultation (bande passante), en surchargeant le serveur, en envoyant des "spams" ou en surchargeant le service messagerie de l&rsquo;Application le cas &eacute;ch&eacute;ant ;</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">Ne pas consulter des informations qui ne lui sont pas destin&eacute;es ou acc&eacute;der &agrave; un serveur ou un compte auquel l&rsquo;utilisateur n&rsquo;est pas autoris&eacute; &agrave; acc&eacute;der ;</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">Ne pas modifier les &eacute;l&eacute;ments logiciels de l&rsquo;Application en vue d'obtenir un acc&egrave;s non autoris&eacute; &agrave; l&rsquo;Application ;</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">Ne pas chercher &agrave; &eacute;valuer, &agrave; constater ou &agrave; tester la vuln&eacute;rabilit&eacute; de l&rsquo;Application, ou enfreindre les mesures de s&eacute;curit&eacute; ou d&rsquo;authentification de l&rsquo;Application sans l&rsquo;accord &eacute;crit pr&eacute;alable de MOBILE PRACTICE ;</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">Ne pas t&eacute;l&eacute;charger vers l&rsquo;Application, transmettre, poster ou mettre par tout moyen &agrave; disposition des &eacute;l&eacute;ments publicitaires ou promotionnels non sollicit&eacute;s ou non autoris&eacute;s ;</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">Ne pas envoyer par courrier &eacute;lectronique ou transmettre par tout autre moyen tout contenu de l&rsquo;Application &agrave; qui que ce soit.</span></li>
		<li style="text-align: justify;"><span style="font-weight: 400;">Le cas &eacute;ch&eacute;ant, MOBILE PRACTICE peut mettre fin &agrave; tout moment au droit d&rsquo;acc&egrave;s &agrave; l&rsquo;Application d&rsquo;un utilisateur si celui-ci ne respecte pas les obligations qui lui incombent.</span></li>
		</ul>
		<ol start="3">
		<li style="text-align: left;"><strong> Protection du contenu de l&rsquo;Application</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">L&rsquo;Application et chacun des &eacute;l&eacute;ments qui la composent (tels que textes, arborescences, logiciels, animations, photographies, illustrations, images, sch&eacute;mas, bandes sonores, textes, logos, marques, dessins et mod&egrave;les, questionnaires, quiz), y compris les &eacute;l&eacute;ments logiciels n&eacute;cessaires au fonctionnement de l&rsquo;Application et bases de donn&eacute;es (ci-apr&egrave;s le "Contenu") peuvent contenir des informations confidentielles et des donn&eacute;es prot&eacute;g&eacute;es par le droit de la propri&eacute;t&eacute; intellectuelle ou toute autre loi applicable. Ainsi, sauf mention contraire sur l&rsquo;Application, les droits de propri&eacute;t&eacute; intellectuelle sur le Contenu sont la propri&eacute;t&eacute; exclusive de MOBILE PRACTICE et/ou de ses partenaires ayants-droit, ceux-ci ne conc&eacute;dant &agrave; l&rsquo;utilisateur aucune licence, ni aucun autre droit que celui de consulter l&rsquo;Application.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">La reproduction de tout ou partie du Contenu est autoris&eacute;e uniquement aux fins d'information et de formation des utilisateurs, toute reproduction et toute utilisation de copies du Contenu r&eacute;alis&eacute;es &agrave; d'autres fins, de quelque mani&egrave;re que ce soit et sous quelque forme que ce soit, &eacute;tant express&eacute;ment interdites.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Il est &eacute;galement interdit &agrave; l&rsquo;utilisateur de copier, modifier, cr&eacute;er une &oelig;uvre d&eacute;riv&eacute;e, assembler, d&eacute;compiler, c&eacute;der, sous-licencier ou transf&eacute;rer de quelque mani&egrave;re que ce soit tout droit aff&eacute;rent au Contenu ou &agrave; l&rsquo;Application.</span></p>
		<ol style="text-align: justify;" start="4">
		<li><strong> Responsabilit&eacute;</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE s'efforce d'assurer au mieux de ses possibilit&eacute;s l'exactitude et la mise &agrave; jour des informations diffus&eacute;es sur l&rsquo;Application. Toutefois, MOBILE PRACTICE ne peut garantir l'exactitude, la pr&eacute;cision ou l'exhaustivit&eacute; des informations mises &agrave; la disposition des utilisateurs sur l&rsquo;Application.</span></p>
		<ol start="5">
		<li style="text-align: left;"><strong> Donn&eacute;es Personnelles</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE et ses partenaires ayants-droit veillent &agrave; la protection des donn&eacute;es personnelles des utilisateurs de l&rsquo;Application et respectent vos pr&eacute;occupations concernant la confidentialit&eacute; des renseignements et informations personnels que vous nous fournissez. En nous communiquant vos renseignements et donn&eacute;es personnels, vous consentez &agrave; ce qu&rsquo;ils soient utilis&eacute;s et communiqu&eacute;s dans les conditions d&eacute;finies ci-apr&egrave;s.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Par l&rsquo;interm&eacute;diaire de l&rsquo;Application, MOBILE PRACTICE et ses partenaires ayants-droit peuvent &ecirc;tre amen&eacute;s &agrave; collecter des donn&eacute;es personnelles communiqu&eacute;es, notamment dans le cadre de la mise &agrave; disposition de l&rsquo;Application (nom, pr&eacute;nom, identifiant, adresse mail des apprenants, d&eacute;partement ou direction de rattachement, temps pass&eacute;, nombre de connexion, nombre de points), uniquement pour les finalit&eacute;s d&eacute;finies ci-dessous:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;">gestion de formation</span></li>
		<li><span style="font-weight: 400;">statistiques, &eacute;tudes et analyses des r&eacute;ponses aux questionnaires et quiz,</span></li>
		<li><span style="font-weight: 400;">perfectionnement de l&rsquo;Application, notamment gr&acirc;ce aux enqu&ecirc;tes de satisfaction.</span></li>
		</ul>
		<p style="text-align: justify;"><span style="font-weight: 400;">En acc&eacute;dant, en cr&eacute;ant votre compte sur l&rsquo;Application et en cliquant sur l&rsquo;ic&ocirc;ne <br>&laquo; J&rsquo;accepte &raquo;, vous reconnaissez avoir pris connaissance des conditions g&eacute;n&eacute;rales ainsi que des clauses vis&eacute;es ci-dessus et vous les acceptez irr&eacute;vocablement. En cons&eacute;quence, vous consentez sans r&eacute;serve au traitement de vos donn&eacute;es personnelles conform&eacute;ment auxdits conditions g&eacute;n&eacute;rales et aux pr&eacute;sentes par la soci&eacute;t&eacute; MOBILE PRACTICE.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Toute information personnelle que vous serez amen&eacute; &agrave; transmettre pour l&rsquo;utilisation de l&rsquo;Application est soumise aux dispositions de la loi n&deg; 78-17 Informatique et Libert&eacute;s du 6 janvier 1978.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Vous disposez &agrave; tout moment d'un droit d'acc&egrave;s, de rectification, d&rsquo;effacement, de limitation, de portabilit&eacute;, d&rsquo;opposition des informations personnelles vous concernant, et de la possibilit&eacute; de vous opposer au traitement de ces donn&eacute;es en adressant un courrier &agrave; l'adresse suivante MOBILE PRACTICE - 224, rue Saint-Denis &ndash; 75002 Paris ou un e-mail &agrave; contact@Mobile Practice.com.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Les donn&eacute;es collect&eacute;es sont conserv&eacute;es pendant toute la dur&eacute;e n&eacute;cessaire aux finalit&eacute;s pour lesquelles elles ont &eacute;t&eacute; collect&eacute;es et sont, en tout &eacute;tat de cause, d&eacute;truites 6 mois apr&egrave;s la date de fin des droits d&rsquo;acc&egrave;s &agrave; l&rsquo;utilisation de l&rsquo;Application.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Seuls les destinataires dument habilit&eacute;s par MOBILE PRACTICE en charge de la gestion de la formation, auront acc&egrave;s &agrave; vos donn&eacute;es. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE s&rsquo;efforce de mettre en place toutes pr&eacute;cautions utiles pour pr&eacute;server la confidentialit&eacute; et la s&eacute;curit&eacute; des donn&eacute;es personnelles collect&eacute;es et trait&eacute;es et emp&ecirc;cher qu&rsquo;elles ne soient d&eacute;form&eacute;es, endommag&eacute;es, d&eacute;truites ou que des tiers non autoris&eacute;s y aient acc&egrave;s. Cependant, MOBILE PRACTICE ne ma&icirc;trise pas tous les risques li&eacute;s au fonctionnement d'internet et attire l'attention des utilisateurs de l&rsquo;Application sur l'existence d'&eacute;ventuels risques inh&eacute;rents &agrave; son utilisation et &agrave; son fonctionnement.</span></p>`,
	},
	mediaUpload: {
		wrongSize: 'Oups! Votre fichier dépasse la taille maximum supportée.',
		wrongFormat: 'Oups! Votre fichier est dans un format inconnu.',
		tryAgain: 'Réessayer',
		uploadFailed: 'Oups! Échec du téléchargement.',
		maxFileSize: 'La taille maximum du fichier est de',
		formats: 'Formats supportés:',
		permissionErrorText: "Nous n'avons pas la permission pour ce fichier. Veuillez vérifier vos autorisations et réessayer.",
	},
	onboarding: {
		tutorials: {
			welcome: "Tutoriel de bienvenue",
			learner: "Tutoriel pour l'apprenant",
			coach: "Tutoriel pour le coach",
			scenarioCreation: "Tutoriel de création d'un scénario"
		},
		startExploring: "Commencer",
		close: "fermer",
		welcome: {
			slide1: {
				title: "Bienvenue sur Mobile Practice",
				text: "Application de messagerie vidéo permettant aux équipes de s'entraîner, de coacher et de partager les bonnes pratiques à distance"
			},
			slide2: {
				title: "Scénarios",
				text: "Sur la page Scénarios, vous pouvez voir la liste de vos scénarios en cours en tant qu'apprenant ou suivre vos équipes en tant que coach"
			},
			slide3: {
				title: "Messages",
				text: "Sur la page Messages, vous pouvez afficher vos conversations"
			},
			slide4: {
				title: "Équipe",
				text: "Sur la page Équipes, vous pouvez gérer vos groupes d'utilisateurs"
			},
			slide5: {
				title: "Profil",
				text: "Sur votre profil, vous pouvez télécharger votre avatar et voir vos statistiques"
			},
			slide6: {
				title: "Paramétres",
				text: "Sur votre profil, vous avez accès aux paramètres. Vous pouvez changer la langue et afficher des ressources supplémentaires",
			},
			slide7: {
				title: "Où aller ensuite",
			},
		},
		learner: {
			slide1: {
				title: "Instructions du scénario",
				text: "Choisissez le scénario et cliquez sur \"Instructions\" pour afficher les détails du scénario"
			},
			slide2: {
				title: "Commencez à vous entrainer",
				text: "Choisissez le scénario et cliquez sur \"S’entraîner\""
			},
			slide3: {
				title: "Discussion d'entraînement individuel",
				text: "C'est votre moment d'entraînement avec votre coach. Posez lui des questions et préparez-vous à soumettre votre vidéo de pratique"
			},
			slide4: {
				title: "Envoyer une vidéo",
				text: "Vous pouvez ajouter une vidéo préenregistrée ou en enregistrer une nouvelle. Attendez l'évaluation de l'entraîneur"
			},
			slide5: {
				title: "Évaluer le scénario",
				text: "Après avoir reçu les commentaires du coach, vous pourrez évaluer le scénario"
			},
		},
		coach: {
			slide1: {
				title: "Console du coach",
				text: "Choisissez le scénario et cliquez sur \"Coach\" pour ouvrir la console du coach. Vous y trouverez les pratiques individuelles et leurs statuts"
			},
			slide2: {
				title: "Envoyer un rappel",
				text: "Sur la console du coach, vous pouvez envoyer un reminder pour rappeler aux apprenants de soumettre leurs pratiques. Cliquez sur \"Envoyer un rappel\" et envoyer un message à tous les apprenants"
			},
			slide3: {
				title: "Discussion d'entraînement individuel",
				text: "Depuis la console du coach, vous pouvez ouvrir un chat d'entraînement individuel avec l'apprenant. De là, vous pouvez répondre à ses questions et y ajouter des instructions supplémentaires"
			},
			slide4: {
				title: "Ajouter les bonnes pratiques de l'apprenant",
				text: "La réponse des apprenants peut être exceptionnelle. Elle peut servir d'inspiration et d'exemple pour le reste des participants. Vous pouvez l'enregistrer comme «best practice»"
			},
			slide5: {
				title: "Évaluer",
				text: "Il est temps d'évaluer la pratique de l'apprenant. Notez chaque critère du scénario "
			},
		},
		scenarioCreation: {
			slide1: {
				title: "Créer un scénario",
				text: "Dans l'onglet \"Scénarios\", cliquez sur \"Nouveau\" pour ouvrir la page de création d'un scénario"
			},
			slide2: {
				title: "Ajouter le détail du scénario",
				text: "Remplissez le formulaire avec le détail du scénario"
			},
			slide3: {
				title: "Ajouter un titre et une description",
				text: "Ajouter un titre et une description du scénario"
			},
			slide4: {
				title: "Ajouter une vidéo explicative",
				text: "Ajoutez une vidéo explicative à votre scénario. Vous pouvez ajouter une vidéo préenregistrée ou en enregistrer une nouvelle"
			},
			slide5: {
				title: "Ajouter des étapes",
				text: "Ajoutez des étapes pour guider les participants"
			},
			slide6: {
				title: "Ajouter des critères d'évaluation",
				text: "Ces critères seront utilisés pour évaluer le scénario. Vous pouvez utiliser des critères existants ou créer les vôtres"
			},
			slide7: {
				title: "Ajouter des apprenants",
				text: "Ajoutez des personnes au scénario. Vous pouvez ajouter des individus ainsi que des équipes prédéfinies"
			},
			slide8: {
				title: "Le scénario est prêt",
				text: "Tout est bon! Le scénario est prêt à être envoyé aux participants. Il vous suffit de cliquer sur \"Envoyer\""
			},
		}
	}
};
