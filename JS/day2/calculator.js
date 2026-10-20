
function calculate(expression) {
  // 1. 공백 제거
  const cleaned = expression.replace(/\s/g, "");

  // 2. 입력한 계산식 검사
  if (!/^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/.test(cleaned)) {
    return "올바른 계산식을 입력하세요.";
  }

  // 3. 숫자와 연산자 분리
  const numbers = cleaned.split(/[+\-*/]/).map(Number);
  const operators = cleaned.match(/[+\-*/]/g) || [];

  // 4. 곱셈과 나눗셈 먼저 계산
  let i = 0;

  while (i < operators.length) {
    if (operators[i] === "*" || operators[i] === "/") {
      if (operators[i] === "/" && numbers[i + 1] === 0) {
        return "0으로 나눌 수 없습니다.";
      }

      const result = operators[i] === "*"
        ? numbers[i] * numbers[i + 1]
        : numbers[i] / numbers[i + 1];

      numbers.splice(i, 2, result);
      operators.splice(i, 1);
    } else {
      i++;
    }
  }

  // 5. 덧셈과 뺄셈 계산
  let result = numbers[0];

  for (let j = 0; j < operators.length; j++) {
    if (operators[j] === "+") {
      result += numbers[j + 1];
    } else {
      result -= numbers[j + 1];
    }
  }

  return result;
}
