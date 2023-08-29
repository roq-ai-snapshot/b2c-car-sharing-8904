import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  invitee_email: yup.string().required(),
  status: yup.string().required(),
  inviter_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
