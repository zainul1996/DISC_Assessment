console.log("v3")
const inData = [
  [["Easy going, Agreeable",
    "Trusting, Believing in others",
    "Adventurous, Risk Taker",
    "Tolerant, Respectful"], ["S", "I", "-", "C"], ["S", "I", "D", "C"]

  ],
  [
    ["Soft spoken, Reserved",
      "Optimistic, Visionary",
      "Center of attention, Sociable",
      "Peacemaker, Bring harmony"], ["C", "D", "-", "S"], ["-", "D", "I", "S"]
  ],
  [
    ["Encourage others",
      "Strive for perfection",
      "Be part of the team",
      "Want to establish goals"], ["I", "-", "-", "D"], ["I", "C", "S", "-"]
  ],
  [
    ["Become frustrated",
      "Keep my feelings inside",
      "Tell my side of the story",
      "Stand up to opposition"], ["C", "S", "-", "D"], ["C", "S", "I", "D"]
  ],
  [
    ["Lively, Talkative",
      "Fast paced, Determined",
      "Try to maintain balance",
      "Try to follow the rules"], ["I", "D", "S", "-"], ["-", "D", "S", "C"]
  ],
  [
    ["Manage time efficiently",
      "Often rushed, Feel pressured",
      "Social things are important",
      "Like to finish what I start"], ["C", "D", "I", "S"], ["-", "D", "I", "S"]
  ],
  [
    ["Resist sudden change",
      "Tend to over promise",
      "Withdraw under pressure",
      "Not afraid to fight"], ["S", "I", "-", "-"], ["-", "I", "C", "D"]
  ],
  [
    ["A good encourager",
      "A good listener",
      "A good analyzer",
      "A good delegator"], ["I", "S", "C", "D"], ["I", "S", "C", "D"]
  ],
  [
    ["Results are what matter",
      "Do it right, Accuracy counts",
      "Make it enjoyable",
      "Let's do it together"], ["D", "C", "-", "-"], ["D", "C", "I", "S"]
  ],
  [
    ["Will do without, Self-controlled",
      "Will buy on impulse",
      "Will wait, No pressure",
      "Will spend on what I want"], ["-", "D", "S", "I"], ["C", "D", "S", "-"]
  ],
  [
    ["Friendly, Easy to be with",
      "Unique, Bored by routine",
      "Actively change things",
      "Want things exact"], ["S", "-", "D", "C"], ["-", "I", "D", "C"]
  ],
  [
    ["Non-confrontational, Giving in",
      "Overloaded with details",
      "Changes at the last minute",
      "Demanding, Abrupt"], ["-", "C", "I", "D"], ["S", "-", "I", "D"]
  ],
  [
    ["Want advancement",
      "Satisfied with things, Content",
      "Openly display feelings",
      "Humble, Modest"], ["D", "S", "I", "-"], ["D", "-", "-", "C"]
  ],
  [
    ["Cool, Reserved",
      "Happy, Carefree",
      "Pleasing, Kind",
      "Bold, Daring"], ["C", "I", "S", "D"], ["C", "I", "-", "D"]
  ],
  [
    ["Spend quality time with others",
      "Plan for the future, Be prepared",
      "Travel to new adventures",
      "Receive rewards for goals met"], ["S", "C", "I", "D"], ["S", "-", "I", "D"]
  ],
  [
    ["Rules need to be challenged",
      "Rules make it fair",
      "Rules make it boring",
      "Rules make it safe"], ["-", "C", "I", "S"], ["D", "-", "I", "S"]
  ],
  [
    ["Education, Culture",
      "Achievements, Awards",
      "Safety, Security",
      "Social, Group Gatherings"], ["-", "D", "S", "I"], ["C", "D", "S", "-"]
  ],
  [
    ["Take charge, Direct approach",
      "Outgoing, Enthusiastic",
      "Predictable, Consistent",
      "Cautious, Careful"], ["D", "-", "-", "C"], ["D", "I", "S", "-"]
  ],
  [
    ["Not easily defeated",
      "Will do as told, Follows leader",
      "Excitable, Cheerful",
      "Want things orderly, Neat"], ["D", "S", "I", "-"], ["D", "-", "I", "C"]
  ],
  [
    ["I will lead them",
      "I will follow through",
      "I will persuade them",
      "I will get the facts"], ["D", "S", "I", "C"], ["-", "S", "I", "-"]
  ],
  [
    ["Think of others first",
      "Competitive, Like a challenge",
      "Optimistic, Positive",
      "Logical thinker, Systematic"], ["S", "D", "I", "-"], ["S", "D", "I", "C"]
  ],
  [
    ["Please others, Agreeable",
      "Laugh out loud, Animated",
      "Courageous, Bold",
      "Quiet, Reserved"], ["S", "-", "D", "C"], ["S", "I", "D", "C"]
  ],
  [
    ["Want more authority",
      "Want new opportunities",
      "Avoid any conflict",
      "Want clear directions"], ["-", "I", "S", "-"], ["D", "-", "S", "C"]
  ],
  [
    ["Reliable, Dependable",
      "Creative, Unique",
      "Bottom line, Results oriented",
      "Hold high standards, Accurate"], ["-", "I", "D", "C"], ["S", "I", "-", "-"]
  ]
]

