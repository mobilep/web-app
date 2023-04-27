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
	name: '日本語',
	common: {
		edit: '編集',
		create: 'クリエイト',
		addVideo: '動画の追加',
		changeVideo: '変更',
		browse: '閲覧',
		cancel: 'キャンセル',
		done: '完了',
		save: '保存',
		confirmPasswordError: 'パスワードが一致しない',
		delete: '削除',
		emailError: '無効なEメールです',
		evaluate: '評価する',
		logOutButton: 'サインアウト',
		logOutMessage: '本当にサインアウトしますか？',
		mobilePractice: 'モバイルプラクティス',
		new: '新規',
		passwordError: 'パスワードは8文字以上を設定してください',
		send: '送信',
		tryAgain: 'もう一度試して下さい',
		today: '今日',
		yesterday: '昨日',
		openAdminPanel: '管理画面を開く',
		newMessage: {
			singular: '新規メッセージ',
			plural: '新着メッセージ',
		},
		continue: '引き続き',
	},
	home: {
		title: 'ホームページ', //todo self translation
		connection: {
			titleError: 'インターネットに接続されていません。',
			titleSuccess: '接続が回復しました',
			message: 'ネットワークを確認してください。',
			button: '引き続き',
		},
		landscape: {
			title: 'デバイスを回転させてください',
			message: '携帯電話での練習は、縦向きの方が効果的です。',
		},
	},
	signIn: {
		description: `続行するにはサインインしてください`, // todo self translation
		email: 'Eメール',
		forgotPassword: 'パスワードが必要ですか？',
		password: 'パスワード',
		signIn: 'サインイン',
		signInError: 'Eメールまたはパスワードが無効です',
		title: 'いらっしゃいませ。',
	},
	forgotPassword: {
		description: `メールアドレスを入力すると、パスワード再設定用のリンクが送られます`,
		email: 'Eメール',
		reset: '送信',
		justRemember: 'サインインに戻る',
		title: 'パスワードをお忘れですか？',
		success: {
			title: '成功しました！',
			message: '問い合わせありがとうございます。\n 確認メールが送信されます。',
			cta: '戻る',
		},
		error: {
			title: 'おっと！', //todo self translation
			message: 'Eメールの送信ができないようです',
			cta: 'もう一度試して下さい',
		},
	},
	resetPassword: {
		confirm: '確認',
		confirmPassword: 'パスワードの確認',
		description: 'パスワードは8文字以上を設定してください。以前のパスワードは使用できません',
		newPassword: 'v',
		title: 'いらっしゃいませ。',
		success: {
			title: '成功しました！',
			message: '新しいパスワードを作成しました。',
			cta: 'サインイン',
		},
		error: {
			title: 'おっと！', //todo self translation
			message: 'パスワードの作成ができないようです',
			cta: 'もう一度試して下さい',
			alreadyUsed: 'パスワードはすでに使用されています。別のパスワードを選択してください',
		},
	},
	createPassword: {
		confirm: '確認',
		confirmPassword: 'パスワードの確認',
		description: `パスワードを作成しましょう`,
		newPassword: '新しいパスワード',
		title: 'いらっしゃいませ。',
		success: {
			title: '成功しました！',
			message: 'パスワードが作成されました',
			cta: 'ホームへ戻る',
		},
		error: {
			title: 'おっと！', //todo self translation
			message: 'パスワードの作成ができないようです',
			cta: 'もう一度試して下さい',
		},
	},
	inbox: {
		deletedUser: '削除されたユーザー',
		newChat: '新しいチャット',
		editChat: 'チャットを編集',
		everyOne: '全員',
		groups: 'チーム',
		inbox: 'インボックス',
		inboxMessages: 'メッセージ',
		chatPlaceholder: {
			video: {
				incoming: '{name}がビデオを送信しました。',
				outcoming: 'あなたはにビデオを送りました{name}',
			},
			audio: {
				incoming: '{name}から録音物が届きました',
				outcoming: '記録した音声を送信しました。送信先：{name}',
			},
			image: {
				incoming: '{name}が画像を送信しました。',
				outcoming: '画像を送信しました。送信先：{name}',
			},
			file: {
				incoming: '{name}からファイルが送信されました',
				outcoming: 'ファイルを送信しました。送信先：{name}',
			}
		},
		groupChatPlaceholder: {
			video: {
				incoming: '{name}はビデオを送信しました',
				outcoming: 'あなたはビデオを送りました',
			},
			audio: {
				incoming: '{name}は記録した音声を送信しました',
				outcoming: 'あなたは記録した音声を送信しました',
			},
			image: {
				incoming: '{name}は画像を送信しました',
				outcoming: '画像を送信しました',
			},
			file: {
				incoming: '{name}はファイルを送信しました',
				outcoming: 'ファイルを送信しました',
			}
		},
		emptyState: 'まだメッセージはありません。新規作成してメッセージを開始してください。',
		noResults: '残念ながら、検索結果がありません。他の方法をお試しください。',
		emptyChatUsers: 'チャットの相手がいません',
		emptyChatArea: 'チャットを選択するか、新しいチャットを作成する',
		emptyChatAreaNoMessages: 'まだメッセージがありません',
		emptyChatAreaNoResult: '新しいチャットを作成してメッセージを開始してください',
		deleteMessageConfirmation: 'このメッセージを削除してもよろしいですか？',
		saveAsBestPractice: 'ベストプラクティスの例として保存',
		justSent: '今だけ',
		viewDetails: '詳細を見る',
		viewScenarioDetails: 'シナリオの詳細を見る',
		evaluate: '評価',
		sendMessage: 'メッセージを送信中',
		attachPhoto: '写真を添付する',
		attachVideo: 'ビデオの添付',
		you: 'あなた',
		searchLabel: '検索',
		scenarioCriterias: [
			{
				id: '590f7d5907e94106bdf393a5',
				title: 'この練習は楽しかったですか？',
			},
			{
				id: '591f7d5907e94106bdf393a5',
				title: 'あなたの仕事に関連していますか？',
			},
			{
				id: '592f7d5907e94106bdf393a5',
				title: '他の人に勧めたいと思いますか？',
			},
		],
		createBestPractice: 'ベストプラクティスを作成する',
		giveBestPracticeName: 'ベストプラクティスに名前を付ける',
		bestPracticeError: 'このビデオはすでにベストプラクティスの例として保存されています。',
		goBack: '戻る',
		inboxError: 'おっと！このチャットはもうありません',
		deleteChatConfirmation: 'このチャットを削除してもよろしいですか？',
		copy: 'メディアをコピーする'
	},
	reminder: {
		sendReminder: 'リマインダーを送信する',
		sendReminderTitle: 'プラクティスリマインダーを送信する',
		reminderDefaultMessage: 'このシナリオの進み具合はどうですか？これは間もなく終了する予定です。質問があればメッセージをください。',
		reminderSendSuccess: 'リマインダーは送信済みです',
		reminderNeeded: 'プラクティスリマインダーが必要です！',
		runningOutOfTime: '人々がシナリオを完了するまでの時間が足りません。',
		sent: '送信'
	},
	scenarios: {
		stepExample: '例：電話の連絡先を調査する。',
		bestPracticeExample: '例：オープニングが素晴らしいビデオ。',
		evaluationCriteriaExample: '例：人々の注目を集める。',
		numberOfFinished: '{finished}中{total}終了',
		practiceGroups: {
			waitingOnFeedback: 'フィードバック待ち',
			inProgress: '進行中',
			completed: '完了',
			notStarted: '未開始'
		},
		practice: '実施内容',
		finished: '終了',
		unread: '未読',
		all: 'すべて',
		groupChat: 'グループチャット',
		coach: 'コーチ',
		learner: '学習者',
		instructions: 'インストラクション',
		emptyState: 'シナリオを選択する',
		myScenarios: 'シナリオ',
		newScenario: '新しいシナリオ',
		newScenarioInstructions: '新しいシナリオの説明',
		scenario: 'シナリオ', //todo self translation
		people: '人',
		requiredFields: '必須項目です。シナリオ名、シナリオの説明、ステップ、基準、人物。',
		requiredSteps: 'シナリオを保存するために、いくつかのステップを追加してください。',
		requiredCriteria: 'シナリオを保存するために、いくつかの基準を追加してください。',
		requiredPeople: 'シナリオを保存するために、人々を追加してください',
		requiredName: 'シナリオを保存するために、シナリオの名前を付けてください',
		requiredDescription: 'シナリオを保存するために、シナリオの説明を入力してください',
		noScenarios: 'まだシナリオはありません',
		videoPlaceholder: '{name}がビデオを送信しました。',
		imagePlaceholder: 'name} が画像を送信しました。',
		currentText: '現在',
		completedText: '完成',
		draftText: 'ドラフト',
		addSteps: '手順の追加',
		addCriterias: 'いくつかの新しい基準を追加する...',
		addBestPracticeExample: 'ベストプラクティスの例を追加する',
		steps: 'ステップ',
		evaluationCriteria: '評価基準',
		bestPractice: 'ベストプラクティス',
		addBestPractice: '別のベストプラクティスの追加',
		deleteBestPractice: 'ベストプラクティスの削除',
		bestPracticeCountSeparator: '除外',
		criteriaSection: {
			selectCriteria: '評価基準の追加',
			addCriteria: '(評価基準の追加)',
			notFound: '基準はすでに追加されています',
		},
		peopleSection: {
			addPerson: '人を追加する',
			peoplePracticing: 'これを実践している人',
			groups: 'チーム',
			people: '人',
			notFound: '該当者なし',
		},
		headerSection: {
			[EDIT_MODE]: {
				mobileHeader: 'シナリオの編集',
				buttonPrimaryText: '送信',
				buttonSecondaryText: 'キャンセル',
				namePlaceholder: 'シナリオに名前をつける...',
				descriptionPlaceholder: 'シナリオを説明する...',
			},
			[VIEW_MODE]: {
				mobileHeader: '',
				buttonPrimaryText: '編集',
				buttonSecondaryText: '削除',
			},
			[CREATE_MODE]: {
				mobileHeader: '新しいシナリオ',
				buttonPrimaryText: '送信',
				buttonSecondaryText: 'キャンセル',
				namePlaceholder: 'シナリオに名前をつける...',
				descriptionPlaceholder: 'シナリオを説明する...',
			},
			[PRACTICE_MODE]: {
				buttonPrimaryText: '実施内容',
				buttonSecondaryText: '',
			},
		},
		validation: {
			buttonLabel: 'もう一度試して下さい',
			title: '必須項目を入力してください',
			fields: {
				[VIDEO_ID]: {
					name: 'シナリオビデオ',
					errorMessage: 'このフィールドは必須です',
				},
				[BEST_PRACTICE_VIDEOS]: {
					name: 'ベストプラクティスビデオ',
					errorMessage: 'このフィールドは必須です',
				},
				[SCENARIO_NAME]: {
					name: 'シナリオ名',
					errorMessage: 'このフィールドは必須です',
				},
				[SCENARIO_DESCRIPTION]: {
					name: 'シナリオの説明',
					errorMessage: 'このフィールドは必須です',
				},
				[STEPS]: {
					name: 'ステップ',
					errorMessage: 'このフィールドは必須です',
				},
				[CRITERIAS]: {
					name: '基準',
					errorMessage: 'このフィールドは必須です',
				},
				[SELECTED_USERS]: {
					name: '人',
				},
			},
			deleteUnsaved: '保存されていない変更を削除してもよろしいですか？',
			saveDraftMessage: 'あなたのシナリオをドラフトとして保存できます',
			deleteChangesButton: '変更を削除',
		},
		saveDraftButton: 'ドラフトを保存',
		deleteScenario: '本当にシナリオを削除してもいいですか？',
		cancel: 'キャンセル',
		delete: '削除',
		emptyGroups: 'チームの作成と管理は、「チーム」タブで行います。',
		bestPracticeError: '空であってはいけません',
		bestPracticePlaceholder: 'ベストプラクティスの名前をつける',
		saved: '保存',
		dueDate: '期限',
		due: '期限を過ぎています',
		fromNow: '今から',
		left: '残り',
		pastDue: '期限を過ぎています'
	},
	groupChat: {
		label: 'グループチャット',
		viewParticipants: '参加者を見る',
		groupChatName: 'グループチャット名'
	},
	teams: {
		teams: 'チーム',
		buttonDelete: '削除',
		buttonEdit: '編集',
		buttonCancel: 'キャンセル',
		buttonSave: '保存',
		placeholder: 'チーム名を入力してください...',
		group: 'チーム',
		newTeam: '新規チーム',
		editTeam: 'チームの編集',
		deleteTeamConfirmation: 'チームを削除してよろしいですか？',
		emptyAreaText: 'チームを選択するか、新しいチームを作成してください。',
		[EDIT_MODE]: {
			buttonPrimaryText: '保存',
			buttonSecondaryText: 'キャンセル',
			placeholder: 'チーム名を入力してください...',
		},
		[VIEW_MODE]: {
			buttonPrimaryText: '編集',
			buttonSecondaryText: '削除',
		},
		[CREATE_MODE]: {
			buttonPrimaryText: '保存',
			buttonSecondaryText: 'キャンセル',
			placeholder: 'チーム名を入力してください...',
		},
		wrongName: '名前が違う',
		teamExists: 'この名前のチームはすでに存在しています',
		tryAgain: 'もう一度試して下さい',
		empty: 'まだチームを持っていません',
		noUsers: 'ユーザーがいない',
		noUsersMessage: 'チームには最低1人のユーザーが必要です',
		invalidName: '無効な名前',
		invalidNameMessage: 'このチーム名は無効です',
	},
	primaryNav: {
		inbox: 'メッセージ',
		scenarious: 'シナリオ一覧',
		team: 'チーム紹介',
		profile: 'プロフィール',
		settings: '設定',
		logOut: 'サインアウト',
	},
	dragAndDrop: {
		add: '追加',
		change: '変更',
		dropHeading: 'ファイルをここにドロップ',
		selectFile: 'ファイルをここにドラッグ＆ドロップするか',
		selectImageFile: 'ファイルをここにドラッグ＆ドロップするか',
		errorMessage: 'おっと！何かがうまくいかなかったようです！',
		fileCount: '追加できるファイルは1つのみです。',
		formats: 'フォーマット：',
		maxFileSize: 'ファイルサイズの上限',
		multipleFiles: 'おっと！追加できるファイルは1つのみです',
		wrongSize: 'おっと！ファイルサイズが大きすぎるようです',
		wrongFormat: 'おっと！ファイルフォーマットが正しくないようです',
		serverError: 'おっと！サーバーエラーが発生したようです',
		selectAnotherFile: '他のファイルを選択するにはここにファイルをドラッグしてドロップ',
		selectAnotherFileMobile: '他のファイルを選択',
		uploadPhoto: '写真をアップロード',
		uploadVideo: 'ビデオをアップロード',
		bestPracticeNote: 'ベストプラクティスである理由を簡単に入力してください',
		errorText: '空白にできません',
		permissionErrorText: 'このファイルは許可されていません。許可状況をご確認の上、再度お試し下さい。',
		bestPractice: 'ベストプラクティスに名前を付ける',
	},
	evaluateDialog: {
		paragraph: '1- まったくない、 5- 完全にそうである',
		userEvaluationCriterias: {
			experience: '評価、レート、プラクティスの体験',
			work: '評価、レート、仕事との関連',
			recommend: '評価、レート、他の人に勧める',
		},
		titleCoach: '{fullName}は{scenario}ではどうでしたか？',
		titleUser: 'シナリオの感想を教えてください。',
		coachViewOfLearnerEvaluat: '{scenario}シナリオの評価',
		learnerViewOfEvaluat: '{scenario}ではどうでしたか？',
		criteriaExperience: '{You}はこのプラクティスはお楽しみいただけましたか？',
		criteriaWork: '{Your}の仕事に関連していますか？',
		criteriaRecommend: '{You}は他の人に勧めたいですか？',
	},
	settings: {
		settings: '設定',
		help: {
			title: 'ヘルプ/フィードバック',
			description: 'アプリに問題が発生した場合や感想をお聞かせいただける場合は、Eメールでご連絡ください',
		},
		resources: {
			title: 'リソース',
			description: 'チュートリアルおよびFAQについては、リソースをご覧ください。',
			descriptionTutorials: 'チュートリアルを確認してください:'
		},
		deleteAccount: {
			title: 'マイアカウントを削除',
			description: 'アカウントの削除を希望される場合は、こちらをクリックしてください。',
			button: 'アカウントを削除',
			dialog: 'アカウントを削除してもよろしいですか？',
		},
		language: {
			title: '言語を変更する',
			languages: {
				en: '英語 (English)',
				fr: 'フランス語 (Français)',
				ru: 'ロシア語 (Русский)',
				it: 'イタリア語 (Italiano)',
				es: 'スペイン語 (Española)',
				de: 'ドイツ語 (Deutsch)',
				ja: '日本語',
				ko: '韓国語 (한국어)',
				ch: '中国語 (中文)',
				pt: 'ポルトガル語 (Português)',
			},
		},
	},
	profile: {
		editText: '編集',
		profile: 'プロフィール',
		settings: '設定',
		signout: 'サインアウト',
	},
	reports: {
		coach: 'コーチ',
		learner: '学習者',
		scorePerScenario: 'シナリオごとのスコア',
		scorePerCriteria: '基準ごとのスコア',
		totalScoreDetails: '合計スコアの詳細',
		scenarioScoreDetails: 'シナリオスコアの詳細',
		responsivenessDetails: '回答期間の詳細',
		teamMemberDetails: 'チームメンバーの詳細',
		responsivenessPerScenario: 'シナリオごとの回答期間',
		teamMembersRaking: 'チームメンバーランキング',
		filters: {
			all: 'すべて',
			period: '期間',
			lastMonth: '先月',
			last3Months: '過去3ヵ月',
			lastYear: '昨年',
		},
		dataTitles: {
			totalScore: '合計スコア',
			responsiveness: '回答期間',
			completed: '完了',
			current: '現在',
			ranking: 'ランキング'
		},
		dataDescription: {
			totalScore: '合計スコアは、評価基準に基づく平均値です',
			responsiveness: '回答期間は、学習者が回答を送信するまでの日数です',
			completed: '完了したシナリオ数',
			current: '現在のシナリオ数',
			ranking: 'ランキングは、社内の他のチームと比較したときのあなたのチームの順位です',
		},
		dataLabels: {
			score: 'スコア',
			responsiveness: '回答期間',
			team: 'チーム',
			me: 'わたし',
			user: 'ユーザー',
			company: '会社'
		}
	},
	recording: {
		browseVideo: 'ブラウズ',
		recordVideo: 'ビデオの録画',
		uploadExisting: 'または、既存の動画ファイルをアップロードする',
		replay: 'リプレイ',
		recordAgain: 'もう一度録画する',
		send: '送信',
		next: '次へ',
		retry: '再試行',
		selectAnOption: '選択してください',
		constraintsError: {
			title: 'デバイスの問題',
			message: '現在接続されているカメラが最低解像度640x480に対応しているか確認してください。',
		},
		permissionError: {
			title: 'アクセスできない',
			message: 'カメラ／マイクへのアクセスがブラウザで許可されていることを確認してください。',
			messageAudio: 'ブラウザでマイクへのアクセスが許可されていることを確認してください。',
		},
		deviceBusyError: {
			title: 'デバイスがビジー状態',
			message: 'カメラやマイクを使用している他のプログラムがないことを確認してください。',
			messageAudio: 'マイクを使用する他のプログラムがないことを確認してください。',
		},
		notFoundError: {
			title: '入力が見つかりません',
			message: 'カメラとマイクが正しく接続されていることを確認してください。',
			messageAudio: 'マイクが正しく接続されていることを確認してください。',
		},
		unknownError: {
			title: '不明なエラー',
			message: 'おっと！何かがうまくいかなかったようです！', //todo self translation
		},
	},
	termsAndConditions: {
		error: 'このフィールドは必須です',
		iAgree: '規約に',
		theTerms: '同意。',
		iRead: 'プライバシーポリシーを読み同意します',
		information: `<p style="text-align: center;"><strong>ご利用にあたっての注意事項</strong></p>
		<ol style="text-align: justify;">
		<li><strong> アプリケーションへのアクセス</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">私は以下のことを理解しています。</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;モバイルプラクティス（以下、「本アプリ」といいます）は、モバイルプラクティスまたはその権利者であるパートナーによって、私に一定のテーマに関するトレーニングを提供するために提供されます。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;M-Learning」プラットフォームのURLを誰か（社内外を問わず）に送信したり、共有したりしてはいけません。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;MOBILE PRACTICEは、独自の判断により、予告なく本アプリの全部または一部、コンテンツまたは本アプリで提供されるサービスへのアクセスを停止または終了する権利を有します。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;本アプリは、他のインターネット上の情報源へのリンクを提供する場合があります。本アプリは、他のインターネット上の情報源へのリンクを提供することがありますが、外部情報源は当社が管理するものではないため、当社は外部情報源のコンテンツ、広告、製品、サービスなどについて責任を負いません。</span></li>
		</ul>
		<ol style="text-align: justify;" start="2">
		<li><strong> ユーザーの行動</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">本アプリの各利用者は、以下のことを保証し、約束します。</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;本アプリを合法的に使用すること（商業目的や広告目的を除く）。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;本アプリの情報やコンテンツを、同じアクセス権を持たない人に伝えたり、漏らしたりしないこと。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;本アプリケーション、本アプリケーションに接続されているサーバーやネットワークの運営を妨害したり、その要件、手順、規則、規制を侵害したりしないこと。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;帯域幅やサーバーに負荷をかけたり、スパムを送信したり、アプリケーションの受信箱に負荷をかけたりすることで、アプリケーションの運営に悪影響を与えないこと。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;意図されていない情報を閲覧したり、アクセスを許可されていないサーバーやアカウントにアクセスしたりしないこと。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;本アプリケーションのコードの一部を変更して、本アプリケーションへの不正なアクセスを行わないこと</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;携帯電話会社の書面による事前承認なしに、本アプリケーションの脆弱性を評価、指摘、テストしたり、本アプリケーションのセキュリティや認証手段を回避したりしないこと。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;いかなる手段によっても、本アプリケーションにダウンロードしたり、未承諾または未承認の広告または宣伝物を送信、投稿または利用可能にしないこと。</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;本アプリのコンテンツを電子メールで送信したり、その他の方法で送信したりしないこと。</span></li>
		</ul>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICEは、お客様が義務を果たさない場合、必要に応じて、いつでもお客様の本アプリへのアクセスを停止することができます。</span></p>
		<ol style="text-align: justify;" start="3">
		<li><strong> 本アプリのコンテンツの保護</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; 本アプリおよび本アプリを構成する各パーツ（テキスト、階層、ソフトウェア、アニメーション、写真、イラスト、画像、図表、サウンドトラック、ロゴ、ブランド、図面、モデル、アンケート、クイズなど）、および本アプリの動作に必要なソフトウェア部品やデータベース（以下「コンテンツ」といいます）には、知的財産権法その他の関係法令で保護された秘密情報やデータが含まれている場合があります。したがって、本アプリに別段の記載がない限り、コンテンツの知的財産権は、モバイル・プラクティクスおよび／またはその権利者であるパートナー企業に独占的に帰属しており、ユーザーに対して、本アプリを閲覧すること以外のいかなる権利も許諾するものではありません。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; 本コンテンツの全部または一部を複製することは、お客様への情報提供および教育を目的とする場合に限り認められており、その他の目的のために本コンテンツの複製物を使用することは、その方法や形態を問わず、明示的に禁止されています。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; &nbsp;また、コンテンツやアプリケーションに関連する権利の複製、改変、派生物の作成、アセンブル、逆コンパイル、販売、サブライセンス、譲渡はいかなる方法でも禁止されています。</span></p>
		<ol style="text-align: justify;" start="4">
		<li><strong> 責任</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">当社は、本アプリで提供される情報が正確かつ最新のものとなるよう努めています。しかしながら、本アプリでお客様に提供される情報の正確性や網羅性を保証するものではありません。</span></p>
		<ol style="text-align: justify;" start="5">
		<li><strong> 個人情報について</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; MOBILE PRACTICEおよびその権利者であるパートナーは、本アプリケーションのユーザーの個人データを保護し、お客様が当社に提供する個人情報の機密性に関するお客様の懸念を尊重します。お客様は、お客様の個人情報およびデータを当社に提供することにより、以下に定める条件での使用および伝達に同意するものとします。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">本アプリを通じて、モバイル・プラクティスおよびその権利者であるパートナー企業は、本アプリへのアクセスを提供するためなどに、以下の目的に限って、個人データ（氏名、姓、ログイン名、学習者の電子メールアドレス、使用した部門時間、接続数、ポイント数など）を収集することがあります。</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;トレーニングの管理</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;アンケートやクイズの回答に関する統計・調査・分析</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;満足度調査を含む、本アプリケーションの改善</span></li>
		</ul>
		<p style="text-align: justify;">&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">お客様は、本アプリケーションにアクセスし、アカウントを作成し、「同意する」アイコンをクリックすることにより、上記の条件および条項を読み、取消不能の形で同意したものとみなされます。したがって、お客様は、会社であるMOBILE PRACTICEが本規約に従ってお客様の個人データを処理することに無条件で同意するものとします。</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">本アプリを利用するためにお客様が提供する個人情報は、1978年1月6日の情報技術と自由に関する法律第78-17号の規定に従います。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">お客様は、いつでもお客様に関する個人情報にアクセスし、訂正し、削除する権利を有しており、MOBILE PRACTICE - 224, Rue Saint-Denis; 75002 Parisに書面を送付するか、contact@Mobile Practice.comに連絡することにより、当該データの処理を停止することができます。</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">データは、収集された目的に必要な限り保持され、いかなる場合でも、本アプリケーションの使用に対するアクセス権の終了日から6ヶ月後に破棄されます。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">お客様のデータにアクセスできるのは、トレーニングの管理を担当するモバイル・プラクティクスが正式に承認した受取人のみです。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICEは、収集および処理された個人データの機密性を維持し、それらが変形、損傷、破壊されたり、権限のない第三者がアクセスしたりすることを防ぐために、必要なあらゆる予防措置を講じるよう努めています。</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">しかしながら、インターネットの運用に関連するすべてのリスクを管理することはできず、本アプリの利用者に対して、その使用および運用に内在する潜在的なリスクの存在を警告します。</span></p>`,
	},
	mediaUpload: {
		wrongSize: 'おっと！？ファイルのサイズが大きすぎるようです。',
		wrongFormat: 'おっと! ファイルの形式が間違っているようです',
		tryAgain: 'もう一度試して下さい',
		uploadFailed: 'おっと！アップロードに失敗しました。',
		maxFileSize: '最大ファイルサイズは',
		formats: 'フォーマットです。:',
		permissionErrorText: 'このファイルに対する権限がありません。あなたの権限を確認して、もう一度試してください。',
	},
	onboarding: {
		tutorials: {
			welcome: "ウェルカムチュートリアル",
			learner: "学習者用チュートリアル",
			coach: "コーチ用チュートリアル",
			scenarioCreation: "シナリオ制作チュートリアル"
		},
		startExploring: "開始する",
		close: "閉じる",
		welcome: {
			slide1: {
				title: "モバイルプラクティスへようこそ",
				text: "チームのプラクティスのため、コーチのため、そしてベストプラクティスをシェアするためのモバイルビデオやメッセージテクノロジー"
			},
			slide2: {
				title: "シナリオ一覧",
				text: "シナリオタブで、学習者として学習、またはコーチとして指導するためのシナリオのリストを確認することができます"
			},
			slide3: {
				title: "メッセージ",
				text: "メッセージタブで、1人以上の参加者とのメッセージグループを作成できます。"
			},
			slide4: {
				title: "チーム紹介",
				text: "チームタブで、あなたのユーザーグループを管理できます。"
			},
			slide5: {
				title: "プロフィール",
				text: "プロフィールタブで、個人のアバターをアップロードしたり、統計を表示したり、設定ページにアクセスしたりできます。\n"
			},
			slide6: {
				title: "設定",
				text: "設定タブで、言語の変更、オンボード画面表示、ヘルプへのアクセスができます。",
			},
			slide7: {
				title: "次の行き先",
			},
		},
		learner: {
			slide1: {
				title: "シナリオ インストラクション",
				text: "関連するプラクティスシナリオを選択し、開いてください。「インストラクション」をクリックしてください"
			},
			slide2: {
				title: "プラクティスを始める",
				text: "\"プラクティス\"をクリックしてシナリオを選択してください"
			},
			slide3: {
				title: "プラクティスチャット",
				text: "ここは、コーチとのプライベートなプラクティスチャットです。質問をして、プラクティスビデオの提出準備をしてください。"
			},
			slide4: {
				title: "ビデオを送信する",
				text: "あなたのビデオを記録してレビューを行い、コーチに提出してください。フィードバックを受信すると通知が届きます。"
			},
			slide5: {
				title: "シナリオを評価する",
				text: "コーチから評価フィードバックが届くと、あなたにはシナリオを評価するオプションが与えられます。"
			},
		},
		coach: {
			slide1: {
				title: "コーチパネル",
				text: "関連するプラクティスシナリオを選択し、開いてください。「コーチ」をクリックして、すべての参加者のステータスを表示します。"
			},
			slide2: {
				title: "リマインダーを送信する",
				text: "コーチパネルから、あなたは参加者にビデオの回答を提出するよう連絡することができます。"
			},
			slide3: {
				title: "プラクティスチャット",
				text: "コーチパネルから、個々の学習者とのプラクティスチャットを開くことができます。ここで、ビデオやテキストで回答したり、ドキュメントを追加することができます。"
			},
			slide4: {
				title: "学習者からのベストプラクティスを追加する",
				text: "素晴らしいビデオの回答はグループで共有してください。チャットで学習者の許可を得てから、ビデオをクリックし「ベストプラクティス」として保存します。忘れずにタイトルを追加してください。"
			},
			slide5: {
				title: "評価する",
				text: "シナリオを作成するときに、あなたが定めた基準に基づいて、学習者のパフォーマンスを評価します。この操作は、学習者にとってプラクティスの締めくくりとなります。"
			},
		},
		scenarioCreation: {
			slide1: {
				title: "シナリオを制作する",
				text: "シナリオタプをクリックし、シナリオ製作 次を開いてください"
			},
			slide2: {
				title: "シナリオの詳細を追加する",
				text: "シナリオの詳細をフォームに入力してください"
			},
			slide3: {
				title: "タイトルと説明を追加する",
				text: "シナリオのタイトルと説明を追加してください"
			},
			slide4: {
				title: "説明ビデオを追加する",
				text: "学習者へプラクティスシナリオの目的を説明する説明用ビデオを記録してください。"
			},
			slide5: {
				title: "ステップを追加する",
				text: "参加者の返信を誘導するためのステップを追加してください"
			},
			slide6: {
				title: "評価の基準を追加する",
				text: "シナリオを評価するための基準です。既存の基準を使用することも、独自の基準を作ることも可能です。"
			},
			slide7: {
				title: "学習者を追加する",
				text: "シナリオのプラクティスをする学習者を追加してください。個人でもチームでも追加可能です。"
			},
			slide8: {
				title: "シナリオの準備ができました",
				text: "これで、参加者にシナリオを送信する準備が整いました。あとは、\"送信\"をクリックして下さい。"
			},
		}
	}
};
