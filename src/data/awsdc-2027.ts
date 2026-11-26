import type { Edition, Photo, ScheduleDay, ScheduleSlot, SlotKind, StayOption } from './types'

import lucien from '@/images/people/lucien.jpg'
import mace from '@/images/people/mace.jpg'
import charity from '@/images/people/charity.jpg'
import menzimuhle from '@/images/people/menzimuhle.jpg'
import russell from '@/images/people/russell.jpg'
import cherica from '@/images/people/cherica.jpg'
import franco from '@/images/people/franco.jpg'
import alyssia from '@/images/people/alyssia.jpg'
import amber from '@/images/people/amber.jpg'
import keaobaka from '@/images/people/kea.jpg'
import stephanie from '@/images/people/stephanie.jpg'
import lebo from '@/images/people/lebo.jpg'

import heroA from '@/images/booklet/hero-a.jpg'
import heroB from '@/images/booklet/hero-b.jpg'
import heroC from '@/images/booklet/hero-c.jpg'
import heroD from '@/images/booklet/hero-d.jpg'
import introLawn from '@/images/booklet/intro-lawn.jpg'
import introSpeaker from '@/images/booklet/intro-speaker.jpg'
import introBlazer from '@/images/booklet/intro-blazer.jpg'
import citySkyline from '@/images/booklet/city-skyline.jpg'
import cityDino from '@/images/booklet/city-dino.jpg'
import cityJacaranda from '@/images/booklet/city-jacaranda.jpg'
import uop1 from '@/images/booklet/uop-1.jpg'
import uop2 from '@/images/booklet/uop-2.jpg'
import uop3 from '@/images/booklet/uop-3.jpg'
import debateRooms from '@/images/booklet/debate-rooms.jpg'
import auditorium1 from '@/images/booklet/auditorium-1.jpg'
import auditorium2 from '@/images/booklet/auditorium-2.jpg'
import hotelLobby from '@/images/booklet/hotel-lobby.jpg'
import hotelCorridor from '@/images/booklet/hotel-corridor.jpg'
import hotelKitchen from '@/images/booklet/hotel-kitchen.jpg'
import hotelRoom from '@/images/booklet/hotel-room.jpg'
import hotelPool from '@/images/booklet/hotel-pool.jpg'
import socialCultural from '@/images/booklet/social-cultural.jpg'
import socialLaser from '@/images/booklet/social-laser.jpg'
import braai1 from '@/images/booklet/braai-1.jpg'
import braai2 from '@/images/booklet/braai-2.jpg'
import banquetTrophies from '@/images/booklet/banquet-trophies.jpg'
import banquet1 from '@/images/booklet/banquet-1.jpg'
import banquet2 from '@/images/booklet/banquet-2.jpg'
import banquet3 from '@/images/booklet/banquet-3.jpg'
import banquet4 from '@/images/booklet/banquet-4.jpg'

import rpda from '@/images/logos/rpda.png'
import updu from '@/images/logos/updu.png'
import gautengDebate from '@/images/logos/gautengdebate.png'
import universityOfPretoria from '@/images/logos/up.png'

const photo = (src: Photo['src'], alt: string): Photo => ({ src, alt })

/** "0830" -> "08:30" */
const t = (hhmm: string) => `${hhmm.slice(0, 2)}:${hhmm.slice(2)}`
const slot = (kind: SlotKind, start: string, end: string, name: string): ScheduleSlot => ({ kind, name, start: t(start), end: t(end) })
const day = (date: string, summary: string, slots: ScheduleSlot[]): ScheduleDay => ({
  date,
  summary,
  // Stable sort keeps simultaneous sessions in booklet order.
  slots: [...slots].sort((a, b) => a.start.localeCompare(b.start)),
})

const stay = (name: string, address: string, distanceKm: string, priceZar: string, breakfast: StayOption['breakfast']): StayOption => ({
  name,
  address,
  distanceKm,
  priceZar,
  breakfast,
})

