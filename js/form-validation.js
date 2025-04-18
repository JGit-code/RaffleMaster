/**
 * Form validation for checkout process
 */
document.addEventListener('DOMContentLoaded', () => {
  const checkoutForm = document.getElementById('checkout-form');
  if (!checkoutForm) return;
  
  // Form elements
  const emailInput = document.getElementById('email');
  const cardNumberInput = document.getElementById('card-number');
  const cardExpiryInput = document.getElementById('card-expiry');
  const cardCvcInput = document.getElementById('card-cvc');
  const nameInput = document.getElementById('card-name');
  const submitButton = document.querySelector('.checkout-submit');
  
  // Basic validation patterns
  const patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    cardNumber: /^[0-9]{13,19}$/,
    cardExpiry: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
    cardCvc: /^[0-9]{3,4}$/,
    name: /^[a-zA-Z\s]{3,}$/
  };
  
  // Validate a field
  function validateField(input, pattern) {
    if (!input) return true; // Skip if input doesn't exist
    
    const value = input.value.trim().replace(/\s/g, ''); // Remove spaces
    const isValid = pattern.test(value);
    
    // Toggle valid/invalid classes
    if (isValid) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
    }
    
    return isValid;
  }
  
  // Format credit card number with spaces
  function formatCardNumber(input) {
    if (!input) return;
    
    let value = input.value.replace(/\s/g, ''); // Remove spaces
    let formattedValue = '';
    
    // Add a space every 4 digits
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }
    
    // Update input value if it's different
    if (input.value !== formattedValue) {
      input.value = formattedValue;
    }
  }
  
  // Format expiry date (MM/YY)
  function formatExpiry(input) {
    if (!input) return;
    
    let value = input.value.replace(/\D/g, ''); // Keep only digits
    
    if (value.length > 2) {
      input.value = value.substring(0, 2) + '/' + value.substring(2, 4);
    } else {
      input.value = value;
    }
  }
  
  // Add input event listeners
  if (emailInput) {
    emailInput.addEventListener('input', () => {
      validateField(emailInput, patterns.email);
    });
  }
  
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', () => {
      formatCardNumber(cardNumberInput);
      validateField(cardNumberInput, patterns.cardNumber);
    });
  }
  
  if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', () => {
      formatExpiry(cardExpiryInput);
      validateField(cardExpiryInput, patterns.cardExpiry);
    });
  }
  
  if (cardCvcInput) {
    cardCvcInput.addEventListener('input', () => {
      validateField(cardCvcInput, patterns.cardCvc);
    });
  }
  
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      validateField(nameInput, patterns.name);
    });
  }
  
  // Submit form validation
  checkoutForm.addEventListener('submit', (e) => {
    // Prevent form submission
    e.preventDefault();
    
    // Validate all fields
    const isEmailValid = validateField(emailInput, patterns.email);
    const isCardNumberValid = validateField(cardNumberInput, patterns.cardNumber);
    const isCardExpiryValid = validateField(cardExpiryInput, patterns.cardExpiry);
    const isCardCvcValid = validateField(cardCvcInput, patterns.cardCvc);
    const isNameValid = validateField(nameInput, patterns.name);
    
    // Check if all validations pass
    const isFormValid = isEmailValid && isCardNumberValid && isCardExpiryValid && isCardCvcValid && isNameValid;
    
    if (isFormValid) {
      // Show loading state
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner"></span> Processing...';
      }
      
      // Simulate payment processing (replace with actual payment gateway)
      setTimeout(() => {
        // Redirect to confirmation page
        window.location.href = '/confirmation.html';
      }, 2000);
    } else {
      // Scroll to first invalid field
      const firstInvalid = document.querySelector('.invalid');
      if (firstInvalid) {
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
});
