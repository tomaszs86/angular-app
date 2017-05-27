import { Session } from "app/session/session";

export interface Event {
id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: {
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  sessions: Session[]; 
}

