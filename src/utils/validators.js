export function validateCPF(oldCpf) {
  let cpf = "";
  for (let i = 0; i < oldCpf.length; i++) {
    if (oldCpf.charAt(i) !== "." && oldCpf.charAt(i) !== "-") {
      cpf = cpf.concat(oldCpf.charAt(i));
    }
  }
  var sum;
  var rest;
  sum = 0;
  if (cpf == "00000000000") return false;

  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

export function validateStartDate(startDate) {
  if (parseInt(startDate.substring(0, 2)) > 12) return false;
  return true;
}

export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
