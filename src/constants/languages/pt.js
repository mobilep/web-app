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
	name: 'Português',
	common: {
		edit: 'Editar',
		create: 'Criar',
		addVideo: 'Adicionar vídeo',
		changeVideo: 'Alterar',
		browse: 'Buscar',
		cancel: 'Cancelar',
		done: 'Concluído',
		save: 'Salvar',
		confirmPasswordError: 'As senhas não correspondem',
		delete: 'Excluir',
		emailError: 'O e-mail não é válido',
		evaluate: 'Avaliar',
		logOutButton: 'Sair',
		logOutMessage: 'Você tem certeza de que deseja sair?',
		mobilePractice: 'Mobile Practice',
		new: 'Novo',
		passwordError: 'A senha deve conter no mínimo 8 caracteres',
		send: 'Enviar',
		tryAgain: 'Tente novamente',
		today: 'Hoje',
		yesterday: 'Ontem',
		openAdminPanel: 'Abrir o painel do administrador',
		newMessage: {
			singular: 'nova mensagem',
			plural: 'novas mensagens',
		},
		continue: 'Continuar',
	},
	home: {
		title: 'Pagina inicial', // Todo Todo self translation
		connection: {
			titleError: 'Não há conexão com a Internet',
			titleSuccess: 'Sua conexão foi restaurada',
			message: 'Verifique a sua rede',
			button: 'Continuar',
		},
		landscape: {
			title: 'Gire o seu dispositivo',
			message: 'O Mobile Practice funciona melhor no modo retrato',
		},
	},
	signIn: {
		description: `Faça login para continuar`, // Todo self translation
		email: 'E-mail',
		forgotPassword: 'Precisa de uma senha?',
		password: 'Senha',
		signIn: 'Login',
		signInError: 'O e-mail ou senha que você está tentando inserir não está correto',
		title: 'Olá!',
	},
	forgotPassword: {
		description: `Digite seu e-mail e enviaremos um link para que redefina sua senha`,
		email: 'Seu e-mail',
		reset: 'Enviar',
		justRemember: 'Voltar para a tela de Login',
		title: 'Esqueceu a sua senha?',
		success: {
			title: 'Sucesso!',
			message: 'Obrigado por sua solicitação.\n Estamos enviando um e-mail de confirmação.',
			cta: 'Voltar',
		},
		error: {
			title: 'Opa!',
			message: 'Parece que seu e-mail não pode ser enviado',
			cta: 'Tente novamente',
		},
	},
	resetPassword: {
		confirm: 'Confirmar',
		confirmPassword: 'Confirmar senha',
		description: 'A senha deve ter no mínimo 8 caracteres. Não use sua senha anterior',
		newPassword: 'Nova senha',
		title: 'Olá!',
		success: {
			title: 'Sucesso!',
			message: 'Sua nova senha foi criada',
			cta: 'Login',
		},
		error: {
			title: 'Opa!',
			message: 'Parece que sua senha não pode ser criada',
			cta: 'Tente novamente',
			alreadyUsed: 'Essa senha já foi usada. Escolha outra',
		},
	},
	createPassword: {
		confirm: 'Confirmar',
		confirmPassword: 'Confirmar senha',
		description: `Vamos criar uma senha!`,
		newPassword: 'Nova senha',
		title: 'Olá',
		success: {
			title: 'Sucesso!',
			message: 'A senha foi criada',
			cta: 'Voltar para o início',
		},
		error: {
			title: 'Opa!',
			message: 'Parece que sua senha não pode ser criada',
			cta: 'Tente novamente',
		},
	},
	inbox: {
		deletedUser: 'Usuário excluído',
		newChat: 'Novo chat',
		editChat: 'Editar chat',
		everyOne: 'Todos',
		groups: 'Equipes',
		inbox: 'Caixa de entrada',
		inboxMessages: 'Mensagem',
		chatPlaceholder: {
			video: {
				incoming: '{name} enviou um vídeo.',
				outcoming: 'Você enviou um vídeo para {name}',
			},
			audio: {
				incoming: '{name} enviou uma mensagem de áudio',
				outcoming: 'Você enviou uma mensagem de áudio para {name}',
			},
			image: {
				incoming: '{name} enviou uma imagem',
				outcoming: 'Você enviou uma imagem para {name}',
			},
			file: {
				incoming: '{name} enviou um arquivo',
				outcoming: 'Você enviou um arquivo para {name}',
			}
		},
		groupChatPlaceholder: {
			video: {
				incoming: '{name} enviou um vídeo',
				outcoming: 'Você enviou um vídeo',
			},
			audio: {
				incoming: '{name} enviou uma mensagem de áudio',
				outcoming: 'Você enviou uma mensagem de áudio',
			},
			image: {
				incoming: '{name} enviou uma imagem',
				outcoming: 'Você enviou uma imagem',
			},
			file: {
				incoming: '{name} enviou um arquivo',
				outcoming: 'Você enviou um arquivo',
			}
		},
		emptyState: 'Ainda não há mensagens. Crie uma nova para começar a enviar mensagens.',
		noResults: 'Infelizmente, sua busca não teve nenhum resultado. Por favor, tente outra busca.',
		emptyChatUsers: 'Nenhum usuário para criar um chat',
		emptyChatArea: 'Selecione um chat ou crie um novo',
		emptyChatAreaNoMessages: 'Ainda não há mensagens',
		emptyChatAreaNoResult: 'Crie um novo chat para começar a enviar mensagens ',
		deleteMessageConfirmation: 'Você tem certeza que deseja excluir esta mensagem?',
		saveAsBestPractice: 'Salvar como exemplo de prática recomendada',
		justSent: 'Agora mesmo',
		viewDetails: 'Ver detalhes',
		viewScenarioDetails: 'Ver detalhes do cenário',
		evaluate: 'Avaliar',
		sendMessage: 'Enviar mensagem...',
		attachPhoto: 'Anexar foto',
		attachVideo: 'Anexar vídeo',
		you: 'Você',
		searchLabel: 'Buscar',
		scenarioCriterias: [
			{
				id: '590f7d5907e94106bdf393a5',
				title: 'Você gostou desta prática?',
			},
			{
				id: '591f7d5907e94106bdf393a5',
				title: 'É relevante para o seu trabalho?',
			},
			{
				id: '592f7d5907e94106bdf393a5',
				title: 'Você a recomendaria para outras pessoas?',
			},
		],
		createBestPractice: 'Crie uma prática recomendada',
		giveBestPracticeName: 'Dê um nome à prática recomendada ...',
		bestPracticeError: 'Este vídeo já foi salvo como exemplo de prática recomendada',
		goBack: 'Voltar',
		inboxError: 'Opa! O chat atual não está mais disponível',
		deleteChatConfirmation: 'Você tem certeza de que deseja excluir este chat?',
		copy: 'Copiar mídia'
	},
	reminder: {
		sendReminder: 'Enviar um lembrete',
		sendReminderTitle: 'Enviar um lembrete de treinamento',
		reminderDefaultMessage: 'Ei, como você está lidando com este cenário? Queremos terminar este em breve. Deixe-me uma mensagem com todas as perguntas.',
		reminderSendSuccess: 'O lembrete foi enviado',
		reminderNeeded: 'É necessário um Lembrete de treinamento!',
		runningOutOfTime: 'Os participantes estão ficando sem tempo para completar o cenário.',
		sent: 'Enviado'
	},
	scenarios: {
		stepExample: 'Exemplo: busque um contato para ligar.',
		bestPracticeExample: 'Exemplo: vídeo com uma ótima abertura.',
		evaluationCriteriaExample: 'Exemplo: chamou a atenção da pessoa.',
		numberOfFinished: '{finished} de {total} concluído',
		practiceGroups: {
			waitingOnFeedback: 'Aguardando feedback',
			inProgress: 'Em andamento',
			completed: 'Concluído',
			notStarted: 'Não foi iniciado'
		},
		practice: 'Prática',
		finished: 'Finalizado',
		unread: 'Não lido',
		all: 'Todos',
		groupChat: 'Chat em grupo',
		coach: 'Treinador',
		learner: 'Aluno',
		instructions: 'Instruções',
		emptyState: 'Selecione o cenário',
		myScenarios: 'Cenários',
		newScenario: 'Novo cenário',
		newScenarioInstructions: 'Instruções de novo cenário',
		scenario: 'Cenário',
		people: 'Pessoas',
		requiredFields: 'Campos obrigatórios: Nome do cenário, descrição do cenário, etapas, critérios, pessoas.',
		requiredSteps: 'Adicione algumas etapas para salvar o cenário',
		requiredCriteria: 'Adicione alguns critérios para salvar o cenário',
		requiredPeople: 'Adicione pessoas para salvar o cenário',
		requiredName: 'Por favor, dê um nome ao cenário para salvá-lo',
		requiredDescription: 'Por favor, faça a descrição do cenário para salvá-lo',
		noScenarios: 'Ainda não há cenários',
		videoPlaceholder: '{name} enviou um vídeo.',
		imagePlaceholder: '{name} enviou uma imagem.',
		currentText: 'Atual',
		completedText: 'Concluído',
		draftText: 'Rascunho',
		addSteps: 'Adicionar etapa a seguir',
		addCriterias: 'Adicione alguns novos critérios...',
		addBestPracticeExample: 'Adicionar exemplo de boas práticas',
		steps: 'Passos',
		evaluationCriteria: 'Critério de avaliação',
		bestPractice: 'Melhor prática',
		addBestPractice: 'Adicionar outra prática recomendada',
		deleteBestPractice: 'Excluir a prática recomendada',
		bestPracticeCountSeparator: 'fora de',
		criteriaSection: {
			selectCriteria: 'Adicionar critérios de avaliação',
			addCriteria: '(adicionar critérios)',
			notFound: 'Os critérios já foram adicionados',
		},
		peopleSection: {
			addPerson: 'Adicionar uma pessoa',
			peoplePracticing: 'Pessoas realizando essa prática',
			groups: 'Equipes',
			people: 'Pessoas',
			notFound: 'nenhuma equivalência encontrada',
		},
		headerSection: {
			[EDIT_MODE]: {
				mobileHeader: 'Editar cenário',
				buttonPrimaryText: 'Enviar',
				buttonSecondaryText: 'Cancelar',
				namePlaceholder: 'Dê um nome ao cenário...',
				descriptionPlaceholder: 'Descreva o cenário...',
			},
			[VIEW_MODE]: {
				mobileHeader: '',
				buttonPrimaryText: 'Editar',
				buttonSecondaryText: 'Excluir',
			},
			[CREATE_MODE]: {
				mobileHeader: 'Novo cenário',
				buttonPrimaryText: 'Enviar',
				buttonSecondaryText: 'Cancelar',
				namePlaceholder: 'Dê um nome ao cenário...',
				descriptionPlaceholder: 'Descreva o cenário...',
			},
			[PRACTICE_MODE]: {
				buttonPrimaryText: 'Prática',
				buttonSecondaryText: '',
			},
		},
		validation: {
			buttonLabel: 'Tente novamente',
			title: 'Preencha os campos obrigatórios',
			fields: {
				[VIDEO_ID]: {
					name: 'Vídeo de cenário',
					errorMessage: 'Este campo é obrigatório',
				},
				[BEST_PRACTICE_VIDEOS]: {
					name: 'Vídeo de melhores práticas',
					errorMessage: 'Este campo é obrigatório',
				},
				[SCENARIO_NAME]: {
					name: 'Nome do cenário',
					errorMessage: 'Este campo é obrigatório',
				},
				[SCENARIO_DESCRIPTION]: {
					name: 'Descrição do cenário',
					errorMessage: 'Este campo é obrigatório',
				},
				[STEPS]: {
					name: 'Passos',
					errorMessage: 'Este campo é obrigatório',
				},
				[CRITERIAS]: {
					name: 'Critério',
					errorMessage: 'Este campo é obrigatório',
				},
				[SELECTED_USERS]: {
					name: 'Pessoas',
				},
			},
			deleteUnsaved: 'Tem certeza de que deseja excluir as alterações não salvas?',
			saveDraftMessage: 'Você pode salvar seu cenário como rascunho',
			deleteChangesButton: 'Apagar as alterações',
		},
		saveDraftButton: 'Salvar rascunho',
		deleteScenario: 'Tem certeza de que deseja excluir o cenário?',
		cancel: 'Cancelar',
		delete: 'Excluir',
		emptyGroups: 'As equipes são criadas e gerenciadas na guia Equipes',
		bestPracticeError: 'não deve estar vazio',
		bestPracticePlaceholder: 'Dê um nome à prática recomendada',
		saved: 'Salvo',
		dueDate: 'Data de Vencimento',
		due: 'Vencimento',
		fromNow: 'a partir de agora',
		left: 'faltam',
		pastDue: 'Vencidos'
	},
	groupChat: {
		label: 'Chat em grupo',
		viewParticipants: 'Ver participantes',
		groupChatName: 'Nome do chat em grupo'
	},
	teams: {
		teams: 'Equipes',
		buttonDelete: 'Excluir',
		buttonEdit: 'Editar',
		buttonCancel: 'Cancelar',
		buttonSave: 'Salvar',
		placeholder: 'Insira o título da equipe...',
		group: 'Equipe',
		newTeam: 'Nova equipe',
		editTeam: 'Editar equipe',
		deleteTeamConfirmation: 'Tem certeza de que deseja excluir a equipe?',
		emptyAreaText: 'Selecione uma equipe ou crie uma nova',
		[EDIT_MODE]: {
			buttonPrimaryText: 'Salvar',
			buttonSecondaryText: 'Cancelar',
			placeholder: 'Insira o título da equipe...',
		},
		[VIEW_MODE]: {
			buttonPrimaryText: 'Editar',
			buttonSecondaryText: 'Excluir',
		},
		[CREATE_MODE]: {
			buttonPrimaryText: 'Salvar',
			buttonSecondaryText: 'Cancelar',
			placeholder: 'Insira o título da equipe...',
		},
		wrongName: 'Nome errado',
		teamExists: 'Já existe uma equipe com este nome',
		tryAgain: 'Tente novamente',
		empty: 'Você ainda não tem equipes',
		noUsers: 'Sem usuários',
		noUsersMessage: 'A equipe deve conter pelo menos um usuário',
		invalidName: 'Nome inválido',
		invalidNameMessage: 'Este nome de equipe é inválido',
	},
	primaryNav: {
		inbox: 'MENSAGEM',
		scenarious: 'CENÁRIOS',
		team: 'EQUIPES',
		profile: 'PERFIL',
		settings: 'CONFIGURAÇÕES',
		logOut: 'SAIR',
	},
	dragAndDrop: {
		add: 'Adicionar',
		change: 'Alterar',
		dropHeading: 'Solte os arquivos aqui',
		selectFile: 'Arraste e solte arquivos aqui \n ou',
		selectImageFile: 'Arraste e solte arquivos aqui \n ou',
		errorMessage: 'Opa! Parece que algo deu errado!', // Todo self translation
		fileCount: 'Você pode adicionar apenas 1 arquivo.',
		formats: 'Formatos:',
		maxFileSize: 'O tamanho máximo do arquivo é',
		multipleFiles: 'Opa! Você pode adicionar apenas um arquivo',
		wrongSize: 'Opa! Parece que seu arquivo é muito grande',
		wrongFormat: 'Opa! Parece que seu arquivo está no formato errado',
		serverError: 'Ops! Parece que ocorreu um erro no servidor',
		selectAnotherFile: 'Para selecionar outro arquivo, arraste e solte o arquivo aqui ou',
		selectAnotherFileMobile: 'Selecione outro arquivo',
		uploadPhoto: 'Carregar foto',
		uploadVideo: 'Carregar vídeo',
		bestPracticeNote: 'Inclua uma breve nota sobre por que essa é a prática recomendada.',
		errorText: 'não deve estar vazio',
		permissionErrorText: 'Não temos permissão para este arquivo. Verifique suas permissões e tente novamente.',
		bestPractice: 'Dê um nome à prática recomendada',
	},
	evaluateDialog: {
		paragraph: '1- de forma alguma, 5- absolutamente',
		userEvaluationCriterias: {
			experience: 'Avaliar. Classificar. Prática. Experiência',
			work: 'Avaliar. Classificar. Prática. Pertinente ao trabalho',
			recommend: 'Avaliar. Classificar. Recomendar aos outros',
		},
		titleCoach: 'Como {fullName} se saiu neste {scenario}?',
		titleUser: 'O que você achou do cenário?',
		coachViewOfLearnerEvaluat: 'A avaliação do cenário {scenario}',
		learnerViewOfEvaluat: 'Como você se saiu no {scenario}?',
		criteriaExperience: '{You} gostou desta prática?',
		criteriaWork: 'É relevante para o {Your} trabalho?',
		criteriaRecommend: '{You} a recomendaria a outras pessoas?',
	},
	settings: {
		settings: 'Configurações',
		help: {
			title: 'Ajuda/feedback',
			description: 'Se você estiver tendo problemas com o aplicativo ou quiser nos dar sua opinião, envie um e-mail para',
		},
		resources: {
			title: 'Recursos',
			description: 'Para tutoriais e perguntas frequentes, verifique nossos recursos:',
			descriptionTutorials: 'Confira nossos tutoriais:'
		},
		deleteAccount: {
			title: 'Excluir minha conta',
			description: 'Se você deseja excluir sua conta, clique aqui:',
			button: 'Excluir conta',
			dialog: 'Tem certeza de que deseja excluir sua conta?',
		},
		language: {
			title: 'Alterar idioma',
			languages: {
				en: 'Inglês (English)',
				fr: 'Francesa (Français)',
				ru: 'Russa (Русский)',
				it: 'Italiana (Italiano)',
				es: 'Espanhola (Española)',
				de: 'Alemã (Deutsch)',
				ja: 'Japonês (日本語)',
				ko: 'Coreana (한국어)',
				ch: 'Chinês (中文)',
				pt: 'Português',
			},
		},
	},
	profile: {
		editText: 'Editar',
		profile: 'Perfil',
		settings: 'Configurações',
		signout: 'Sair',
	},
	reports: {
		coach: 'Treinador',
		learner: 'Aluno',
		scorePerScenario: 'Pontuação por cenário',
		scorePerCriteria: 'Pontuação por critério',
		totalScoreDetails: 'Detalhes da pontuação total',
		scenarioScoreDetails: 'Detalhes da pontuação do cenário',
		responsivenessDetails: 'Detalhes da capacidade de resposta',
		teamMemberDetails: 'Avaliação do membro da equipe',
		responsivenessPerScenario: 'Capacidade de resposta por cenário',
		teamMembersRaking: 'Classificação dos membros da equipe',
		filters: {
			all: 'Todos',
			period: 'Período',
			lastMonth: 'Mês passado',
			last3Months: 'Últimos 3 meses',
			lastYear: 'Ano passado',
		},
		dataTitles: {
			totalScore: 'Pontuação total',
			responsiveness: 'Capacidade de resposta',
			completed: 'Concluído',
			current: 'Atual',
			ranking: 'Classificação'
		},
		dataDescription: {
			totalScore: 'A pontuação total é o valor médio de acordo com os critérios de avaliação',
			responsiveness: 'A capacidade de resposta é o número de dias para o aluno enviar envia uma resposta',
			completed: 'Número de cenários concluídos',
			current: 'Número de cenários atuais',
			ranking: 'A classificação é a posição da sua equipe em comparação com outras equipes da empresa',
		},
		dataLabels: {
			score: 'Pontuação',
			responsiveness: 'Capacidade de resposta',
			team: 'Equipe',
			me: 'Eu',
			user: 'Usuário',
			company: 'Empresa'
		}
	},
	recording: {
		browseVideo: 'Buscar',
		recordVideo: 'Gravar vídeo',
		uploadExisting: 'Ou envie um arquivo de vídeo existente',
		replay: 'Repetir',
		recordAgain: 'Gravar novamente',
		send: 'Enviar',
		next: 'Próximo',
		retry: 'Tentar novamente',
		selectAnOption: 'Selecione uma opção',
		constraintsError: {
			title: 'Problema do dispositivo',
			message: 'Certifique-se de que a câmera conectada atualmente suporta a resolução mínima de 640x480',
		},
		permissionError: {
			title: 'Sem acesso',
			message: 'Certifique-se de ter permitido que o navegador acesse a câmera/microfone',
			messageAudio: 'Certifique-se de ter permitido que o navegador acesse o microfone',
		},
		deviceBusyError: {
			title: 'O dispositivo está ocupado',
			message: 'Certifique-se de que não haja nenhum outro programa usando a câmera/microfone',
			messageAudio: 'Certifique-se de que não haja nenhum outro programa usando o microfone',
		},
		notFoundError: {
			title: 'Entrada não encontrada',
			message: 'Certifique-se de ter conectado a câmera e o microfone corretamente',
			messageAudio: 'Certifique-se de ter conectado o microfone corretamente',
		},
		unknownError: {
			title: 'Erro desconhecido',
			message: 'Opa! Parece que algo deu errado!', // Todo self translation
		},
	},
	termsAndConditions: {
		error: 'Este campo é obrigatório',
		iAgree: 'Eu concordo com',
		theTerms: 'os termos.',
		iRead: 'Eu também li a política de privacidade.',
		information: `<p style="text-align: center;"><strong>Termos e Condições de Utilização</strong></p>
		<ol style="text-align: justify;">
		<li><strong> Acesso à aplicação</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">Eu compreendo isso:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;A Prática móvel (doravante "a Aplicação") é-me disponibilizada pela MOBILE PRACTICE ou por um dos seus parceiros detentores de direitos para me dar formação sobre um certo número de assuntos</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;O URL da plataforma "M-Learning" não deve ser enviado ou partilhado com ninguém (sejam eles internos ou externos)</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;A MOBILE PRACTICE reserva-se o direito, a seu exclusivo critério, de suspender ou terminar o acesso à totalidade ou parte da Aplicação, ao seu conteúdo ou aos serviços oferecidos na Aplicação, sem aviso prévio.</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;A Candidatura pode fornecer ligações a outras fontes da Internet. Como a MOBILE PRACTICE não tem controlo sobre fontes externas, a MOBILE PRACTICE não pode ser responsabilizada pelo seu conteúdo, publicidade, produtos, serviços ou qualquer outra coisa disponível nessas fontes externas.</span></li>
		</ul>
		<ol style="text-align: justify;" start="2">
		<li><strong> Comportamento do Utilizador</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">Cada utilizador da Aplicação garante e compromete-se:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;A utilizar a Aplicação para fins lícitos, excluindo quaisquer fins comerciais ou publicitários;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Não comunicar ou divulgar a qualquer pessoa que não goze dos mesmos direitos de acesso a qualquer informação e/ou conteúdo da Aplicação;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Não perturbar ou interromper o funcionamento da Aplicação, dos seus servidores ou redes ligadas à Aplicação ou infringir os seus requisitos, procedimentos, regras ou regulamentos;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Não prejudicar o funcionamento da Aplicação, sobrecarregando a largura de banda, sobrecarregando o servidor, enviando spam ou sobrecarregando a caixa de entrada da Aplicação;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Não visualizar informações que não lhes sejam destinadas, ou aceder a um servidor ou conta que não estejam autorizados a aceder;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Não modificar partes do código da Aplicação para obter acesso não autorizado à Aplicação</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Não tentar avaliar, anotar ou testar as vulnerabilidades da Aplicação, ou contornar as medidas de segurança ou autenticação da Aplicação sem a autorização prévia por escrito da MOBILE PRACTICE</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Não descarregar para a Aplicação, transmitir, publicar ou disponibilizar, por qualquer meio, material publicitário ou promocional não solicitado ou não autorizado</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Não enviar por correio electrónico ou transmitir por qualquer outro meio qualquer conteúdo da Aplicação.</span></li>
		</ul>
		<p style="text-align: justify;"><span style="font-weight: 400;">Se necessário, a MOBILE PRACTICE pode, a qualquer momento, cancelar o acesso de um utilizador à Aplicação se este não cumprir as suas obrigações.</span></p>
		<ol style="text-align: justify;" start="3">
		<li><strong> Protecção do conteúdo da Aplicação</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; A Aplicação e cada uma das suas partes constituintes (tais como texto, hierarquias, software, animações, fotografias, ilustrações, imagens, diagramas, bandas sonoras, logótipos, marcas, desenhos, modelos, questionários e questionários), incluindo os componentes de software necessários para o funcionamento da Aplicação e das bases de dados (doravante "Conteúdo") podem conter informações e dados confidenciais protegidos pela lei da propriedade intelectual ou por qualquer outra lei aplicável. Portanto, salvo disposição em contrário na Aplicação, os direitos de propriedade intelectual do Conteúdo são propriedade exclusiva da MOBILE PRACTICE e/ou dos seus parceiros detentores de direitos, que não concedem ao utilizador nenhuma licença ou qualquer outro direito para além do de visualizar a Aplicação.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; A reprodução total ou parcial do Conteúdo é autorizada apenas para fins de informação e formação dos utilizadores; é expressamente proibida qualquer reprodução ou qualquer outra utilização de cópias do Conteúdo feitas para outros fins, seja de que forma for, é expressamente proibida.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; &nbsp;O utilizador está também proibido de copiar, modificar, criar uma obra derivada, montar, descompilar, vender, sublicenciar ou ceder de qualquer forma quaisquer direitos relativos ao Conteúdo ou à Aplicação.</span></p>
		<ol style="text-align: justify;" start="4">
		<li><strong> Responsabilidade</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">A MOBILE PRACTICE esforça-se por assegurar que as informações fornecidas no Pedido sejam exactas e actualizadas. No entanto, a MOBILE PRACTICE não pode garantir que a informação fornecida aos utilizadores sobre a Aplicação seja exacta ou exaustiva.</span></p>
		<ol style="text-align: justify;" start="5">
		<li><strong> Dados pessoais</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; A MOBILE PRACTICE e os seus parceiros titulares de direitos protegem os dados pessoais dos utilizadores da Aplicação e respeitam as suas preocupações relativamente à confidencialidade das informações pessoais que nos fornece. Ao fornecer-nos as suas informações e dados pessoais, consente a sua utilização e comunicação nas condições abaixo enunciadas.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Através da Aplicação, a MOBILE PRACTICE e os seus parceiros detentores de direitos podem recolher dados pessoais, a fim de, por exemplo, facultar o acesso à Aplicação (tais como nome, apelido, login, endereço electrónico dos alunos, tempo gasto pelo departamento, número de ligações, e número de pontos), apenas para os fins descritos abaixo:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Gestão da formação</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Estatísticas, estudos e análises de respostas a questionários e questionários</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Melhorar a aplicação, incluindo a utilização de inquéritos de satisfação</span></li>
		</ul>
		<p style="text-align: justify;">&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Ao aceder, ao criar a sua conta na Aplicação e ao clicar no ícone "Aceito", reconhece ter lido os termos e condições e cláusulas acima e aceita-os irrevogavelmente. Consequentemente, consente sem reservas no tratamento dos seus dados pessoais em conformidade com estes termos e condições e aqui pela empresa MOBILE PRACTICE.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Qualquer informação pessoal que forneça para utilizar a Aplicação está sujeita às disposições da Lei n.º 78-17 sobre Tecnologia e Liberdades da Informação de 6 de Janeiro de 1978.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Tem o direito de aceder, corrigir e eliminar a qualquer momento qualquer informação pessoal que lhe diga respeito, e pode interromper o tratamento destes dados escrevendo para MOBILE PRACTICE - 224, Rue Saint-Denis; 75002 Paris ou contact@Mobile Practice.com.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Os dados serão retidos enquanto forem necessários para os fins para os quais foram recolhidos e serão, em qualquer caso, destruídos 6 meses após a data do termo dos direitos de acesso à utilização do Pedido. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Apenas os destinatários devidamente autorizados pela MOBILE PRACTICE encarregada da gestão da formação terão acesso aos seus dados. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">A MOBILE PRACTICE esforça-se por tomar todas as precauções necessárias para manter a confidencialidade dos dados pessoais recolhidos e tratados, e para evitar que estes sejam deformados, danificados ou destruídos, ou acedidos por terceiros não autorizados.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">No entanto, a MOBILE PRACTICE não pode gerir todos os riscos relacionados com o funcionamento da Internet e alerta os utilizadores da Aplicação para a existência de riscos potenciais inerentes à sua utilização e funcionamento.</span></p>`,
	},
	mediaUpload: {
		wrongSize: 'Opa! Parece que seu arquivo é muito grande',
		wrongFormat: 'Opa! Parece que seu arquivo está no formato errado',
		tryAgain: 'Tente novamente',
		uploadFailed: 'Opa! Falha no upload.',
		maxFileSize: 'O tamanho máximo do arquivo é',
		formats: 'Formatos:',
		permissionErrorText: 'Não temos permissão para este arquivo. Verifique suas permissões e tente novamente.',
	},
	onboarding: {
		tutorials: {
			welcome: "Tutorial de boas-vindas",
			learner: "Tutorial do aluno",
			coach: "Tutorial do treinador",
			scenarioCreation: "Tutorial de criação de cenário"
		},
		startExploring: "Comece a explorar",
		close: "encerrar",
		welcome: {
			slide1: {
				title: "Bem-vindo ao Mobile Practice",
				text: "Vídeo e mensagens para as equipes praticarem, treinarem e compartilharem as melhores práticas"
			},
			slide2: {
				title: "Cenários",
				text: "Na página Cenários você pode ver uma lista dos cenários que você pratica como aluno ou dá treinamento como treinador" // Todo
			},
			slide3: {
				title: "Mensagem",
				text: "Na página de Mensagens, você pode visualizar seus chats pessoais" // Todo
			},
			slide4: {
				title: "Equipes",
				text: "Na página Equipes, você pode gerenciar seus grupos de usuários" // Todo
			},
			slide5: {
				title: "Perfil",
				text: "Na página Perfil, você pode fazer upload da sua imagem de perfil e ver suas estatísticas" // Todo
			},
			slide6: {
				title: "Configurações",
				text: "Na página Perfil, você pode abrir a página Configurações. Nela você pode alterar o idioma e ver os recursos adicionais.", // Todo
			},
			slide7: {
				title: "Para onde ir a seguir",
			},
		},
		learner: {
			slide1: {
				title: "Instruções de cenário",
				text: "Escolha o cenário e clique em \"Instructions\" para abrir a página de detalhes do cenário" // Todo
			},
			slide2: {
				title: "Comece a praticar",
				text: "Escolha o cenário e clique em \"Practice\""
			},
			slide3: {
				title: "Chat de prática",
				text: "Aqui é o seu chat de prática com o treinador. Faça perguntas e prepare-se para enviar seu vídeo de prática"
			},
			slide4: {
				title: "Enviar um vídeo",
				text: "Você pode adicionar um vídeo pré-salvo ou gravar um novo. Aguarde a avaliação do treinador" // Todo
			},
			slide5: {
				title: "Avalie o cenário",
				text: "Depois de receber o feedback do treinador, você será capaz de avaliar o cenário" // Todo
			},
		},
		coach: {
			slide1: {
				title: "Painel do treinador",
				text: "Escolha o cenário e clique em \"Coach\" para abrir o painel do treinador. O painel mostra práticas individuais e seus status" // Todo
			},
			slide2: {
				title: "Enviar um lembrete",
				text: "No painel do treinador, você pode enviar um lembrete para lembrar os alunos de enviarem suas práticas. Clique em \"Send reminder\" e envie mensagem para todos os alunos" // Todo
			},
			slide3: {
				title: "Chat de prática",
				text: "No painel do treinador, você pode abrir um chat de prática individual com o aluno. Lá você pode responder a perguntas e incluir instruções adicionais" // Todo
			},
			slide4: {
				title: "Adicione as melhores práticas do aluno",
				text: "O vídeo dos alunos pode ser excepcional. Pode servir de inspiração e exemplo para o resto dos participantes. Você pode salvá-lo como \"prática recomendada\"" // Todo
			},
			slide5: {
				title: "Avaliar",
				text: "É hora de avaliar a prática do aluno. Adicione a pontuação do cenário de acordo com os critérios" // Todo
			},
		},
		scenarioCreation: {
			slide1: {
				title: "Crie um cenário",
				text: "Na aba “Cenários” clique em \"New\" para abrir a página de criação de cenários"
			},
			slide2: {
				title: "Adicione os detalhes do cenário",
				text: "Preencha o formulário com os detalhes do cenário"
			},
			slide3: {
				title: "Adicione o título e a descrição",
				text: "Adicione o título e a descrição do cenário"
			},
			slide4: {
				title: "Adicione o vídeo explicativo",
				text: "Adicione um vídeo explicativo ao seu cenário. Você pode adicionar um vídeo pré-salvo ou gravar um novo" // Todo
			},
			slide5: {
				title: "Adicione etapas",
				text: "Adicione etapas para orientar a resposta dos participantes"
			},
			slide6: {
				title: "Adicione critérios de avaliação",
				text: "Esses critérios serão usados para avaliar o cenário. Você pode usar critérios existentes ou criar seus próprios"
			},
			slide7: {
				title: "Adicione alunos",
				text: "Adicione pessoas ao cenário de prática. Você pode adicionar indivíduos, bem como equipes predefinidas"
			},
			slide8: {
				title: "O cenário está pronto",
				text: "Isso é tudo. O cenário está pronto para ser enviado aos participantes. Tudo o que você precisa fazer é clicar em \"Send\""
			},
		}
	}
};
