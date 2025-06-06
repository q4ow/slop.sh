export interface ProfileInfoProps {
  name: string;
  githubUsername?: string | null;
  title: string;
  bio: string;
  dateOfBirth: Date;
  avatarUrl: string;
  links: {
    github?: string;
    email?: string;
    website?: string;
    kofi?: string;
    discord?: string;
  };
}
