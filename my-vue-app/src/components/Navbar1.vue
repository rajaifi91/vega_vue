<template>
  <!-- Navigation Bar -->
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <ul>
      <!-- Home Item -->
      <li class="dropdown">
        <VegaSidenavLink icon="fa fa-home" url="#">Home</VegaSidenavLink>
        <div class="dropdown-content">
          <VegaSidenavLink url="/"><RouterLink to="/">Home 1</RouterLink></VegaSidenavLink>
          <VegaSidenavLink url="/">Home Option 2</VegaSidenavLink>
        </div>
      </li>
      <!-- Dashboard Item with Dropdown -->
      <li class="dropdown">
        <VegaSidenavLink icon="fa fa-file-alt fa-lg" url="#">Dashboard</VegaSidenavLink>
        <div class="dropdown-content">
          <VegaSidenavLink url="#">Form W-9</VegaSidenavLink>
          <VegaSidenavLink url="#" selected="true">Form W-8BEN</VegaSidenavLink>
          <VegaSidenavLink url="#">Reports</VegaSidenavLink>
        </div>
      </li>
      <!-- Orders Item with Dropdown -->
      <li class="dropdown">
        <VegaSidenavLink icon="fa fa-shopping-bag fa-lg" url="#">Orders</VegaSidenavLink>
        <div class="dropdown-content">
          <VegaSidenavLink url="#">New Order</VegaSidenavLink>
          <VegaSidenavLink url="#">Order History</VegaSidenavLink>
        </div>
      </li>
      <!-- Support Item with Dropdown -->
      <li class="dropdown">
        <VegaSidenavLink icon="fa fa-comment-dots fa-lg" url="#">Support</VegaSidenavLink>
        <div class="dropdown-content">
          <VegaSidenavLink url="#"><RouterLink to="/contact">Contact us</RouterLink></VegaSidenavLink>
          <VegaSidenavLink url="#">FAQ</VegaSidenavLink>
        </div>
      </li>
      <li class="dropdown">
        <VegaSidenavLink icon="fa fa-comment-dots fa-lg" url="#">Registration</VegaSidenavLink>
        <div class="dropdown-content">
          <VegaSidenavLink url="#"><RouterLink to="/login">Login</RouterLink></VegaSidenavLink>
          <VegaSidenavLink url="#"><RouterLink to="/register">Register</RouterLink></VegaSidenavLink>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Navbar1',  
}
    import {VegaSidenavLink } from "@heartlandone/vega-vue"
    // Optional: Add interactivity if needed (e.g., toggle dropdowns on click for mobile)
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          const content = dropdown.querySelector('.dropdown-content');
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
    
  </script>
  <style>
  /* Navigation bar container */
  .navbar {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
    backdrop-filter: blur(5px); /* Optional: adds a blur effect for modern browsers */
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 10%;
  }

  /* Horizontal navigation list */
  .navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  /* Style for VegaSidenavLink used as nav items */
  VegaSidenavLink {
    display: inline-block;
    margin: 0 15px;
    position: relative;
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  /* Dropdown container */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown content */
  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    min-width: 200px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 4px;
    padding: 10px 0;
  }

  /* Dropdown items (VegaSidenavLink) */
  .dropdown-content VegaSidenavLink {
    display: block;
    margin: 5px 0;
    padding: 10px 15px;
    color: #333;
    font-size: 14px;
  }

  /* Show dropdown on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Hover effect for nav items */
  VegaSidenavLink:hover {
    color: #007bff;
  }

  /* Main content padding to prevent overlap with fixed navbar */
  .main-content {
    margin-top: 60px;
    padding: 20px;
  }

  /* Responsive design */
  @media screen and (max-width: 768px) {
    .navbar ul {
      flex-direction: column;
    }
    VegaSidenavLink {
      margin: 10px 0;
    }
    .dropdown-content {
      position: static;
      width: 100%;
    }
  }
</style>