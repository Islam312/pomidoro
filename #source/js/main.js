/**
 * * GRANIM.JS
 * * для переливания цвета фона
 */
// var granimInstanceModal = new Granim({
//   element: "#canvas-modal",
//   direction: "left-right",
//   isPausedWhenNotInView: true,
//   states: {
//     "default-state": {
//       gradients: [
//         ["#F78CA0", "#F9748F"],
//         ["#F9748F", "#FD868C"],
//         ["#FD868C", "#FE9A8B"],
//         ["#FE9A8B", "#F78CA0"],
//       ],
//       transitionSpeed: 1000,
//     },
//   },
// });

var granimInstance = new Granim({
  element: '#canvas-body',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states: {
    'default-state': {
      gradients: [
        ['#F78CA0', '#F9748F'],
        ['#F9748F', '#FD868C'],
        ['#FD868C', '#FE9A8B'],
        ['#FE9A8B', '#F78CA0'],
      ],
      transitionSpeed: 1000,
    },
    'dark-state': {
      gradients: [
        ['#48C6EF', '#6F86D6'],
        ['#6F86D6', '#48C6EF'],
      ],
      transitionSpeed: 1000,
      loop: true,
    },
  },
})

/**
 * * TIMER STATE
 * * Объект определяет все свойства таймера и их значения
 */
let state = {
  timer: 0,
  pomodoroCount: 0,
  shorkBreak: 0,
  longBreak: 0,
  betweenLongBreak: 0,
  seconds: 0,
  counterPomodoroBreak: 0,
}
let dataTimer = {
  preloader: 0,
} //* для сохранение начальных значений pomodoro и between long
/**
 * * getInputValues()
 * * Получает значение input по умолчанию
 * * и присваивает значение ключам объекта state
 */
function getInputValues() {
  state.pomodoroCount = Number($('#pomodoro').val())
  state.shorkBreak = Number($('#shorkBreak').val())
  state.longBreak = Number($('#longBreak').val())
  state.betweenLongBreak = Number($('#betweenLongBreak').val())
  dataTimer.pomodoroCount = Number($('#pomodoro').val())
  dataTimer.betweenLongBreak = Number($('#betweenLongBreak').val())
  dataTimer.shorkBreak = Number($('#shorkBreak').val())
  dataTimer.longBreak = Number($('#longBreak').val())
  console.log('getInputValues')
  state.seconds = 0
  getTimerState()
}

/**
 * * getTimerState()
 * * Получает значения состояния таймера
 */
function getTimerState() {
  $('#timerMinute').text(zeroFill(state.pomodoroCount))
  $('#timerSeconds').text(zeroFill(state.seconds))
}
/**
 * * progressBar()
 * * Подсчитывает количество секунд и изменяет размер круглой полосы svg
 */
function progressBar(num) {
  $('#progressBar')
    .children('circle')
    .last()
    .css({
      'stroke-dashoffset': 930 - num * 0.2583333333,
    })
}

/**
 * * zeroFill()
 * * Дополняет нулями числа 1,2,3,4,5,6,7,8,9
 * */
function zeroFill(num) {
  let string = String(num)
  if (string.length < 2) {
    string = '0' + string
    return string
  } else {
    return string
  }
}

/**
 * * buttonState(), button(),
 * * Отрисовка и состояние основных кнопок панели контроля таймера
 */
function button(idBtn) {
  console.log(idBtn)
  switch (idBtn) {
    case 'startTimer':
      $('#startTimer').parent().siblings().removeClass('active')
      $('#startTimer').parent().removeClass('active')
      $('#pauseTimer').parent().addClass('active')
      timerState()
      state.counterPomodoroBreak++
      dataTimer.preloader = dataTimer.pomodoroCount * 60

      break
    case 'pauseTimer':
      $('#pauseTimer').parent().siblings().removeClass('active')
      $('#pauseTimer').parent().removeClass('active')
      $('#continueTimer').parent().addClass('active')
      clearInterval(state.timer)
      break
    case 'continueTimer':
      $('#continueTimer').parent().removeClass('active')
      $('#pauseTimer').parent().addClass('active')
      timerState()
      break
    case 'stopTimer':
      $('#stopTimer').parent().removeClass('active')
      $('#startTimer').parent().addClass('active')
      clearInterval(state.timer)
      granimInstance.changeState('default-state')
      progressBar(0)
      getInputValues()
      state.counterPomodoroBreak = 0
      break
  }
}