/**
 * AWSDC 2027 – current edition.
 * Source: the official "AWSDC 2027 Booklet". Items worth confirming with the organisers:
 *  - Commitment fee deadline: booklet says 30 July 2027 (overview page) and 30 July 2026 (summary page).
 *    The 2026 date is shown.
 *  - The $220 / $650 tiers are described differently on the overview and summary pages.
 *    The overview wording is used.
 *  - Day 3 lists "Public Speaking — Round 5" twice (09:00 and 15:30); shown as printed.
 */
export const awsdc2027: Edition = {
  year: 2027,
  slug: '2027',
  name: 'Africa World Schools Debating Championships 2027',
  shortName: 'AWSDC 2027',
  status: 'upcoming',

  startDate: '2027-03-19',
  endDate: '2027-03-25',
  city: 'Pretoria, South Africa',
  venue: 'University of Pretoria',

  intro: [
    'Debate as a sport and a lifestyle serves as a social unifier and a platform to nurture ideas worth sharing. High school debaters from across Africa come together in Pretoria for seven days of competition, learning and community.',
    'Expect high quality rounds, public speaking, a cultural night, an excursion day and a black-tie finale, as we build a tradition that grows young voices across Africa.',
  ],
  formatNote: null,

  opportunities: [
    {
      id: 'register',
      title: 'Register a team',
      description: 'For schools and debating academies entering debaters. The tournament is capped at 100 teams.',
      href: 'mailto:info@awsdc.co.za?subject=AWSDC%202027%20registration',
      actionLabel: 'Email to register',
    },
    {
      id: 'dca',
      title: 'Apply to be a Deputy Chief Adjudicator',
      description: 'Support the Chief Adjudication Panel in running fair, high quality rounds. Applications open from November 2026.',
      href: 'mailto:info@awsdc.co.za?subject=AWSDC%202027%20DCA%20application',
      actionLabel: 'Email to apply',
    },
  ],

  team: [
    {
      id: 'convenors',
      name: 'Convenors',
      shortName: 'Convenors',
      description: 'The organising committee leading the championship.',
      members: [
        { name: 'Lucien Mendela', role: 'Lead Convener', image: lucien },
        { name: 'Maison Maphosa', role: 'Tournament Director', image: mace },
      ],
    },
    {
      id: 'cap',
      name: 'Chief Adjudication Panel',
      shortName: 'Chief Adjudication Panel',
      description: 'Leads the adjudication of the championship.',
      members: [
        { name: 'Charity Makhala', role: 'Chief Adjudicator', country: 'Botswana', image: charity },
        { name: 'Menzimuhle Ncube', role: 'Chief Adjudicator', country: 'Zimbabwe', image: menzimuhle },
        { name: 'Russell Davies', role: 'Chief Adjudicator', country: 'South Africa', image: russell },
      ],
    },
    {
      id: 'core',
      name: 'Core team',
      shortName: 'Core team',
      description: 'Core members of the 2027 team.',
      members: [
        { name: 'Cherica Nowases', role: 'Core team', country: 'Namibia', image: cherica },
        { name: 'Franco Osei-Wusu', role: 'Core team', country: 'Ghana', image: franco },
      ],
    },
    {
      id: 'staff',
      name: 'Tournament staff',
      shortName: 'Tournament staff',
      description: 'Logistics, wellness, communications, finance and events.',
      members: [
        { name: 'Alyssia Gaitskill', role: 'Head of Logistics', image: alyssia },
        { name: 'Amber Smith', role: 'Head of Logistics', image: amber },
        { name: 'Keaobaka Molobye', role: 'Tournament Wellness and Communications', image: keaobaka },
        { name: 'Stephanie Ewuziem', role: 'Tournament Finance', image: stephanie },
        { name: 'Lebo Mathebula', role: 'Events Officer', image: lebo },
      ],
    },
    {
      id: 'dcas',
      name: 'Deputy Chief Adjudicators',
      shortName: 'Deputy CAs',
      description: 'Applications open from November 2026.',
      members: [],
    },
  ],

  schedule: [
    day('2027-03-19', 'Travelling, arrival and registration.', [
      slot('admin', '0700', '1600', 'Arrival and Check-In'),
      slot('admin', '1600', '1800', 'Orientation'),
      slot('social', '1830', '2100', 'Opening Ceremony & Culture Night'),
      slot('social', '2100', '2200', 'Socials and Networking'),
    ]),
    day('2027-03-20', 'AWSDC Prelims Day 1.', [
      slot('admin', '0830', '0900', 'Arrival and Registration'),
      slot('admin', '0900', '1000', 'Speaker and Adjudicator Briefing'),
      slot('debate', '1000', '1200', 'Round 1 (Impromptu Motion)'),
      slot('speaking', '1000', '1200', 'Public Speaking — Round 1'),
      slot('meal', '1200', '1300', 'Lunch'),
      slot('debate', '1330', '1630', 'Round 2 (Impromptu Motion)'),
      slot('speaking', '1330', '1530', 'Public Speaking — Round 2'),
      slot('speaking', '1530', '1630', 'Spelling Bee - Round 1'),
      slot('debate', '1630', '1830', 'Round 3 (Prepared Motion)'),
      slot('speaking', '1630', '1830', 'Public Speaking — Round 3'),
      slot('social', '1900', '2200', 'Socials and Networking'),
    ]),
    day('2027-03-21', 'AWSDC Prelims Day 2.', [
      slot('admin', '0830', '0900', 'Speaker and Adjudicator Briefing'),
      slot('debate', '0900', '1200', 'Round 4 (Impromptu Motion)'),
      slot('speaking', '0900', '1100', 'Public Speaking — Round 4'),
      slot('speaking', '1100', '1200', 'Spelling Bee - Round 2'),
      slot('meal', '1200', '1300', 'Lunch'),
      slot('debate', '1330', '1530', 'Round 5 (Prepared Motion)'),
      slot('speaking', '0900', '1200', 'Public Speaking — Round 5'),
      slot('debate', '1530', '1830', 'Round 6 (Impromptu Motion)'),
      slot('speaking', '1530', '1830', 'Public Speaking — Round 5'),
      slot('social', '1900', '2100', 'BBQ (Braai) Break Party'),
      slot('social', '2100', '2200', 'Socials and Networking'),
      slot('admin', '2200', '0500', 'Quiet Time'),
    ]),
    day('2027-03-22', 'Free day with an excursion around Pretoria.', [
      slot('social', '0900', '1200', 'Excursion'),
      slot('meal', '1200', '1300', 'Lunch'),
      slot('social', '1300', '1700', 'Excursion'),
      slot('social', '1700', '2200', 'Socials and Networking'),
    ]),
    day('2027-03-23', 'Finals series.', [
      slot('admin', '0830', '0900', 'Speaker and Adjudicator Briefing'),
      slot('debate', '0900', '1200', 'Senior Octo-Finals'),
      slot('speaking', '0900', '1100', 'Public Speaking — Semifinals'),
      slot('speaking', '1100', '1200', 'Spelling Bee Finals'),
      slot('meal', '1200', '1300', 'Lunch'),
      slot('debate', '1300', '1600', 'Junior Semi Finals & Senior Quarters'),
      slot('social', '1600', '1900', 'Socials and Networking'),
    ]),
    day('2027-03-24', 'Grand Finale Banquet.', [
      slot('admin', '0830', '0900', 'Speaker and Adjudicator Briefing'),
      slot('debate', '0900', '1200', 'Senior Semi-finals'),
      slot('meal', '1200', '1400', 'Lunch'),
      slot('social', '1500', '2000', 'Grand Final Banquet & Closing Ceremony'),
    ]),
    day('2027-03-25', 'Check-out and departure.', [slot('admin', '0700', '1100', 'Participant Check-Out')]),
  ],

  partners: [
    { name: 'Royalty Pact Debate Academy', logo: rpda, role: 'Organiser' },
    { name: 'University of Pretoria Debating Union', logo: updu, role: 'Organiser' },
    { name: 'University of Pretoria', logo: universityOfPretoria, role: 'Host institution' },
    { name: 'Gauteng Debate', logo: gautengDebate },
  ],

  contact: {
    email: 'info@awsdc.co.za',
    whatsapp: [
      { name: 'Lucien', number: '+27 61 376 5033' },
      { name: 'Maison', number: '+61 424 891 696' },
    ],
    mobile: [{ name: 'Lucien', number: '+27 61 376 5033' }],
  },

  details: {
    country: 'South Africa',
    teamCap: '100 teams',
    overview: [
      { label: 'Host country', value: 'South Africa' },
      { label: 'Host city', value: 'Pretoria' },
      { label: 'Host venue', value: 'University of Pretoria' },
      { label: 'Team cap', value: '100 teams' },
      { label: 'Dates', value: '19 to 25 March 2027' },
      { label: 'Conveners', value: ['Lucien Mendela', 'Maison Maphosa'] },
      { label: 'Chief Adjudication Panel', value: ['Charity Makhala (Botswana)', 'Menzimuhle Ncube (Zimbabwe)', 'Russell Davies (South Africa)'] },
      { label: 'Deputy Chief Adjudicators', value: 'Applications open November 2026' },
    ],
    commitmentFee: { amount: '$200', description: 'Institutional commitment fee, per school.' },
    fees: [
      { name: 'Access tier', amount: '$220', description: 'Per participant. Participation fee, lunch and judge fee.' },
      { name: 'Full tier', amount: '$650', description: 'Per participant. Full access, all meals, airport shuttles and hotel accommodation.' },
    ],
    deadlines: [
      { label: 'Institutional commitment fee', date: '30 July 2026' },
      { label: '50% registration deposit', date: '30 November 2026' },
      { label: 'Full payment due', date: '30 January 2027' },
    ],
    letter: {
      paragraphs: [
        'We would like to thank you for taking the time to read the invite to the 2nd edition of the Africa World Schools Debating Championships, taking place in 2027. Our goal remains that, every year, high school students across Africa will be able to flock to an institution to take part in a 7-day debating extravaganza. These students range from those who are representing their national teams to those who are just representing their schools and academies. For the 7 days of the Africa World Schools Debating Championship these students share ideas and experiences while debating and socialising.',
        'Three of us have experienced first-hand the incredible benefits that debating brings. Coming from public schools and into university debating has expanded our circles of friends, opened up job opportunities and afforded us the chance to travel around the world doing something we love. Most importantly, it helped us find our voice, and that is something we want to help other debaters experience. Convening the 2027 Africa WSDC is our chance to give back to the community and we hope you will support us in our endeavour.',
      ],
      signatories: ['Lucien Mendela', 'Maison Maphosa'],
      committee: ['Lucien Mendela – Lead Convener', 'Maison Maphosa – Tournament Director'],
    },
    hostCity: {
      title: 'About Pretoria',
      paragraphs: [
        'Pretoria, the administrative capital of South Africa, is a city rich in history, nestled along the Apies River and stretching into the foothills of the Magaliesberg mountains. Known for its stately government buildings, vibrant jacaranda-lined streets, and cultural landmarks, Pretoria offers a unique blend of natural beauty and urban sophistication.',
        'During the championship, participants will enjoy more than just intellectual sparring: we will also get a chance to experience the heart of South Africa. An excursion day has been planned, giving debaters and their patrons the opportunity to step away from the podium and immerse themselves in the scenic and cultural wonders of Pretoria.',
      ],
      excursionTitle: 'What to expect on excursion day',
      excursion: [
        'Breathtaking views from the hills surrounding the city.',
        'Opportunities to engage with local culture and cuisine.',
        'A stroll through Pretoria’s iconic jacaranda-lined avenues.',
        'Visits to historical sites and museums that showcase South Africa’s rich heritage.',
      ],
      photos: [
        photo(citySkyline, 'Pretoria skyline at sunset with jacaranda trees in bloom'),
        photo(cityDino, 'A dinosaur sculpture in Pretoria'),
        photo(cityJacaranda, 'A jacaranda-lined avenue in Pretoria'),
      ],
    },
    airport: {
      title: 'OR Tambo International Airport',
      text: 'We expect most participants to arrive at OR Tambo International Airport on 19 March 2027. Shuttles will transport all attendees to their respective accommodation in Pretoria.',
    },
    venues: {
      institution: 'University of Pretoria, Hatfield Campus',
      institutionPhotos: [
        photo(uop1, 'A curved white building on the University of Pretoria campus'),
        photo(uop2, 'Students on the lawn in front of a sandstone University of Pretoria building'),
        photo(uop3, 'A modern glass and timber building at the University of Pretoria'),
      ],
      rooms: [
        { name: 'The Debate Rooms', photos: [photo(debateRooms, 'A debate room with wooden tiered seating')] },
        { name: 'General Assembly Auditorium', photos: [photo(auditorium1, 'The General Assembly Auditorium, wide view'), photo(auditorium2, 'The General Assembly Auditorium, curved seating')] },
      ],
    },
    hotel: {
      name: 'Anew Hotel, Hatfield',
      text: 'For 2027, official tournament accommodation will be at the Anew Hotel, Hatfield.',
      photos: [
        photo(hotelLobby, 'The Anew Hotel lobby lounge with a fireplace'),
        photo(hotelCorridor, 'Guests walking through the Anew Hotel corridor'),
        photo(hotelKitchen, 'A kitchenette at the Anew Hotel'),
        photo(hotelRoom, 'A bedroom at the Anew Hotel'),
        photo(hotelPool, 'The plunge pool at the Anew Hotel'),
      ],
    },
    stayDisclaimer: 'Prices may alter based on the site used to book and how close the booking is to the date. Distances are to the Hatfield Campus.',
    stayOptions: [
      stay('Airbnb', 'Various, depending on choice', '0 to 5', '400 to 1,500', 'varies'),
      stay('About Guest Lodge', '37 Anderson Street, Brooklyn', '0', '1,000', 'not provided'),
      stay('Unibrook B&B', '29 Brooks Street, Brooklyn', '0', '800', 'not provided'),
      stay('Bwelani Guest House', '270 Roper Street, Brooklyn', '0', '1,200', 'not provided'),
      stay('Brooklyn Place', '520 Mackenzie Street, Brooklyn', '0.4', '1,100', 'not provided'),
      stay('Hatfield Dorms', '1285 Arcadia Street, Hatfield', '0.9', '750', 'provided'),
      stay('Guest House @ 31 Murray', '31 Murray Street, Brooklyn', '1', '506', 'not provided'),
      stay('37 on Charles', 'Muckleneuk, Pretoria', '1', '800', 'not provided'),
      stay('Osbourne House', '82 Anderson Street, Brooklyn', '1', '1,099', 'not provided'),
      stay('Brooklyn Guesthouse', '132 Murray Street, Brooklyn', '1.1', '750', 'not provided'),
      stay('High Performance Central Hotel', 'Burnett Street, Koedoespoort', '1.2', '712', 'not provided'),
      stay('Petal Fair Cottage', '131 Murray Street, Brooklyn', '1.2', '900', 'not provided'),
      stay('Pumbas Backpackers', '1232 Arcadia Street, Hatfield', '1.2', '720', 'not provided'),
      stay('137 Murray Street Guesthouse', '137 Murray Street, Brooklyn', '1.3', '740', 'not provided'),
      stay('Micasa Su Casa Manor', '389 William Street, Brooklyn', '1.4', '950', 'not provided'),
      stay('12 on Brecher', '12 Brecher Street, Clydesdale', '1.6', '900', 'not stated'),
      stay('Kariebloom Guesthouse', '179 Marais Street, Brooklyn', '1.7', '800', 'not provided'),
      stay('1322 Backpackers International', '1322 Arcadia Street', '1.8', '450', 'not provided'),
      stay('Chancellors Court', '4131 Rupert Street, Brooklyn', '2.1', '700', 'not provided'),
      stay('Phiri Motel', '818 Stanza Bopape Street', '2.2', '600', 'provided'),
      stay('Blackwood Guesthouse', '192 Blackwood Street, Arcadia', '2.2', '700', 'provided'),
      stay('Valley Guesthouse', '107 Valley Road', '2.3', '1,000', 'not provided'),
      stay('The Wardrobe Guesthouse', '416 Farrel Street, Brooklyn', '2.4', '600', 'not provided'),
      stay('Pretoria House', '261 Main Street, Waterkloof', '2.8', '900', 'not provided'),
      stay('1202 on Cowgill', '1202 Cowgill, Queenswood', '3', '800', 'provided'),
      stay('Tshedza Guesthouse', '239 Silver Street, Muckleneuk', '3', '850', 'not provided'),
      stay('Pretoria Inn', '151 Soutpansberg Road, Riviera', '3.2', '670', 'not provided'),
      stay('Eleventh Avenue Guesthouse and Conferencing', '325 11de Laan, Gezina', '3.9', '850', 'provided'),
    ],
    visa: {
      visaFree: ['Botswana', 'Eswatini', 'Ghana', 'Kenya', 'Lesotho', 'Mozambique', 'Namibia', 'Rwanda', 'Tanzania', 'Zambia', 'Zimbabwe'],
      note: 'Other African countries are eligible for an e-Visa. We have a team dedicated to supporting you with the visa application.',
      evisaIntro: 'Processing time for your South Africa e-Visa depends on the processing time and visa type you choose. For the 90-day, single entry visa:',
      evisaOptions: [
        { label: 'Standard processing', processing: 'Up to 6 business days', price: 'US$90' },
        { label: 'Rush processing', processing: 'Up to 4 business days', price: 'US$135' },
        { label: 'Super rush processing', processing: 'Up to 2 business days', price: 'US$180' },
      ],
    },
    socialEvents: [
      {
        title: 'Opening Ceremony & Cultural Night',
        description: 'As a tradition at regional majors, we will organise a Cultural Night where delegates can share their culture through traditional products, snacks, drinks and games, as well as present songs and dance from their nations. This happens during the opening ceremony, with a lot of activities planned for the night.',
        photos: [photo(socialCultural, 'Delegates posing together at a social event'), photo(socialLaser, 'Debaters playing laser tag')],
      },
      {
        title: 'BBQ (Braai) Break Party',
        description: 'A braai party for the Break Announcements, so you can chill with your friends and enjoy the party while waiting to hear who has broken.',
        photos: [photo(braai1, 'Sausages and meat grilling on a braai'), photo(braai2, 'A coiled boerewors sausage on a braai grid')],
      },
      {
        title: 'Excursion Day',
        description: 'A day to visit the beautiful places of Pretoria, including historical sites and museums that showcase South Africa’s rich heritage.',
        photos: [photo(cityJacaranda, 'A jacaranda-lined avenue in Pretoria'), photo(cityDino, 'A dinosaur sculpture in Pretoria')],
      },
      {
        title: 'Grand Finale Banquet & Closing Ceremony',
        description: 'This is a black-tie event. We expect all participants to be dressed in formal wear that meets the black-tie standard.',
        photos: [photo(banquetTrophies, 'Trophies and medals on display'), photo(banquet1, 'A delegate at the banquet'), photo(banquet2, 'A delegate in a suit at the banquet'), photo(banquet3, 'A delegate in a dark jacket at the banquet'), photo(banquet4, 'A smiling delegate at the banquet')],
      },
    ],
    introPhotos: [
      photo(introLawn, 'Debaters preparing outdoors on a lawn'),
      photo(introSpeaker, 'A speaker addressing a room'),
      photo(introBlazer, 'A debater in a blue blazer speaking at a lectern'),
    ],
    heroPhotos: [
      photo(heroA, 'Three debaters at a desk during a round'),
      photo(heroB, 'Three debaters in school uniform writing notes'),
      photo(heroC, 'Three debaters taking notes in a lecture hall'),
      photo(heroD, 'Debaters preparing together in a lecture hall'),
    ],
    stats: [
      { value: 7, label: 'days of debating and community' },
      { value: 100, label: 'team cap' },
      { value: 6, label: 'preliminary rounds' },
      { value: 11, label: 'visa-free countries' },
    ],
    marquee: [
      photo(heroA, 'Three debaters at a desk during a round'),
      photo(socialCultural, 'Delegates posing together at a social event'),
      photo(introLawn, 'Debaters preparing outdoors on a lawn'),
      photo(citySkyline, 'Pretoria skyline at sunset'),
      photo(socialLaser, 'Debaters playing laser tag'),
      photo(heroC, 'Three debaters taking notes in a lecture hall'),
      photo(cityJacaranda, 'Jacaranda-lined avenue in Pretoria'),
      photo(introBlazer, 'A debater speaking at a lectern'),
      photo(banquetTrophies, 'Trophies and medals on display'),
      photo(heroB, 'Three debaters in school uniform'),
    ],
  },
}
