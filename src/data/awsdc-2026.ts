import type { Edition, ScheduleSlot, SlotKind } from './types'

import lucien from '@/images/people/lucien.jpg'
import mace from '@/images/people/mace.jpg'
import charity from '@/images/people/charity.jpg'
import zion from '@/images/people/zion.jpg'
import providence from '@/images/people/providence.jpg'
import adika from '@/images/people/adika.jpg'
import prosper from '@/images/people/prosper.jpg'
import cherica from '@/images/people/cherica.jpg'
import franco from '@/images/people/franco.jpg'
import trudeau from '@/images/people/trudeau.jpg'
import alyssia from '@/images/people/alyssia.jpg'
import amber from '@/images/people/amber.jpg'
import stephanie from '@/images/people/stephanie.jpg'
import kea from '@/images/people/kea.jpg'
import lebo from '@/images/people/lebo.jpg'
import rea from '@/images/people/rea.jpg'

import gautengDebate from '@/images/logos/gautengdebate.png'
import bauhouse from '@/images/logos/bauhouse.png'
import updu from '@/images/logos/updu.png'
import rpda from '@/images/logos/rpda.png'

/** Compact slot builder: slot(kind, name, start, end) */
const slot = (kind: SlotKind, name: string, start: string, end: string): ScheduleSlot => ({
  kind,
  name,
  start,
  end,
})

/**
 * AWSDC 2026 – archived edition (27 March to 2 April 2026, Pretoria).
 * This is a frozen record of the previous website. Do not reuse for 2027.
 */
