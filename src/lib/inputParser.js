export default class InputParser {

  isAskingForProgress(text) {
    const pattern = '/progress';
    return text.match(pattern);
  }

  isAskingForGreeting(text) {
    const pattern = '/start';
    return text.match(pattern);
  }
}
