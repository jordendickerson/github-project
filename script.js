const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const results = document.getElementById("result");

//EVENT LISTENERS
checkButton.addEventListener("click", () => {
  //if the textInput value is empty, change the placeholder to a prompt
  if (textInput.value == "") {
    alert("Please input a value");
    return;
  }

  //update the result div based on the isPalindrome method
  if (isPalindrome(textInput.value)) {
    results.textContent = `${textInput.value} is a palindrome`;
  } else {
    results.textContent = `${textInput.value} is not a palindrome >:(`;
  }
});

//Check if word is palindrome
const isPalindrome = (word) => {
  //remove all non-alphanumeric characters
  word = word.replace(/[^a-zA-Z0-9]/g, "");
  //reverse the word
  const reversed = word.split("").reverse().join("");
  //compare the lowercase versions of both the word and the reversed word
  return word.toLowerCase() === reversed.toLowerCase();
};
