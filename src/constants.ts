import { Program, Facility, TeamMember } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    ageGroup: '1.5 – 2.5 years',
    description: 'A gentle introduction to the school environment with focus on sensory play and social interaction.',
    icon: 'Baby',
    color: 'bg-frolic-soft-pink text-frolic-pink'
  },
  {
    id: 'nursery',
    name: 'Nursery',
    ageGroup: '2.5 – 3.5 years',
    description: 'Developing language skills, motor coordination, and basic social habits through fun activities.',
    icon: 'Palette',
    color: 'bg-frolic-soft-yellow text-frolic-yellow'
  },
  {
    id: 'lkg',
    name: 'LKG',
    ageGroup: '3.5 – 4.5 years',
    description: 'Introduction to phonics, numbers, and structured play to build a strong foundation.',
    icon: 'BookOpen',
    color: 'bg-frolic-soft-blue text-frolic-blue'
  },
  {
    id: 'ukg',
    name: 'UKG',
    ageGroup: '4.5 – 5.5 years',
    description: 'Preparing children for primary school with advanced literacy, numeracy, and creative thinking.',
    icon: 'GraduationCap',
    color: 'bg-frolic-soft-green text-frolic-green'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'smart-class',
    title: '',
    description: 'Interactive learning spaces with modern audio-visual aids.',
    image: '../images/IMG-20260323-WA0008.jpg.jpeg'
  },
  {
    id: 'indoor-play',
    title: 'Indoor Play Area',
    description: 'Safe and vibrant space for physical activities regardless of weather.',
    image: '../images/IMG-20260323-WA0007.jpg.jpeg'
  },
  {
    id: 'outdoor-play',
    title: 'Outdoor Playground',
    description: 'Spacious area with child-safe equipment for active play.',
    image: 'https://picsum.photos/seed/playground/800/600'
  },
  {
    id: 'cctv',
    title: 'CCTV Surveillance',
    description: '24/7 monitoring to ensure the highest safety for your children.',
    image: 'https://picsum.photos/seed/security/800/600'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Mrs. Sarah Johnson',
    role: 'Principal',
    experience: '15+ Years',
    image: '../images/peopleicon.png'
  },
  {
    id: '2',
    name: 'Ms. Priya Sharma',
    role: 'Senior Teacher',
    experience: '8 Years',
    image: '../images/peopleicon.png'
  },
  {
    id: '3',
    name: 'Ms. Anita Raj',
    role: 'Activity Coordinator',
    experience: '5 Years',
    image: 'src/peopleicon.png'
  }
];



export const GALLERY_IMAGES = [
  { id: 1, src: '../images/IMG-20260323-WA0010.jpg.jpeg' },
  { id: 2, src: '../images/IMG-20260323-WA0014.jpg.jpeg' },
  { id: 3, src: '../images/IMG-20260323-WA0016.jpg.jpeg' },
  { id: 4, src: '../images/IMG-20260323-WA0022.jpg.jpeg' },
  { id: 5, src: '../images/IMG-20260323-WA0023.jpg.jpeg' },
  { id: 6, src: '../images/IMG-20260323-WA0019.jpg.jpeg' },
  { id: 7, src: '../images/IMG-20260323-WA0018.jpg.jpeg' },
  { id: 8, src: '../images/IMG-20260323-WA0017.jpg.jpeg' },
];