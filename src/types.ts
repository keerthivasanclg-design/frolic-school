export interface Program {
  id: string;
  name: string;
  ageGroup: string;
  description: string;
  icon: string;
  color: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
}

// export interface Testimonial {
//   id: string;
//   parentName: string;
//   childName: string;
//   content: string;
//   rating: number;
// }
