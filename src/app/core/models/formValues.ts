import { authMethodEnum } from "../enums/authMethod";

export interface AuthFormValues{
  email: string,
  password: string,
  authMethod: authMethodEnum
}