import { IncomingHttpHeaders } from "http";

export interface todoDataType {
    titles: string;
    completed: boolean;
    id: number;
    userId: IncomingHttpHeaders;
  }