// ------------------------------------------------------------------
//  Edit everything about the invitation here. No other file needs
//  to change for names, dates, times or venue.
// ------------------------------------------------------------------

const DATE = { en: '3 December 2026', hi: '३ दिसंबर २०२६' }

export const wedding = {
  groom: 'Shubham',
  bride: 'Meetanshi',

  // Parents' lines shown under each name. Leave as '' to hide.
  // TODO: replace the bracketed placeholders with the real parents' names.
 groomInfo: {
  en: 'Son of Late Mr. Bhagwansingh Shakywar & Mrs. Gyanshree Shakywar',
  hi: 'स्वर्गीय श्री भगवानसिंह शक्यवार एवं श्रीमती ज्ञानश्री शक्यवार के सुपुत्र',
},

brideInfo: {
  en: 'Daughter of Mr. Rajesh Satpute & Mrs. Jayshree Satpute',
  hi: 'श्री राजेश सातपुते एवं श्रीमती जयश्री सातपुते की सुपुत्री',
},
  // Optional Ganesh ji picture: put a transparent PNG at public/ganesh.png
  // (a drawn Ganesh ji is shown until you add one)
  ganeshImage: '/ganesh.png',

  weddingDate: DATE,
  weekday: { en: 'Thursday', hi: 'गुरुवार' },

  // Countdown target (IST)
  countdownTarget: '2026-12-03T10:00:00+05:30',

  // Save-the-date calendar file (UTC: 8:00 AM to 11:00 PM IST)
  calendar: { start: '20261203T023000Z', end: '20261203T173000Z' },

  venue: {
    name: { en: 'Shree Mangal Parinay Marriage Garden', hi: 'श्री मंगल परिणय मैरिज गार्डन' },
    address: { en: 'MR10, Indore, Madhya Pradesh', hi: 'एम.आर. 10, इंदौर, मध्य प्रदेश' },
    mapsQuery: 'Shree Mangal Parinay Marriage Garden MR10 Indore',
  },

  // Optional background music: put a file at public/music.mp3
  music: '/music.mp3',

  // Optional couple photo: put a file at public/couple.jpg
  photo: '/couple.jpeg',

  events: [
    { id: 'matapujan', icon: 'diya', name: { en: 'Mata Pujan', hi: 'माता पूजन' }, date: DATE, time: { en: '8:00 AM', hi: 'सुबह ८:०० बजे' } },
    { id: 'ring', icon: 'ring', name: { en: 'Ring Ceremony', hi: 'रिंग सेरेमनी' }, date: DATE, time: { en: '10:00 AM', hi: 'सुबह १०:०० बजे' } },
    { id: 'haldi', icon: 'haldi', name: { en: 'Haldi Ceremony', hi: 'हल्दी रस्म' }, date: DATE, time: { en: '11:00 AM',hi: 'सुबह ११:०० बजे' } },
    { id: 'barat', icon: 'barat', name: { en: 'Baraat', hi: 'बारात' }, date: DATE, time: { en: '4:00 PM', hi: 'शाम ४:०० बजे' } },
    { id: 'reception', icon: 'glass', name: { en: 'Reception', hi: 'रिसेप्शन' }, date: DATE, time: { en: '7:00 PM onwards', hi: 'शाम ७:०० बजे से' } },
  ],
}

export const t = {
  en: {
    tapToOpen: 'Tap to open',
    ganesh: '|| Shree Ganeshay Namah ||',
    welcome: "With the blessings of our elders and the love of our families, we invite you to share in our joyous celebration.",
    scroll: 'Scroll',
    blessing:
      'As they begin their journey together in faith and love, we thank you for being part of this blessed occasion.',
    scratchTitle: 'Scratch to Reveal',
    scratchHint: 'Use your finger to scratch the heart',
    invited: "You're Invited!",
    foreverBegins: 'Our forever begins',
    saveDate: 'Save the date',
    celebrations: 'The Celebrations',
    countdown: 'Counting down to forever',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    venue: 'Venue',
    openMaps: 'Open in Google Maps',
    withLove: 'With love and blessings',
    seeYou: 'We can’t wait to celebrate with you',
    lang: 'हिन्दी',
    musicOn: 'Play music',
    musicOff: 'Mute music',
    photoAlt: 'Shubham and Meetanshi',
  },
  hi: {
    tapToOpen: 'खोलने के लिए छुएँ',
    ganesh: '|| श्री गणेशाय नमः ||',
    welcome: "अपने बड़ों के आशीर्वाद और परिवारजनों के स्नेह के साथ, हम आपको अपने इस शुभ एवं मंगलमय विवाह उत्सव में सादर आमंत्रित करते हैं।",
    scroll: 'नीचे देखें',
    blessing:
      'प्रेम और विश्वास के साथ जीवन की नई यात्रा शुरू करते हुए, इस मंगल अवसर पर आपकी उपस्थिति के लिए हम आपके आभारी हैं।',
    scratchTitle: 'खुरचकर देखें',
    scratchHint: 'दिल पर उँगली से खुरचें',
    invited: 'आप आमंत्रित हैं!',
    foreverBegins: 'हमारा साथ यहीं से शुरू',
    saveDate: 'तारीख सहेजें',
    celebrations: 'समारोह',
    countdown: 'शुभ घड़ी में बाकी समय',
    days: 'दिन',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',
    venue: 'स्थान',
    openMaps: 'गूगल मैप्स में खोलें',
    withLove: 'प्रेम और आशीर्वाद सहित',
    seeYou: 'आपके साथ यह खुशी बाँटने का इंतज़ार है',
    lang: 'English',
    musicOn: 'संगीत चलाएँ',
    musicOff: 'संगीत बंद करें',
    photoAlt: 'शुभम और मीतांशी',
  },
}
