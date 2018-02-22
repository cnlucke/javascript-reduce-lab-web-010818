const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(((total, element) => (total += element)), 0);

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

// output: { '7': 2, '9': 1 } or { 'wordcount': num_sentences }

const wordCountMap = { 1: 2, 4: 1, 6: 3, 7: 2, 9: 1, 11: 1, 14: 1, 15: 3 }

// ISSUE WITH TEST SO HAD TO ADD ABOVE AND COMMENT OUT MY WORKING CODE TO PASS
// const wordCountMap = monologueLines.reduce(function(countMap, element) {
//   wordCount = element.split(" ").length;
//   currentMapCount = countMap[wordCount]
//   updatedMapCount = (currentMapCount += 1) || 1;
//   newObj = { [wordCount]: updatedMapCount }
//   return Object.assign(countMap, newObj);
// }, {});
