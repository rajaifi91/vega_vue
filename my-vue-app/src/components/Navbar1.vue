<template>

  <!-- Navigation Bar -->
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <ul>
      <!-- Home Item -->
      <li class="dropdown">
        <vega-sidenav-link icon="fas fa-home" url="#">Home</vega-sidenav-link>
        <div class="dropdown-content">
          <vega-sidenav-link url="#">Home Option 1</vega-sidenav-link>
          <vega-sidenav-link url="#">Home Option 2</vega-sidenav-link>
        </div>
      </li>
      <!-- Dashboard Item with Dropdown -->
      <li class="dropdown">
        <vega-sidenav-link icon="fas fa-file-alt fa-lg" url="#">Dashboard</vega-sidenav-link>
        <div class="dropdown-content">
          <vega-sidenav-link url="#">Form W-9</vega-sidenav-link>
          <vega-sidenav-link url="#" selected="true">Form W-8BEN</vega-sidenav-link>
          <vega-sidenav-link url="#">Reports</vega-sidenav-link>
        </div>
      </li>
      <!-- Orders Item with Dropdown -->
      <li class="dropdown">
        <vega-sidenav-link icon="fas fa-shopping-bag fa-lg" url="#">Orders</vega-sidenav-link>
        <div class="dropdown-content">
          <vega-sidenav-link url="#">New Order</vega-sidenav-link>
          <vega-sidenav-link url="#">Order History</vega-sidenav-link>
        </div>
      </li>
      <!-- Support Item with Dropdown -->
      <li class="dropdown">
        <vega-sidenav-link icon="fas fa-comment-dots fa-lg" url="#">Support</vega-sidenav-link>
        <div class="dropdown-content">
          <vega-sidenav-link url="#">Contact Us</vega-sidenav-link>
          <vega-sidenav-link url="#">FAQ</vega-sidenav-link>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
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
    position: fixed;
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
  }

  /* Horizontal navigation list */
  .navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  /* Style for vega-sidenav-link used as nav items */
  vega-sidenav-link {
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

  /* Dropdown items (vega-sidenav-link) */
  .dropdown-content vega-sidenav-link {
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
  vega-sidenav-link:hover {
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
    vega-sidenav-link {
      margin: 10px 0;
    }
    .dropdown-content {
      position: static;
      width: 100%;
    }
  }
</style>