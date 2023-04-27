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
	name: 'English',
	common: {
		edit: 'Edit',
		create: 'Create',
		addVideo: 'ADD VIDEO',
		changeVideo: 'CHANGE',
		browse: 'Browse',
		cancel: 'Cancel',
		done: 'Done',
		save: 'Save',
		confirmPasswordError: 'Password does not match',
		delete: 'Delete',
		emailError: 'Email is not valid',
		evaluate: 'Evaluate',
		logOutButton: 'Sign out',
		logOutMessage: 'Are you sure you want to sign out?',
		mobilePractice: 'Mobile Practice',
		new: 'New',
		passwordError: 'Password must contain at least 8 characters',
		send: 'Send',
		tryAgain: 'Try again',
		today: 'Today',
		yesterday: 'Yesterday',
		openAdminPanel: 'Open admin panel',
		newMessage: {
			singular: 'new message',
			plural: 'new messages',
		},
		continue: 'Continue',
	},
	home: {
		title: 'Home page',
		connection: {
			titleError: 'There is no Internet connection',
			titleSuccess: 'Your connection has been restored',
			message: 'Please check your network',
			button: 'Continue',
		},
		landscape: {
			title: 'Please rotate your device',
			message: 'Mobile Practice works better in portrait mode',
		},
	},
	signIn: {
		description: `Please sign in to continue`,
		email: 'Email',
		forgotPassword: 'Need Password?',
		password: 'Password',
		signIn: 'Sign in',
		signInError: 'The email or password combination is not valid',
		title: 'Hello!',
	},
	forgotPassword: {
		description: `Enter your email and we will send you a link to reset your password`,
		email: 'Your email',
		reset: 'Send',
		justRemember: 'Back to Sign In',
		title: 'Forgot your password?',
		success: {
			title: 'Success!',
			message: 'Thank you for your request.\nWe are sending a confirmation email.',
			cta: 'Go back',
		},
		error: {
			title: 'Ooops!',
			message: 'Looks like your email can not be send',
			cta: 'Try again',
		},
	},
	resetPassword: {
		confirm: 'Confirm',
		confirmPassword: 'Confirm password',
		description: 'Password must be at least 8 characters. Do not use your previous password.',
		newPassword: 'New password',
		title: 'Hello!',
		success: {
			title: 'Success!',
			message: 'New password was created',
			cta: 'Sign in',
		},
		error: {
			title: 'Ooops!',
			message: 'Looks like your password cannot be created',
			cta: 'Try again',
			alreadyUsed: 'Password has been already used. Choose another',
		},
	},
	createPassword: {
		confirm: 'Confirm',
		confirmPassword: 'Confirm password',
		description: `Let's create a password!`,
		newPassword: 'New password',
		title: 'Hello',
		success: {
			title: 'Success!',
			message: 'The password was created',
			cta: 'Go home',
		},
		error: {
			title: 'Ooops!',
			message: 'Looks like your password cannot be created',
			cta: 'Try again',
		},
	},
	inbox: {
		deletedUser: 'Deleted User',
		newChat: 'New chat',
		editChat: 'Edit chat',
		everyOne: 'Everyone',
		groups: 'Teams',
		inbox: 'Inbox',
		inboxMessages: 'Messages',
		chatPlaceholder: {
			video: {
				incoming: '{name} sent you a video',
				outcoming: 'You sent a video to {name}',
			},
			audio: {
				incoming: '{name} sent you an audio recording',
				outcoming: 'You sent an audio recording to {name}',
			},
			image: {
				incoming: '{name} sent you an image',
				outcoming: 'You sent an image to {name}',
			},
			file: {
				incoming: '{name} sent you a file',
				outcoming: 'You sent a file to {name}',
			}
		},
		groupChatPlaceholder: {
			video: {
				incoming: '{name} sent a video',
				outcoming: 'You sent a video',
			},
			audio: {
				incoming: '{name} sent an audio recording',
				outcoming: 'You sent an audio recording',
			},
			image: {
				incoming: '{name} sent an image',
				outcoming: 'You sent an image',
			},
			file: {
				incoming: '{name} sent a file',
				outcoming: 'You sent a file',
			}
		},
		emptyState: 'There are no messages yet. Create new to start messaging.',
		noResults: 'Unfortunately, no search result. Please try something else.',
		emptyChatUsers: 'No users to create chat with',
		emptyChatArea: 'Select a chat or create new one',
		emptyChatAreaNoMessages: 'No messages yet',
		emptyChatAreaNoResult: 'Please create new chat to start messaging ',
		deleteMessageConfirmation: 'Are you sure you want to delete this message?',
		saveAsBestPractice: 'Save as best practice example',
		justSent: 'Just now',
		viewDetails: 'View details',
		viewScenarioDetails: 'VIEW SCENARIO DETAILS',
		evaluate: 'Evaluate',
		sendMessage: 'Send message...',
		attachPhoto: 'Attach photo',
		attachVideo: 'Attach video',
		you: 'you',
		searchLabel: 'Search',
		scenarioCriterias: [
			{
				id: '590f7d5907e94106bdf393a5',
				title: 'Did you enjoy this practice?',
			},
			{
				id: '591f7d5907e94106bdf393a5',
				title: 'Is it relevant to your work?',
			},
			{
				id: '592f7d5907e94106bdf393a5',
				title: 'Would you recommend it to others?',
			},
		],
		createBestPractice: 'Create a best practice',
		giveBestPracticeName: 'Give the best practice a name...',
		bestPracticeError: 'This video was already saved as best practice example',
		goBack: 'Go back',
		inboxError: 'Ooops! The current chat doesn\'t exist anymore',
		deleteChatConfirmation: 'Are you sure you want to delete this chat?',
		copy: 'Copy media'
	},
	reminder: {
		sendReminder: 'Send reminder',
		sendReminderTitle: 'Send a practice reminder',
		reminderDefaultMessage: 'Hey, how are you getting on with this scenario? We’re looking to finish this one soon. Drop me a message with any questions.',
		reminderSendSuccess: 'The reminder has been sent',
		reminderNeeded: 'Practice reminder needed!',
		runningOutOfTime: 'People are running out of time to complete the scenario.',
		sent: 'Sent'
	},
	scenarios: {
		stepExample: 'Example: research a contact to call.',
		bestPracticeExample: 'Example: video with a great opening.',
		evaluationCriteriaExample: 'Example: person’s attention grabbed.',
		numberOfFinished: '{finished} of {total} finished',
		practiceGroups: {
			waitingOnFeedback: 'Waiting for feedback',
			inProgress: 'In progress',
			completed: 'Completed',
      notStarted: 'Not started'
		},
		practice: 'Practice',
		finished: 'Finished',
		unread: 'Unread',
		all: 'All',
		groupChat: 'Group chat',
		coach: 'Coach',
		learner: 'Learner',
		instructions: 'Instructions',
		emptyState: 'Select scenario',
		myScenarios: 'Scenarios',
		newScenario: 'New scenario',
		newScenarioInstructions: 'New scenario instructions',
		scenario: 'Scenario',
		people: 'people',
		requiredFields: 'Required fields: Scenario name, Scenario description, Steps, Criteria, People.',
		requiredSteps: 'Please add some steps to save scenario',
		requiredCriteria: 'Please add some criteria to save scenario',
		requiredPeople: 'Please add people to save scenario',
		requiredName: 'Please give the scenario a name to save it',
		requiredDescription: 'Please give the scenario description to save it',
		noScenarios: 'No scenarios yet',
		videoPlaceholder: '{name} sent you a video.',
		imagePlaceholder: '{name} sent you a image.',
		currentText: 'Current',
		completedText: 'Completed',
		draftText: 'Draft',
		addSteps: 'Add step to follow',
		addCriterias: 'Add a few new criteria...',
		addBestPracticeExample: 'Add best practice example',
		steps: 'Steps',
		evaluationCriteria: 'Evaluation criteria',
		bestPractice: 'Best practice',
		addBestPractice: 'Add another best practice',
		deleteBestPractice: 'Delete best practice',
		bestPracticeCountSeparator: 'out of',
		criteriaSection: {
			selectCriteria: 'Add evaluation criteria',
			addCriteria: '(add criteria)',
			notFound: 'criteria is already added',
		},
		peopleSection: {
			addPerson: 'Add a person',
			peoplePracticing: 'People practicing this',
			groups: 'Teams',
			people: 'People',
			notFound: 'no matches found',
		},
		headerSection: {
			[EDIT_MODE]: {
				mobileHeader: 'Edit scenario',
				buttonPrimaryText: 'Send',
				buttonSecondaryText: 'Cancel',
				namePlaceholder: 'Give the scenario a name…',
				descriptionPlaceholder: 'Describe the scenario...',
			},
			[VIEW_MODE]: {
				mobileHeader: '',
				buttonPrimaryText: 'Edit',
				buttonSecondaryText: 'Delete',
			},
			[CREATE_MODE]: {
				mobileHeader: 'New scenario',
				buttonPrimaryText: 'Send',
				buttonSecondaryText: 'Cancel',
				namePlaceholder: 'Give the scenario a name…',
				descriptionPlaceholder: 'Describe the scenario...',
			},
			[PRACTICE_MODE]: {
				buttonPrimaryText: 'Practice',
				buttonSecondaryText: '',
			},
		},
		validation: {
			buttonLabel: 'Try again',
			title: 'Please fill required fields',
			fields: {
				[VIDEO_ID]: {
					name: 'Scenario video',
					errorMessage: 'This field is required',
				},
				[BEST_PRACTICE_VIDEOS]: {
					name: 'Best practice video',
					errorMessage: 'This field is required',
				},
				[SCENARIO_NAME]: {
					name: 'Scenario name',
					errorMessage: 'This field is required',
				},
				[SCENARIO_DESCRIPTION]: {
					name: 'Scenario description',
					errorMessage: 'This field is required',
				},
				[STEPS]: {
					name: 'Steps',
					errorMessage: 'This field is required',
				},
				[CRITERIAS]: {
					name: 'Criteria',
					errorMessage: 'This field is required',
				},
				[SELECTED_USERS]: {
					name: 'People',
				},
			},
			deleteUnsaved: 'Are you sure you want to delete unsaved changes?',
			saveDraftMessage: 'You can save your scenario as draft',
			deleteChangesButton: 'Delete changes',
		},
		saveDraftButton: 'Save draft',
		deleteScenario: 'Are you sure you want to delete scenario?',
		cancel: 'Cancel',
		delete: 'Delete',
		emptyGroups: 'Teams are created and managed in Teams tab',
		bestPracticeError: 'must not be empty',
		bestPracticePlaceholder: 'Give the best practice name',
		saved: 'Saved',
		dueDate: 'Due date',
		due: 'Due',
		fromNow: 'from now',
		left: 'left',
		pastDue: 'Past due'
	},
	groupChat: {
		label: 'Group chat',
		viewParticipants: 'View participants',
		groupChatName: 'Group chat name'
	},
	teams: {
		teams: 'Teams',
		buttonDelete: 'Delete',
		buttonEdit: 'Edit',
		buttonCancel: 'Cancel',
		buttonSave: 'Save',
		placeholder: 'Enter team title…',
		group: 'Team',
		newTeam: 'New team',
		editTeam: 'Edit team',
		deleteTeamConfirmation: 'Are you sure you want to delete team?',
		emptyAreaText: 'Select a team or create new one',
		[EDIT_MODE]: {
			buttonPrimaryText: 'Save',
			buttonSecondaryText: 'Cancel',
			placeholder: 'Enter team title…',
		},
		[VIEW_MODE]: {
			buttonPrimaryText: 'Edit',
			buttonSecondaryText: 'Delete',
		},
		[CREATE_MODE]: {
			buttonPrimaryText: 'Save',
			buttonSecondaryText: 'Cancel',
			placeholder: 'Enter team title…',
		},
		wrongName: 'Wrong name',
		teamExists: 'Team with this name already exists',
		tryAgain: 'Try again',
		empty: 'You don\'t have any teams yet',
		noUsers: 'No users',
		noUsersMessage: 'Team should contain at least one user',
		invalidName: 'Invalid name',
		invalidNameMessage: 'This team name is invalid',
	},
	primaryNav: {
		inbox: 'MESSAGES',
		scenarious: 'SCENARIOS',
		team: 'TEAMS',
		profile: 'PROFILE',
		settings: 'SETTINGS',
		logOut: 'SIGN OUT',
	},
	dragAndDrop: {
		add: 'Add',
		change: 'Change',
		dropHeading: 'Drop files here',
		selectFile: 'Drag and drop files here \n or',
		selectImageFile: 'Drag and drop files here \n or',
		errorMessage: 'Ooops! Looks like something went wrong!',
		fileCount: 'You can add only 1 file.',
		formats: 'Formats:',
		maxFileSize: 'The maximum file size is',
		multipleFiles: 'Ooops! You can add only one file.',
		wrongSize: 'Ooops! Looks like your file is too big.',
		wrongFormat: 'Ooops! Looks like your file is in wrong format.',
		serverError: 'Oops ! Looks like server error occurred.',
		selectAnotherFile: 'To select another file drag and drop file here or',
		selectAnotherFileMobile: 'Select another file',
		uploadPhoto: 'Upload photo',
		uploadVideo: 'Upload video',
		bestPracticeNote: 'Include a brief note about why this is best practice...',
		errorText: 'must not be empty',
		permissionErrorText: 'We do not have permission for this file. Please check your permissions and try again.',
		bestPractice: 'Give the best practice name',
	},
	evaluateDialog: {
		paragraph: '1- not at all, 5- absolutely',
		userEvaluationCriterias: {
			experience: 'Evaluate.Rate.Practice.Experience',
			work: 'Evaluate.Rate.Pertinent.To.Work',
			recommend: 'Evaluate.Rate.Recommend.To.Others',
		},
		titleCoach: 'How did {fullName} do at {scenario}?',
		titleUser: 'What did you think of the scenario?',
		coachViewOfLearnerEvaluat: 'The evaluation of scenario {scenario}',
		learnerViewOfEvaluat: 'How did you do at {scenario}?',
		criteriaExperience: 'Did {You} enjoy this practice?',
		criteriaWork: 'Is it relevant to {Your} work?',
		criteriaRecommend: 'Would {You} recommend it to others?',
	},
	settings: {
		settings: 'Settings',
		help: {
			title: 'Help/feedback',
			description: 'If you’re having issues with the app or want to tell us what you think, send us an email at:',
		},
		resources: {
			title: 'Resources',
			description: 'For tutorials and frequently asked questions check out our resources:',
			descriptionTutorials: 'Check our tutorials:'
		},
		deleteAccount: {
			title: 'Delete my account',
			description: 'If you want to delete your account please click here:',
			button: 'Delete account',
			dialog: 'Are you sure you want to delete your account?',
		},
		language: {
			title: 'Change language',
			languages: {
				en: 'English',
				fr: 'French (Français)',
				ru: 'Russian (Русский)',
				it: 'Italian (Italiano)',
				es: 'Spanish (Española)',
				de: 'German (Deutsch)',
				ja: 'Japanese (日本語)',
				ko: 'Korean (한국어)',
				ch: 'Chinese (中文)',
				pt: 'Portuguese (Português)',
			},
		},
	},
	profile: {
		editText: 'Edit',
		profile: 'Profile',
		settings: 'Settings',
		signout: 'Sign out',
	},
	reports: {
		coach: 'Coach',
		learner: 'Learner',
		scorePerScenario: 'Score per scenario',
		scorePerCriteria: 'Score per сriteria',
		totalScoreDetails: 'Total score details',
		scenarioScoreDetails: 'Scenario score details',
		responsivenessDetails: 'Responsiveness details',
		teamMemberDetails: 'Team member details',
		responsivenessPerScenario: 'Responsiveness per scenario',
		teamMembersRaking: 'Team members ranking',
		filters: {
			all: 'All',
			period: 'Period',
			lastMonth: 'Last month',
			last3Months: 'Last 3 months',
			lastYear: 'Last year',
		},
		dataTitles: {
			totalScore: 'Total score',
			responsiveness: 'Responsiveness',
			completed: 'Completed',
			current: 'Current',
			ranking: 'Ranking'
		},
		dataDescription: {
			totalScore: 'Total score is an average value according to evaluation criteria',
			responsiveness: 'Responsiveness is a number of days while a learner sends a response',
			completed: 'Number of completed scenarios',
			current: 'Number of current scenarios',
			ranking: 'Ranking is a position of your team compare other teams in the company',
		},
		dataLabels: {
			score: 'Score',
			responsiveness: 'Responsiveness',
			team: 'Team',
			me: 'Me',
			user: 'User',
			company: 'Company'
		}
	},
	recording: {
		browseVideo: 'Browse',
		recordVideo: 'Record video',
		uploadExisting: 'Or, upload an existing video file',
		replay: 'Replay',
		recordAgain: 'Record again',
		send: 'Send',
		next: 'Next',
		retry: 'Retry',
		selectAnOption: 'Please select one option',
		constraintsError: {
			title: 'Device issue',
			message: 'Please, make sure that currently connected camera supports the minimum resolution of 640x480',
		},
		permissionError: {
			title: 'No access',
			message: 'Please, make sure that you have allowed browser to access camera / microphone',
			messageAudio: 'Please, make sure that you have allowed browser to access microphone',
		},
		deviceBusyError: {
			title: 'Device is busy',
			message: 'Please make sure that there is no any other programs using camera / microphone',
			messageAudio: 'Please make sure that there is no any other programs using microphone',
		},
		notFoundError: {
			title: 'Input not found',
			message: 'Please, make sure that you have properly connected camera and microphone',
			messageAudio: 'Please, make sure that you have properly connected microphone',
		},
		unknownError: {
			title: 'Unknown error',
			message: 'Ooops! Looks like something went wrong!',
		},
	},
	termsAndConditions: {
		error: 'This field is required',
		iAgree: 'I agree to',
		theTerms: 'the terms.',
		iRead: 'I have also read the privacy policy.',
		information: `<p style="text-align: center;"><strong>Terms and Conditions of Use</strong></p>
		<ol style="text-align: justify;">
		<li><strong> Access to the Application</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">I understand that:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;The Mobile Practice (hereinafter "the Application") is made available to me by MOBILE PRACTICE or by one of its rights-holder partners to provide me with training on a certain number of subjects.</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;The URL of the "M-Learning" platform must not be sent to or shared with anyone (be they internal or external).</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;MOBILE PRACTICE reserves the right, at its sole discretion, to suspend or terminate access to all or part of the Application, its content or the services offered in Application, without notice.</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;The Application may provide links to other Internet sources. As MOBILE PRACTICE has no control over external sources, MOBILE PRACTICE cannot be held liable for their content, advertising, products, services or anything else available at these external sources.</span></li>
		</ul>
		<ol style="text-align: justify;" start="2">
		<li><strong> User Behavior</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">Each user of the Application warrants and undertakes:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;To use the Application for lawful purposes, excluding any commercial or advertising purposes;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Not to communicate or divulge to anybody who does not enjoy the same access rights any of the Application's information and/or content;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Not to disrupt or interrupt the operation of the Application, its servers or networks connected to the Application or to infringe its requirements, procedures, rules or regulations;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Not to harm the operation of the Application by overloading the bandwidth, by overloading the server, by sending spam or by overloading the Application's inbox;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Not to view information that is not intended for them, or to access a server or account that they are not authorized to access;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Not to modify parts of the Application's code to obtain unauthorized access to the Application;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Not to try to evaluate, note or test the Application's vulnerabilities, or to circumvent the Application's security or authentication measures without the prior written authorization of MOBILE PRACTICE;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Not to download to the Application, transmit, post or make available by any means unsolicited or unauthorized advertising or promotional material;</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Not to send by email or to transmit by any other means any of the Application's content.</span></li>
		</ul>
		<p style="text-align: justify;"><span style="font-weight: 400;">If necessary, MOBILE PRACTICE may at any time terminate a user's access to the Application if they do not meet their obligations.</span></p>
		<ol style="text-align: justify;" start="3">
		<li><strong> Protection of the Application's content</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; The Application and each of its constituent parts (such as text, hierarchies, software, animations, photographs, illustrations, images, diagrams, soundtracks, logos, brands, drawings, models, questionnaires and quizzes), including the software components necessary for the operation of the Application and databases (hereinafter "Content") may contain confidential information and data protected by intellectual property law or any other applicable law. Therefore, unless otherwise stated in the Application, the intellectual property rights of the Content are the exclusive property of MOBILE PRACTICE and/or its rights-holder partners, who grant the user no license or any other right apart from that to view the Application.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; The reproduction of all or part of the Content is authorized for the purposes of informing and training users only; any reproduction or any other use of copies of the Content made for other purposes, in whatever manner or form whatsoever, is expressly prohibited.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; &nbsp;The user is also prohibited from copying, modifying, creating a derived work from, assembling, decompiling, selling, sublicensing or assigning in any way whatsoever any rights pertaining to the Content or Application.</span></p>
		<ol style="text-align: justify;" start="4">
		<li><strong> Liability</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE endeavours to ensure that the information provided on the Application is accurate and up to date. However, MOBILE PRACTICE cannot guarantee that the information provided to users on the Application is accurate or exhaustive.</span></p>
		<ol style="text-align: justify;" start="5">
		<li><strong> Personal Data</strong></li>
		</ol>
		<p style="text-align: justify;"><span style="font-weight: 400;">&nbsp; &nbsp; MOBILE PRACTICE and its rights-holder partners protect the personal data of the Application's users and respect your concerns regarding the confidentiality of the personal information that you provide us. By providing us with your personal information and data, you consent to their use and communication under the conditions set out below.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Through the Application, MOBILE PRACTICE and its rights-holder partners may gather personal data, in order, for example, to provide access to the Application (such as name, surname, login, e-mail address of learners, department time spent, number of connections, and number of points), only for the purposes outlined below:</span></p>
		<ul style="text-align: justify;">
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Training management</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Statistics, studies and analyses of questionnaire and quiz answers</span></li>
		<li><span style="font-weight: 400;"> &nbsp;&nbsp;&nbsp;Improving the Application, including the use of satisfaction surveys</span></li>
		</ul>
		<p style="text-align: justify;">&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">By accessing, by creating your account on the Application and clicking on the icon "I accept", you acknowledge having read the terms and conditions and clauses above and you accept them irrevocably. Accordingly, you unreservedly consent to the processing of your personal data in accordance with these terms and conditions and herein by the company MOBILE PRACTICE.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Any personal information that you provide in order to use the Application is subject to the provisions of Law no. 78-17 on Information Technology and Freedoms of 6 January 1978.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">You have the right to access, correct and delete any personal information concerning you at any time, and may stop the processing of this data by writing to MOBILE PRACTICE - 224, Rue Saint-Denis &ndash; 75002 Paris or contact@Mobile Practice.com.</span>&nbsp;</p>
		<p style="text-align: justify;"><span style="font-weight: 400;">The data will be retained for as long as they are necessary for the purposes for which they were gathered and will, in any case, be destroyed 6 months after the end date of the rights of access to the use of the Application. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">Only the recipients duly authorized by MOBILE PRACTICE in charge of the management of the training will have access to your data. </span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">MOBILE PRACTICE endeavours to take all necessary precautions to maintain the confidentiality of the personal data collected and processed, and to prevent them from being deformed, damaged or destroyed, or accessed by unauthorized third parties.</span></p>
		<p style="text-align: justify;"><span style="font-weight: 400;">However, MOBILE PRACTICE cannot manage all risks related to the operation of the Internet and alerts users of the Application to the existence of potential risks inherent in its use and operation.</span></p>`,
	},
	mediaUpload: {
		wrongSize: 'Ooops! Looks like your file is too big.',
		wrongFormat: 'Ooops! Looks like your file is in wrong format.',
		tryAgain: 'Try again',
		uploadFailed: 'Ooops! Upload failed.',
		maxFileSize: 'The maximum file size is',
		formats: 'Formats:',
		permissionErrorText: 'We do not have permission for this file. Please check your permissions and try again.',
	},
	onboarding: {
		tutorials: {
			welcome: "Welcome tutorial",
			learner: "Learner tutorial",
			coach: "Coach tutorial",
			scenarioCreation: "Scenario creation tutorial"
		},
		startExploring: "Start exploring",
		close: "close",
		welcome: {
			slide1: {
				title: "Welcome to Mobile Practice",
				text: "Mobile video & messaging technology for teams to practice, coach & share best practice"
			},
			slide2: {
				title: "Scenarios",
				text: "On Scenarios tab you can see list of your scenarios which you practice as a learner or train as a coach"
			},
			slide3: {
				title: "Messages",
				text: "On Messages tab you can create message groups with one or more participants."
			},
			slide4: {
				title: "Teams",
				text: "On Teams tab you can manage your groups of users"
			},
			slide5: {
				title: "Profile",
				text: "On Profile tab you can upload your personal avatar, view your stats and access the settings page."
			},
			slide6: {
				title: "Settings",
				text: "On the Settings tab you can change language, view onboarding screens and access help resources.",
			},
			slide7: {
				title: "Where to go next",
			},
		},
		learner: {
			slide1: {
				title: "Scenario instructions",
				text: "Select and expand the relevant practice scenario. Click \"Instructions\""
			},
			slide2: {
				title: "Start practicing",
				text: "Choose the scenario and click \"Practice\""
			},
			slide3: {
				title: "Practice chat",
				text: "Here is your private practice chat with your coach. Ask questions and prepare to submit your practice video."
			},
			slide4: {
				title: "Send a video",
				text: "Record, review and then submit your video to your coach. You will be notified when you receive feedback."
			},
			slide5: {
				title: "Evaluate scenario",
				text: "After your coach has provided evaluation feedback, you have the option to evaluate the scenario."
			},
		},
		coach: {
			slide1: {
				title: "Coach panel",
				text: "Select and expand the relevant practice scenario. Click \"Coach\" to display the status of every participant."
			},
			slide2: {
				title: "Send reminder",
				text: "From the coach panel you can remind participants to submit their video replies."
			},
			slide3: {
				title: "Practice chat",
				text: "From the coach panel you can open individual practice chats with learners. Here you can reply with a video, text or add a document."
			},
			slide4: {
				title: "Add best practice from learner",
				text: "Share great video replies with the group. Ask the learner's permission via chat and then click on the video and save as \"best practice\". Remember to add a title."
			},
			slide5: {
				title: "Evaluate",
				text: "Evaluate the learners performance with criteria you defined when creating the scenario. This action concludes the practice for the learner."
			},
		},
		scenarioCreation: {
			slide1: {
				title: "Create scenario",
				text: "On the “Scenarios” tab click \"New\" to open scenario creation page"
			},
			slide2: {
				title: "Add the details of scenario",
				text: "Fill in the form with the details of the scenario"
			},
			slide3: {
				title: "Add title and description",
				text: "Add title and description of the scenario"
			},
			slide4: {
				title: "Add explanatory video",
				text: "Record explanatory video to your learners to explain the purpose of the practice scenario."
			},
			slide5: {
				title: "Add steps",
				text: "Add steps to guide the participants` reply"
			},
			slide6: {
				title: "Add evaluation criteria",
				text: "These criteria will be used to evaluate the scenario. You can use existing criteria or create your own"
			},
			slide7: {
				title: "Add learners",
				text: "Add people to practice scenario.	You can add individuals as well as predefined teams."
			},
			slide8: {
				title: "Scenario is ready",
				text: "That’s all. Scenario is ready to be sent to participants. All you need to do is to click \"Send\""
			},
		}
	}
};
