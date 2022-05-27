// TODO: make it work

export function onSignIn(googleUser: any): object {
  return googleUser.getBasicProfile();
}