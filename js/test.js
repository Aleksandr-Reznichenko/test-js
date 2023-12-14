'use strict';

// ======= >>>

function passwordVerification(pass) {
  if (pass.length < 8) {
    return 'Пароль повинен містити не менше 8 символів.';
  } else {
  }
}

console.log(passwordVerification('FvLl!jbDSD54'));
console.log(passwordVerification('FvLl!j'));
console.log(passwordVerification('FvLlsjbDSD54'));
console.log(passwordVerification('sjv1Ds32#5$'));
