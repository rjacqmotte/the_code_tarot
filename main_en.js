

// return an array of 3 randoms numbers from 0 to 21, all different.
// it is used to choose the 3 cards among the 22 arcanes:
// one for the past, one for the present, one for the future.
const randomOfThreeIndex = () => {
    const arrayOfIndex = [];
    while (arrayOfIndex.length < 3) {
        let newIndex = Math.floor(Math.random()*22);
        while (arrayOfIndex.includes(newIndex)) {
            newIndex = Math.floor(Math.random()*22);
        }
      arrayOfIndex.push(newIndex);
    }
    return arrayOfIndex;  
};

// take ms, time in milli second. return promise after time defined
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// compil and log the message to the terminal. return null.
// take an array of 3 numbers from 0 to 21 and the tarot game (an array of object).
// async function for gestion of delay and use of "await" 
const messageWriter = async (arrayOfThreeIndex, tarotGame) => {
  
  // ++++ DEFINE LOCAL FUNCTION ++++

  // log a introduction message. return null. take no argument.
  const introductionMessage = () => {
    console.log("Hello : )");
    console.log("Take a moment to think about your demand.");
    console.log("... What do you want for you, just now? ...");
    console.log("... Focus on your demand ...");
    console.log("... Breath in... Breath out ...");
    console.log("... Feel the air in and out of your body ...");
    console.log("... Feel the flow of data in your CPU ...");
    console.log("... Feel the galaxy dancing slowly around itself ...");
    console.log("... Now your 3 cards, representation of ...  - the PAST - the PRESENT - the FUTURE -");
    console.log("");
  };

  // log the presentation of the PAST card.
  // take an arrayOfIndex and tarot game (array of object). return null.
  // take the FIRST index of the array, log number, name and desrciption of the object.
  const pastCardPresentation = (arrayOfThreeIndex, tarotGame) => {
    console.log("");
    console.log("---------------------------------------");
    console.log(' --- the PAST card ---');
    console.log(` --- ${tarotGame[arrayOfThreeIndex[0]].number}. ${tarotGame[arrayOfThreeIndex[0]].name} ---`);
    console.log(` --- ${tarotGame[arrayOfThreeIndex[0]].description} ---`);
    console.log("");
  };
  
  // log the presentation of the PRESENT card.
  // take an arrayOfIndex and tarot game (array of object). return null.
  // take the SECOND index of the array, log number, name and desrciption of the object.
  const presentCardPresentation = (arrayOfThreeIndex, tarotGame) => {
    console.log(' --- the PRESENT card ---');
    console.log(` --- ${tarotGame[arrayOfThreeIndex[1]].number}. ${tarotGame[arrayOfThreeIndex[1]].name} ---`);
    console.log(` --- ${tarotGame[arrayOfThreeIndex[1]].description} ---`);
    console.log("");
  };
  
  // log the presentation of the FUTUR card.
  // take an arrayOfIndex and tarot game (array of object). return null.
  // take the THIRD index of the array, log number, name and description of the object.
  const futurCardPresentation = (arrayOfThreeIndex, tarotGame) => {
    console.log(' --- the FUTUR card ---');
    console.log(` --- ${tarotGame[arrayOfThreeIndex[2]].number}. ${tarotGame[arrayOfThreeIndex[2]].name} ---`);
    console.log(` --- ${tarotGame[arrayOfThreeIndex[2]].description} ---`);
    console.log("---------------------------------------");
    console.log("");
  };

  // log the signification message of all cards.
  // take an arrayOfIndex and tarot game (array of object). return null.
  // take the FIRST index of the array and log "past" message,
  // the SECOND index and log "present" message, the THIRD index and log "future" message. 
  const significationMessage = (arrayOfThreeIndex, tarotGame) => {
    console.log(" ");
    console.log("---------------------------------------");
    console.log("--- These cards could say : ");
    console.log("---------------------------------------");
    console.log(tarotGame[arrayOfThreeIndex[0]].past);
    console.log(tarotGame[arrayOfThreeIndex[1]].present);
    console.log(tarotGame[arrayOfThreeIndex[2]].future);
    console.log("---------------------------------------");
    console.log("");
  };

  // // log a conclusion message. return null. take no argument.
  const conclusionMessage = () => {
    console.log("");
    console.log("---     THIS IS THE WAY ...   ---");
    console.log("--- ... of the CODE TAROT.    ---");
  };

  // ++++ MAIN OF FUNCTION ++++



  // delay of 1500ms between each message
  introductionMessage();
  await wait(1500);
  pastCardPresentation(arrayOfThreeIndex, tarotGame);
  await wait(1500);
  presentCardPresentation(arrayOfThreeIndex, tarotGame);
  await wait(1500);
  futurCardPresentation(arrayOfThreeIndex, tarotGame);
  await wait(1500);
  significationMessage(arrayOfThreeIndex, tarotGame);
  await wait(1500);
  conclusionMessage();
};

