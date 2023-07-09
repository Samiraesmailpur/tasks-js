// Задач 1
function findDifference(array) {
  if (array.length <= 1) {
    return 0;
  }
  const minNum = array.reduce((acc, num) => (acc > num ? num : acc));
  const maxNum = array.reduce((acc, num) => (acc > num ? acc : num));

  return maxNum - minNum;
}
// console.log(findDifference([1, 2, 3, -4]));

// Задача 2
function filteredWords(str, num) {
  return str
    .replace(/[\p{P}\p{S}]/gu, '')
    .split(' ')
    .filter(item => item.length > num);
}
// console.log(filteredWords('hello world', 4));

// Задача 3
function isEnd(firstString, secondString) {
  return firstString.endsWith(secondString);
}
// console.log(isEnd('abc', 'bc'));

// Задача 4
function averages(arr) {
  const averagesNumbers = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const calculate = (arr[i] + arr[i + 1]) / 2;
    averagesNumbers.push(calculate);
  }
  return averagesNumbers;
}
// console.log(averages([1, 3, 5, 1, -10]));

// Задача 5
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelsLen = str
    .toLowerCase()
    .split('')
    .filter(item => vowels.includes(item));

  return vowelsLen.length;
}
// console.log(countVowels("Palm"));
// console.log(countVowels("Celebration"));

// 5.2
function removeABC(str) {
  const removedLetters = ['a', 'b', 'c'];
  const newStr = str
    .split('')
    .filter(item => !removedLetters.includes(item))
    .join('');

  if (str === newStr) {
    return null;
  }
  return newStr;
}
// console.log(removeABC('This might be a bit hard'));
// console.log(removeABC('hello world!'));

// Задача 6
function findUniqueElements(arrFirst, arrSecond) {
  const uniqueArr = arrFirst
    .concat(arrSecond)
    .filter((item, index, array) => array.indexOf(item) === index);

  return uniqueArr;
}

// console.log(findUniqueElements([1, 2, 3], [100, 2, 1, 10]));

// Задача 7
function invertObject(obj) {
  const flipObj = Object.entries(obj).map(([key, value]) => [value, key]);
  return Object.fromEntries(flipObj);
}

// console.log(invertObject({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }));

// Задача 8
function calculateDifference(obj, num) {
  const difference = Object.values(obj).reduce((acc, value) => acc + value, 0);
  return difference - num;
}
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateDifference({ "baseball bat": 20 }, 5));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// Задача 9
function doesBrickFit(a, b, c, w, h) {
  if (a <= h && b <= w) return true;
  if (a <= h && c <= w) return true;
  if (b <= h && c <= w) return true;
  return false;
}

// console.log(doesBrickFit(1, 1, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 2, 1, 1));

// Задача 10
function findFileName(path) {
  return path.substring(path.lastIndexOf('\\') + 1, path.indexOf('.'));
}

// console.log(findFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// Задача 11
function isCyclicShift(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const doubleStr = str2 + str2;

  return doubleStr.includes(str1);
}

// console.log(isCyclicShift('hello', 'lohel'));
// console.log(isCyclicShift('hello', 'eohll'));

// // Задача 12
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const c = [];
const b = [];
const sortedArr = arr.sort((a, b) => a - b);

for (let i = 0; i < sortedArr.length; i += 2) {
  c.push(sortedArr[i + 1]);
  b.push(sortedArr[i]);
}

// console.log('Масив b:', b);
// console.log('Масив c:', c);

// Задача 13
function formatString(str) {
  const regexUrl = /<a(.*?)>(.*?)<\/a>/g;
  const regexEmail = /([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)/g;
  const regexDigits = /\d{4,}/g;
  let newStr = str
    .replace(regexUrl, '[посилання забороно]')
    .replace(regexEmail, '[контакти забороно]')
    .replace(regexDigits, '');

  newStr = newStr.charAt(0).toUpperCase().concat(newStr.slice(1).toLowerCase());

  if (str.length > newStr.length) {
    setInterval(() => alert('Чи потрібна вам допомога?'), 5000);
  }

  return newStr;
}

// console.log(formatString('hello <a href="" class="hell">hello</a> blabla@blabl.com SAMIRA 1111'));

// Задача 14
function balanceBrackets(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      count++;
    }
    if (str[i] == ')') {
      count--;
    }
    if (count < 0) {
      break;
    }
  }

  if (count === 0) {
    const body = document.querySelector('body');
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = str;
    body.prepend(paragraphElement);
    paragraphElement.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', function (event) {
      if (
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.key === 'u') ||
        (event.metaKey && event.ctrlKey && event.key === 'I') ||
        event.key === 'F12'
      ) {
        event.preventDefault();
      }
    });

    return str;
  }
}
// balanceBrackets('(привіт)');

// Задача 15
function generatePassword() {
  let obj = {
    upperCase: {
      limit: 2,
      value: '',
      elements: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    },
    lowerCase: {
      limit: Math.floor(Math.random() * 12),
      value: '',
      elements: 'abcdefghijklmnopqrstuvwxyz',
    },
    numbers: {
      limit: 5,
      value: '',
      elements: '0123456789',
    },
    symbols: {
      limit: 1,
      value: '',
      elements: '_',
    },
  };
  let password = '';
  Object.keys(obj).forEach(elem => {
    for (let i = 0; i < obj[elem].limit; i++) {
      const index = Math.floor(Math.random() * obj[elem].elements.length);
      obj[elem].value += obj[elem].elements[index];
    }
    password += obj[elem].value;
  });
  const shuffle = str => [...str].sort(() => Math.random() - 0.5);
  const regex = /\d{2}/;
  let result;
  do {
    result = shuffle(password).join('');
  } while (regex.test(result));

  return result;
}

