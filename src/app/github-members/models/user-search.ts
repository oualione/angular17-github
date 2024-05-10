import { User } from "./user";

export interface UserSearch {
    "total_count": number,
  "incomplete_results": boolean,
  "items": User[]
}
