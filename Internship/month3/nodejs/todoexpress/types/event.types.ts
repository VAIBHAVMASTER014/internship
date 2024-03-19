import { IncomingHttpHeaders } from "http";

export interface todoDataType {
    title: string;
    completed: boolean;
    id: number;
    userId: IncomingHttpHeaders;
  }

  export interface clientDataType{
    title: string;
    completed: boolean;
  }