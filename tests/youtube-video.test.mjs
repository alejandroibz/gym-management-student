import { test } from 'node:test';
import assert from 'node:assert/strict';
import { youtubeId } from '../src/app/student/youtube-video.ts';

for (const url of [
  'https://www.youtube.com/watch?v=abcdefghijk',
  'https://youtube.com/watch?list=PL123&v=abcdefghijk&t=12',
  'https://youtu.be/abcdefghijk?si=example',
  'https://youtube.com/shorts/abcdefghijk',
  'https://m.youtube.com/watch?v=abcdefghijk',
  'https://www.youtube-nocookie.com/embed/abcdefghijk',
  'https://www.youtube.com/live/abcdefghijk'
]) test(`Recognizes ${url}`, () => assert.equal(youtubeId(url), 'abcdefghijk'));

for (const url of [
  'https://youtube.com.evil.test/watch?v=abcdefghijk',
  'https://example.com/youtube.com/watch?v=abcdefghijk',
  'javascript:alert(1)', 'https://youtube.com/watch?v=abc',
  'https://youtube.com/playlist?list=PL123', '', null
]) test(`Rejects ${url}`, () => assert.equal(youtubeId(url), null));
