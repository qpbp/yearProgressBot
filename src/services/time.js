export default class Time {

  constructor() {

    this.currentYear = new Date().getFullYear();
    this.startDate = new Date(this.currentYear, 0, 1);
  }

  // all function return values like 0 to 100
  getYearProgress() {
    //days in the current year
    let yearDays = Math.ceil((new Date(this.currentYear + 1, 0, 1) - this.startDate) / 8.64e7);
    //how many days passed from year begining
    let passedDays = Math.ceil((new Date() - this.startDate) / 8.64e7); // 31
    return Math.ceil((passedDays / yearDays) * 100);
  }

  getMonthProgress() {
    let now = new Date();
    //get month index
    let currentMonth = now.getMonth();
    //get month "length"
    let daysInMonth = new Date(this.currentYear, currentMonth, 0).getDate();
    //how many days passed from month begining
    let daysSinceStartOfMonth = now.getDate() - 1;

    return Math.ceil((daysSinceStartOfMonth / daysInMonth) * 100);

  }

  getDayProgress() {
    let now = new Date();
    let hoursDay = 24;
    let currentHours = now.getHours() || 1;
    return Math.ceil((currentHours / hoursDay) * 100);
  }

}