most_classification = {
  "D": {
    "0": 3,
    "1": 5,
    "2": 8,
    "3": 11,
    "4": 13,
    "5": 14,
    "6": 16,
    "7": 17,
    "8": 18,
    "9": 20,
    "10": 22,
    "11": 23,
    "12": 24,
    "13": 26,
    "14": 27,
    "15": 30,
    "16": 31,
    "17": 31.2,
    "18": 31.4,
    "19": 31.6,
    "20": 31.8,
    "21": 32
  },
  "I": {
    "0": 1,
    "1": 6,
    "2": 11,
    "3": 14,
    "4": 18,
    "5": 22,
    "6": 23,
    "7": 27,
    "8": 28,
    "9": 29,
    "10": 30,
    "11": 31,
    "12": 31.1,
    "13": 31.2,
    "14": 31.3,
    "15": 31.4,
    "16": 31.5,
    "17": 31.6,
    "18": 31.7,
    "19": 31.8,
    "20": 31.9,
    "21": 32
  },
  "S": {
    "0": 4,
    "1": 7,
    "2": 9,
    "3": 13,
    "4": 15,
    "5": 17,
    "6": 18,
    "7": 21,
    "8": 22,
    "9": 24,
    "10": 26,
    "11": 27,
    "12": 28,
    "13": 29,
    "14": 30,
    "15": 30.33,
    "16": 30.66,
    "17": 30.99,
    "18": 31.32,
    "19": 31.65,
    "20": 32,
    "21": -10
  },
  "C": {
    "0": 3,
    "1": 6,
    "2": 9,
    "3": 13,
    "4": 17,
    "5": 20,
    "6": 22,
    "7": 27,
    "8": 28,
    "9": 29,
    "10": 29.5,
    "11": 30,
    "12": 30.5,
    "13": 31,
    "14": 31.25,
    "15": 31.50,
    "16": 31.75,
    "17": 32,
    "18": 32.25,
    "19": 32.5,
    "20": 32.75,
    "21": 33
  }
}

