<!-- ContactForm.vue -->
<template>
    <div class="contact-form">
      <h2>Contact From Using Vega component.</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-field">
          <label for="name">Full Name</label>
          <input
            v-model.trim="formData.name"
            type="text"
            id="name"
            placeholder="John Doe"
            required
          />
        </div>
  
        <div class="form-field">
          <label for="email">Email Address</label>
          <input
            v-model.trim="formData.email"
            type="email"
            id="email"
            placeholder="john@example.com"
            required
          />
        </div>
  
        <div class="form-field">
          <label for="subject">Subject</label>
          <input
            v-model.trim="formData.subject"
            type="text"
            id="subject"
            placeholder="Your subject"
            required
          />
        </div>
  
        <div class="form-field">
          <label for="message">Message</label>
          <textarea
            v-model="formData.message"
            id="message"
            placeholder="Type your message here..."
            rows="4"
            required
          ></textarea>
        </div>
  
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Submit' }}
        </button>
      </form>
      <p v-if="submitStatus" :class="submitStatus.class">
        {{ submitStatus.message }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        isSubmitting: false,
        submitStatus: null
      }
    },
    methods: {
      async handleSubmit() {
        if (!this.validateForm()) return
  
        this.isSubmitting = true
        this.submitStatus = null
  
        try {
          // Simulate API call - replace with actual backend endpoint
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          console.log('Form Data:', this.formData)
          
          this.submitStatus = {
            message: 'Message sent successfully!',
            class: 'success'
          }
          
          this.resetForm()
        } catch (error) {
          this.submitStatus = {
            message: 'Failed to send message. Please try again.',
            class: 'error'
          }
        } finally {
          this.isSubmitting = false
        }
      },
      validateForm() {
        if (!this.formData.email.includes('@')) {
          this.submitStatus = {
            message: 'Please enter a valid email address',
            class: 'error'
          }
          return false
        }
        return true
      },
      resetForm() {
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-field {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  textarea {
    resize: vertical;
  }
  
  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    background-color: #0056b3;
  }
  
  .success {
    color: #28a745;
    margin-top: 10px;
  }
  
  </style>