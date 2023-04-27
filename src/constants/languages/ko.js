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
	name: '한국어',
	common: {
		edit: '편집',
		create: '생성',
		addVideo: '영상 추가',
		changeVideo: '변경',
		browse: '찾아보기',
		cancel: '취소',
		done: '끝남',
		save: '저장',
		confirmPasswordError: '비밀번호가 일치하지 않습니다',
		delete: '삭제',
		emailError: '유효하지 않은 이메일입니다',
		evaluate: '평가하기',
		logOutButton: '로그아웃',
		logOutMessage: '정말로 로그아웃하시겠습니까?',
		mobilePractice: '모바일 프랙티스',
		new: '신규',
		passwordError: '비밀번호는 8자 이상이어야 합니다',
		send: '전송',
		tryAgain: '다시 시도하기',
		today: '오늘',
		yesterday: '어제',
		openAdminPanel: '관리자 패널 열기',
		newMessage: {
			singular: '새로운 메시지',
			plural: '새로운 메시지',
		},
		continue: '계속하기',
	},
	home: {
		title: '홈페이지', //todo self translation
		connection: {
			titleError: '인터넷에 연결되어 있지 않습니다',
			titleSuccess: '연결이 복구되었습니다',
			message: '네트워크를 확인해 주세요',
			button: '계속하기',
		},
		landscape: {
			title: '기기를 회전시켜 주세요',
			message: '모바일 프랙티스는 세로 모드에서 원활히 작동합니다',
		},
	},
	signIn: {
		description: `계속하려면 로그인하세요.`, // todo self translation
		email: '이메일',
		forgotPassword: '비밀번호가 필요하나요?',
		password: '비밀번호',
		signIn: '로그인',
		signInError: '유효하지 않은 이메일 혹은 비밀번호 조합입니다',
		title: '안녕하세요!',
	},
	forgotPassword: {
		description: `이메일을 입력하시면 비밀번호를 재설정할 수 있도록 링크를 보내드립니다`,
		email: '이메일',
		reset: '전송',
		justRemember: '로그인으로 돌아가기',
		title: '비밀번호가 기억나지 않습니다',
		success: {
			title: '성공입니다!',
			message: '요청을 보내 주셔서 감사합니다.\n 곧 확인 이메일을 보내 드리겠습니다.',
			cta: '돌아가기',
		},
		error: {
			title: '앗!',
			message: '메일 수신이 불가능한 이메일입니다',
			cta: '다시 시도하기',
		},
	},
	resetPassword: {
		confirm: '확인',
		confirmPassword: '비밀번호 확인',
		description: '비밀번호는 8자 이상이어야 합니다. 이전 비밀번호를 사용하지 마세요.',
		newPassword: '새로운 비밀번호',
		title: '안녕하세요!',
		success: {
			title: '성공입니다!',
			message: '새로운 비밀번호를 생성했습니다',
			cta: '로그인',
		},
		error: {
			title: '앗!',
			message: '비밀번호를 생성할 수 없습니다',
			cta: '다시 시도하기',
			alreadyUsed: '이미 사용한 비밀번호입니다. 다른 비밀번호를 선택하세요.',
		},
	},
	createPassword: {
		confirm: '확인',
		confirmPassword: '비밀번호 확인',
		description: `비밀번호를 생성하겠습니다!`,
		newPassword: '새로운 비밀번호',
		title: '안녕하세요!',
		success: {
			title: '성공입니다!',
			message: '비밀번호를 생성했습니다',
			cta: '홈으로 돌아가기',
		},
		error: {
			title: '앗!',
			message: '비밀번호를 생성할 수 없습니다',
			cta: '다시 시도하기',
		},
	},
	inbox: {
		deletedUser: '삭제된 사용자',
		newChat: '새로운 채팅',
		editChat: '채팅 수정하기',
		everyOne: '모든 사람',
		groups: '팀즈',
		inbox: '받은 편지함',
		inboxMessages: '메시지',
		chatPlaceholder: {
			video: {
				incoming: '{name} 님께서 영상을 보냈습니다.',
				outcoming: '비디오를 보냈습니다. {name}',
			},
			audio: {
				incoming: '{name} 님께서 오디오 녹음을 보냈습니다',
				outcoming: '오디오 녹음을 보냈습니다. {name}',
			},
			image: {
				incoming: '{name} 님께서 이미지를 보냈습니다.',
				outcoming: '이미지를 보냈습니다. {name}',
			},
			file: {
				incoming: '{name} 님께서 파일을 보냈습니다',
				outcoming: '파일을 보냈습니다. {name}',
			}
		},
		groupChatPlaceholder: {
			video: {
				incoming: '{name} 이 영상을 보냈습니다.',
				outcoming: '동영상을 보냈습니다.',
			},
			audio: {
				incoming: '{name} 이 오디오 녹음을 보냈습니다.',
				outcoming: '오디오 녹음을 보냈습니다.',
			},
			image: {
				incoming: '{name} 이 이미지를 보냈습니다.',
				outcoming: '이미지를 보냈습니다.',
			},
			file: {
				incoming: '{name} 이 파일을 보냈습니다.',
				outcoming: '파일을 보냈습니다.',
			}
		},
		emptyState: '아직 보관된 메시지가 없습니다. 신규 메시지를 생성하여 메시지를 주고받으세요.',
		noResults: '죄송합니다. 검색 결과가 없습니다. 다른 검색어로 시도해 주세요.',
		emptyChatUsers: '~와의 채팅을 생성할 사용자가 없습니다.',
		emptyChatArea: '채팅을 선택하거나 새로운 채팅을 생성하세요',
		emptyChatAreaNoMessages: '아직 메시지가 없습니다',
		emptyChatAreaNoResult: '새로운 채팅을 생성하여 메시지를 주고받으세요 ',
		deleteMessageConfirmation: '정말로 이 메시지를 삭제하시겠습니까?',
		saveAsBestPractice: '베스트 프랙티스 예시로 저장하기',
		justSent: '방금',
		viewDetails: '세부 사항 보기',
		viewScenarioDetails: '시나리오 세부 사항 보기',
		evaluate: '평가하기',
		sendMessage: '메시지 전송',
		attachPhoto: '사진 첨부',
		attachVideo: '영상 첨부',
		you: '나',
		searchLabel: '검색',
		scenarioCriterias: [
			{
				id: '590f7d5907e94106bdf393a5',
				title: '즐거운 프랙티스를 경험하셨나요?',
			},
			{
				id: '591f7d5907e94106bdf393a5',
				title: '업무와 연관성이 있었나요?',
			},
			{
				id: '592f7d5907e94106bdf393a5',
				title: '다른 사람에게도 추천하시겠어요?',
			},
		],
		createBestPractice: '베스트 프랙티스 생성하기',
		giveBestPracticeName: '베스트 프랙티스 이름 지정',
		bestPracticeError: '해당 영상은 이미 베스트 프랙티스 예시로 저장되었습니다',
		goBack: '돌아가기',
		inboxError: '이런! 현재 채팅이 더 이상 존재하지 않습니다.',
		deleteChatConfirmation: '정말로 이 채팅을 삭제하시겠습니까?',
		copy: '미디어 복사'
	},
	reminder: {
		sendReminder: '알림 보내기',
		sendReminderTitle: '실습 알림 보내기',
		reminderDefaultMessage: '이 시나리오는 어떻게 진행되고 있나요? 이 시나리오를 곧 완료하길 바랍니다. 궁금한 점이 있으면 메시지를 남겨주세요.',
		reminderSendSuccess: '알림이 전송되었습니다.',
		reminderNeeded: '실습 알림이 필요합니다!',
		runningOutOfTime: '사람들이 시나리오를 완료하기 위한 시간이 부족합니다.',
		sent: '보냈다'
	},
	scenarios: {
		stepExample: '예: 전화할 연락처 조사.',
		bestPracticeExample: '예: 멋진 오프닝이 있는 영상.',
		evaluationCriteriaExample: '예: 사람의 관심을 사로잡음.',
		numberOfFinished: '{finished} 명 중에 {total} 명이 끝냄',
		practiceGroups: {
			waitingOnFeedback: '피드백을 기다리는 중',
			inProgress: '진행 중',
			completed: '완료',
			notStarted: '시작되지 않음'
		},
		practice: '연습',
		finished: '끝마침',
		unread: '읽지 않음',
		all: '모두',
		groupChat: '그룹 채팅',
		coach: '코치',
		learner: '학습자',
		instructions: '교육',
		emptyState: '시나리오 선택',
		myScenarios: '시나리오',
		newScenario: '새로운 시나리오',
		newScenarioInstructions: '새로운 시나리오 교육',
		scenario: '대본', // todo self translation
		people: '인원',
		requiredFields: '필수 필드: 시나리오 이름, 시나리오 설명, 과정, 기준, 인원.',
		requiredSteps: '과정을 추가한 후 시나리오를 저장하세요',
		requiredCriteria: '기준을 추가한 후 시나리오를 저장하세요',
		requiredPeople: '인원을 추가한 후 시나리오를 저장하세요',
		requiredName: '시나리오의 이름을 지정한 후 저장하세요',
		requiredDescription: '시나리오 설명을 입력한 후 저장하세요',
		noScenarios: '아직 시나리오가 존재하지 않습니다',
		videoPlaceholder: '{name} 님께서 영상을 보냈습니다.',
		imagePlaceholder: '{name} 님께서 이미지를 보냈습니다.',
		currentText: '지금 실행 중',
		completedText: '완료',
		draftText: '초안',
		addSteps: '과정을 추가하여 진행',
		addCriterias: '새로운 기준 추가',
		addBestPracticeExample: '모범 사례 추가',
		steps: '과정',
		evaluationCriteria: '평가 기준',
		bestPractice: '베스트 프랙티스',
		addBestPractice: '다른 베스트 프랙티스 추가',
		deleteBestPractice: '베스트 프랙티스 삭제',
		bestPracticeCountSeparator: '중',
		criteriaSection: {
			selectCriteria: '평가 기준 추가',
			addCriteria: '(기준 추가)',
			notFound: '기준이 이미 추가되었습니다',
		},
		peopleSection: {
			addPerson: '인원 추가',
			peoplePracticing: '해당 프랙티스를 진행 중인 인원',
			groups: '팀즈',
			people: '인원',
			notFound: '해당하는 결과가 없습니다',
		},
		headerSection: {
			[EDIT_MODE]: {
				mobileHeader: '시나리오 편집',
				buttonPrimaryText: '전송',
				buttonSecondaryText: '취소',
				namePlaceholder: '시나리오 이름을 지정하세요',
				descriptionPlaceholder: '시나리오에 대한 설명을 입력하세요',
			},
			[VIEW_MODE]: {
				mobileHeader: '',
				buttonPrimaryText: '편집',
				buttonSecondaryText: '삭제',
			},
			[CREATE_MODE]: {
				mobileHeader: '새로운 시나리오',
				buttonPrimaryText: '전송',
				buttonSecondaryText: '취소',
				namePlaceholder: '시나리오 이름을 지정하세요',
				descriptionPlaceholder: '시나리오에 대한 설명을 입력하세요',
			},
			[PRACTICE_MODE]: {
				buttonPrimaryText: '프랙티스',
				buttonSecondaryText: '',
			},
		},
		validation: {
			buttonLabel: '다시 시도하기',
			title: '필수 필드를 입력하세요',
			fields: {
				[VIDEO_ID]: {
					name: '시나리오 영상',
					errorMessage: '필수 필드입니다',
				},
				[BEST_PRACTICE_VIDEOS]: {
					name: '베스트 프랙티스 비디오',
					errorMessage: '필수 필드입니다',
				},
				[SCENARIO_NAME]: {
					name: '시나리오 이름',
					errorMessage: '필수 필드입니다',
				},
				[SCENARIO_DESCRIPTION]: {
					name: '시나리오 설명',
					errorMessage: '필수 필드입니다',
				},
				[STEPS]: {
					name: '과정',
					errorMessage: '필수 필드입니다',
				},
				[CRITERIAS]: {
					name: '기준',
					errorMessage: '필수 필드입니다',
				},
				[SELECTED_USERS]: {
					name: '인원',
				},
			},
			deleteUnsaved: '저장하지 않은 변경 사항을 정말로 삭제하시겠습니까?',
			saveDraftMessage: '시나리오를 초안으로 저장할 수 있습니다',
			deleteChangesButton: '변경 사항 삭제',
		},
		saveDraftButton: '초안으로 저장',
		deleteScenario: '정말로 시나리오를 삭제하시겠습니까?',
		cancel: '취소',
		delete: '삭제',
		emptyGroups: '팀즈 미팅은 팀즈 탭에서 생성 및 관리할 수 있습니다.',
		bestPracticeError: '내용을 입력해야 합니다',
		bestPracticePlaceholder: '베스트 프랙티스 이름 지정',
		saved: '저장됨',
		dueDate: '마감일',
		due: '기한',
		fromNow: '지금부터',
		left: '남음',
		pastDue: '기한 경과'
	},
	groupChat: {
		label: '그룹 채팅',
		viewParticipants: '참가자 보기',
		groupChatName: '그룹 채팅명'
	},
	teams: {
		teams: '팀즈',
		buttonDelete: '삭제',
		buttonEdit: '편집',
		buttonCancel: '취소',
		buttonSave: '저장',
		placeholder: '팀 제목을 입력하세요',
		group: '팀',
		newTeam: '새로운 팀',
		editTeam: '팀 편집',
		deleteTeamConfirmation: '정말로 팀을 삭제하시겠습니까?',
		emptyAreaText: '팀을 선택하거나 새로운 팀을 생성하세요',
		[EDIT_MODE]: {
			buttonPrimaryText: '저장',
			buttonSecondaryText: '취소',
			placeholder: '팀 제목을 입력하세요',
		},
		[VIEW_MODE]: {
			buttonPrimaryText: '편집',
			buttonSecondaryText: '삭제',
		},
		[CREATE_MODE]: {
			buttonPrimaryText: '저장',
			buttonSecondaryText: '취소',
			placeholder: '팀 제목을 입력하세요',
		},
		wrongName: '이름이 올바르지 않습니다',
		teamExists: '팀 이름이 이미 존재합니다',
		tryAgain: '다시 시도하기',
		empty: '아직 생성된 팀이 없습니다',
		noUsers: '사용자가 없습니다',
		noUsersMessage: '팀에는 1명 이상의 사용자가 포함되어야 합니다',
		invalidName: '유효하지 않은 이름',
		invalidNameMessage: '유효하지 않은 팀 이름입니다',
	},
	primaryNav: {
		inbox: '메시지',
		scenarious: '시나리오',
		team: '팀즈',
		profile: '프로필',
		settings: '설정',
		logOut: '로그아웃',
	},
	dragAndDrop: {
		add: '추가',
		change: '변경',
		dropHeading: '여기에 파일을 드롭하세요',
		selectFile: '여기에 파일을 드래그 앤 드롭하거나',
		selectImageFile: '여기에 파일을 드래그 앤 드롭하거나',
		errorMessage: '이런! 문제가 발생한 것 같습니다.', //todo self translation
		fileCount: '1개의 파일만 추가할 수 있습니다.',
		formats: '형식:',
		maxFileSize: '최대 파일 크기는',
		multipleFiles: '앗! 1개의 파일만 추가할 수 있습니다',
		wrongSize: '앗! 파일 크기가 너무 큽니다',
		wrongFormat: '앗! 파일 형식이 올바르지 않습니다',
		serverError: '앗! 서버에 오류가 발생했습니다',
		selectAnotherFile: '다른 파일을 선택하려면 여기에 파일을 드래그 앤 드롭하거나',
		selectAnotherFileMobile: '다른 파일 선택',
		uploadPhoto: '사진 업로드',
		uploadVideo: '영상 업로드',
		bestPracticeNote: '짧은 노트를 첨부하여 베스트 프랙티스인 이유를 설명하세요',
		errorText: '내용을 입력해야 합니다',
		permissionErrorText: '파일 접근 권한이 없습니다. 권한을 확인한 다음 다시 시도하세요.',
		bestPractice: '베스트 프랙티스 이름 지정',
	},
	evaluateDialog: {
		paragraph: '1- 전혀 아니다, 5- 매우 그렇다',
		userEvaluationCriterias: {
			experience: '평가.비율.프랙티스.경험',
			work: '평가.비율.업무와의.연관성',
			recommend: '평가.비율.다른.사람에게.추천',
		},
		titleCoach: '{scenario}에서 {fullName} 님은 어떤 행동을 취했나요?',
		titleUser: '시나리오에 대한 의견을 들려주세요.',
		coachViewOfLearnerEvaluat: '{scenario} 시나리오 관련 평가',
		learnerViewOfEvaluat: '{scenario}에서 여러분은 어떤 행동을 취했나요?',
		criteriaExperience: '{You} 님, 즐거운 프랙티스를 경험하셨나요?',
		criteriaWork: '{Your} 님의 업무와 연관성이 있었나요?',
		criteriaRecommend: '{You} 님은 이 프랙티스를 다른 사람에게도 추천하시겠어요?',
	},
	settings: {
		settings: '설정',
		help: {
			title: '도움말/피드백',
			description: '앱 사용 시 문제가 발생하거나 여러분의 의견을 들려주고 싶으시다면, 다음 주소로 이메일을 보내주세요',
		},
		resources: {
			title: '자료',
			description: '자료에서 튜토리얼 및 자주 묻는 질문을 확인하세요.',
			descriptionTutorials: '개별 지도 확인'
		},
		deleteAccount: {
			title: '내 계정 삭제',
			description: '계정을 삭제하시려면 여기를 클릭하세요.',
			button: '계정 삭제',
			dialog: '정말로 계정을 삭제하시겠어요?',
		},
		language: {
			title: '언어 변경',
			languages: {
				en: '영어 (English)',
				fr: '프랑스 국민 (Français)',
				ru: '러시아인 (Русский)',
				it: '이탈리아 사람 (Italiano)',
				es: '스페인의 (Española)',
				de: '독일 사람 (Deutsch)',
				ja: '일본어 (日本語)',
				ko: '한국어',
				ch: '중국인 (中文)',
				pt: '포르투갈어 (Português)',
			},
		},
	},
	profile: {
		editText: '편집',
		profile: '프로필',
		settings: '설정',
		signout: '로그아웃',
	},
	reports: {
		coach: '코치',
		learner: '학습자',
		scorePerScenario: '시나리오 별 점수',
		scorePerCriteria: '기준 별 점수',
		totalScoreDetails: '총점 세부 사항',
		scenarioScoreDetails: '시나리오 점수 세부 사항',
		responsivenessDetails: '반응성 세부 사항',
		teamMemberDetails: '팀원 세부 사항',
		responsivenessPerScenario: '시다리오 별 반응성',
		teamMembersRaking: '팀원 순위',
		filters: {
			all: '모두',
			period: '기간',
			lastMonth: '지난 달',
			last3Months: '지난 3개월',
			lastYear: '작년',
		},
		dataTitles: {
			totalScore: '총점',
			responsiveness: '반응성',
			completed: '완료',
			current: '현재',
			ranking: '순위'
		},
		dataDescription: {
			totalScore: '총점은 평가 기준에 따른 평균값입니다.',
			responsiveness: '반응성은 학습자가 응답을 보내는 동안 일 수입니다.',
			completed: '완료된 시나리수 수',
			current: '현재 시나리오 수',
			ranking: '순위는 회사내에 다른팀들과 비교하는 우리팀의 위치입니다.',
		},
		dataLabels: {
			score: '점수',
			responsiveness: '반응성',
			team: '팀',
			me: '나',
			user: '사용자',
			company: '회사'
		}
	},
	recording: {
		browseVideo: '찾아보기',
		recordVideo: '영상 녹화',
		uploadExisting: '혹은 기존 영상 파일 업로드',
		replay: '다시 보기',
		recordAgain: '다시 녹화하기',
		send: '전송',
		next: '다음',
		retry: '다시 시도',
		selectAnOption: '1개의 옵션을 선택하세요',
		constraintsError: {
			title: '기기 문제',
			message: '현재 연결된 카메라는 최소 해상도 640x480을 지원해야 합니다.',
		},
		permissionError: {
			title: '접근 권한 없음',
			message: '브라우저가 카메라/마이크에 접근할 수 있도록 권한을 허용해야 합니다',
			messageAudio: '브라우저가 마이크에 접근할 수 있도록 권한을 허용해야 합니다',
		},
		deviceBusyError: {
			title: '기기가 현재 사용 중입니다',
			message: '다른 프로그램에서 카메라/마이크를 사용하고 있는지 확인하세요',
			messageAudio: '다른 프로그램에서 마이크를 사용하고 있는지 확인하세요',
		},
		notFoundError: {
			title: '입력 신호를 찾을 수 없습니다',
			message: '카메라 및 마이크가 제대로 연결되었는지 확인하세요',
			messageAudio: '마이크가 제대로 연결되었는지 확인하세요',
		},
		unknownError: {
			title: '원인을 알 수 없는 오류',
			message: '이런! 문제가 발생한 것 같습니다!', //todo self translation
		},
	},
	termsAndConditions: {
		error: '필수 필드입니다',
		iAgree: '이용 약관에',
		theTerms: '동의합니다',
		iRead: '개인정보 보호정책을 읽었습니다.',
		information: `<p style="text-align: center;"><strong>이용 약관</strong></p>
		<ol style="text-align: justify;">
		<li><strong> 응용 프로그램에 액세스</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">나는 이해:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;모바일 연습 (이하 "응용 프로그램") 과목의 특정 숫자에 훈련 날을 제공하기 위해 모바일 연습 또는 권리 보유자 파트너 중 하나가 나에게 사용할 수 있습니다</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;은 "M-학습"플랫폼의 URL을 보내거나 다른 사람과 공유해서는 안됩니다 (수 그들은 내부 또는 외부)</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;모바일 연습 예약합니다 단독 재량에 따라 오른쪽, 통보없이 정지 또는 응용 프로그램, 컨텐츠 또는 응용 프로그램에 제공하는 서비스의 전부 또는 일부에 대한 액세스를 종료 할.</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;응용 프로그램은 다른 인터넷 소스에 대한 링크를 제공 할 수 있습니다. 모바일 연습은 외부 소스에 대한 관리 권한이 없기 때문에, 모바일 연습은 그 내용, 광고, 제품, 서비스 또는 이러한 외부 소스에서 다른 사용할 수 아무것도에 대한 책임을지지 않습니다.</span></li>
		</ul>
		<ol style="text-align: justify;" start="2">
		<li><strong> 사용자 행동</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">응용 프로그램의 보증 및 의무를 각 사용자 :</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;상업적 또는 광고 목적을 제외하고 합법적 인 목적을위한 응용 프로그램을 사용하려면;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;애플리케이션의 정보 및 / 또는 콘텐츠에 대해 동일한 액세스 권한을 누리지 않는 사람에게 전달하거나 공개하지 않습니다.</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;방해하거나 응용 프로그램의 작동 인터럽트, 자사의 서버 또는 네트워크 응용 프로그램에 나 요구 사항, 절차, 규칙 또는 규정을 위반하는 연결하지 않기 위하여;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;스팸을 전송하거나 응용 프로그램의받은 편지함을 오버로드, 서버 과부하에 의해, 대역폭을 오버로드하여 응용 프로그램의 작동을 해칠하지 않기 위하여;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;아니 그들을위한 것이 아닙니다 뷰 정보, 또는 액세스가 액세스 할 수있는 권한이 없습니다하는 서버 나 계정;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;응용 프로그램에 대한 무단 액세스를 얻기 위해 응용 프로그램의 코드의 일부를 수정하지 않음</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;아니 응용 프로그램의 취약점을 평가하고, 메모 또는 테스트하려고하는, 또는 모바일 연습의 사전 서면 승인없이 응용 프로그램의 보안 또는 인증 조치를 회피</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;하지 나 응용 프로그램, 전송, 게시물에 대한 다운로드 모든 수단 원치 않는 또는 무단 광고 나 홍보 자료로 사용할 수 있도록</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;응용 프로그램의 내용의 어떤 다른 방법으로 이메일이나 전송에 보낼 수 없습니다.</span></li>
		</ul>
		<p style="text-align: justify;"><span style="font-weight: 400;">필요한 경우 그들의 의무를 이행하지 않는 경우, 모바일 연습 언제든지 응용 프로그램에 대한 사용자의 액세스를 해지 할 수 있습니다.</span></p>
		<ol style="text-align: justify;" start="3">
		<li><strong> 응용 프로그램의 콘텐츠를 보호</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; 애플리케이션과 동작에 필요한 소프트웨어 컴포넌트를 포함하여, (텍스트, 계층, 소프트웨어, 애니메이션, 사진, 그림, 이미지, 도면, 사운드 트랙, 로고, 상표, 도면, 모델 설문 퀴즈 등)의 구성 부품의 각 응용 프로그램 및 데이터베이스 (이하 "콘텐츠") 기밀 정보 및 지적 재산권 법 또는 기타 적용 가능한 법률에 의해 보호되는 데이터를 포함 할 수있다. 다른 응용 프로그램에서 명시하지 않는 한 따라서 콘텐츠의 지적 재산권은 모바일 연습 및 / 또는 사용자에게 어떠한 라이센스 또는 응용 프로그램을 볼 수있는 그 외에도 다른 권한을 부여하지 권리 보유자 파트너의 독점적 인 재산입니다.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; 컨텐츠의 모든 복제 또는 일부를 알리고 사용자 만 훈련의 목적을 위해 권한; 모든 복제 또는 어떤 방식이나 형태로 다른 목적을 위해 만들어진 내용의 사본의 다른 사용은 어떠한 명시 적으로 금지되어 있습니다.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; &nbsp;사용자는 또한, 디 컴파일, 조립 판매, 서브 라이선스 또는 권리의 내용 또는 응용 프로그램에 관한 어떠한 방식으로 할당에서 파생 작업을 생성, 수정, 복사 금지된다.</span></p>
		<ol style="text-align: justify;" start="4">
		<li><strong> 책임</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">모바일 연습 노력은 응용 프로그램에서 제공하는 정보가 정확하고 최신 상태인지 확인합니다. 그러나 모바일 연습은 응용 프로그램에서 사용자에게 제공하는 정보가 정확하거나 완전한 것을 보장 할 수 없습니다.</span></p>
		<ol style="text-align: justify;" start="5">
		<li><strong> 개인 정보</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; 모바일 연습과 권리 보유자의 파트너는 응용 프로그램의 사용자의 개인 정보를 보호하고 당신이 우리를 제공하는 개인 정보의 기밀성에 관한 우려를 존중합니다. 개인 정보와 데이터를 제공함으로써, 귀하는 아래에 규정 된 조건에서의 사용 및 통신에 동의합니다.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">응용 프로그램을 통해, 모바일 연습 및 권리 보유자 파트너는 이름, 성, 로그인, 학습자의 전자 메일 주소, 부서 소요되는 시간과 응용 프로그램에 대한 액세스 권한을 (제공하기 위해, 예를 들어, 위해, 개인 정보를 수집 할 수 있습니다, 수 연결 및 점의 수)의만을 목적으로 아래에 설명 :</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;교육 관리</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;통계, 연구와 설문 조사 및 퀴즈 응답의 분석</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;만족도 조사의 사용을 포함, 응용 프로그램 개선</span></li>
		</ul>
		<p style="text-align: justify;">&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">응용 프로그램에 계정을 만들고 아이콘의 '동의 함'을 클릭하여 액세스하여, 당신은 이용 약관 및 위의 절을 읽은 인정하고 당신은 돌이킬을 받아들입니다. 따라서, 당신이 회사 모바일 연습하여 본 약관과에 따라 개인 정보의 처리에 아낌없이 동의.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">당신이 응용 프로그램을 사용하기 위해 제공하는 모든 개인 정보는 어떤 법률의 규정에 따른다. 정보 기술 및 6의 자유 년 1 월 1978 78-17.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">당신은 올바른 액세스에 대한 권리를 가지고 언제든지 당신에 관한 개인 정보를 삭제하고, 모바일 연습을 작성하여이 데이터의 처리를 중지 할 수 있습니다 - (224), 뤼 생 드니 중 & ndash; 75002 파리 또는 모바일 Practice.com @ 접촉.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">데이터는 그들이 그들이 수집하고, 어떤 경우에 6 개월 응용 프로그램의 사용에 대한 접근의 권리의 종료일 이후 파괴 될의 목적을 위해 필요로 유지됩니다. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">받는 사람 만이 정당하게 데이터에 액세스 할 수 있습니다 훈련의 관리를 담당하는 모바일 연습에 의해 승인. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">모바일 연습 노력 수집 및 처리되는 개인 정보의 기밀성을 유지하기 위해, 그들을 변형 손상 또는 파괴, 또는 않은 제 3 자에 의해 액세스되는 것을 방지하기 위해 필요한 모든 조치를 취합니다.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">그러나 모바일 연습은 사용 및 작동에 내재 된 위험 가능성의 존재 응용 프로그램의 인터넷 및 경고 사용자의 운영과 관련된 모든 위험을 관리 할 수 ​​없습니다.</span></p>`,
	},
	mediaUpload: {
		wrongSize: '앗! 파일 크기가 너무 큽니다',
		wrongFormat: '앗! 파일 형식이 올바르지 않습니다',
		tryAgain: '다시 시도하기',
		uploadFailed: '앗! 업로드에 실패했습니다.',
		maxFileSize: '최대 파일 크기는',
		formats: '형식',
		permissionErrorText: '파일 접근 권한이 없습니다. 권한을 확인한 다음 다시 시도하세요.',
	},
	onboarding: {
		tutorials: {
			welcome: "튜토리얼을 환영합니다",
			learner: "학습자 자습서",
			coach: "코치 튜토리얼",
			scenarioCreation: "시나리오 생성 자습서"
		},
		startExploring: "탐험을 시작하십시오",
		close: "닫다",
		welcome: {
			slide1: {
				title: "모바일 연습에 오신 것을 환영합니다",
				text: "팀을위한 모바일 비디오 및 메시징 기술, 코치 & 공유 모범 사례"
			},
			slide2: {
				title: "시나리오",
				text: "시나리오 페이지에서는 시나리오 마녀의 목록을 보시려면 학습자로 연습하거나 코치로 훈련합니다." // Todo
			},
			slide3: {
				title: "메시지",
				text: "메시지 페이지에서 개인 채팅을 볼 수 있습니다" // Todo
			},
			slide4: {
				title: "팀즈",
				text: "팀 페이지에서 사용자 그룹을 관리 할 수 ​​있습니다." //Todo
			},
			slide5: {
				title: "프로필",
				text: "프로필 페이지에서 아바타를 업로드하고 통계를 확인할 수 있습니다." // Todo
			},
			slide6: {
				title: "설정",
				text: "프로필 페이지에서 설정 페이지를 열 수 있습니다. 그것에 언어를 바꿀 수 있고 추가 자료를 봅니다.", // Todo
			},
			slide7: {
				title: "다음 어디로 가야합니다",
			},
		},
		learner: {
			slide1: {
				title: "시나리오 지침",
				text: "시나리오를 선택하고  \"명령어\"를 클릭하여 시나리오 세부 정보 페이지를 엽니 다." // Todo
			},
			slide2: {
				title: "연습을 시작하십시오",
				text: "시나리오를 선택하고 \"연습 \"을 클릭하십시오."
			},
			slide3: {
				title: "연습 채팅",
				text: "코치와의 연습은 귀하의 연습입니다. 질문을하고 연습 비디오를 제출하도록 준비하십시오." // Todo
			},
			slide4: {
				title: "비디오를 보냅니다",
				text: "사전 저장된 비디오를 추가하거나 새 것을 기록 할 수 있습니다. 코치 평가를 기다리십시오" // Todo
			},
			slide5: {
				title: "시나리오를 평가합니다",
				text: "코치로부터 피드백을받은 후 시나리오를 평가할 수 있습니다." // Todo
			},
		},
		coach: {
			slide1: {
				title: "코치 패널",
				text: "시나리오를 선택하고 \"코치 \"를 클릭하여 코치 패널을 엽니 다.패널에는 개별 관행과 상태가 표시됩니다" // Todo
			},
			slide2: {
				title: "알림 보내기",
				text: "코치 패널에서는 학습자가 자신의 관행을 제출하는 것을 알리는 알림을 보내려면 알림을 보낼 수 있습니다. \"미리 알림 보내기\"를 클릭하고 모든 학습자를 위해 메시지를 보내십시오." // Todo
			},
			slide3: {
				title: "연습 채팅",
				text: "코치 패널에서 학습자와 개별 연습 채팅을 열 수 있습니다. 거기에서 질문에 답하고 추가 명령을 추가 할 수 있습니다" // Todo
			},
			slide4: {
				title: "학습자에게 모범 사례를 추가하십시오",
				text: "학습자 비디오는 예외적 일 수 있습니다. 참가자의 나머지 부분에 대한 영감과 모범이 될 수 있습니다. \"모범 사례\"로 저장할 수 있습니다." // Todo
			},
			slide5: {
				title: "평가하기",
				text: "학습자 연습을 평가할 시간입니다. 각 기준 시나리오에 점수 추가가 있습니다" // Todo
			},
		},
		scenarioCreation: {
			slide1: {
				title: "시나리오를 만듭니다",
				text: "\"시나리오\"탭에서 \"new \"를 클릭하여 시나리오 생성 페이지를 엽니 다." // Todo
			},
			slide2: {
				title: "시나리오의 세부 정보를 추가하십시오",
				text: "시나리오의 세부 정보가있는 양식을 작성하십시오."
			},
			slide3: {
				title: "제목과 설명을 추가하십시오",
				text: "시나리오에 대한 제목과 설명을 추가하십시오"
			},
			slide4: {
				title: "설명 비디오를 추가하십시오",
				text: "시나리오에 설명 비디오를 추가하십시오. 사전 저장된 비디오를 추가하거나 새 것을 기록 할 수 있습니다." // Todo
			},
			slide5: {
				title: "단계를 추가하십시오",
				text: "참가자의 답글을 안내하는 단계를 추가하십시오"
			},
			slide6: {
				title: "평가 기준 추가",
				text: "이러한 기준은 시나리오를 평가하는 데 사용됩니다. 기존 기준을 사용할 수 있거나 사용자를 만듭니다"
			},
			slide7: {
				title: "학습자를 추가하십시오",
				text: "시나리오를 연습하는 데 사람들을 추가하십시오. 미리 정의 된 팀뿐만 아니라 개인을 추가 할 수 있습니다"
			},
			slide8: {
				title: "시나리오가 준비되었습니다",
				text: "그게 다야. 시나리오를 참가자에게 보낼 준비가 되었습니다. \"보내기\"를 클릭하기만 하면 됩니다." // Todo self translation, lack of translation
			},
		}
	}
};