least_classification = {
  "D": {
    "0": 32,
    "1": 30,
    "2": 25,
    "3": 21,
    "4": 19,
    "5": 17,
    "6": 16,
    "7": 14,
    "8": 13,
    "9": 11,
    "10": 10,
    "11": 9,
    "12": 7,
    "13": 5,
    "14": 4,
    "15": 3,
    "16": 2,
    "17": 1.5,
    "18": 1,
    "19": 0.5,
    "20": 0,
    "21": -0.5
  },
  "I": {
    "0": 31,
    "1": 29,
    "2": 24,
    "3": 21,
    "4": 17,
    "5": 16,
    "6": 12,
    "7": 9,
    "8": 7,
    "9": 5,
    "10": 3,
    "11": 2,
    "12": 1,
    "13": 0.85,
    "14": 0.70,
    "15": 0.55,
    "16": 0.4,
    "17": 0.25,
    "18": 0.1,
    "19": 0,
    "20": -0.5,
    "21": -1
  },
  "S": {
    "0": 32,
    "1": 31,
    "2": 29,
    "3": 24,
    "4": 21,
    "5": 19,
    "6": 17,
    "7": 14,
    "8": 12,
    "9": 10,
    "10": 7,
    "11": 5,
    "12": 3,
    "13": 2,
    "14": 1.66,
    "15": 1.33,
    "16": 1,
    "17": 0.66,
    "18": 0.33,
    "19": 0,
    "20": -0.5,
    "21": -1
  },
  "C": {
    "0": 32,
    "1": 31,
    "2": 28,
    "3": 24,
    "4": 21,
    "5": 19,
    "6": 17,
    "7": 16,
    "8": 14,
    "9": 11,
    "10": 9,
    "11": 5,
    "12": 4,
    "13": 3,
    "14": 2,
    "15": 1,
    "16": 0.5,
    "17": 0,
    "18": -0.5,
    "19": -1,
    "20": -1.5,
    "21": -2
  }
}

change_classification = {
  "D": {
    "-23": 0.25,
    "-22": 0.5,
    "-21": 0.75,
    "-20": 1,
    "-19": 1.25,
    "-18": 1.5,
    "-17": 1.75,
    "-16": 2,
    "-15": 2.5,
    "-14": 3,
    "-13": 3.5,
    "-12": 4,
    "-11": 5,
    "-10": 7,
    "-9": 9,
    "-8": 9.5,
    "-7": 10,
    "-6": 11,
    "-5": 12,
    "-4": 13,
    "-3": 14,
    "-2": 15,
    "-1": 15.5,
    "0": 16,
    "1": 17,
    "2": 17.5,
    "3": 18,
    "4": 18.5,
    "5": 19,
    "6": 20,
    "7": 21,
    "8": 23,
    "9": 24,
    "10": 26,
    "11": 26.5,
    "12": 27,
    "13": 28,
    "14": 29,
    "15": 30,
    "16": 30.33,
    "17": 30.66,
    "18": 31,
    "19": 31.33,
    "20": 31.66,
    "21": 32
  },
  "I": {
    "-23": -0.25,
    "-22": 0,
    "-21": 0.25,
    "-20": 0.5,
    "-19": 0.75,
    "-18": 1,
    "-17": 1.125,
    "-16": 1.25,
    "-15": 1.375,
    "-14": 1.5,
    "-13": 1.625,
    "-12": 1.75,
    "-11": 1.875,
    "-10": 2,
    "-9": 3,
    "-8": 4,
    "-7": 6,
    "-6": 7,
    "-5": 9,
    "-4": 10,
    "-3": 12,
    "-2": 13,
    "-1": 16,
    "0": 17,
    "1": 18,
    "2": 19,
    "3": 22,
    "4": 24,
    "5": 25,
    "6": 27,
    "7": 28,
    "8": 30,
    "9": 30.5,
    "10": 31,
    "11": 31.125,
    "12": 31.25,
    "13": 31.375,
    "14": 31.5,
    "15": 31.625,
    "16": 31.75,
    "17": 31.875,
    "18": 32,
    "19": 32.25,
    "20": 32.5,
    "21": 32.75,
  },
  "S": {
    "-23": -1.25,
    "-22": -1,
    "-21": -0.75,
    "-20": -0.50,
    "-19": -0.25,
    "-18": 0,
    "-17": 0.33,
    "-16": 0.66,
    "-15": 1,
    "-14": 1.4,
    "-13": 1.8,
    "-12": 2.2,
    "-11": 2.6,
    "-10": 3,
    "-9": 6,
    "-8": 7,
    "-7": 9,
    "-6": 10,
    "-5": 12,
    "-4": 13,
    "-3": 14,
    "-2": 15,
    "-1": 16,
    "0": 18,
    "1": 19,
    "2": 20,
    "3": 22,
    "4": 23,
    "5": 24,
    "6": 25,
    "7": 26,
    "8": 27,
    "9": 28,
    "10": 29,
    "11": 30,
    "12": 30.25,
    "13": 30.5,
    "14": 30.75,
    "15": 31,
    "16": 31.20,
    "17": 31.4,
    "18": 31.6,
    "19": 31.8,
    "20": 32,
    "21": 32.25
  },
  "C": {
    "-23": -0.25,
    "-22": 0,
    "-21": 0.33,
    "-20": 0.66,
    "-19": 1,
    "-18": 1.25,
    "-17": 1.50,
    "-16": 1.75,
    "-15": 2,
    "-14": 2.5,
    "-13": 3,
    "-12": 3.33,
    "-11": 3.66,
    "-10": 4,
    "-9": 6,
    "-8": 7,
    "-7": 9,
    "-6": 10,
    "-5": 11,
    "-4": 15,
    "-3": 16,
    "-2": 17,
    "-1": 18,
    "0": 19,
    "1": 22,
    "2": 24,
    "3": 25,
    "4": 28,
    "5": 29,
    "6": 30,
    "7": 30.25,
    "8": 30.5,
    "9": 30.75,
    "10": 31,
    "11": 31.14,
    "12": 31.28,
    "13": 31.42,
    "14": 31.56,
    "15": 31.7,
    "16": 31.84,
    "17": 32,
    "18": 32.25,
    "19": 32.5,
    "20": 32.75,
    "21": 33
  },
}



