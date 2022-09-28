const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nightPeriod = (obj, key, value) => (obj[key] = value);
nightPeriod(lesson2, 'turno', 'noite');
// console.table(lesson2);

const listObjKeys = (obj) => Object.keys(obj);
// console.log(listObjKeys(lesson1));

const objLength = (obj) => Object.keys(obj).length;
// console.log(objLength(lesson2));

const listObjValues = (obj) => Object.values(obj);
// console.log(listObjValues(lesson3));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

const studentsQuantity = (obj) => {
  const quantityLesson1 = obj.lesson1.numeroEstudantes;
  const quantityLesson2 = obj.lesson2.numeroEstudantes;
  const quantityLesson3 = obj.lesson3.numeroEstudantes;
  return quantityLesson1 + quantityLesson2 + quantityLesson3;
};
// console.log(studentsQuantity(allLessons));

const getValueByNumber = (obj, number) => {
  const value = Object.values(allLessons[obj]);
  return value[number];
};
// console.log(getValueByNumber('lesson1', 0))

const searchFor = (obj, key, value) => {
  const keyName = Object.keys(obj);
  const keyValues = obj[key];
  return keyName.includes(key) && keyValues == value;
};
// console.log(searchFor(lesson2,'professor','Carlos'));

const studentsCount = () => {
  const lessons = Object.keys(allLessons);
  let totalAlunos = 0;
  for (let i in lessons) {
    const lessonInfo = allLessons[lessons[i]];
    if (lessonInfo['materia'] === 'Matemática') {
      totalAlunos += lessonInfo['numeroEstudantes'];
    }
  }
  return totalAlunos;
};
// console.log(studentsCount());

const createReport = (obj, teacher) => {
  const teacherInfo = {
    professor: teacher,
    aulas: [],
    estudantes: 0
  }
  const lessons = Object.keys(obj);
  for (let i in lessons) {
    const teacherObject = obj[lessons[i]];
    if (teacherObject.professor === teacher) {
      teacherInfo.aulas.push(teacherObject.materia);
      teacherInfo.estudantes += teacherObject.numeroEstudantes;
    }
  }
  return teacherInfo;
}
// console.log(createReport(allLessons, 'Carlos'));
