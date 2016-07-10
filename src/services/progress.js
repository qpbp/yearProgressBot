export default class Progress {

  constructor() {}

  makeProgressString(percent) {

    if (!percent) {
      throw new Error('Miss argument');
    }
    if (percent < 0 || percent > 100) {
      throw new Error('Value should be beetween 0 and 100');
    }

    if (typeof percent != 'number') {
      throw new Error('Should be a number');
    }
    //max the 15 blocks
    const max = 15;
    let progress = [];
    //how much blocks in percents
    percent = (Math.ceil(percent) * max) / 100;
    for (let i = 0; i < max; i++) {
      if (i < percent) { progress.push('▓'); } else { progress.push('░'); }
    }
    //combine string from array
    progress = progress.join().replace(/\,/g, '');
    return progress;

  }

}