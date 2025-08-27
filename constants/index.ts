export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: 'https://video.bunnycdn.com/library',
  STORAGE_BASE_URL: 'https://storage.bunnycdn.com/fathy-snapcast',
  CDN_URL: 'https://fathy-snapcast.b-cdn.net',
  EMBED_URL: 'https://iframe.mediadelivery.net/embed',
  TRANSCRIPT_URL: 'https://vz-00ab238d-adb.b-cdn.net',
};

export const emojis = ['😂', '😍', '👍'];

export const filterOptions = [
  'Most Viewed',
  'Most Recent',
  'Oldest First',
  'Least Viewed',
];

export const visibilities: Visibility[] = ['public', 'private'];

export const ICONS = {
  record: '/assets/icons/record.svg',
  close: '/assets/icons/close.svg',
  upload: '/assets/icons/upload.svg',
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ['transcript', 'metadata'];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: 'video/webm;codecs=vp9,opus',
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: 1,
    thumbnail: '/assets/samples/thumbnail (1).png',
    title: 'Dummy title',
    username: 'Fathy Sameh',
    userImg: '/assets/images/alex.png',
    duration: 345,
    visibility: 'public',
    createdAt: new Date('2025-05-18'),
    views: 50,
  },
  {
    id: 2,
    thumbnail: '/assets/samples/thumbnail (2).png',
    title: 'Dummy title 2',
    username: 'Checked User',
    userImg: '/assets/images/lisa.png',
    duration: 420,
    visibility: 'private',
    createdAt: new Date('2025-05-19'),
    views: 78,
  },
  {
    id: 3,
    thumbnail: '/assets/samples/thumbnail (3).png',
    title: 'Dummy title 3',
    username: 'David Smith',
    userImg: '/assets/images/david.png',
    duration: 260,
    visibility: 'public',
    createdAt: new Date('2025-05-20'),
    views: 120,
  },
  {
    id: 4,
    thumbnail: '/assets/samples/thumbnail (4).png',
    title: 'Dummy title 4',
    username: 'Emily Johnson',
    userImg: '/assets/images/emily.png',
    duration: 310,
    visibility: 'unlisted',
    createdAt: new Date('2025-05-21'),
    views: 95,
  },
  {
    id: 5,
    thumbnail: '/assets/samples/thumbnail (5).png',
    title: 'Dummy title 5',
    username: 'Jason Lee',
    userImg: '/assets/images/jason.png',
    duration: 500,
    visibility: 'public',
    createdAt: new Date('2025-05-22'),
    views: 200,
  },
  {
    id: 6,
    thumbnail: '/assets/samples/thumbnail (6).png',
    title: 'Dummy title 6',
    username: 'Jessica Miller',
    userImg: '/assets/images/jessica.png',
    duration: 180,
    visibility: 'private',
    createdAt: new Date('2025-05-23'),
    views: 63,
  },
  {
    id: 7,
    thumbnail: '/assets/samples/thumbnail (7).png',
    title: 'Dummy title 7',
    username: 'Lisa Brown',
    userImg: '/assets/images/lisa.png',
    duration: 290,
    visibility: 'public',
    createdAt: new Date('2025-05-24'),
    views: 154,
  },
  {
    id: 8,
    thumbnail: '/assets/samples/thumbnail (8).png',
    title: 'Dummy title 8',
    username: 'Michael Davis',
    userImg: '/assets/images/michael.png',
    duration: 410,
    visibility: 'unlisted',
    createdAt: new Date('2025-05-25'),
    views: 89,
  },
];