// console.log(generatePassword());

// Задача 16
const array = [1, 4, 8, 100, 12];
const left = [];
const right = [];

const sortedArray = array.sort((a, b) => a - b);
sortedArray.forEach((item, index) => {
  index % 2 === 0 ? left.push(item) : right.unshift(item);
});

const newArray = left.concat(right);

// console.log(newArray);

// Задача 17
function sortedString(str) {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }
  const sortedChars = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  let sortedStr = '';

  for (char of sortedChars) {
    sortedStr += char.repeat(obj[char]);
  }
  return sortedStr;
}

// console.log(sortedString('hello world'));

// Задача 18
function commonSub(firstStr, secondStr) {
  let searchSubstring = '';
  firstStr.split(' ').forEach(item => {
    let searchSubject = '';
    for (let i = 0; i < item.length; i++) {
      for (let j = 0; j < item.length; j++) {
        searchSubject = item.substring(i, j + 1);
        if (secondStr.includes(searchSubject)) {
          if (searchSubject.length >= searchSubstring.length) {
            searchSubstring = searchSubject;
          }
        }
      }
    }
  });

  return searchSubstring;
}

// console.log(commonSub('привіт всім', 'прувет всі'));

// Задача 19
function encryptStr(string, shift) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let encryptedStr = '';

  string.split('').forEach(item => {
    const letter = item;
    const itemIndex = alphabet.indexOf(item.toLowerCase());
    if (itemIndex === -1) {
      encryptedStr += item;
    } else {
      const shiftIndex = (itemIndex + shift) % alphabet.length;
      const newStr =
        letter === letter.toUpperCase() ? alphabet[shiftIndex].toUpperCase() : alphabet[shiftIndex];
      encryptedStr += newStr;
    }
  });

  return encryptedStr;
}
// console.log(encryptStr('Helloz', 3));

// Задача 20
function isAnogram(firstStr, secondStr) {
  if (firstStr.length !== secondStr.length) {
    return false;
  }
  const sortedFirstStr = firstStr.toLowerCase().split('').sort().join('');
  const sortedSecondStr = secondStr.toLowerCase().split('').sort().join('');

  return sortedFirstStr === sortedSecondStr;
}

// console.log(isAnogram('hello Samira', 'amiras olleh'));

// Задача 21
const university = {
  students: [],

  addStudent: function (student) {
    this.students.push(student);
  },
  removeStudent: function (id) {
    const studentIdx = this.students.findIndex(student => student.id === id);
    if (studentIdx !== -1) {
      this.students.splice(studentIdx, 1);
      console.log('Студент успішно видалений');
    } else {
      console.log('Студента не знайдено');
    }
  },
  getStudent(id) {
    const student = this.students.find(student => student.id === id);
    if (student) {
      console.log(student);
    } else {
      console.log('Студента не знайдено');
    }
  },
  getStudentsByCourse: function (course) {
    return this.students.filter(student => student.course === course);
  },
  getStudentsByFaculty: function (faculty) {
    return this.students.filter(student => student.faculty === faculty);
  },
};

university.addStudent({ id: 1, name: 'Samira', course: 4, faculty: 'Computer Science' });
university.addStudent({ id: 4, name: 'Sergey', course: 4, faculty: 'Computer Science' });
university.addStudent({ id: 3, name: 'Sonya', course: 3, faculty: 'Technology' });
university.addStudent({ id: 2, name: 'Igor', course: 3, faculty: 'Technology' });

// console.log(university.students)
// university.removeStudent(1)
// university.getStudent(1)
// console.log(university.getStudentsByCourse(4))
// console.log(university.getStudentsByFaculty('Technology'))

// Задача 22
function statistics(text) {
  let obj = {
    frequentWords: [],
  };

  const specialChars = '[`!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~]/'.split('');
  const textWitohutExtraSymbols = text.replace(/[\p{P}\p{S}]/gu, '');

  const words = textWitohutExtraSymbols
    .split(' ')
    .filter(item => item !== '')
    .forEach(item => {
      obj.frequentWords[item] = obj.frequentWords[item] ? obj.frequentWords[item] + 1 : 1;
    });

  const sortedWords = Object.keys(obj.frequentWords)
    .sort((a, b) => obj.frequentWords[b] - obj.frequentWords[a])
    .slice(0, 4);

  obj.wordCount = textWitohutExtraSymbols.replace(/\s\s+/g, ' ').split(' ').length;

  obj.sentenceCount = text.split(/[.!?]/g).filter(sentence => sentence !== '').length;

  obj.characterCount = text.split('').filter(item => specialChars.includes(item)).length;

  obj.frequentWords = sortedWords;

  return obj;
}

// console.log(
//   statistics(
//     'Напишіть програму, яка аналізує текст та виводить статистику про кількість слів, речень та символів у тексті. Реалізуйте також функцію, яка визначає слова, що найчастіше зустрічаються в тексті. Використовуйте методи роботи з рядками, регулярні вирази та обєкти для вирішення задачі.'
//   )
// );
