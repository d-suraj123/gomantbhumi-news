CREATE TABLE IF NOT EXISTS news (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL DEFAULT 'गोवा',
  summary TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL,
  image_url TEXT NOT NULL DEFAULT '',
  video_url TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'published',
  published_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_news_published ON news(status, id DESC);
