export const MAX_FILE_SIZE_MB = {
	video: 100,
	photo: 100,
	image: 10,
	file: 100,
};

export const ALLOWED_FILE_FORMATS = {
	photo: {
		jpg: ['image/jpeg', 'image/x-citrix-jpeg'],
		png: ['image/png', 'image/x-citrix-png', 'image/x-png'],
	},
	image: {
		jpg: ['image/jpeg', 'image/x-citrix-jpeg'],
		png: ['image/png', 'image/x-citrix-png', 'image/x-png'],
		gif: ['image/gif'],
	},
	video: {
		mp4: ['video/mp4', 'application/mp4'],
		mov: ['video/quicktime'],
	},
	file: {
		pdf: ['application/pdf'],
	},
};

export const FILE_TYPE = {
	PHOTO: 'photo',
	VIDEO: 'video',
	IMAGE: 'image',
	FILE: 'file',
};

export const FILE_ERROR_TYPE = {
	size: 'size',
	fileType: 'fileType',
	permission: 'permission',
};

export const ACCEPT_BY_TYPE = {
	image: 'image/*',
	file: 'application/pdf',
	video: 'video/*',
};
