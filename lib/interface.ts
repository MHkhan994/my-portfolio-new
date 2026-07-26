export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
  bg: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}
