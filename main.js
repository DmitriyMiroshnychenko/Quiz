/*All answer options*/
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

      /*All our options*/
const optionElements = document.querySelectorAll('.option');
 
const question = document.getElementById('question');//сам вопрос

const numberOfQuestion = document.getElementById('number-of-question'),//номер вопроса
      numberOfAllQuestions = document.getElementById('number-of-all-questions');//количество всех вопросов

let indexOfQuestion,//индекс текущего вопроса
    indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');//Обертка для трекера
const btnNext = document.getElementById('btn-next');//кнопка далее

let score = 0;//итоговый результат викторины
const correctAnswer = document.getElementById('correct-answer'),// кол-во правильных ответов
numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),//кол-во всех вопросов в модальном окне
btnTryAgain = document.getElementById('btn-try-again');//кнопка(начать викторину заново)

const questions = [
    {
        question: 'В React всё является______.',
        options: [
            'модулем',
            'компонентом',
            'пакетом',
            'классом',
        ],
        rightAnswer: 1
    },
    {
        question: 'Где можно использовать JavaScript ?',
        options: [
            'серверное приложение',
            'мобильное приложение',
            'можно во всех перечисленных',
            'прикладное программное обеспечение',
        ],
        rightAnswer: 3
    },
    {
        question: 'От чего отказались в последних версиях React ?',
        options: [
            'componentWillMount',
            'JavaScript',
            'componentDidMount',
            'от приглашений на фейсбук',
        ],
        rightAnswer: 0
    },
    {
        question: 'Какая переменная записана неверно',
        options: [
            'var num = "STRING"',
            'var isDone = 0',
            'var b = false',
            'var number = 12,5',
        ],
        rightAnswer: 3
    },
    {
        question: 'Что такое виртуальная DOM ?',
        options: [
            'точная HTML-копия реальной DOM',
            'встроенный компонент браузера',
            'объекты JavaScript, содержащий элементы и данные',
            'строка JSON, сщдержащая элементы и данные, возвращаемые из метода react.render',
        ],
        rightAnswer: 2
    },
    {
        question: 'Какое количество сообщений будет выведено в консоль ? for(var i = 10; i < 35; i + 5) {console.log(i);}',
        options: [
            '6',
            'такой цикл работать не будет',
            '25',
            '50',
        ],
        rightAnswer: 1
    },
    {
        question: 'Какое из следующих утверждений не относится к рендеру виртуальной DOM ?',
        options: [
            'реализация виртуальной DOM всегда оказывается быстрее, чем манипуляция с DOM',
            'Если что-то меняется, выполняется повторный рендер всего пользовательского интерфейса в виртуальной DOM',
            'перерисовка DOM - самая медленная часть рендера',
            'после повторного рендера в реальную DOM вносятся только необходимые изменения.',
        ],
        rightAnswer: 0
    },
    {
        question: 'Какая функция вызывает окно с предупреждающим сообщением ?',
        options: [
            'prompt()',
            'alert()',
            'confirm()',
            'promt',
        ],
        rightAnswer: 1
    },
    {
        question: 'Какое из утверждений о комментариях верное ?',
        options: [
            'в JavaScript нельзя использовать комментарии.',
            'комментарии увеличивают скорость выполнения скрипта',
            'комментарии упрощают понимание скрипта',
            'коментарии уменьшают размер исходного кода',
        ],
        rightAnswer: 2
    },
    {
        question: 'В чём разница между confirm  и prompt ?',
        options: [
            'ничем не отличаются',
            'confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением',
            'prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением',
            'Ни одна из вариантов не подходит',
        ],
        rightAnswer: 2
    },
    {
        question: 'Язык JavaScript является подвидом языка Java - верно ?',
        options: [
            'ничем не отличаются',
            'да',
            'нет',
            'наоборот, Java - подвид JavaScripta',
        ],
        rightAnswer: 3
    },
    {
        question: 'Как объявить функция в JavaScript ?',
        options: [
            'function:MyFunction()',
            'function MyFunction()',
            'function = MyFuction()',
            'function = New MyFunction()',
        ],
        rightAnswer: 3
    },
    {
        question: 'JSON - это....',
        options: [
            'JavaScript Object Notation',
            'название сдедущей версии JavaScript',
            'JavaScript Over Network',
            'имя создателя JavaScript',
        ],
        rightAnswer: 3
    },
    {
        question: 'Расшифруйте аббревиатуру API.',
        options: [
            'Analog Programm interface',
            'Aplication Programming Interface',
            'Academy Provide Infinitte',
            'Academy Password Interpriate',
        ],
        rightAnswer: 2
    },
    {
        question: 'Какой оператор завершает выполнение текущей функции и фозвращает её значение ?',
        options: [
            'case',
            'break',
            'default',
            'return',
            
        ],
        rightAnswer: 1
    },
    {
        question: 'Что такое замыкание в JavaScript ?',
        options: [
            'способность функции вызывать саму себя',
            'способность функции - запомнить все переменные',
            'способность функции - запоминать область видимости, в которой эта функция была объявлен',
            'способ распарсить пнаписанное значение',
        ],
        rightAnswer: 2
    },
];

numberOfAllQuestions.innerHTML = questions.length// выводим колиество вопросов

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question//сам вопрос

    //мапим ответы
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfAllQuestions.innerHTML = indexOfPage + 1;//установка номера текущей страницы
    indexOfPage++;//увеличение индекса страницы
};

let completedAnswers = [];//массив для уже заданных вопросов

const randomQuestion = () => {
      let randomNumber = Math.floor(Math.random() * questions.length);
      let hitDuplicate = false;//якорь для проыерки одинаковых вопросов

      if(indexOfPage == questions.length) {
          quizOver()//функция на конец игры
      }else {
          if(completedAnswers.length > 0) {
              completedAnswers.forEach(item => {
                  if(item == randomNumber) {
                      hitDuplicate = true;
                  }
              });
              if(hitDuplicate) {
                randomQuestion();
              }else {
                  indexOfQuestion = randomNumber;
                  load();
              }
          }
          if(completedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
          }
      }
      completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    }else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

for(option of optionElements) {
    option.addEventListener('click' , e => checkAnswer(e));
}

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
}
//удаление всех классов со всех ответов
const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
};

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
}

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
    if(!optionElements[0].classList.contains('disabled')){
        alert('Вам нужно выбрать один из вариантов ответов')
    } else {
        randomQuestion();
        enableOptions();
    }
}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload();
}

btnTryAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click', () => {
    validate();
})

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
});