// the tarot game is an array of 22 objects
const theCodeTarot = [
  {
    "number": 1,
    "name": "The Hacker",
    "description": "The code artisan, terminal magician, creator of possibilities.",
    "past": "You laid the groundwork, even without fully understanding.",
    "present": "An opportunity appears—time to take action.",
    "future": "A fresh start is on the horizon, full of potential."
  },
  {
    "number": 2,
    "name": "The Data Priestess",
    "description": "Silent keeper of archives, intuition wired into the system.",
    "past": "Hidden knowledge quietly guided your steps.",
    "present": "Trust your intuition and observe quietly.",
    "future": "Revelations will emerge if you remain still and listen."
  },
  {
    "number": 3,
    "name": "The UI Designer",
    "description": "Visual architect, brings harmony and structure to user chaos.",
    "past": "Your creativity gave form to your intentions.",
    "present": "Bring beauty and clarity to what you’re building.",
    "future": "A wave of inspiration will refine your vision."
  },
  {
    "number": 4,
    "name": "The CTO",
    "description": "Master of systems, foundation-layer strategist and builder.",
    "past": "You established a strong structure that still supports you.",
    "present": "Stay grounded and lead with authority.",
    "future": "Order will be required—build solid frameworks ahead."
  },
  {
    "number": 5,
    "name": "The Open Source Mentor",
    "description": "Guardian of legacy code, teacher of protocols and ethics.",
    "past": "A teacher or codebase from the past shaped your path.",
    "present": "Share your wisdom and respect the foundations.",
    "future": "A guide will appear, or you will become one."
  },
  {
    "number": 6,
    "name": "The Fork",
    "description": "Diverging paths—pull request or hard reset?",
    "past": "A choice defined your journey until now.",
    "present": "Decide which branch you will follow.",
    "future": "A major decision will shape your next version."
  },
  {
    "number": 7,
    "name": "The Debugger",
    "description": "Speed and control—refactor in motion.",
    "past": "Your drive has carried you far, despite bugs.",
    "present": "Stay focused—navigate through chaos.",
    "future": "With precision, you’ll move past the next challenge."
  },
  {
    "number": 8,
    "name": "The Compiler",
    "description": "Inner strength, clean build, quiet power.",
    "past": "You endured, refactored, and kept building.",
    "present": "Balance raw code and graceful execution.",
    "future": "You’ll overcome with silent resilience."
  },
  {
    "number": 9,
    "name": "The SysAdmin",
    "description": "The lone watcher—logs everything, responds when needed.",
    "past": "Solitude brought insight you now rely on.",
    "present": "Step back—observe system behaviors.",
    "future": "Clarity comes after this pause."
  },
  {
    "number": 10,
    "name": "The Mainframe",
    "description": "Cycles shift—old versions crash, new ones boot.",
    "past": "Events turned unexpectedly, changing your trajectory.",
    "present": "You're at the mercy of shifting systems.",
    "future": "Change is coming—prepare to reboot."
  },
  {
    "number": 11,
    "name": "The Firewall",
    "description": "Guardian of thresholds—rules, resistance, resilience.",
    "past": "You had to assert boundaries to protect your integrity.",
    "present": "Stand firm against pressure or attack.",
    "future": "You’ll need courage to block what’s coming."
  },
  {
    "number": 12,
    "name": "The Glitch",
    "description": "Disruption becomes clarity—hang upside down to see the truth.",
    "past": "You were stalled, but insight was gained.",
    "present": "Surrender control—see things from a new angle.",
    "future": "Pause will lead to revelation."
  },
  {
    "number": 13,
    "name": "The Format",
    "description": "End of the cycle—wipe disk, start clean.",
    "past": "Something ended to make way for what’s now.",
    "present": "Let go—this phase must be cleared.",
    "future": "A reset will clear old data for a new program."
  },
  {
    "number": 14,
    "name": "The Synthesizer",
    "description": "Balance of code and design—merge branches with grace.",
    "past": "You learned to mix opposing elements.",
    "present": "Seek harmony between logic and emotion.",
    "future": "Integration will bring growth."
  },
  {
    "number": 15,
    "name": "The Root Access",
    "description": "Temptation, power, and dependencies—use wisely.",
    "past": "You followed a powerful urge or shortcut.",
    "present": "Beware of what you give control to.",
    "future": "Check your permissions—freedom or lock-in?"
  },
  {
    "number": 16,
    "name": "The Crash",
    "description": "The tower falls—destruction makes room for truth.",
    "past": "A breakdown changed everything.",
    "present": "Something unstable is about to collapse.",
    "future": "After the crash, a more honest structure can rise."
  },
  {
    "number": 17,
    "name": "The Signal",
    "description": "Hope flickers—connection restored.",
    "past": "A tiny hope kept your project alive.",
    "present": "The signal is strong—keep following it.",
    "future": "What you’ve dreamed of is drawing near."
  },
  {
    "number": 18,
    "name": "The Proxy",
    "description": "Illusions, redirects—nothing is as it seems.",
    "past": "Confusion clouded your understanding.",
    "present": "Don’t trust appearances—dig deeper.",
    "future": "Mysteries will surface from the shadows."
  },
  {
    "number": 19,
    "name": "The Upload",
    "description": "Truth, exposure, shared brilliance.",
    "past": "You stepped into visibility and shone.",
    "present": "Let yourself be seen—your work matters.",
    "future": "Recognition and success will follow openness."
  },
  {
    "number": 20,
    "name": "The Ping",
    "description": "Awakening, call to action—echo from the void.",
    "past": "A signal awakened you to a higher purpose.",
    "present": "Something greater is calling—answer it.",
    "future": "A reckoning is near—rise to the challenge."
  },
  {
    "number": 21,
    "name": "The Merge",
    "description": "Completion, unity—branches merge, project ships.",
    "past": "You’ve built toward this convergence.",
    "present": "Celebrate a whole system coming together.",
    "future": "All pieces will align—the release is near."
  },
  {
    "number": 22,
    "name": "The Null",
    "description": "The wildcard—neither zero nor one, both beginning and beyond.",
    "past": "You embraced uncertainty and chaos.",
    "present": "Expect the unexpected—anything can happen.",
    "future": "The future is undefined—choose your path."
  }
];

// ++++ MAIN ++++

const threeCards = randomOfThreeIndex();
messageWriter(threeCards, theCodeTarot);
