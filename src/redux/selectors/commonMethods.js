import { practiceStates } from '../../constants/common';

export function getPracticeState (scenarioInbox) {
	if (!scenarioInbox || !scenarioInbox._coach) return null;
	const coachId = scenarioInbox._coach._id;

	if (scenarioInbox.state === practiceStates.COMPLETED) {
		return practiceStates.COMPLETED;
	}

	if (!scenarioInbox.messages || scenarioInbox.messages.length === 1) { // first message is 'welcome'
		return practiceStates.NOT_STARTED;
	}

	const length = scenarioInbox.messages.length;
	if (length > 1 && scenarioInbox.messages[length - 1]._user === coachId) {
		return practiceStates.IN_PROGRESS;
	}

	return practiceStates.WAITING_FOR_FEEDBACK;
}

export function enrichMessages ({ messages, inboxState, isCoach }) {
	if (isCoach && inboxState === practiceStates.WAITING_FOR_FEEDBACK) {
		const lastMessage = messages[messages.length - 1];
		lastMessage.showSendAgo = true;
	}

	return messages;
}