function buttonState() {
  $('.btn-control').on('click', function () {
    let id = $(this).attr('id') //* для удобства находим по id
    button(id)
  })
}
/**
 * * modalWindowState,
 * * Отрисовка и состояние модального окна
 */
function modalWindowState() {
  $('#save-modal').on('click', function (e) {
    e.preventDefault()
    getInputValues()
    if ($('.error-box').text() == '') {
      button('stopTimer')
      $('.timer__settings-modal').fadeOut()
      $('.timer__panel').fadeIn()
    }
  })
  //===========conf icon=========
  //clicked configuration icon
  $('#timerConf').on('click', function () {
    validateInput()
    button('pauseTimer')
    $('.timer__settings-modal').fadeIn()
    $('.timer__panel').fadeOut()
  })
  //clicked close btn
  $('#close-modal').on('click', function (e) {
    e.preventDefault()
    if ($('.error-box').text() == '') {
      $('.timer__settings-modal').fadeOut()
      $('.timer__panel').fadeIn()
    }
  })
}

/**
 * * validateInput()
 * * Валидация ввода
 */
function validateInput() {
  $(
    'input#pomodoro, input#shorkBreak, input#longBreak, input#betweenLongBreak'
  ).blur(function () {
    let val = $(this).val()
    let id = $(this).attr('id')
    switch (id) {
      case 'pomodoro':
        if (0 < val && val < 60 && val != '') {
          $(this).next('.error-box').text('')
        } else {
          $(this).next('.error-box').text('Invalid input')
        }
        break
      case 'shorkBreak':
        if (0 < val && val <= 10 && val != '') {
          $(this).next('.error-box').text('')
        } else {
          $(this).next('.error-box').text('Invalid input')
        }
        break
      case 'longBreak':
        if (0 < val && val <= 15 && val != '') {
          $(this).next('.error-box').text('')
        } else {
          $(this).next('.error-box').text('Invalid input')
        }
        break
      case 'betweenLongBreak':
        if (0 < val && val <= 10 && val != '') {
          $(this).next('.error-box').text('')
        } else {
          $(this).next('.error-box').text('Invalid input')
        }
        break
    }
  })
}
/**
 * * timerState()
 * * Основная логикаи состояния таймера при определнных событиях
 */

function timerState() {
  state.timer = setInterval(function () {
    if (state.seconds == 0) {
      state.seconds = 60
      if (state.pomodoroCount > 0) {
        state.pomodoroCount--
      } else {
        granimInstance.changeState('dark-state')
        if (state.counterPomodoroBreak % 2 == 0) {
          granimInstance.changeState('default-state')
          dataTimer.preloader = dataTimer.pomodoroCount * 60
          state.pomodoroCount = dataTimer.pomodoroCount
          state.counterPomodoroBreak++
        } else {
          dataTimer.preloader = state.shorkBreak * 60
          state.pomodoroCount = state.shorkBreak
          state.counterPomodoroBreak++
        }
        if (
          state.counterPomodoroBreak % (state.betweenLongBreak * 2) == 0 &&
          state.counterPomodoroBreak != 0
        ) {
          dataTimer.preloader = state.longBreak * 60
          state.pomodoroCount = state.longBreak
          state.counterPomodoroBreak = 0
        }

        button('pauseTimer')
        state.seconds = 1
      }
    }
    state.seconds--
    getTimerState()
    progressBar(dataTimer.preloader)
    dataTimer.preloader--
    console.log('state.pomodoroCount ', state.pomodoroCount)
    console.log('state.seconds ', state.seconds)
  }, 100)
}
/**
 * * render()
 * * Отрисовка всех составляющих элементов
 * * в определенный момент состояния
 */
function render() {
  getInputValues()
  buttonState()
  modalWindowState()
}
render()
