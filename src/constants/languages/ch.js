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
	name: '中国人',
	common: {
		edit: '编辑',
		create: '创建',
		addVideo: '添加视频',
		changeVideo: '更改',
		browse: '浏览',
		cancel: '取消',
		done: '已完成',
		save: '保存',
		confirmPasswordError: '密码不匹配',
		delete: '删除',
		emailError: '电子邮箱地址无效',
		evaluate: '评估',
		logOutButton: '退出',
		logOutMessage: '您确定要退出吗？',
		mobilePractice: '移动练习',
		new: '全新',
		passwordError: '密码必须至少包含8个字符',
		send: '发送',
		tryAgain: '再试一次',
		today: '今日',
		yesterday: '昨日',
		openAdminPanel: '打开管理面板',
		newMessage: {
			singular: '新消息',
			plural: '新消息',
		},
		continue: '继续',
	},
	home: {
		title: '主页', // todo self translation
		connection: {
			titleError: '无网络连接',
			titleSuccess: '您的网络连接已恢复',
			message: '请检查您的网络连接',
			button: '继续',
		},
		landscape: {
			title: '请旋转您的设备',
			message: 'Mobile Practice在纵向模式下效果更佳',
		},
	},
	signIn: {
		description: `请登录以继续`, // todo self translation
		email: '电子邮箱',
		forgotPassword: '需要密码？',
		password: '密码',
		signIn: '登录',
		signInError: '电子邮箱地址或密码无效',
		title: '您好！',
	},
	forgotPassword: {
		description: `请输入您的电子邮箱地址，我们将向您发送重置密码的链接`,
		email: '您的电子邮箱地址',
		reset: '发送',
		justRemember: '返回登陆界面',
		title: '忘记密码？',
		success: {
			title: '成功！',
			message: '感谢您的请求。\n我们正在向您发送确认邮件。',
			cta: '返回',
		},
		error: {
			title: '抱歉！',
			message: '我们无法向您发送邮件',
			cta: '再试一次',
		},
	},
	resetPassword: {
		confirm: '确认',
		confirmPassword: '确认密码',
		description: '密码必须至少包含8个字符。请勿使用旧密码',
		newPassword: '新密码',
		title: '您好！',
		success: {
			title: '成功！',
			message: '新密码已创建',
			cta: '登录',
		},
		error: {
			title: '抱歉！',
			message: '您无法创建密码',
			cta: '再试一次',
			alreadyUsed: '密码已使用。请重新输入',
		},
	},
	createPassword: {
		confirm: '确认',
		confirmPassword: '确认密码',
		description: `请创建密码！`,
		newPassword: '新密码',
		title: '您好',
		success: {
			title: '成功！',
			message: '密码已创建',
			cta: '返回主页',
		},
		error: {
			title: '抱歉！',
			message: '您无法创建密码',
			cta: '再试一次',
		},
	},
	inbox: {
		deletedUser: '已删除用户',
		newChat: '新聊天',
		editChat: '编辑聊天',
		everyOne: '所有人',
		groups: '队伍',
		inbox: '收件箱',
		inboxMessages: '消息',
		chatPlaceholder: {
			video: {
				incoming: '{name}向您发送了一则视频',
				outcoming: '您将视频发送至{name}',
			},
			audio: {
				incoming: '{name}向您发送了一段录音',
				outcoming: '您向 发送了一段录音{name}',
			},
			image: {
				incoming: '{name}向您发送了一张照片',
				outcoming: '您向 发送了一张图片{name}',
			},
			file: {
				incoming: '{name}向您发送了一个文件',
				outcoming: '您向 发送了一个文件{name}',
			}
		},
		groupChatPlaceholder: {
			video: {
				incoming: '{name}已发送一则视频',
				outcoming: '您已发送一则视频',
			},
			audio: {
				incoming: '{name}发送了一段录音',
				outcoming: '您发送了一段录音',
			},
			image: {
				incoming: '{name}已发送一张图片',
				outcoming: '您已发送一张图片',
			},
			file: {
				incoming: '{name}已发送一个文件',
				outcoming: '您已发送一个文件',
			}
		},
		emptyState: '目前还没有消息。创建新对话并发送消息。',
		noResults: '很遗憾，没有搜索到相关结果。请尝试其它关键词。',
		emptyChatUsers: '暂无用户可创建聊天',
		emptyChatArea: '请选择对话或创建新对话',
		emptyChatAreaNoMessages: '目前还没有消息',
		emptyChatAreaNoResult: '请创建新对话并发送消息 ',
		deleteMessageConfirmation: '您确定要删除此消息吗？',
		saveAsBestPractice: '保存为最佳练习案例',
		justSent: '方才',
		viewDetails: '查看细节',
		viewScenarioDetails: '查看场景细节',
		evaluate: '评估',
		sendMessage: '发送消息……',
		attachPhoto: '添加照片',
		attachVideo: '添加视频',
		you: '您',
		searchLabel: '搜索',
		scenarioCriterias: [
			{
				id: '590f7d5907e94106bdf393a5',
				title: '您喜欢此项练习吗？',
			},
			{
				id: '591f7d5907e94106bdf393a5',
				title: '这与您的工作相关吗？',
			},
			{
				id: '592f7d5907e94106bdf393a5',
				title: '您会将其推荐给他人吗？',
			},
		],
		createBestPractice: '创建最佳练习',
		giveBestPracticeName: '为最佳练习命名……',
		bestPracticeError: '该视频已被保存为最佳练习案例',
		goBack: '返回',
		inboxError: '糟糕！当前聊天不存在',
		deleteChatConfirmation: '您确定要删除当前对话吗？',
		copy: '复制照片和视频'
	},
	reminder: {
		sendReminder: '发送提醒',
		sendReminderTitle: '发送练习提醒',
		reminderDefaultMessage: '嘿，这个场景练习得如何？我们希望尽快结束当前场景。如有问题，请与我联系。',
		reminderSendSuccess: '提醒已发送',
		reminderNeeded: '需创建练习提醒！',
		runningOutOfTime: '完成场景时间耗尽。',
		sent: '已发送'
	},
	scenarios: {
		stepExample: '示例：寻找联系人打电话。',
		bestPracticeExample: '示例：视频的开场白很棒。',
		evaluationCriteriaExample: '示例：内容引人入胜。',
		numberOfFinished: '{finished} 人中已有 {total} 人完成',
		practiceGroups: {
			waitingOnFeedback: '等待反馈',
			inProgress: '进行中',
			completed: '已完成',
			notStarted: '未开始'
		},
		practice: '实践',
		finished: '已结束',
		unread: '未读',
		all: '全部',
		groupChat: '群聊',
		coach: '教练',
		learner: '学员',
		instructions: '说明',
		emptyState: '选择场景',
		myScenarios: '场景',
		newScenario: '新场景',
		newScenarioInstructions: '新场景说明',
		scenario: '设想', // todo self translation
		people: '参与者',
		requiredFields: '必填字段：场景名称、场景描述、步骤、标准、参与者。',
		requiredSteps: '在保存场景之前，请添加若干步骤',
		requiredCriteria: '在保存场景之前，请添加若干标准',
		requiredPeople: '在保存场景之前，请添加参与者',
		requiredName: '在保存场景之前，请为其命名',
		requiredDescription: '在保存场景之前，请添加场景描述',
		noScenarios: '尚无场景',
		videoPlaceholder: '{name}向您发送了一则视频',
		imagePlaceholder: '{name}向您发送了一张照片',
		currentText: '目前',
		completedText: '已完成',
		draftText: '草稿',
		addSteps: '添加需要遵循的步骤',
		addCriterias: '添加新标准',
		addBestPracticeExample: '添加最佳练习案例',
		steps: '步骤',
		evaluationCriteria: '评估标准',
		bestPractice: '最佳练习',
		addBestPractice: '添加其它最佳练习',
		deleteBestPractice: '删除最佳练习',
		bestPracticeCountSeparator: '从中',
		criteriaSection: {
			selectCriteria: '添加评估标准',
			addCriteria: '（添加标准）',
			notFound: '标准已添加',
		},
		peopleSection: {
			addPerson: '添加参与者',
			peoplePracticing: '练习此场景的参与者',
			groups: '队伍',
			people: '参与者',
			notFound: '未找到匹配结果',
		},
		headerSection: {
			[EDIT_MODE]: {
				mobileHeader: '编辑场景',
				buttonPrimaryText: '发送',
				buttonSecondaryText: '取消',
				namePlaceholder: '为场景命名',
				descriptionPlaceholder: '描述场景……',
			},
			[VIEW_MODE]: {
				mobileHeader: '',
				buttonPrimaryText: '编辑',
				buttonSecondaryText: '删除',
			},
			[CREATE_MODE]: {
				mobileHeader: '新场景',
				buttonPrimaryText: '发送',
				buttonSecondaryText: '取消',
				namePlaceholder: '为场景命名',
				descriptionPlaceholder: '描述场景……',
			},
			[PRACTICE_MODE]: {
				buttonPrimaryText: '练习',
				buttonSecondaryText: '',
			},
		},
		validation: {
			buttonLabel: '再试一次',
			title: '请填写必填字段',
			fields: {
				[VIDEO_ID]: {
					name: '场景视频',
					errorMessage: '该字段不可为空',
				},
				[BEST_PRACTICE_VIDEOS]: {
					name: '最佳练习视频',
					errorMessage: '该字段不可为空',
				},
				[SCENARIO_NAME]: {
					name: '场景名称',
					errorMessage: '该字段不可为空',
				},
				[SCENARIO_DESCRIPTION]: {
					name: '场景描述',
					errorMessage: '该字段不可为空',
				},
				[STEPS]: {
					name: '步骤',
					errorMessage: '该字段不可为空',
				},
				[CRITERIAS]: {
					name: '标准',
					errorMessage: '该字段不可为空',
				},
				[SELECTED_USERS]: {
					name: '参与者',
				},
			},
			deleteUnsaved: '您确定要删除未保存的更改吗？',
			saveDraftMessage: '您可以将场景保存为草稿',
			deleteChangesButton: '删除更改',
		},
		saveDraftButton: '保存草稿',
		deleteScenario: '您确定要删除场景吗？',
		cancel: '取消',
		delete: '删除',
		emptyGroups: '队伍是在队伍选项卡中创建和管理的',
		bestPracticeError: '不可为空',
		bestPracticePlaceholder: '为最佳练习命名',
		saved: '已保存',
		dueDate: '预计完成日期',
		due: '预计完成需',
		fromNow: '从现在到完成需 天',
		left: '剩余 天',
		pastDue: '超出预计时间'
	},
	groupChat: {
		label: '群聊',
		viewParticipants: '查看参与者',
		groupChatName: '群聊名称'
	},
	teams: {
		teams: '队伍',
		buttonDelete: '删除',
		buttonEdit: '编辑',
		buttonCancel: '取消',
		buttonSave: '保存',
		placeholder: '输入队伍名称……',
		group: '队伍',
		newTeam: '新队伍',
		editTeam: '编辑队伍',
		deleteTeamConfirmation: '您确定要删除队伍吗？',
		emptyAreaText: '选择一支队伍或创建新队伍',
		[EDIT_MODE]: {
			buttonPrimaryText: '保存',
			buttonSecondaryText: '取消',
			placeholder: '输入队伍名称……',
		},
		[VIEW_MODE]: {
			buttonPrimaryText: '编辑',
			buttonSecondaryText: '删除',
		},
		[CREATE_MODE]: {
			buttonPrimaryText: '保存',
			buttonSecondaryText: '取消',
			placeholder: '输入队伍名称……',
		},
		wrongName: '名称错误',
		teamExists: '队伍名称已存在',
		tryAgain: '再试一次',
		empty: '您目前还没有队伍',
		noUsers: '无用户',
		noUsersMessage: '队伍应该包含至少一位用户',
		invalidName: '名称无效',
		invalidNameMessage: '该队伍名称无效',
	},
	primaryNav: {
		inbox: '消息',
		scenarious: '场景',
		team: '队伍',
		profile: '资料',
		settings: '设置',
		logOut: '退出',
	},
	dragAndDrop: {
		add: '添加',
		change: '更改',
		dropHeading: '将文件放于此处',
		selectFile: '拖放文件至此处或者',
		selectImageFile: '拖放文件至此处或者',
		errorMessage: '抱歉！好像出问题了！', // todo self translation
		fileCount: '您只能添加一个文件',
		formats: '格式',
		maxFileSize: '最大上传文件大小为',
		multipleFiles: '抱歉！您只能添加一个文件',
		wrongSize: '抱歉！您的文件太大了',
		wrongFormat: '抱歉！您的文件格式错误',
		serverError: '抱歉！出现服务器错误',
		selectAnotherFile: '选择其它文件，将此拖放到此处或者',
		selectAnotherFileMobile: '选择其它文件',
		uploadPhoto: '上传照片',
		uploadVideo: '上传视频',
		bestPracticeNote: '包含被选为最佳练习的简要原因说明……',
		errorText: '不可为空',
		permissionErrorText: '我们没有此文件的权限。请检查您的权限并再试一次。',
		bestPractice: '为最佳练习命名',
	},
	evaluateDialog: {
		paragraph: '1- 完全没有，5- 绝对没有',
		userEvaluationCriterias: {
			experience: '评估.评级.练习.经验',
			work: '评估.评级.与.工作.相关',
			recommend: '评估.评级.向.他人.推荐',
		},
		titleCoach: '{fullName}在{scenario}中发挥如何？',
		titleUser: '您对该场景有何想法？',
		coachViewOfLearnerEvaluat: '场景{scenario}评估',
		learnerViewOfEvaluat: '您在{scenario}中发挥如如',
		criteriaExperience: '{You}喜欢此项练习吗？',
		criteriaWork: '这和{Your}的工作相关吗？',
		criteriaRecommend: '{You}会将其推荐给他人吗？',
	},
	settings: {
		settings: '设置',
		help: {
			title: '帮助/反馈',
			description: '如果您在使用应用程序时遇到问题，或想告诉我们您的想法，请给我们发送电子邮件，地址是',
		},
		resources: {
			title: '资源',
			description: '如需获得教程和常见问题，',
			descriptionTutorials: '查看教程'
		},
		deleteAccount: {
			title: '删除我的账户',
			description: '如果您想要删除您的账户，请在此点击',
			button: '删除账户',
			dialog: '您确定要删除您的账户吗？',
		},
		language: {
			title: '改变语音',
			languages: {
				en: '英语 (English)',
				fr: '法语 (Français)',
				ru: '俄语 (Русский)',
				it: '意大利语 (Italiano)',
				es: '西班牙语 (Española)',
				de: '德语 (Deutsch)',
				ja: '日本人 (日本語)',
				ko: '韩国人 (한국어)',
				ch: '中文',
				pt: '葡萄牙语 (Português)',
			},
		},
	},
	profile: {
		editText: '编辑',
		profile: '资料',
		settings: '设置',
		signout: '退出',
	},
	reports: {
		coach: '教练',
		learner: '学员',
		scorePerScenario: '各场景分数',
		scorePerCriteria: '各项标准分数',
		totalScoreDetails: '总分详情',
		scenarioScoreDetails: '场景分数详情',
		responsivenessDetails: '应答详情',
		teamMemberDetails: '队员详情',
		responsivenessPerScenario: '各场景应答情况',
		teamMembersRaking: '队员排名',
		filters: {
			all: '全部',
			period: '时期',
			lastMonth: '上个月',
			last3Months: '前3个月',
			lastYear: '去年',
		},
		dataTitles: {
			totalScore: '总分',
			responsiveness: '应答情况',
			completed: '已完成',
			current: '目前',
			ranking: '排名'
		},
		dataDescription: {
			totalScore: '总分为按评估标准计算得出的平均值',
			responsiveness: '应答情况为学员发送回复的天数',
			completed: '已完成场景个数',
			current: '目前场景个数',
			ranking: '排名是您的队伍与公司其他队伍相比所处的位置',
		},
		dataLabels: {
			score: '分数',
			responsiveness: '应答情况',
			team: '队伍',
			me: '我',
			user: '用户',
			company: '公司'
		}
	},
	recording: {
		browseVideo: '浏览',
		recordVideo: '录制视频',
		uploadExisting: '或上传现有的视频文件',
		replay: '重新播放',
		recordAgain: '再次录制',
		send: '发送',
		next: '下一步',
		retry: '重试',
		selectAnOption: '请选择一个选项',
		constraintsError: {
			title: '设备问题',
			message: '请确认当前连接的相机支持的最低分辨率为640x480',
		},
		permissionError: {
			title: '无访问权限',
			message: '请确认您已允许浏览器访问摄像头/麦克风',
			messageAudio: '请确认您已允许浏览器访问麦克风',
		},
		deviceBusyError: {
			title: '设备繁忙',
			message: '请确认没有任何其他程序正在使用摄像头/麦克风',
			messageAudio: '请确认没有任何其他程序正在使用麦克风',
		},
		notFoundError: {
			title: '未找到输入信号',
			message: '请确认你已正确连接了摄像头和麦克风',
			messageAudio: '请确认您已正确连接了麦克风',
		},
		unknownError: {
			title: '未知错误',
			message: '抱歉！好像出问题了！',
		},
	},
	termsAndConditions: {
		error: '该字段不可为空',
		iAgree: '我已阅读并同意',
		theTerms: '以上条款',
		iRead: '和隐私政策。',
		information: `<p style="text-align: center;"><strong>使用条款和条件</strong></p>
		<ol style="text-align: justify;">
		<li><strong> 访问该应用程序</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">我理解。</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;移动实践（以下简称 "应用程序"）是由移动实践或其权利持有人之一的合作伙伴提供给我的，为我提供一定数量的主题培训。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;不得将 "M-Learning "平台的URL发送给任何人（无论是内部还是外部），也不得与之分享。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;MOBILE PRACTICE保留自行决定暂停或终止访问全部或部分应用程序、其内容或应用程序中提供的服务的权利，恕不另行通知。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;该应用程序可能提供到其他互联网来源的链接。由于MOBILE PRACTICE对外部来源没有控制权，MOBILE PRACTICE对这些外部来源的内容、广告、产品、服务或其他任何东西不承担任何责任。</span></li>
		</ul>
		<ol style="text-align: justify;" start="2">
		<li><strong> 用户行为</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">该应用程序的每个用户保证并承诺。</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;为合法目的使用本应用程序，不包括任何商业或广告目的。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;不得向不享有相同访问权限的任何人传达或泄露应用程序的任何信息和/或内容；</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;不扰乱或中断应用程序、其服务器或连接到应用程序的网络的运行，或违反其要求、程序、规则或条例。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;不通过使带宽超载、使服务器超载、发送垃圾邮件或使应用程序的收件箱超载而损害应用程序的运行。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;不查看不是为他们准备的信息，或访问他们未被授权访问的服务器或账户。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;不修改应用程序的部分代码以获得对应用程序的未经授权的访问</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;未经MOBILE PRACTICE事先书面授权，不得尝试评估、注意或测试应用程序的漏洞，或规避应用程序的安全或认证措施</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;不得向应用程序下载、传输、张贴或以任何方式提供未经请求或未经授权的广告或促销材料</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;不得通过电子邮件发送或以任何其他方式传送应用程序的任何内容。</span></li>
		</ul>
		<p style="text-align: justify;"><span style="font-weight: 400;">如有必要，MOBILE PRACTICE可以在任何时候终止用户对应用程序的访问，如果他们不履行其义务。</span></p>
		<ol style="text-align: justify;" start="3">
		<li><strong> 对应用程序内容的保护</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp;应用程序及其每个组成部分（如文本、层次结构、软件、动画、照片、插图、图像、图表、配乐、标识、品牌、图纸、模型、问卷调查和测验），包括应用程序运行所需的软件组件和数据库（以下简称 "内容"）可能包含受知识产权法或任何其他适用法律保护的保密信息和数据。因此，除非在应用程序中另有说明，内容的知识产权是MOBILE PRACTICE和/或其权利人合作伙伴的专有财产，他们不授予用户除查看应用程序外的任何许可或任何其他权利。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; 全部或部分内容的复制仅被授权用于通知和培训用户；明确禁止以任何方式或形式为其他目的对内容的副本进行任何复制或其他使用。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; &nbsp;用户也被禁止复制、修改、创造衍生作品、组装、反编译、出售、分许可或以任何方式转让与本内容或应用有关的任何权利。</span></p>
		<ol style="text-align: justify;" start="4">
		<li><strong> 责任</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE努力确保应用程序上提供的信息是准确和最新的。但是，MOBILE PRACTICE不能保证在应用程序上提供给用户的信息是准确或详尽的。</span></p>
		<ol style="text-align: justify;" start="5">
		<li><strong> 个人数据</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; MOBILE PRACTICE及其权利人合作伙伴保护应用程序用户的个人数据，并尊重您对您提供给我们的个人信息的保密性的关注。通过向我们提供您的个人信息和数据，您同意在以下条件下使用和交流这些信息。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">通过该应用程序，MOBILE PRACTICE及其权利人合作伙伴可能会收集个人数据，例如，为了提供对该应用程序的访问（如姓名、登录、学习者的电子邮件地址、部门花费的时间、连接数和点数），仅用于以下目的。</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;培训管理</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;对调查问卷和测验答案的统计、研究和分析</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;改进应用程序，包括使用满意度调查</span></li>
		</ul>
		<p style="text-align: justify;">&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">通过访问，在应用程序上创建您的账户并点击 "我接受 "的图标，您承认已经阅读了上述条款和条件以及条款，并不可撤销地接受它们。因此，您毫无保留地同意MOBILE PRACTICE公司按照这些条款和条件以及在此处理您的个人数据。</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">您为使用该应用程序而提供的任何个人信息都受1978年1月6日关于信息技术和自由的第78-17号法律规定的约束。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">您有权在任何时候访问、更正和删除与您有关的任何个人信息，并可以通过写信给MOBILE PRACTICE - 224, Rue Saint-Denis; 75002 Paris 或 contact@Mobile Practice.com 停止对这些数据的处理。</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">这些数据将被保留到其收集目的所需的时间，并且在任何情况下，将在访问使用应用程序的权利结束之日起6个月后被销毁。 </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">只有由MOBILE PRACTICE正式授权的负责培训管理的接收者才能访问您的数据。 </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE努力采取一切必要的预防措施，保持所收集和处理的个人资料的机密性，并防止它们被变形、损坏或破坏，或被未经授权的第三方访问。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">然而，MOBILE PRACTICE不能管理与互联网运行有关的所有风险，并提醒应用程序的用户注意其使用和运行中存在的潜在风险。</span></p>`,
	},
	mediaUpload: {
		wrongSize: '抱歉！您的文件太大了',
		wrongFormat: '抱歉！您的文件格式错误',
		tryAgain: '再试一次',
		uploadFailed: '抱歉！上传失败。',
		maxFileSize: '最大上传文件大小为',
		formats: '格式：',
		permissionErrorText: '我们没有此文件的权限。请检查您的权限并再试一次。',
	},
	onboarding: {
		tutorials: {
			welcome: "欢迎教程",
			learner: "学员教程",
			coach: "教练教程",
			scenarioCreation: "场景创建教程"
		},
		startExploring: "开始探索",
		close: "关闭",
		welcome: {
			slide1: {
				title: "欢迎来到Mobile Practice",
				text: "丰富手机视频与前沿通讯技术，助力团队开展练习，进行训练指导和分享最佳实践"
			},
			slide2: {
				title: "场景",
				text: "可在“场景”选项卡中查看学员练习场景列表和教练训练场景列表"
			},
			slide3: {
				title: "消息",
				text: "可在“信息”选项卡中选择一个或多个参与者创建聊天群"
			},
			slide4: {
				title: "队伍",
				text: "可在“队伍”选项卡中管理用户群"
			},
			slide5: {
				title: "资料",
				text: "可在“用户资料”选项卡中上传个人头像，查看数据或进入设置页面。"
			},
			slide6: {
				title: "设置",
				text: "可在“设置”选项卡中更改语言，查看登录画面或获取帮助资源。",
			},
			slide7: {
				title: "下一步去哪里", //todo self translation
			},
		},
		learner: {
			slide1: {
				title: "场景说明", //todo self translation
				text: "选择并放大相应练习场景。点击 \"说明\""
			},
			slide2: {
				title: "开始练习",
				text: "选择场景，然后点击 \"练习\""
			},
			slide3: {
				title: "练习聊天会话",
				text: "查看与教练的个人练习聊天。您可提问或准备提交练习视频。"
			},
			slide4: {
				title: "发送视频",
				text: "录制视频、检查视频，然后提交至教练。收到反馈时会提示通知。"
			},
			slide5: {
				title: "评估视频",
				text: "教练提供评估反馈后，您可选择评估场景。"
			},
		},
		coach: {
			slide1: {
				title: "教练界面",
				text: "选择并放大相应练习场景。点击“教练”，查看每位参与者的状态。"
			},
			slide2: {
				title: "发送提醒",
				text: "可通过教练界面提醒参与者提交视频回复。"
			},
			slide3: {
				title: "练习聊天会话",
				text: "可通过教练界面与学员发起个人练习聊天。可以在此处回复视频、文本或添加文档。"
			},
			slide4: {
				title: "添加学员的最佳练习",
				text: "与小组分享优秀的视频回复。通过聊天获得学员同意后，点击视频，保存为“最佳练习”。记得添加题目。"
			},
			slide5: {
				title: "评估",
				text: "根据创建场景时设定的标准评估学员表现。以此结束学员的练习。"
			},
		},
		scenarioCreation: {
			slide1: {
				title: "创建场景",
				text: "可在“场景”选项卡中点击\"新建\" ，打开场景创建页面"
			},
			slide2: {
				title: "添加场景详情",
				text: "填写场景详情表格"
			},
			slide3: {
				title: "添加标题和描述",
				text: "添加场景标题和描述"
			},
			slide4: {
				title: "添加说明视频",
				text: "为学员录制说明视频，说明场景练习目的。"
			},
			slide5: {
				title: "添加步骤",
				text: "添加步骤，应到学员进行应答"
			},
			slide6: {
				title: "添加评估标准",
				text: "这些标准将用于评估场景。您可以使用现有标准或创建自己的标准" // todo self translation
			},
			slide7: {
				title: "添加学员",
				text: "添加学员至练习场景，既可添加个人学员，也可添加预定义的学员团队"
			},
			slide8: {
				title: "场景已准备就绪",
				text: "大功告成。场景已准备就绪，只需点击\"发送\"，即可发送至学员。"
			},
		}
	}
};
