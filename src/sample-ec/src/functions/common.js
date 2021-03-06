import HTMLReactParser from 'html-react-parser'

/**
 * Validate input email
 * @param email
 * @returns {boolean}
 */
export const isValidEmailFormat = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}


/**
 * Show an alert if required input is blank
 * @param args Required input values
 * @returns {boolean}
 */
export const isValidRequiredInput = (...args) => {
  let validator = true;
  for (let i = 0; i < args.length; i = (i + 1) | 0) {
    if (args[i] === "") {
      validator = false;
    }
  }
  return validator
};


export const returnCodeToBr = str => {
  if (str === "") return str

  return HTMLReactParser(str.replace(/\r?\n/g, '<br/>'))
}

export const datetimeToString = dt => {
  return dt.getFullYear() + '-'
    + ('00' + (dt.getMonth() + 1)).slice(-2) + '-'
    + ('00' + dt.getDate()).slice(-2) + ' '
    + ('00' + dt.getHours()).slice(-2) + ':'
    + ('00' + dt.getMinutes()).slice(-2) + ':'
    + ('00' + dt.getSeconds()).slice(-2)
}

export const dateToString = dt => {
  return dt.getFullYear() + '-'
    + ('00' + (dt.getMonth() + 1)).slice(-2) + '-'
    + ('00' + dt.getDate()).slice(-2)
}