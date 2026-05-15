import { CursorEvent } from '@/lib/types';

// REPLACE: Replace all sample events, locations, and Luma URLs with real community events.
export const events: CursorEvent[] = [
	{
		id: 'cursor-meetup-mendoza-3',
		title: 'Cursor Meetup Mendoza #3',
		date: '2026-05-21', // TODO: cambiar por la fecha real si es otra
		displayDate: 'May 21, 2026',
		location: 'Campus Olegario | Mendoza, Argentina', // TODO: cambiar por venue exacto
		lumaUrl: 'https://luma.com/bwst0qek',
		status: 'upcoming',
	},
	{
		id: 'cursor-meetup-mendoza-1',
		title: 'Cursor Meetup Mendoza #1',
		date: '2025-12-01', // TODO: cambiar por la fecha exacta
		displayDate: 'December 2025', // TODO: cambiar por la fecha exacta
		attendees: 34,
		location: 'Tent CoWork | Mendoza, Argentina',
		recapPath: '/recaps/meetup-mendoza-1',
		thumbnail: '/images/events/mendoza-meetup1-15.jpg',
		galleryImages: ['/images/events/mendoza-meetup1-1.jpg', '/images/events/mendoza-meetup1-9.jpg', '/images/events/mendoza-meetup1-13.jpg', '/images/events/mendoza-meetup1-6.jpg'],
		status: 'past',
	},
	{
		id: 'cursor-meetup-mendoza-2',
		title: 'Cursor Meetup Mendoza #2',
		date: '2025-12-01', // TODO: cambiar por la fecha exacta
		displayDate: 'December 2025', // TODO: cambiar por la fecha exacta
		attendees: 34,
		location: 'Polo TIC | Mendoza, Argentina',
		recapPath: '/recaps/meetup-mendoza-2',
		thumbnail: '/images/events/cursor-event-01.jpg',
		galleryImages: ['/images/events/cursor-event-02.jpg', '/images/events/cursor-event-04.jpg'],
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
