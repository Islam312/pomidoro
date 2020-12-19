"use strict";

var granimInstance = new Granim({
  element: "#canvas-body",
  direction: "left-right",
  isPausedWhenNotInView: !0,
  states: {
    "default-state": {
      gradients: [["#F78CA0", "#F9748F"], ["#F9748F", "#FD868C"], ["#FD868C", "#FE9A8B"], ["#FE9A8B", "#F78CA0"]],
      transitionSpeed: 1e3
    },
    "dark-state": {
      gradients: [["#48C6EF", "#6F86D6"], ["#6F86D6", "#48C6EF"]],
      transitionSpeed: 1e3,
      loop: !0
    }
  }
});
var state = {
  timer: 0,
  pomodoroCount: 0,
  shorkBreak: 0,
  longBreak: 0,
  betweenLongBreak: 0,
  seconds: 0,
  counterPomodoroBreak: 0
},
    dataTimer = {
  preloader: 0
};

function getInputValues() {
  state.pomodoroCount = Number($("#pomodoro").val()), state.shorkBreak = Number($("#shorkBreak").val()), state.longBreak = Number($("#longBreak").val()), state.betweenLongBreak = Number($("#betweenLongBreak").val()), dataTimer.pomodoroCount = Number($("#pomodoro").val()), dataTimer.betweenLongBreak = Number($("#betweenLongBreak").val()), dataTimer.shorkBreak = Number($("#shorkBreak").val()), dataTimer.longBreak = Number($("#longBreak").val()), console.log("getInputValues"), state.seconds = 0, getTimerState();
}

function getTimerState() {
  $("#timerMinute").text(zeroFill(state.pomodoroCount)), $("#timerSeconds").text(zeroFill(state.seconds));
}

function progressBar(e) {
  $("#progressBar").children("circle").last().css({
    "stroke-dashoffset": 930 - .2583333333 * e
  });
}

function zeroFill(e) {
  var t = String(e);
  return t.length < 2 ? (t = "0" + t, t) : t;
}

function button(e) {
  switch (console.log(e), e) {
    case "startTimer":
      $("#startTimer").parent().siblings().removeClass("active"), $("#startTimer").parent().removeClass("active"), $("#pauseTimer").parent().addClass("active"), timerState(), state.counterPomodoroBreak++, dataTimer.preloader = 60 * dataTimer.pomodoroCount;
      break;

    case "pauseTimer":
      $("#pauseTimer").parent().siblings().removeClass("active"), $("#pauseTimer").parent().removeClass("active"), $("#continueTimer").parent().addClass("active"), clearInterval(state.timer);
      break;

    case "continueTimer":
      $("#continueTimer").parent().removeClass("active"), $("#pauseTimer").parent().addClass("active"), timerState();
      break;

    case "stopTimer":
      $("#stopTimer").parent().removeClass("active"), $("#startTimer").parent().addClass("active"), clearInterval(state.timer), granimInstance.changeState("default-state"), progressBar(0), getInputValues(), state.counterPomodoroBreak = 0;
  }
}

function buttonState() {
  $(".btn-control").on("click", function () {
    button($(this).attr("id"));
  });
}

function modalWindowState() {
  $("#save-modal").on("click", function (e) {
    e.preventDefault(), getInputValues(), "" == $(".error-box").text() && (button("stopTimer"), $(".timer__settings-modal").fadeOut(), $(".timer__panel").fadeIn());
  }), $("#timerConf").on("click", function () {
    validateInput(), button("pauseTimer"), $(".timer__settings-modal").fadeIn(), $(".timer__panel").fadeOut();
  }), $("#close-modal").on("click", function (e) {
    e.preventDefault(), "" == $(".error-box").text() && ($(".timer__settings-modal").fadeOut(), $(".timer__panel").fadeIn());
  });
}

function validateInput() {
  $("input#pomodoro, input#shorkBreak, input#longBreak, input#betweenLongBreak").blur(function () {
    var e = $(this).val();

    switch ($(this).attr("id")) {
      case "pomodoro":
        0 < e && e < 60 && "" != e ? $(this).next(".error-box").text("") : $(this).next(".error-box").text("Invalid input");
        break;

      case "shorkBreak":
        0 < e && e <= 10 && "" != e ? $(this).next(".error-box").text("") : $(this).next(".error-box").text("Invalid input");
        break;

      case "longBreak":
        0 < e && e <= 15 && "" != e ? $(this).next(".error-box").text("") : $(this).next(".error-box").text("Invalid input");
        break;

      case "betweenLongBreak":
        0 < e && e <= 10 && "" != e ? $(this).next(".error-box").text("") : $(this).next(".error-box").text("Invalid input");
    }
  });
}

function timerState() {
  state.timer = setInterval(function () {
    0 == state.seconds && (state.seconds = 60, state.pomodoroCount > 0 ? state.pomodoroCount-- : (granimInstance.changeState("dark-state"), state.counterPomodoroBreak % 2 == 0 ? (granimInstance.changeState("default-state"), dataTimer.preloader = 60 * dataTimer.pomodoroCount, state.pomodoroCount = dataTimer.pomodoroCount, state.counterPomodoroBreak++) : (dataTimer.preloader = 60 * state.shorkBreak, state.pomodoroCount = state.shorkBreak, state.counterPomodoroBreak++), state.counterPomodoroBreak % (2 * state.betweenLongBreak) == 0 && 0 != state.counterPomodoroBreak && (dataTimer.preloader = 60 * state.longBreak, state.pomodoroCount = state.longBreak, state.counterPomodoroBreak = 0), button("pauseTimer"), state.seconds = 1)), state.seconds--, getTimerState(), progressBar(dataTimer.preloader), dataTimer.preloader--, console.log("state.pomodoroCount ", state.pomodoroCount), console.log("state.seconds ", state.seconds);
  }, 100);
}

function render() {
  getInputValues(), buttonState(), modalWindowState();
}

render();