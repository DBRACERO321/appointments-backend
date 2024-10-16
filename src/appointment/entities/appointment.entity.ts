export class Appointment {
    constructor(
      public id: string,
      public clientFirstName: string,
      public clientLastName: string,
      public date: string,
      public startTime: string,
      public endTime: string,
    ) {}
  }