const outData = [
]

let most = []
let least = []
let currIndex = 0;
most = Array(inData.length).fill(0);
least = Array(inData.length).fill(0);


function getNext() {
  let nextValue = inData[0]
  outData.unshift(nextValue)
  inData.shift();
  return nextValue
}
function getPrev() {
  let currValue = outData[0]
  let prevValue = outData[1]
  inData.unshift(currValue)
  outData.shift();
  return prevValue
}


function finalCard(public_result, private_result, perceived_result) {
  return `<div class="card grey darken-3 animate__animated animate__backInRight">
            <div class="card-tabs">
              <ul class="tabs tabs-fixed-width">
                <li class="tab"><a class="active" href="#test4">Public</a></li>
                <li class="tab"><a href="#test5">Private</a></li>
                <li class="tab"><a href="#test6">Perceived</a></li>
              </ul>
            </div>
          <div class="card-content grey lighten-4">
            <div id="test4">${public_result}</div>
            <div id="test5">${private_result}</div>
            <div id="test6">${perceived_result}</div>
          </div>
        </div>`
}

function nextCard() {
  let questions = getNext()
  return `<div class="card grey lighten-3 animate__animated animate__backInRight">
            <div class="card-content">
              <div class="row">
                <span
                  class="col s2 l2 card-title longer"
                  style="text-align: center">Most</span>
                <span
                  class="col s2 l2 card-title longer"
                  style="text-align: center">Least</span>
                <span
                  class="col s2 l2 card-title shorter"
                  style="text-align: center">M</span>
                <span
                  class="col s2 l2 card-title shorter"
                  style="text-align: center">L</span>
              </div>
              <div class="row">
                <div class="col s2 l2" style="text-align: center">
                  <p class="row">
                    <label>
                      <input name="most" type="radio" value=${questions[1][0]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="most" type="radio" value=${questions[1][1]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="most" type="radio" value=${questions[1][2]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="most" type="radio" value=${questions[1][3]} />
                      <span></span>
                    </label>
                  </p>
                </div>
                <div class="col s2 l2" style="text-align: center">
                  <p class="row">
                    <label>
                      <input name="least" type="radio" value=${questions[2][0]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="least" type="radio" value=${questions[2][1]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="least" type="radio" value=${questions[2][2]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="least" type="radio" value=${questions[2][3]} />
                      <span></span>
                    </label>
                  </p>
                </div>
                <div class="col s8 l8" style="padding-top: 2px">
                  <p class="row" style="padding-bottom: 7px">
                    ${questions[0][0]}
                  </p>
                  <p class="row" style="padding-bottom: 7px">
                    ${questions[0][1]}
                  </p>
                  <p class="row" style="padding-bottom: 7px">
                    ${questions[0][2]}
                  </p>
                  <p class="row" style="padding-bottom: 7px">
                    ${questions[0][3]}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-action" style="text-align: center">
              <button
                id="prevbtn"
                class="btn waves-effect waves-light light-blue"
                style="float: left"
                type="submit"
                onclick="renderPrevCard()"
                name="action">
                Prev
              </button>
              <div class="c100 p${parseInt((((outData.length - 1) / 28).toFixed(2)) * 100)} progress-indicator" style="float:none; position: relative;display: inline-block;overflow: hidden;vertical-align: middle;">
                <span style="color: #307bbb">${parseInt((((outData.length - 1) / 28).toFixed(2)) * 100)}%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <button
                id="nextbtn"
                class="btn waves-effect waves-light right light-blue"
                type="submit"
                onclick="renderNextCard()"
                name="action">
                Next
              </button>
            </div>
          </div>`
}

