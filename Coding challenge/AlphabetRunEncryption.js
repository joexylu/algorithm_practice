// Alphabet Run Encryption
// Have the function AlphabetRunEncryption(str) read the str parameter being passed which will be an encrypted string and your program should output the original decrypted string. The encryption being used is the following: For every character i in str up to the second to last character, take the i and i+1 characters and encode them by writing the letters of the alphabet, in order, that range in the same direction between those chosen characters. For example: if the original string were bo then it would be encoded as cdefghijklmn, but if the string were boa then bo is encoded as cdefghijklmn and oa is encoded as nmlkjihgfedcb with the final encrypted string being cdefghijklmnnmlkjihgfedcb. So str may be something like the encrypted string just written, and your program should decrypt it and output the original message.

// The input string will only contains lowercase characters (a...z). There are also three important rules to this encryption based on specific character sequences.

// 1) If the original string contains only one letter between two chosen characters, such as the string ac then this would be encrypted as bR with R standing for what direction in the alphabet to go in determining the original characters. The encrypted string bR represents ac but the encrypted string bL represents ca (R = right, L = left).

// 2) If the original string contains zero letters between two chosen characters, such as the string ab then this would be encrypted as abS, with S representing the fact that no decryption is needed on the two letters preceding S. For example, if the original string were aba then the encryption would be abSbaS, but be careful because decrypting this you get abba, but the actual original string is aba.

// 3) If the original string contains a repeat of letters, such as the string acc then this would be encrypted as bRcN, with N representing the fact that no change in characters occurred on the character preceding N. The input string will never only be composed of repeated characters.
// Examples
// Input: "bcdefghijklmnopqrstN"
// Output: att
// Input: "abSbaSaNbR"
// Output: abaac

function ReturnSequenceStartChar(arr) {
    var code1 = arr[0].charCodeAt(0);
    var code2 = arr[1].charCodeAt(0);
    var result;
    if (code1 + 1 == code2) {
      result = String.fromCharCode(code1 - 1);
    }
    else {
      result = String.fromCharCode(code1 + 1);
    }
    return result;
  }
  
  function ReturnSequenceEndChar(arr) {
    var code1 = arr[arr.length - 2].charCodeAt(0);
    var code2 = arr[arr.length - 1].charCodeAt(0);
    var result;
    if (code1 + 1 == code2) {
      result = String.fromCharCode(code2 + 1);
    }
    else {
      result = String.fromCharCode(code2 - 1);
    }
    return result;
  }
  
  function AlphabetRunEncryption(str) {
    var arr = [str[0]], prevCode = str.charCodeAt(0);
    var decoded = '', nextChar;
    for (var i = 1; i < str.length; i++) {
      var c = str[i];
      var code = str.charCodeAt(i);
      var len = arr.length;
      if (c == 'S') {
        if (len > 2) {
          decoded += ReturnSequenceStartChar(arr.slice(0, len - 2));
          decoded += arr[len - 2];
          nextChar = arr[len - 1];
        }
        else {
          decoded += arr[0];
          nextChar = arr[1];
        }
        arr = [];
      }
      else if (c == 'N') {
        if (len > 1) {
          decoded += ReturnSequenceStartChar(arr.slice(0, len - 1));
          decoded += arr[len - 1];
          nextChar = arr[len - 1];
        }
        else {
          decoded += arr[0];
          nextChar = arr[0];
        }
        arr = [];
      }
      else if (c == 'R') {
        decoded += String.fromCharCode(arr[0].charCodeAt(0) - 1);
        nextChar = String.fromCharCode(arr[0].charCodeAt(0) + 1);
        arr = [];
      }
      else if (c == 'L') {
        decoded += String.fromCharCode(arr[0].charCodeAt(0) + 1);
        nextChar = String.fromCharCode(arr[0].charCodeAt(0) - 1);
        arr = [];
      }
      else if (prevCode + 1 != code && prevCode - 1 != code && len > 2) {
        decoded += ReturnSequenceStartChar(arr);
        nextChar = ReturnSequenceEndChar(arr);
        arr = [];
        prevCode = code;
        arr.push(c);
      }
      else if (i == str.length - 1) {
        arr.push(c);
        decoded += ReturnSequenceStartChar(arr);
        nextChar = ReturnSequenceEndChar(arr);
        arr = [];
      }
      else {
        prevCode = code;
        arr.push(c);
      }
    }
  
    return decoded + nextChar;
  }