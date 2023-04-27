import common from '../../../constants/common';

export class MediaPreviewDataFactory {
	constructor (
		{ audioFile, imgFile, pastedMedia, attachmentFile, videoFile }
	) {
		if (audioFile) return new AudioPreviewData(audioFile);
		if (imgFile) return new ImgPreviewData(imgFile);
		if (attachmentFile) return new AttachmentPreviewData(attachmentFile);
		if (videoFile) return new VideoPreviewData(videoFile);
		if (pastedMedia) return new PastedMediaPreviewFactory(pastedMedia);
	}
}

class PastedMediaPreviewFactory {
	constructor (previewData) {
		if (previewData.videoId) return new PastedVideoPreviewData(previewData);
		if (previewData.audioId) return new PastedAudioPreviewData(previewData);
		if (previewData.imageId) return new PastedImgPreviewData(previewData);
		if (previewData.fileId) return new PastedAttachmentPreviewData(previewData);
	}
}

class AudioPreviewData {
	constructor (audioFile) {
		this.src = URL.createObjectURL(audioFile);
		this.duration = audioFile.duration;
		this.type = common.mediaPreviewTypes.AUDIO;
	}
}

class ImgPreviewData {
	constructor (imgFile) {
		this.src = URL.createObjectURL(imgFile);
		this.name = imgFile.name;
		this.type = common.mediaPreviewTypes.IMAGE;
	}
}

class AttachmentPreviewData {
	constructor (attachmentFile) {
		this.name = attachmentFile.name;
		this.type = common.mediaPreviewTypes.FILE;
	}
}

class VideoPreviewData {
	constructor (videoFile) {
		this.src = URL.createObjectURL(videoFile);
		this.type = common.mediaPreviewTypes.VIDEO;
	}
}

class PastedAudioPreviewData {
	constructor (pastedAudioData) {
		this.src = pastedAudioData.link;
		this.type = common.mediaPreviewTypes.AUDIO;
	}
}

class PastedImgPreviewData {
	constructor (pastedImgData) {
		this.src = pastedImgData.link;
		this.name = pastedImgData.photoName || pastedImgData.imageName;
		this.type = common.mediaPreviewTypes.IMAGE;
	}
}

class PastedAttachmentPreviewData {
	constructor (pastedAttachmentData) {
		this.name = pastedAttachmentData.originalName;
		this.type = common.mediaPreviewTypes.FILE;
	}
}

class PastedVideoPreviewData {
	constructor (pastedVideoData) {
		this.src = pastedVideoData.thumb;
		this.dashList = pastedVideoData.dashList;
		this.playList = pastedVideoData.playList;
		this.type = common.mediaPreviewTypes.VIDEO_PASTED;
	}
}

