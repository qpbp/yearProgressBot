import Time from '../services/time';
import Progress from '../services/progress';

const time = new Time();
const progress = new Progress();

export default class Command {
  constructor() {}

  getGreeting(message, bot) {
    bot.sendMessage(message.from, 'Hi, there! It is nice to see you here, ${message.user.firstName} !');
  }

  getProgress(message, bot) {
    let yearPercents = time.getYearProgress();
    let yearProgress = progress.makeProgressString(yearPercents);

    let monthPercents = time.getMonthProgress();
    let monthProgress = progress.makeProgressString(monthPercents);

    let dayPercents = time.getDayProgress();
    let dayProgress = progress.makeProgressString(dayPercents);

    let text =
      'Year:    ' + yearProgress + ' ' + yearPercents + '%\n' +
      'Month: ' + monthProgress + ' ' + monthPercents + '%\n' +
      'Day:     ' + dayProgress + ' ' + dayPercents + '%\n';

    bot.sendMessage(message.from, text);
  }

  getHelp(message, bot) {
    bot.sendMessage(message.from, 'Call the /progress to see how many time you wasted');
  }

}