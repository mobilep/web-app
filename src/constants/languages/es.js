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
	name: 'Española',
	common: {
		edit: 'Editar',
		create: 'Crear',
		addVideo: 'Añadir vídeo',
		changeVideo: 'Cambiar',
		browse: 'Buscar en',
		cancel: 'Cancelar',
		done: 'Finalizado',
		save: 'Guardar',
		confirmPasswordError: 'La contraseña no coincide',
		delete: 'Borrar',
		emailError: 'El correo electrónico no es válido',
		evaluate: 'Evaluar',
		logOutButton: 'Cerrar la sesión',
		logOutMessage: '¿Estás seguro de que quieres cerrar la sesión?',
		mobilePractice: 'Mobile Practice ',
		new: 'Nuevo',
		passwordError: 'La contraseña debe contener al menos 8 caracteres',
		send: 'Enviar',
		tryAgain: 'Inténtalo de nuevo',
		today: 'Hoy',
		yesterday: 'Ayer',
		openAdminPanel: 'Abrir el panel de administración',
		newMessage: {
			singular: 'nuevo mensaje',
			plural: 'nuevos mensajes',
		},
		continue: 'Continuar',
	},
	home: {
		title: 'Página principal', // Todo self translation
		connection: {
			titleError: 'No hay conexión a Internet',
			titleSuccess: 'Se ha restablecido la conexión',
			message: 'Por favor, comprueba tu red',
			button: 'Continuar',
		},
		landscape: {
			title: 'Por favor, gira tu dispositivo',
			message: 'Mobile Practice funciona mejor en modo vertical',
		},
	},
	signIn: {
		description: `Por favor inicie sesión para continuar`, // Todo self translation
		email: 'Envíe un correo electrónico a',
		forgotPassword: '¿Necesitas la contraseña?',
		password: 'Contraseña',
		signIn: 'Iniciar sesión',
		signInError: 'La combinación de correo electrónico o contraseña no es válida',
		title: '¡Hola!',
	},
	forgotPassword: {
		description: `Introduce tu correo electrónico y te mandaremos un enlace para restablecer tu contraseña`,
		email: 'Tu correo electrónico',
		reset: 'Enviar',
		justRemember: 'Volver a Inicio de sesión',
		title: '¿Has olvidado tu contraseña?',
		success: {
			title: '¡Ha sido un éxito!',
			message: 'Gracias por tu solicitud.\nEn breve recibirás un email de confirmación.',
			cta: 'Volver',
		},
		error: {
			title: '¡Ooops!',
			message: 'Parece que tu correo electrónico no puede ser enviado',
			cta: 'Inténtalo de nuevo',
		},
	},
	resetPassword: {
		confirm: 'Confirmar',
		confirmPassword: 'Confirmar contraseña',
		description: 'La contraseña debe tener al menos 8 caracteres. No utilices una contraseña anterior',
		newPassword: 'Nueva contraseña',
		title: '¡Hola!',
		success: {
			title: '¡Ha sido un éxito!',
			message: 'Se ha creado una nueva contraseña',
			cta: 'Iniciar sesión',
		},
		error: {
			title: '¡Ooops!',
			message: 'Parece que tu contraseña no puede ser creada',
			cta: 'Inténtalo de nuevo',
			alreadyUsed: 'La contraseña ya ha sido utilizada. Elige otra',
		},
	},
	createPassword: {
		confirm: 'Confirmar',
		confirmPassword: 'Confirmar contraseña',
		description: `¡Vamos a crear una contraseña!`,
		newPassword: 'Nueva contraseña',
		title: 'Hola',
		success: {
			title: '¡Ha sido un éxito!',
			message: 'La contraseña ha sido creada',
			cta: 'Volver al inicio',
		},
		error: {
			title: '¡Ooops!',
			message: 'Parece que tu contraseña no puede ser creada',
			cta: 'Inténtalo de nuevo',
		},
	},
	inbox: {
		deletedUser: 'Usuario eliminado',
		newChat: 'Nuevo chat',
		editChat: 'Editar chat',
		everyOne: 'Todos',
		groups: 'Equipos',
		inbox: 'Bandeja de entrada',
		inboxMessages: 'Mensajes',
		chatPlaceholder: {
			video: {
				incoming: '{name} te ha enviado un vídeo.',
				outcoming: 'Has enviado un vídeo a {name}',
			},
			audio: {
				incoming: '{name} te ha enviado una grabación de audio',
				outcoming: 'Has enviado una grabación de audio a {name}',
			},
			image: {
				incoming: '{name} te ha enviado una imagen.',
				outcoming: 'Has enviado una imagen a {name}',
			},
			file: {
				incoming: '{name} te ha enviado un archivo".',
				outcoming: 'Has enviado un archivo a {name}',
			}
		},
		groupChatPlaceholder: {
			video: {
				incoming: '{name} ha enviado un vídeo.',
				outcoming: 'Has enviado un vídeo.',
			},
			audio: {
				incoming: '{name} ha enviado una grabación de audio.',
				outcoming: 'Has enviado una grabación de audio.',
			},
			image: {
				incoming: '{name} ha enviado una imagen.',
				outcoming: 'Has enviado una imagen.',
			},
			file: {
				incoming: '{name} ha enviado un archivo.',
				outcoming: 'Has enviado un archivo.',
			}
		},
		emptyState: 'Todavía no hay mensajes. Crea uno nuevo para empezar a enviar mensajes.',
		noResults: 'Lamentablemente, no hay resultados de búsqueda. Por favor, prueba con otra cosa.',
		emptyChatUsers: 'Nessun utente con cui chattare',
		emptyChatArea: 'Selecciona un chat o crea uno nuevo',
		emptyChatAreaNoMessages: 'Todavía no hay mensajes',
		emptyChatAreaNoResult: 'Por favor, crea un nuevo chat para empezar a mandar mensajes ',
		deleteMessageConfirmation: '¿Estás seguro de que quieres eliminar este mensaje?',
		saveAsBestPractice: 'Guardar como ejemplo de buenas prácticas',
		justSent: 'Ahora mismo',
		viewDetails: 'Ver detalles',
		viewScenarioDetails: 'Ver detalles del escenario',
		evaluate: 'Evaluar',
		sendMessage: 'Enviar mensaje...',
		attachPhoto: 'Adjuntar foto',
		attachVideo: 'Adjuntar vídeo',
		you: 'tu',
		searchLabel: 'Buscar en',
		scenarioCriterias: [
			{
				id: '590f7d5907e94106bdf393a5',
				title: '¿Te ha gustado esta práctica?',
			},
			{
				id: '591f7d5907e94106bdf393a5',
				title: '¿Es relevante para tu trabajo?',
			},
			{
				id: '592f7d5907e94106bdf393a5',
				title: '¿La recomendarías a otros?',
			},
		],
		createBestPractice: 'Crear una buena práctica',
		giveBestPracticeName: 'Dale un nombre a la buena práctica...',
		bestPracticeError: 'Este vídeo ya se ha guardado como ejemplo de buena práctica',
		goBack: 'Volver',
		inboxError: '¡Vaya! Este chat ya no existe.',
		deleteChatConfirmation: '¿Estás seguro de que quieres eliminar este chat?',
		copy: 'Copiar medios'
	},
	reminder: {
		sendReminder: 'Enviar recordatorio',
		sendReminderTitle: 'Enviar un recordatorio de prácticas',
		reminderDefaultMessage: '¿Cómo va la práctica? Queremos finalizarla pronto. Envíame un mensaje si tienes alguna pregunta.',
		reminderSendSuccess: 'Se ha enviado el recordatorio',
		reminderNeeded: 'Es necesario un recordatorio de las prácticas.',
		runningOutOfTime: 'Se está acabando el tiempo para que los participantes finalicen la práctica.',
		sent: 'Enviado'
	},
	scenarios: {
		stepExample: 'Ejemplo: buscar un contacto al que llamar.',
		bestPracticeExample: 'Ejemplo: vídeo con un gran comienzo.',
		evaluationCriteriaExample: 'Ejemplo: se capta la atención de la persona.',
		numberOfFinished: '{finished} de {total} que han finalizado',
		practiceGroups: {
			waitingOnFeedback: 'A la espera de comentarios',
			inProgress: 'En curso',
			completed: 'Completado',
			notStarted: 'No iniciado'
		},
		practice: 'Práctica',
		finished: 'Finalizado',
		unread: 'No leído',
		all: 'Todo',
		groupChat: 'Chat de grupo',
		coach: 'Formador',
		learner: 'Alumno',
		instructions: 'Instrucciones',
		emptyState: 'Seleccionar escenario',
		myScenarios: 'Escenarios',
		newScenario: 'Nuevo escenario',
		newScenarioInstructions: 'Nuevas instrucciones de prácticas',
		scenario: 'Escenario',
		people: 'personas',
		requiredFields: 'Campos obligatorios: Nombre del escenario, Descripción del escenario, Pasos, Criterios, Personas.',
		requiredSteps: 'Por favor, añade algunos pasos para guardar el escenario',
		requiredCriteria: 'Por favor, añada algunos criterios para guardar el escenario',
		requiredPeople: 'Por favor, añade personas para guardar el escenario',
		requiredName: 'Por favor, añade un nombre al escenario para guardarlo',
		requiredDescription: 'Por favor, añade la descripción del escenario para guardarlo',
		noScenarios: 'Todavía no hay escenarios',
		videoPlaceholder: '{name} te ha enviado un vídeo.',
		imagePlaceholder: '{name} te ha enviado una imagen.',
		currentText: 'Actual',
		completedText: 'Completado',
		draftText: 'Borrador',
		addSteps: 'Añadir paso a seguir',
		addCriterias: 'Añadir algunos criterios nuevos...',
		addBestPracticeExample: 'Añadir un ejemplo de buenas prácticas',
		steps: 'Pasos',
		evaluationCriteria: 'Criterios de evaluación',
		bestPractice: 'Mejor práctica',
		addBestPractice: 'Añadir otra mejor práctica',
		deleteBestPractice: 'Eliminar la mejor práctica',
		bestPracticeCountSeparator: 'fuera de',
		criteriaSection: {
			selectCriteria: 'Añadir criterios de evaluación',
			addCriteria: '(añadir criterios)',
			notFound: 'Los criterios ya están añadidos',
		},
		peopleSection: {
			addPerson: 'Añadir una persona',
			peoplePracticing: 'Personas que practican esto',
			groups: 'Equipos',
			people: 'Personas',
			notFound: 'no se han encontrado coincidencias',
		},
		headerSection: {
			[EDIT_MODE]: {
				mobileHeader: 'Editar escenario',
				buttonPrimaryText: 'Enviar',
				buttonSecondaryText: 'Cancelar',
				namePlaceholder: 'Dale un nombre a la buena práctica...',
				descriptionPlaceholder: 'Describe el escenario...',
			},
			[VIEW_MODE]: {
				mobileHeader: '',
				buttonPrimaryText: 'Editar',
				buttonSecondaryText: 'Borrar',
			},
			[CREATE_MODE]: {
				mobileHeader: 'Nuevo escenario',
				buttonPrimaryText: 'Enviar',
				buttonSecondaryText: 'Cancelar',
				namePlaceholder: 'Dar un nombre al escenario...',
				descriptionPlaceholder: 'Describe el escenario...',
			},
			[PRACTICE_MODE]: {
				buttonPrimaryText: 'Práctica',
				buttonSecondaryText: '',
			},
		},
		validation: {
			buttonLabel: 'Inténtalo de nuevo',
			title: 'Rellena los campos obligatorios',
			fields: {
				[VIDEO_ID]: {
					name: 'Vídeo del escenario',
					errorMessage: 'Este campo es obligatorio',
				},
				[BEST_PRACTICE_VIDEOS]: {
					name: 'Vídeo de buenas prácticas',
					errorMessage: 'Este campo es obligatorio',
				},
				[SCENARIO_NAME]: {
					name: 'Nombre del escenario',
					errorMessage: 'Este campo es obligatorio',
				},
				[SCENARIO_DESCRIPTION]: {
					name: 'Descripción del escenario',
					errorMessage: 'Este campo es obligatorio',
				},
				[STEPS]: {
					name: 'Pasos',
					errorMessage: 'Este campo es obligatorio',
				},
				[CRITERIAS]: {
					name: 'Criterio',
					errorMessage: 'Este campo es obligatorio',
				},
				[SELECTED_USERS]: {
					name: 'Personas',
				},
			},
			deleteUnsaved: '¿Estás seguro de que deseas eliminar los cambios no guardados?',
			saveDraftMessage: 'Puedes guardar tu escenario como borrador',
			deleteChangesButton: 'Borrar los cambios',
		},
		saveDraftButton: 'Guardar borrador',
		deleteScenario: '¿Estás seguro de que deseas eliminar el escenario?',
		cancel: 'Cancelar',
		delete: 'Borrar',
		emptyGroups: 'Los equipos se crean y gestionan en la pestaña Equipos',
		bestPracticeError: 'no debe estar vacío',
		bestPracticePlaceholder: 'Dar un nombre a la mejor práctica',
		saved: 'Guardado',
		dueDate: 'Fecha de vencimiento',
		due: 'Plazo',
		fromNow: 'desde ahora',
		left: 'restantes',
		pastDue: 'Vencido'
	},
	groupChat: {
		label: 'Chat de grupo',
		viewParticipants: 'Ver participantes',
		groupChatName: 'Nombre del chat de grupo'
	},
	teams: {
		teams: 'Equipos',
		buttonDelete: 'Borrar',
		buttonEdit: 'Editar',
		buttonCancel: 'Cancelar',
		buttonSave: 'Guardar',
		placeholder: 'Introduce el título del equipo...',
		group: 'Equipo',
		newTeam: 'Nuevo equipo',
		editTeam: 'Editar equipo',
		deleteTeamConfirmation: '¿Estás seguro de que quieres eliminar un equipo?',
		emptyAreaText: 'Selecciona un equipo o crea uno nuevo',
		[EDIT_MODE]: {
			buttonPrimaryText: 'Guardar',
			buttonSecondaryText: 'Cancelar',
			placeholder: 'Introduce el título del equipo...',
		},
		[VIEW_MODE]: {
			buttonPrimaryText: 'Editar',
			buttonSecondaryText: 'Borrar',
		},
		[CREATE_MODE]: {
			buttonPrimaryText: 'Guardar',
			buttonSecondaryText: 'Cancelar',
			placeholder: 'Introduce el título del equipo...',
		},
		wrongName: 'Nombre incorrecto',
		teamExists: 'El equipo con este nombre ya existe',
		tryAgain: 'Inténtalo de nuevo',
		empty: 'Todavía no tienes ningún equipo',
		noUsers: 'No hay usuarios',
		noUsersMessage: 'El equipo debe contener al menos un usuario',
		invalidName: 'Nombre inválido',
		invalidNameMessage: 'El nombre de este equipo no es válido',
	},
	primaryNav: {
		inbox: 'MENSAJES',
		scenarious: 'ESCENARIOS',
		team: 'EQUIPOS',
		profile: 'PERFIL',
		settings: 'CONFIGURACIÓN',
		logOut: 'CERRAR LA SESIÓN',
	},
	dragAndDrop: {
		add: 'Añadir',
		change: 'Cambiar',
		dropHeading: 'Soltar archivos aquí',
		selectFile: 'Arrastra y suelta los archivos aquí \n o',
		selectImageFile: 'Arrastra y suelta los archivos aquí \n o',
		errorMessage: '¡Vaya! ¡Parece que algo salió mal!', //Todo self translation
		fileCount: 'Puedes añadir sólo un archivo.',
		formats: 'Formatos:',
		maxFileSize: 'El tamaño máximo de los archivos es',
		multipleFiles: '¡Ooops! Sólo puedes añadir un archivo',
		wrongSize: '¡Ooops! Parece que tu archivo es demasiado grande',
		wrongFormat: '¡Ooops! Parece que tu archivo está en un formato incorrecto',
		serverError: '¡Oops! Parece que se ha producido un error en el servidor',
		selectAnotherFile: 'Para seleccionar otro archivo arrastra y suelta el archivo aquí o',
		selectAnotherFileMobile: 'Selecciona otro archivo',
		uploadPhoto: 'Subir una foto',
		uploadVideo: 'Subir un vídeo',
		bestPracticeNote: 'Incluye una breve nota sobre por qué es la mejor práctica..',
		errorText: 'no debe estar vacío',
		permissionErrorText: 'No tenemos permiso para este archivo. Por favor, comprueba tus permisos y vuelve a intentarlo.',
		bestPractice: 'Dale un nombre a la buena práctica...',
	},
	evaluateDialog: {
		paragraph: '1- en absoluto, 5- absolutamente',
		userEvaluationCriterias: {
			experience: 'Evaluar.la.experiencia.de.la.práctica',
			work: 'Evaluar.la.experiencia.de.la.práctica.para.el.trabajo',
			recommend: 'Evaluar.la.experiencia.de.la.práctica.para.el.trabajo',
		},
		titleCoach: '¿Cómo te fue a {fullName} en {scenario}?',
		titleUser: '¿Qué te pareció el escenario?',
		coachViewOfLearnerEvaluat: 'La evaluación del escenario {scenario}',
		learnerViewOfEvaluat: '¿Cómo te fue en el {scenario}?',
		criteriaExperience: '¿Disfrutaste {You} de esta práctica?',
		criteriaWork: '¿Es relevante para {Your} trabajo?',
		criteriaRecommend: '¿Lo recomendarías a otros?',
	},
	settings: {
		settings: 'Configuración',
		help: {
			title: 'Ayuda/feedback',
			description: 'Si tienes problemas con la aplicación o quieres decirnos lo que piensas, envíanos un correo electrónico a',
		},
		resources: {
			title: 'Recursos',
			description: 'Para ver tutoriales y preguntas frecuentes, consulta nuestros recursos:',
			descriptionTutorials: 'Consulta nuestros tutoriales:'
		},
		deleteAccount: {
			title: 'Eliminar mi cuenta',
			description: 'Si quieres eliminar tu cuenta, haz clic aquí:',
			button: 'Eliminar la cuenta',
			dialog: '¿Está seguro de que quiere eliminar su cuenta?',
		},
		language: {
			title: 'Cambiar el idioma',
			languages: {
				en: 'Inglesa (English)',
				fr: 'Francesa (Français)',
				ru: 'Ruso (Русский)',
				it: 'Italiano (Italiano)',
				es: 'Española',
				de: 'Aleman (Deutsch)',
				ja: 'Japonés (日本語)',
				ko: 'Coreano (한국어)',
				ch: 'Chino (中文)',
				pt: 'Portuguesa (Português)',
			},
		},
	},
	profile: {
		editText: 'Editar',
		profile: 'Perfil',
		settings: 'Configuración',
		signout: 'Cerrar la sesión',
	},
	reports: {
		coach: 'Formador',
		learner: 'Alumno',
		scorePerScenario: 'Puntuación por práctica',
		scorePerCriteria: 'Puntuación por сriterio',
		totalScoreDetails: 'Detalles de la puntuación total',
		scenarioScoreDetails: 'Detalles de la puntuación de la práctica',
		responsivenessDetails: 'Detalles de la capacidad de respuesta',
		teamMemberDetails: 'Datos de los miembros del equipo',
		responsivenessPerScenario: 'Capacidad de respuesta por práctica',
		teamMembersRaking: 'Clasificación de los miembros del equipo',
		filters: {
			all: 'Todo',
			period: 'Periodo',
			lastMonth: 'El mes pasado',
			last3Months: 'Últimos 3 meses',
			lastYear: 'El año pasado',
		},
		dataTitles: {
			totalScore: 'Puntuación total',
			responsiveness: 'Capacidad de respuesta',
			completed: 'Completado',
			current: 'Actual',
			ranking: 'Clasificación'
		},
		dataDescription: {
			totalScore: 'La puntuación total es un valor medio según los criterios de evaluación.',
			responsiveness: 'La capacidad de respuesta es el número de días que transcurre hasta que un alumno envía una respuesta.',
			completed: 'Número de prácticas completadas',
			current: 'Número de prácticas actuales',
			ranking: 'La clasificación es la posición de tu equipo en comparación con otros equipos de la compañía.',
		},
		dataLabels: {
			score: 'Puntuación',
			responsiveness: 'Capacidad de respuesta',
			team: 'Equipo',
			me: 'Yo',
			user: 'Usuario',
			company: 'Compañía'
		}
	},
	recording: {
		browseVideo: 'Buscar en',
		recordVideo: 'Grabar vídeo',
		uploadExisting: 'O sube un archivo de vídeo existente',
		replay: 'Reproducir',
		recordAgain: 'Grabar de nuevo',
		send: 'Enviar',
		next: 'Siguiente',
		retry: 'Reintentar',
		selectAnOption: 'Seleccione una opción',
		constraintsError: {
			title: 'Problema con el dispositivo',
			message: 'Por favor, asegúrate de que la cámara conectada actualmente soporta la resolución mínima de 640x480',
		},
		permissionError: {
			title: 'No hay acceso',
			message: 'Por favor, asegúrate de que has permitido que el navegador acceda a la cámara / al micrófono',
			messageAudio: 'Por favor, asegúrate de que has permitido al navegador acceder al micrófono',
		},
		deviceBusyError: {
			title: 'El dispositivo está ocupado',
			message: 'Por favor, asegúrate de que no hay ningún otro programa utilizando la cámara / el micrófono',
			messageAudio: 'Por favor, asegúrate de que no hay ningún otro programa que utilice el micrófono',
		},
		notFoundError: {
			title: 'Entrada no encontrada',
			message: 'Por favor, asegúrate de que ha conectado correctamente la cámara y el micrófono',
			messageAudio: 'Por favor, asegúrate de que ha conectado correctamente el micrófono',
		},
		unknownError: {
			title: 'Error desconocido',
			message: '¡Vaya! ¡Parece que algo salió mal!', // todo self translation
		},
	},
	termsAndConditions: {
		error: 'Este campo es obligatorio',
		iAgree: 'Estoy de acuerdo con',
		theTerms: 'las condiciones.',
		iRead: 'También he leído la política de privacidad.',
		information: `<p style="text-align: center;"><strong>Condiciones de uso</strong></p>
		<ol style="text-align: justify;">
		<li><strong> Acceso a la aplicación</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">Entiendo que:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Mobile Practice (en adelante "la Aplicación") ha sido puesta a mi disposición por MOBILE PRACTICE o por uno de sus socios titulares de derechos para proporcionarme formación sobre un determinado número de temas</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;La URL de la plataforma "M-Learning" no debe ser enviada ni compartida con nadie (ya sea interno o externo)</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;MOBILE PRACTICE se reserva el derecho, unilateralmente, de suspender o terminar el acceso a toda o parte de la Aplicación, su contenido o los servicios ofrecidos en la Aplicación, sin previo aviso.</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;La Aplicación puede proporcionar enlaces a otras fuentes de Internet. Dado que MOBILE PRACTICE no tiene ningún control sobre las fuentes externas, MOBILE PRACTICE no se hace responsable de su contenido, publicidad, productos, servicios o cualquier otra cosa disponible en estas fuentes externas.</span></li>
		</ul>
		<ol style="text-align: justify;" start="2">
		<li><strong> Comportamiento del usuario</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">Cada usuario de la Aplicación garantiza y se compromete a:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;A utilizar la Aplicación con fines lícitos, excluyendo cualquier fin comercial o publicitario;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;No comunicar o divulgar a nadie que no goce de los mismos derechos de acceso ninguna de las informaciones y/o contenidos de la Aplicación;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;No perturbar o interrumpir el funcionamiento de la Aplicación, de sus servidores o de las redes conectadas a la Aplicación, ni infringir sus requisitos, procedimientos, normas o reglamentos;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;No perjudicar el funcionamiento de la Aplicación sobrecargando el ancho de banda, sobrecargando el servidor, enviando spam o sobrecargando la bandeja de entrada de la Aplicación;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;No ver información que no esté destinada a ellos, ni acceder a un servidor o cuenta a la que no estén autorizados a acceder;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;No modificar partes del código de la Aplicación para obtener un acceso no autorizado a la misma</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;No intentar evaluar, anotar o probar las vulnerabilidades de la Aplicación, o eludir las medidas de seguridad o autenticación de la Aplicación sin la autorización previa por escrito de MOBILE PRACTICE</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;No descargar en la Aplicación, transmitir, publicar o poner a disposición por cualquier medio material publicitario o promocional no solicitado o no autorizado</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;No enviar por correo electrónico o transmitir por cualquier otro medio cualquier contenido de la Aplicación.</span></li>
		</ul>
		<p style="text-align: justify;"><span style="font-weight: 400;">En caso de ser necesario, MOBILE PRACTICE podrá en cualquier momento dar por terminado el acceso de un usuario a la Aplicación si no cumple con sus obligaciones.</span></p>
		<ol style="text-align: justify;" start="3">
		<li><strong> Protección del contenido de la Aplicación</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; La Aplicación y cada una de las partes que la componen (como textos, jerarquías, software, animaciones, fotografías, ilustraciones, imágenes, diagramas, bandas sonoras, logotipos, marcas, dibujos, modelos, cuestionarios y pruebas), incluidos los componentes de software necesarios para el funcionamiento de la Aplicación y las bases de datos (en adelante "Contenido") pueden contener información y datos confidenciales protegidos por la ley de propiedad intelectual o cualquier otra ley aplicable. Por lo tanto, salvo que se indique lo contrario en la Aplicación, los derechos de propiedad intelectual del Contenido son propiedad exclusiva de MOBILE PRACTICE y/o de sus socios titulares de derechos, que no conceden al usuario ninguna licencia ni ningún otro derecho aparte del de visualizar la Aplicación.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; Se autoriza la reproducción total o parcial de los Contenidos con el único fin de informar y formar a los usuarios; se prohíbe expresamente cualquier reproducción o cualquier otro uso de las copias de los Contenidos realizadas con otros fines, de cualquier manera o forma.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; &nbsp;También se prohíbe al usuario copiar, modificar, crear una obra derivada, ensamblar, descompilar, vender, sublicenciar o ceder de cualquier manera cualquier derecho relativo al Contenido o a la Aplicación.</span></p>
		<ol style="text-align: justify;" start="4">
		<li><strong> Responsabilidad</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE se esfuerza para garantizar que la información proporcionada en la Aplicación sea precisa y esté actualizada. Sin embargo, MOBILE PRACTICE no puede garantizar que la información proporcionada a los usuarios en la Aplicación sea exacta o exhaustiva.</span></p>
		<ol style="text-align: justify;" start="5">
		<li><strong> Datos personales</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; MOBILE PRACTICE y sus socios titulares de derechos protegen los datos personales de los usuarios de la Aplicación y respetan su preocupación por la confidencialidad de la información personal que nos proporciona. Al proporcionarnos su información y datos personales, usted consiente su uso y comunicación en las condiciones que se exponen a continuación.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">A través de la Aplicación, MOBILE PRACTICE y sus socios titulares de los derechos pueden recopilar datos personales, para, por ejemplo, facilitar el acceso a la Aplicación (como nombre, apellidos, nombre de usuario, dirección de correo electrónico de los alumnos, tiempo de permanencia en el departamento, número de conexiones y número de puntos), únicamente para los fines que se indican a continuación:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Gestión de la formación</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Estadísticas, estudios y análisis de las respuestas a los cuestionarios y pruebas</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Mejora de la aplicación, incluido el uso de encuestas de satisfacción</span></li>
		</ul>
		<p style="text-align: justify;">&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Al acceder, crear su cuenta en la Aplicación y hacer clic en el icono "Acepto", reconoce haber leído las condiciones y cláusulas anteriores y las acepta irrevocablemente. En consecuencia, usted consiente sin reservas el tratamiento de sus datos personales de acuerdo con estos términos y condiciones y en el presente documento por la empresa MOBILE PRACTICE.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">La información personal que usted proporciona para utilizar la Aplicación está sujeta a las disposiciones de la Ley nº 78-17 sobre Informática y Libertades del 6 de enero de 1978.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Tiene derecho a acceder, rectificar y eliminar cualquier información personal que le concierna en cualquier momento, y puede detener el procesamiento de estos datos escribiendo a MOBILE PRACTICE - 224, Rue Saint-Denis; 75002 París o contact@Mobile Practice.com.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Los datos se conservarán mientras sean necesarios para los fines para los que fueron recogidos y, en cualquier caso, se destruirán 6 meses después de la fecha de finalización de los derechos de acceso al uso de la Aplicación. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Sólo tendrán acceso a sus datos los destinatarios debidamente autorizados por MOBILE PRACTICE encargados de la gestión de la formación. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE se esfuerza por tomar todas las precauciones necesarias para mantener la confidencialidad de los datos personales recogidos y procesados, y para evitar que sean deformados, dañados o destruidos, o que terceros no autorizados accedan a ellos.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Sin embargo, MOBILE PRACTICE no puede gestionar todos los riesgos relacionados con el funcionamiento de Internet y alerta a los usuarios de la Aplicación de la existencia de posibles riesgos inherentes a su uso y funcionamiento.</span></p>`,
	},
	mediaUpload: {
		wrongSize: '¡Ooops! Parece que tu archivo es demasiado grande',
		wrongFormat: '¡Ooops! Parece que tu archivo está en un formato incorrecto',
		tryAgain: 'Inténtalo de nuevo',
		uploadFailed: '¡Ooops! La carga ha fallado.',
		maxFileSize: 'El tamaño máximo del archivo es',
		formats: 'Formatos:',
		permissionErrorText: 'No tenemos permiso para este archivo. Por favor, comprueba tus permisos y vuelve a intentarlo.',
	},
	onboarding: {
		tutorials: {
			welcome: "Tutorial de bienvenida",
			learner: "Tutorial del alumno",
			coach: "Tutorial del formador",
			scenarioCreation: "Tutorial de creación de prácticas"
		},
		startExploring: "Empezar a explorar",
		close: "cerrar",
		welcome: {
			slide1: {
				title: "Bienvenido a Mobile Practice",
				text: "Tecnología de vídeo y mensajería móvil para que los equipos practiquen, se formen y compartan buenas prácticas."
			},
			slide2: {
				title: "Escenarios",
				text: "En la página Prácticas, puedes ver una lista de las prácticas que realizas como alumno o las que impartes como formador."
			},
			slide3: {
				title: "Mensajes",
				text: "En la página Mensajes puedes ver tus chats personales."
			},
			slide4: {
				title: "Equipos",
				text: "En la página Equipos, puedes gestionar tus grupos de usuarios."
			},
			slide5: {
				title: "Perfil",
				text: "En la página Perfil puedes subir tu avatar y consultar tus estadísticas."
			},
			slide6: {
				title: "Configuración",
				text: "Desde la página de Perfil, puedes abrir la página Configuración. En esta página, podrás modificar el idioma y consultar recursos adicionales.",
			},
			slide7: {
				title: "Siguiente paso",
			},
		},
		learner: {
			slide1: {
				title: "Instrucciones de práctica",
				text: "Selecciona la práctica y haz clic en Instrucciones para abrir la página de detalles de la práctica."
			},
			slide2: {
				title: "Empezar a practicar",
				text: "Selecciona la práctica y haz clic en Practicar."
			},
			slide3: {
				title: "Chat de práctica",
				text: "Es el chat de tu práctica con el formador. Haz preguntas y prepárate para enviar tu vídeo de prácticas."
			},
			slide4: {
				title: "Enviar un vídeo",
				text: "Puedes añadir un vídeo ya guardado o grabar uno nuevo. Espera la evaluación del formador."
			},
			slide5: {
				title: "Evaluar práctica",
				text: "Una vez que hayas recibido los comentarios del formador, podrás evaluar la práctica."
			},
		},
		coach: {
			slide1: {
				title: "Panel del formador",
				text: "Selecciona la práctica y haz clic en Formador para abrir el panel del formador. El panel muestra las prácticas individuales y su estado."
			},
			slide2: {
				title: "Enviar recordatorio",
				text: "En el panel del formador, puedes enviar recordatorios para que los alumnos envíen sus prácticas. Haz clic en Enviar recordatorio y envía el mensaje a todos los alumnos."
			},
			slide3: {
				title: "Chat de práctica",
				text: "Desde el panel del formador, también puedes abrir chats de prácticas individuales con los alumnos. Puedes responder a sus preguntas e incluir instrucciones adicionales."
			},
			slide4: {
				title: "Añadir mejores prácticas de alumnos",
				text: "Los vídeos de los alumnos pueden ser magníficos. Pueden servir de inspiración y ejemplo para el resto de participantes. Puedes guardarlo como buena práctica."
			},
			slide5: {
				title: "Evaluar",
				text: "Es el momento de evaluar la práctica de los alumnos. Suma la puntuación de cada criterio de la práctica."
			},
		},
		scenarioCreation: {
			slide1: {
				title: "Crear práctica",
				text: "En la pestaña Prácticas, haz clic en Nueva para abrir la página de creación de prácticas."
			},
			slide2: {
				title: "Añadir los detalles de la práctica",
				text: "Rellena el formulario con los detalles de la práctica."
			},
			slide3: {
				title: "Añadir título y descripción",
				text: "Añadir título y descripción de la práctica."
			},
			slide4: {
				title: "Añadir vídeo explicativo",
				text: "Añade un vídeo explicativo a tu práctica. Puedes añadir un vídeo ya guardado o grabar uno nuevo."
			},
			slide5: {
				title: "Añadir pasos",
				text: "Añadir pasos para guiar la respuesta de los participantes."
			},
			slide6: {
				title: "Añadir criterios de evaluación",
				text: "Estos criterios se utilizarán para evaluar la práctica. Puedes utilizar los criterios existentes o crear los tuyos propios."
			},
			slide7: {
				title: "Añadir alumnos",
				text: "Añade alumnos a la práctica. Puedes añadir alumnos y equipos predefinidos."
			},
			slide8: {
				title: "Práctica lista",
				text: "Eso es todo. La práctica está lista para enviársela a los participantes. Solo tienes que hacer clic en enviar."
			},
		}
	}
};
