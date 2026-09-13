# AI Code Review

## Function Reviewed

I asked an AI assistant to create a JavaScript function that validates and normalises Cameroonian phone numbers.

The function should:

* Accept numbers beginning with `+237` or `237`.
* Handle spaces and common formatting variations.
* Return the phone number in a consistent format.
* Reject invalid phone numbers.
* Avoid throwing errors when the input is missing or has the wrong type.

---

## 1. Prompt Given to the AI

Create a JavaScript function called `normalizeCameroonPhone`.

It should validate and normalise Cameroonian phone numbers.

Requirements:

* Accept numbers beginning with `+237` or `237`.
* Accept common spaces and formatting characters.
* Support the common 9-digit Cameroonian mobile number format.
* Return a normalised number using the `+237XXXXXXXXX` format.
* Return `null` for invalid input.
* Handle empty values and wrong input types safely.
* Do not use external libraries.

First provide the function and then explain how it works.

---

## 2. AI-Generated Code

```js
function normalizeCameroonPhone(phone) {
  if (!phone) {
    return null;
  }

  let cleaned = phone.replace(/[\s()-]/g, "");

  if (cleaned.startsWith("237")) {
    cleaned = "+" + cleaned;
  }

  if (!cleaned.startsWith("+237")) {
    cleaned = "+237" + cleaned;
  }

  if (cleaned.length !== 13) {
    return null;
  }

  return cleaned;
}
```

---

## 3. My Review

I reviewed the generated code using correctness, security, honesty, fit, and edge-case checks.

### Issue 1: Wrong input types can cause an error

The function assumes that `phone` has a `.replace()` method.

For example:

```js
normalizeCameroonPhone(677123456);
```

would cause an error because a number does not have the `replace()` method.

### Improvement

The function should first check that the input is a string.

```js
if (typeof phone !== "string") {
  return null;
}
```

---

### Issue 2: Invalid digits can be accepted

The generated function checks the length but does not verify that the phone number contains only valid digits.

For example, a value such as:

```text
+237ABC123456
```

could pass the length check even though it is not a valid phone number.

### Improvement

Use a regular expression to ensure that the final number contains exactly nine digits after `+237`.

---

### Issue 3: The function can incorrectly add the country code

The generated code automatically adds `+237` to anything that does not start with it.

For example:

```text
123456789
```

would become:

```text
+237123456789
```

even though it may not represent a valid Cameroonian mobile number.

### Improvement

Validate the local number against the expected Cameroonian mobile-number pattern before returning it.

---

### Issue 4: The implementation does not clearly validate the local mobile prefixes

The code only checks the total length. It does not verify that the number starts with a recognised Cameroonian mobile prefix such as `6`.

### Improvement

Require the nine-digit local number to start with `6`.

---

## 4. Questions I Asked During the Review

### Question 1

What happens if the input is a number instead of a string?

**Answer:** The original code can throw an error because it calls `.replace()` without checking the input type.

### Question 2

What happens if the number contains letters?

**Answer:** The original code does not explicitly reject alphabetic characters.

### Question 3

What happens if the number has the correct length but is not a valid mobile number?

**Answer:** The original code may accept it because it checks length rather than the actual phone-number pattern.

### Question 4

Does the function always return the requested `+237XXXXXXXXX` format?

**Answer:** It attempts to do so, but the validation is too weak to guarantee that the returned value represents a valid Cameroonian mobile number.

---

## 5. Corrected Code

```js
function normalizeCameroonPhone(phone) {
  if (typeof phone !== "string") {
    return null;
  }

  let cleaned = phone.trim().replace(/[\s()-]/g, "");

  if (cleaned.startsWith("+237")) {
    cleaned = cleaned.slice(4);
  } else if (cleaned.startsWith("237")) {
    cleaned = cleaned.slice(3);
  }

  if (!/^6\d{8}$/.test(cleaned)) {
    return null;
  }

  return `+237${cleaned}`;
}

console.log(normalizeCameroonPhone("+237 677 123 456"));
console.log(normalizeCameroonPhone("237 677 123 456"));
console.log(normalizeCameroonPhone("677-123-456"));
console.log(normalizeCameroonPhone("123456789"));
console.log(normalizeCameroonPhone(677123456));
```

---

## 6. Final Verdict

**Verdict: Edit**

I would not accept the original AI-generated function because it does not safely handle wrong input types and does not properly validate the phone-number format.

The corrected version is safer because it validates the input type, removes common formatting characters, handles both `+237` and `237`, and checks that the remaining number follows the expected nine-digit mobile format.

This review showed me that AI-generated code can look correct while still missing important edge cases, so I should test the behaviour rather than judging the code only by how clean it looks.