function prevCard() {
  let questions = getPrev()
  return `<div class="card grey lighten-3 animate__animated animate__backInLeft">
            <div class="card-content">
              <div class="row">
                <span
                  class="col s2 l2 card-title longer"
                  style="text-align: center">Most</span>
                <span
                  class="col s2 l2 card-title longer"
                  style="text-align: center">Least</span>
                <span
                  class="col s2 l2 card-title shorter"
                  style="text-align: center">M</span>
                <span
                  class="col s2 l2 card-title shorter"
                  style="text-align: center">L</span>
              </div>
              <div class="row">
                <div class="col s2 l2" style="text-align: center">
                  <p class="row">
                    <label>
                      <input name="most" type="radio" value=${questions[1][0]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="most" type="radio" value=${questions[1][1]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="most" type="radio" value=${questions[1][2]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="most" type="radio" value=${questions[1][3]} />
                      <span></span>
                    </label>
                  </p>
                </div>
                <div class="col s2 l2" style="text-align: center">
                  <p class="row">
                    <label>
                      <input name="least" type="radio" value=${questions[2][0]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="least" type="radio" value=${questions[2][1]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="least" type="radio" value=${questions[2][2]} />
                      <span></span>
                    </label>
                  </p>
                  <p class="row">
                    <label>
                      <input name="least" type="radio" value=${questions[2][3]} />
                      <span></span>
                    </label>
                  </p>
                </div>
                <div class="col s8 l8" style="padding-top: 2px">
                  <p class="row" style="padding-bottom: 7px">
                    ${questions[0][0]}
                  </p>
                  <p class="row" style="padding-bottom: 7px">
                    ${questions[0][1]}
                  </p>
                  <p class="row" style="padding-bottom: 7px">
                    ${questions[0][2]}
                  </p>
                  <p class="row" style="padding-bottom: 7px">
                    ${questions[0][3]}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-action" style="text-align: center">
              <button
                id="prevbtn"
                class="btn waves-effect waves-light light-blue"
                style="float: left"
                type="submit"
                onclick="renderPrevCard()"
                name="action">
                Prev
              </button>
              <div class="c100 p${parseInt((((outData.length - 1) / 28).toFixed(2)) * 100)} progress-indicator" style="float:none; position: relative;display: inline-block;overflow: hidden;vertical-align: middle;">
                <span style="color: #307bbb">${parseInt((((outData.length - 1) / 28).toFixed(2)) * 100)}%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <button
                id="nextbtn"
                class="btn waves-effect waves-light right light-blue"
                type="submit"
                onclick="renderNextCard()"
                name="action">
                Next
              </button>
            </div>
          </div>`
}