export const awsdc2026: Edition = {
  year: 2026,
  slug: '2026',
  name: 'Africa World Schools Debating Championships 2026',
  shortName: 'AWSDC 2026',
  status: 'archived',

  startDate: '2026-03-27',
  endDate: '2026-04-02',
  city: 'Pretoria, South Africa',
  venue: 'University of Pretoria',

  intro: [
    'Welcome to Africa World Schools Debating Championship, a continental stage where high school debaters come together for a week of competition, learning, and community.',
    'Expect high quality rounds, skills workshops, cultural exchange, and memorable socials as we build a tradition that grows young voices across Africa.',
  ],
  formatNote: 'World Schools Style, 3v3, 60 minute prep for impromptu rounds',

  // The 2026 forms are closed and intentionally not linked from the archive.
  opportunities: [],

  team: [
    {
      id: 'convenors',
      name: 'Convenors & Directors',
      shortName: 'Convenors',
      description: 'Led the organisation of the championship.',
      members: [
        { name: 'Lucien Mendela', role: 'Convenor', image: lucien },
        { name: 'Mace Maphosa', role: 'Convenor', image: mace },
      ],
    },
    {
      id: 'cas',
      name: 'Chief Adjudicators',
      shortName: 'Chief Adjudicators',
      description: 'Led the adjudication of the debating rounds.',
      members: [
        { name: 'Charity Makhala', role: 'Chief Adjudicator', image: charity },
        { name: 'Zion Van Wyk', role: 'Chief Adjudicator', image: zion },
        { name: 'Providence Nhongo', role: 'Chief Adjudicator', image: providence },
        { name: 'Michelle Adika', role: 'Chief Adjudicator', image: adika },
      ],
    },
    {
      id: 'ps-cas',
      name: 'Public Speaking Chief Adjudicators',
      shortName: 'Public speaking',
      description: 'Led the adjudication of the public speaking rounds.',
      members: [
        { name: 'Prosper Michael', role: 'Chief Adjudicator', image: prosper },
        { name: 'Cherica Nowases', role: 'Chief Adjudicator', image: cherica },
      ],
    },
    {
      id: 'dcas',
      name: 'Deputy Chief Adjudicators',
      shortName: 'Deputy CAs',
      description: 'Supported the Chief Adjudicators across the tournament.',
      members: [],
    },
    {
      id: 'tab',
      name: 'Tabulation Team',
      shortName: 'Tab team',
      description: 'Ran the tabulation and published draws and results.',
      members: [
        { name: 'Franco Osei-Wusu', role: 'Tab Director', image: franco },
        { name: 'Trudeau Okech', role: 'Tab Director', image: trudeau },
      ],
    },
    {
      id: 'volunteers',
      name: 'Tournament Volunteer Staff',
      shortName: 'Volunteers',
      description: 'Kept logistics, communications, wellness and socials running.',
      members: [
        { name: 'Alyssia Gaitskill', role: 'Tournament Director', image: alyssia },
        { name: 'Amber Smith', role: 'Head of Logistics', image: amber },
        { name: 'Stephanie Ewuziem', role: 'Tournament Finance Staff', image: stephanie },
        { name: 'Keaobaka Molobye', role: 'Tournament Wellness and Communications Staff', image: kea },
        { name: 'Lebo Mathebula', role: 'Social and Event & Sponsorship Staff', image: lebo },
        { name: 'Rea Mokalani', role: 'Head of Communications', image: rea },
      ],
    },
  ],

  schedule: [
    {
      date: '2026-03-27',
      summary: 'Arrival, hotel check-in, and dinner.',
      slots: [
        slot('admin', 'Hotel Check in', '14:00', '18:00'),
        slot('meal', 'Dinner', '18:00', '21:00'),
      ],
    },
    {
      date: '2026-03-28',
      summary: 'Tournament day with rounds, public speaking, and evening dinner.',
      slots: [
        slot('meal', 'Breakfast', '06:30', '08:00'),
        slot('travel', 'Transportation to Venue', '08:00', '08:30'),
        slot('admin', 'Tournament Briefing', '08:30', '09:00'),
        slot('debate', 'Debate Round 1 [Impromptu]', '09:00', '12:00'),
        slot('meal', 'Lunch', '12:00', '13:00'),
        slot('speaking', 'Public Speaking Round 1', '13:00', '14:00'),
        slot('meal', 'Mini Break', '14:00', '14:15'),
        slot('debate', 'Debate Round 2 (Prepared)', '14:15', '16:00'),
        slot('speaking', 'Public Speaking Round 2', '16:00', '17:30'),
        slot('travel', 'Transport to Hotel', '17:30', '18:00'),
        slot('meal', 'Dinner', '18:00', '21:00'),
      ],
    },
    {
      date: '2026-03-29',
      summary: 'Day 3 briefing followed by tournament rounds and dinner.',
      slots: [
        slot('meal', 'Breakfast', '06:30', '08:00'),
        slot('travel', 'Transportation to Venue', '08:00', '08:30'),
        slot('admin', 'Day 3 Briefing', '08:30', '09:00'),
        slot('debate', 'Debate Round 3 [Impromptu]', '09:00', '12:00'),
        slot('meal', 'Lunch', '12:00', '13:00'),
        slot('speaking', 'Public Speaking Round 3', '13:00', '14:00'),
        slot('meal', 'Mini Break', '14:00', '14:15'),
        slot('debate', 'Debate Round 4 (Prepared)', '14:15', '16:00'),
        slot('speaking', 'Public Speaking Round 4', '16:00', '17:30'),
        slot('travel', 'Transport to Hotel', '17:30', '18:00'),
        slot('meal', 'Dinner', '18:00', '21:00'),
      ],
    },
    {
      date: '2026-03-30',
      summary: 'Tournament briefing, final preliminary rounds, and dinner.',
      slots: [
        slot('meal', 'Breakfast', '06:30', '08:00'),
        slot('travel', 'Transportation to Venue', '08:00', '08:30'),
        slot('admin', 'Tournament Briefing', '08:30', '09:00'),
        slot('debate', 'Debate Round 5 [Impromptu]', '09:00', '12:00'),
        slot('meal', 'Lunch', '12:00', '13:00'),
        slot('debate', 'Debate Round 6 (Impromptu)', '13:00', '16:00'),
        slot('speaking', 'Public Speaking Round 5', '16:00', '17:30'),
        slot('travel', 'Transport to Hotel', '17:30', '18:00'),
        slot('meal', 'Dinner & Break Announcement', '18:00', '21:00'),
      ],
    },
    {
      date: '2026-03-31',
      summary: 'Semi-finals, excursions, and evening dinner.',
      slots: [
        slot('meal', 'Breakfast', '06:30', '08:30'),
        slot('travel', 'Transportation to Venue', '08:30', '09:00'),
        slot('debate', 'Junior and Senior Semi-Finals [Impromptu]', '09:00', '11:00'),
        slot('speaking', 'Public Speaking Semifinals', '11:00', '12:00'),
        slot('social', 'Excursions', '12:00', '19:30'),
        slot('meal', 'Light Dinner', '19:00', '21:00'),
      ],
    },
    {
      date: '2026-04-01',
      summary: 'Finals day with results, awards, and closing dinner.',
      slots: [
        slot('meal', 'Breakfast', '06:30', '08:00'),
        slot('admin', 'Semi-Final Results Announcement', '08:30', '09:00'),
        slot('speaking', 'Public Speaking Grand Final', '09:00', '10:30'),
        slot('debate', 'Junior Debate Grand Final', '10:30', '12:00'),
        slot('meal', 'Lunch', '12:00', '13:00'),
        slot('debate', 'Senior Debate Grand Final', '13:00', '15:00'),
        slot('meal', 'Mini Break', '15:00', '15:30'),
        slot('social', 'Awards', '15:30', '16:30'),
        slot('travel', 'Transport to Hotel', '16:30', '17:30'),
        slot('meal', 'Dinner', '18:30', '21:00'),
      ],
    },
    {
      date: '2026-04-02',
      summary: 'Departure day with breakfast and check-out.',
      slots: [
        slot('meal', 'Breakfast', '06:30', '10:00'),
        slot('admin', 'Check Out', '08:00', '10:30'),
      ],
    },
  ],

  partners: [
    { name: 'Gauteng Debate', logo: gautengDebate },
    { name: 'Bauhouse Academy', logo: bauhouse },
    { name: 'University of Pretoria Debating Union', logo: updu },
    { name: 'Royalty Pact Debate Academy', logo: rpda },
  ],
  contact: null,
}
