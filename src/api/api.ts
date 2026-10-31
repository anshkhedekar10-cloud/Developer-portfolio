import axios from "axios";

const API_URL = "https://developer-portfolio-api-i460.onrender.com";

//Project

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

export const getProjects = async (): Promise<Project[]> => {
  const response = await axios.get<Project[]>(
    `${API_URL}/api/projects`
  );

  return response.data;
};


//Profile
export interface Profile {
  name: string;
  role: string;
  description: string;
  skills: string[];
}

export const getProfile = async (): Promise<Profile> => {
  const response = await axios.get<Profile>(
    `${API_URL}/api/profile`
  );

  return response.data;
};

//Contact


export interface Contact {
  name: string;
  email: string;
  message: string;
}

export const sendContact = async (
  contact: Contact
): Promise<void> => {
  await axios.post(
    `${API_URL}/api/contact`,
    contact
  );
};