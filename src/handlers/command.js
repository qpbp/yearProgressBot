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
    const yearPercents = time.getYearProgress();
    const yearProgress = progress.makeProgressString(yearPercents);

    const monthPercents = time.getMonthProgress();
    const monthProgress = progress.makeProgressString(monthPercents);

    const dayPercents = time.getDayProgress();
    const dayProgress = progress.makeProgressString(dayPercents);

    const text =
      'Year:    ' + yearProgress + ' ' + yearPercents + '%\n' +
      'Month: ' + monthProgress + ' ' + monthPercents + '%\n' +
      'Day:     ' + dayProgress + ' ' + dayPercents + '%\n';

    bot.sendMessage(message.from, text);
  }

  getHelp(message, bot) {
    bot.sendMessage(message.from, 'Call the /progress to see how much time you wasted');
  }

}