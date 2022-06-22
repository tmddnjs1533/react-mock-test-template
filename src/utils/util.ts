export function isIterable(obj: any): boolean {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}

// object isIterable
// array length > 0

export function isNotEmpty(arr: any[]): boolean {
  return arr.length > 0;
}

// resize throttle
export const throttle = (
  type: "resize",
  name: "optimizedResize",
  obj = window
) => {
  let running = false;
  let func = function () {
    if (running) {
      return;
    }
    running = true;
    requestAnimationFrame(function () {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  obj.addEventListener(type, func);
};

export function handlePhone(value: string): string {
  value = value.replace(/\D/g, "");

  if (value.substring(0, 2) === "02") {
    // 서울 전화번호일 경우 10자리까지만 나타나고 그 이상의 자리수는 자동삭제
    if (value.length < 3) {
      return value;
    } else if (value.length < 6) {
      return `${value.substring(0, 2)}-${value.substring(2)}`;
    } else if (value.length < 10) {
      return `${value.substring(0, 2)}-${value.substring(
        2,
        5
      )}-${value.substring(5)}`;
    } else {
      return `${value.substring(0, 2)}-${value.substring(
        2,
        6
      )}-${value.substring(6, value.length)}`;
    }
  } else {
    // 핸드폰 및 다른 지역 전화번호 일 경우
    if (value.length < 4) {
      return value;
    } else if (value.length < 7) {
      return `${value.substring(0, 3)}-${value.substring(3)}`;
    } else if (value.length < 11) {
      return `${value.substring(0, 3)}-${value.substring(
        3,
        6
      )}-${value.substring(6)}`;
    } else if (value.length === 11) {
      return `${value.substring(0, 3)}-${value.substring(
        3,
        7
      )}-${value.substring(7)}`;
    } else {
      return `${value.substring(0, 4)}-${value.substring(
        4,
        8
      )}-${value.substring(8)}`;
    }
  }
}
