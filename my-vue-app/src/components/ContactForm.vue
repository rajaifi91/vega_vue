<template>
    <div class="contact-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
        </div>
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        // Here you would typically send the form data to a server
        console.log('Form submitted:', this.form)
        // Reset form after submission
        this.form = {
          name: '',
          email: '',
          message: ''
        }
        alert('Thank you for your message!')
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>