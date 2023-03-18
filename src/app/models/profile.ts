import {UserTypesEnum} from "./enums";

export class Profile {
  uid: string = ''
  name: string = ''
  last_name: string = ''
  type: UserTypesEnum = UserTypesEnum.none
  public email: string = ''

  constructor() {
  }

  new(uid: string, type: UserTypesEnum, email: string, name: string, last_name: string) {
    this.uid = uid
    this.name = name
    this.last_name = last_name
    this.type = type
    this.email = email
  }


}
