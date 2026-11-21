import { ServiceArticle, YouTubeVideo } from '../types';
import { INITIAL_ARTICLES } from '../data/articles';
import { YOUTUBE_VIDEOS } from '../data/videos';

const ARTICLES_KEY = 'sarkari_talk_articles_v1';
const VIDEOS_KEY = 'sarkari_talk_videos_v1';
const BOOKMARKS_KEY = 'sarkari_talk_bookmarks';
const SUBSCRIBERS_KEY = 'sarkari_talk_subscribers';

export function getStoredArticles(): ServiceArticle[] {
  try {
    const raw = localStorage.getItem(ARTICLES_KEY);
    if (!raw) {
      localStorage.setItem(ARTICLES_KEY, JSON.stringify(INITIAL_ARTICLES));
      return INITIAL_ARTICLES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_ARTICLES;
  } catch (e) {
    console.error('Failed to parse stored articles:', e);
    return INITIAL_ARTICLES;
  }
}

export function saveStoredArticles(articles: ServiceArticle[]): void {
  try {
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
  } catch (e) {
    console.error('Failed to save articles:', e);
  }
}

export function getStoredVideos(): YouTubeVideo[] {
  try {
    const raw = localStorage.getItem(VIDEOS_KEY);
    if (!raw) {
      localStorage.setItem(VIDEOS_KEY, JSON.stringify(YOUTUBE_VIDEOS));
      return YOUTUBE_VIDEOS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : YOUTUBE_VIDEOS;
  } catch (e) {
    console.error('Failed to parse stored videos:', e);
    return YOUTUBE_VIDEOS;
  }
}

export function saveStoredVideos(videos: YouTubeVideo[]): void {
  try {
    localStorage.setItem(VIDEOS_KEY, JSON.stringify(videos));
  } catch (e) {
    console.error('Failed to save videos:', e);
  }
}

export function resetContentToDefaults(): void {
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(INITIAL_ARTICLES));
  localStorage.setItem(VIDEOS_KEY, JSON.stringify(YOUTUBE_VIDEOS));
}

export function getBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(slug: string): boolean {
  const current = getBookmarks();
  let next: string[];
  let isBookmarked = false;
  if (current.includes(slug)) {
    next = current.filter(s => s !== slug);
    isBookmarked = false;
  } else {
    next = [...current, slug];
    isBookmarked = true;
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
  return isBookmarked;
}

export function saveSubscriber(emailOrPhone: string, categoryPreference: string): boolean {
  try {
    const raw = localStorage.getItem(SUBSCRIBERS_KEY);
    const subscribers = raw ? JSON.parse(raw) : [];
    subscribers.push({
      contact: emailOrPhone,
      category: categoryPreference,
      date: new Date().toISOString(),
    });
    localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(subscribers));
    return true;
  } catch {
    return false;
  }
}
