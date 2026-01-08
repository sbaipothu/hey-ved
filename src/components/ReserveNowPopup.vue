<template>
  <div v-if="show" class="popup-overlay">
    <div class="popup-content">
      <h2>Reserve Your Event</h2>
      <form @submit.prevent="submitForm">
        <label>Name*<input v-model="form.name" required /></label>
        <label>Contact Number*<input v-model="form.contact" required pattern="[0-9]{10,}" /></label>
        <label>Event Date
          <input v-model="form.date" type="date" />
        </label>
        <label>Event Description*<textarea v-model="form.description" required></textarea></label>
        <div class="popup-actions">
          <button type="submit">Submit</button>
          <button type="button" @click="$emit('close')">Cancel</button>
        </div>
      </form>
      <div v-if="success" class="success-msg">Thank you! We will contact you soon.</div>
      <div v-if="error" class="error-msg">Failed to send. Please try again.</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  data() {
    return {
      form: {
        name: '',
        contact: '',
        date: '',
        description: ''
      },
      success: false,
      error: false
    }
  },
  methods: {
    async submitForm() {
      this.success = false;
      this.error = false;
      try {
        // Call backend API to send email
        const res = await fetch('/api/send-reservation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        });
        if (res.ok) {
          this.success = true;
          this.$emit('submitted');
        } else {
          this.error = true;
        }
      } catch {
        this.error = true;
      }
    }
  }
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.popup-content {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
}
.popup-content h2 {
  margin-top: 0;
}
.popup-content label {
  display: block;
  margin: 1rem 0 0.5rem;
}
.popup-content input,
.popup-content textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.popup-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}
.success-msg {
  color: green;
  margin-top: 1rem;
}
.error-msg {
  color: red;
  margin-top: 1rem;
}
</style>