function animateInRight() {
  $('.card').removeClass('animate__backOutLeft').addClass('animate__backInRight')
}

function animateOutLeft() {
  $('.card').removeClass('animate__backInRight').addClass('animate__backOutLeft')
}

function animateInLeft() {
  $('.card').removeClass('animate__backOutRight').addClass('animate__backInLeft')
}

function animateOutRight() {
  $('.card').removeClass('animate__backInRight').addClass('animate__backOutRight')
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function getMostValue() {
  return $("input[name='most']:checked").val();
}

function getLeastValue() {
  return $("input[name='least']:checked").val();
}

function renderFirstCard() {
  $('.col.s12.m10.offset-m1.l8.offset-l2').append(
    nextCard()
  )
}

function sort_object(obj) {
  items = Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
  items.sort(function (first, second) {
    return second[1] - first[1];
  });
  sorted_obj = {}
  $.each(items, function (k, v) {
    use_key = v[0]
    use_value = v[1]
    sorted_obj[use_key] = use_value
  })
  return (sorted_obj)
}

function computeBehavior() {
  const mostCounts = {};
  most.forEach(function (x) { mostCounts[x] = (mostCounts[x] || 0) + 1; });
  let [most_D, most_I, most_S, most_C, most_] = [0, 0, 0, 0, 0]
  if ("D" in mostCounts) {
    most_D = mostCounts["D"]
  }
  if ("I" in mostCounts) {
    most_I = mostCounts["I"]
  }
  if ("S" in mostCounts) {
    most_S = mostCounts["S"]
  }
  if ("C" in mostCounts) {
    most_C = mostCounts["C"]
  }
  if ("-" in mostCounts) {
    most_ = mostCounts["-"]
  }
  console.log(`MOST - D:${most_D} I:${most_I} S:${most_S} C:${most_C} -:${most_}`)

  const most_classified_D = most_classification["D"][most_D]
  const most_classified_I = most_classification["I"][most_I]
  const most_classified_S = most_classification["S"][most_S]
  const most_classified_C = most_classification["C"][most_C]
  console.log(`CLASSIFIED MOST - D:${most_classified_D} I:${most_classified_I} S:${most_classified_S} C:${most_classified_C}`)

  let most_result = sort_object({ "D": most_classified_D, "I": most_classified_I, "S": most_classified_S, "C": most_classified_C })
  console.log(most_result)
  public_result = ""
  // alert(most_result)
  for (var key of Object.keys(most_result)) {
    console.log(key + " -> " + most_result[key])
    if (parseInt(most_result[key]) > 16) {
      public_result += key
    }
  }


  const leastCounts = {};
  least.forEach(function (x) { leastCounts[x] = (leastCounts[x] || 0) + 1; });
  let [least_D, least_I, least_S, least_C, least_] = [0, 0, 0, 0, 0]
  if ("D" in leastCounts) {
    least_D = leastCounts["D"]
  }
  if ("I" in leastCounts) {
    least_I = leastCounts["I"]
  }
  if ("S" in leastCounts) {
    least_S = leastCounts["S"]
  }
  if ("C" in leastCounts) {
    least_C = leastCounts["C"]
  }
  if ("-" in leastCounts) {
    least_ = leastCounts["-"]
  }
  console.log(`LEAST - D:${least_D} I:${least_I} S:${least_S} C:${least_C} -:${least_}`)

  const least_classified_D = least_classification["D"][least_D]
  const least_classified_I = least_classification["I"][least_I]
  const least_classified_S = least_classification["S"][least_S]
  const least_classified_C = least_classification["C"][least_C]
  console.log(`CLASSIFIED LEAST - D:${least_classified_D} I:${least_classified_I} S:${least_classified_S} C:${least_classified_C}`)

  let least_result = sort_object({ "D": least_classified_D, "I": least_classified_I, "S": least_classified_S, "C": least_classified_C })
  console.log(least_result)
  // alert(least_result)
  private_result = ""
  for (var key of Object.keys(least_result)) {
    console.log(key + " -> " + least_result[key])
    if (parseInt(least_result[key]) > 16) {
      private_result += key
    }
  }


  const changed_D = most_D - least_D
  const changed_I = most_I - least_I
  const changed_S = most_S - least_S
  const changed_C = most_C - least_C
  const changed_ = most_ - least_
  console.log(`CHANGED - D:${changed_D} I:${changed_I} S:${changed_S} C:${changed_C} -:${changed_}`)


  const changed_classified_D = change_classification["D"][changed_D]
  const changed_classified_I = change_classification["I"][changed_I]
  const changed_classified_S = change_classification["S"][changed_S]
  const changed_classified_C = change_classification["C"][changed_C]
  console.log(`CLASSIFIED CHANGED - D:${changed_classified_D} I:${changed_classified_I} S:${changed_classified_S} C:${changed_classified_C}`)

  let changed_result = sort_object({ "D": changed_classified_D, "I": changed_classified_I, "S": changed_classified_S, "C": changed_classified_C })
  console.log(changed_result)
  // alert(changed_result.keys)

  perceived_result = ""
  for (var key of Object.keys(changed_result)) {
    console.log(key + " -> " + changed_result[key])
    if (parseInt(changed_result[key]) > 16) {
      perceived_result += key
    }
  }
}

function renderNextCard() {
  if (!(typeof getMostValue() === 'undefined' || typeof getLeastValue() === 'undefined')) {
    most[currIndex] = getMostValue()
    least[currIndex] = getLeastValue()
    currIndex++
    animateOutLeft()
    if (inData.length == 0) {
      computeBehavior()
      sleep(380).then(() => {
        $('.col.s12.m10.offset-m1.l8.offset-l2').empty()
        $('.col.s12.m10.offset-m1.l8.offset-l2').append(
          finalCard(public_result, private_result, perceived_result)
        )
        $('.tabs').tabs();
      });
    } else {
      sleep(380).then(() => {
        $('.col.s12.m10.offset-m1.l8.offset-l2').empty()
        $('.col.s12.m10.offset-m1.l8.offset-l2').append(
          nextCard()
        )
        if (most[currIndex] != 0) {
          $("input[name=most][value=" + most[currIndex] + "]").prop('checked', true);
          $("input[name=least][value=" + least[currIndex] + "]").prop('checked', true);
        }
      });

    }

  }
  else {
    // animate__animated animate__shakeX
    $('.col.s12.m10.offset-m1.l8.offset-l2').addClass('animate__animated').addClass('animate__shakeX')
    // wait for animation to finish then remove class
    sleep(400).then(() => {
      $('.col.s12.m10.offset-m1.l8.offset-l2').removeClass('animate__animated').removeClass('animate__shakeX')
    }
    )
  }

}

function renderPrevCard() {
  if (outData.length > 1) {
    animateOutRight()
    currIndex--
    sleep(380).then(() => {
      $('.col.s12.m10.offset-m1.l8.offset-l2').empty()
      $('.col.s12.m10.offset-m1.l8.offset-l2').append(
        prevCard()
      )
      if (most[currIndex] != 0) {
        $("input[name=most][value=" + most[currIndex] + "]").prop('checked', true);
        $("input[name=least][value=" + least[currIndex] + "]").prop('checked', true);
      }
    });
  }
  else {
    // animate__animated animate__shakeX
    $('.col.s12.m10.offset-m1.l8.offset-l2').addClass('animate__animated').addClass('animate__shakeX')
    // wait for animation to finish then remove class
    sleep(400).then(() => {
      $('.col.s12.m10.offset-m1.l8.offset-l2').removeClass('animate__animated').removeClass('animate__shakeX')
    }
    )
  }
}

if ($(window).width() < 767) {

} else {
  // alert("big")
}


$(document).ready(() => {
  renderFirstCard()
  if ($(window).width() < 767) {
    $('.modal').modal();
    $('.modal').modal('open');
  }

})