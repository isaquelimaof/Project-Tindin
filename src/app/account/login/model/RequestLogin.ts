export class RequestLogin {
  email!: string;
  password!: string;
  acesso!: boolean;
  token!: string;
  user!: {_id: string};
  jwt!: string;
}
