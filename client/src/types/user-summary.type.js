import type { UserId } from './user-id.type';

export interface UserSummary {
  +id: UserId;
  +name: string;
}
