import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  inviter_id: string;
  invitee_email: string;
  company_id: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  inviter_id?: string;
  invitee_email?: string;
  company_id?: string;
  status?: string;
}
