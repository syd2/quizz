const exampleQuizz = [
  {
    id: 1,
    question: "How to delete a directory in Linux?",
    description: "delete folder",
    answers: {
      answer_a: "ls",
      answer_b: "delete",
      answer_c: "remove",
      answer_d: "rmdir",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    explanation: "rmdir deletes an empty directory",
    tip: null,
    tags: [],
    category: "linux",
    difficulty: "Easy",
  },
];

const categories = [];

export const gradientColors = [
  ["#FF3C6A", "#FF91AB"],
  ["#F09819", "#EDDE5D"],
  ["#480CA8", "#8F60DA"],
  ["#F09819", "#EDDE5D"],
];
