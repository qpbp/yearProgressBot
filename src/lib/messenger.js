import TelegramBot from 'node-telegram-bot-api';
import Message from './message';
import config from '../config';
import InputParser from './inputParser';
import handlers from '../handlers';

const inputParser = new InputParser();

export default class Messenger {

  constructor() {
    if (process.env.NODE_ENV === 'production') {
      this.bot = new TelegramBot(config.telegram.token, { webHook: { port: config.telegram.port, host: config.telegram.host } });
      this.bot.setWebHook(config.telegram.externalUrl + ':443/bot' + config.telegram.token);
    } else {
      this.bot = new TelegramBot(config.telegram.token, { polling: true });
    }

  }

  listen() {
    this.bot.on('text', this.handleText.bind(this));
    return Promise.resolve();
  }

  handleText(msg) {
    //format the message
    const message = new Message(Message.mapMessage(msg));
    const text = message.text;

    //checking if asked "/progress"
    if (inputParser.isAskingForProgress(text)) {
      return handlers.command.getProgress(message, this.bot);
    }

    //checking if asked "/start"
    if (inputParser.isAskingForGreeting(text)) {
      return handlers.command.getGreeting(message, this.bot);
    }

    // default - send message with help
    return handlers.command.getHelp(message, this.bot);
  }
}
