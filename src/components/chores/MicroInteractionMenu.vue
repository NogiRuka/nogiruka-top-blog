<script setup lang='ts'>
  // https://codepen.io/knyttneve/pen/rNJxwGR
</script>
  
<template>
<input class="menu-checkbox" id="menu" type="checkbox" name="menu" />
<nav class="menu">
  <label class="menu-dots" for="menu">
    <span class="menu-dot"></span>
    <span class="menu-dot"></span>
    <span class="menu-dot"></span>
  </label>
  <ul class="menu-items">
    <li class="menu-item">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.25 8C9.25 9.24264 8.24264 10.25 7 10.25C5.75736 10.25 4.75 9.24264 4.75 8C4.75 6.75736 5.75736 5.75 7 5.75C8.24264 5.75 9.25 6.75736 9.25 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9.25 16C9.25 17.2426 8.24264 18.25 7 18.25C5.75736 18.25 4.75 17.2426 4.75 16C4.75 14.7574 5.75736 13.75 7 13.75C8.24264 13.75 9.25 14.7574 9.25 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9 15L19.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9 9L19.25 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </li>
    <li class="menu-item">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"></path>
        <rect width="10.5" height="10.5" x="8.75" y="8.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect>
      </svg>
    </li>
    <li class="menu-item">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-width="1.5" d="M19.25 10C19.25 12.7289 17.85 15.25 16.5 15.25C15.15 15.25 13.75 12.7289 13.75 10C13.75 7.27106 15.15 4.75 16.5 4.75C17.85 4.75 19.25 7.27106 19.25 10Z"></path>
        <path stroke="currentColor" stroke-width="1.5" d="M16.5 15.25C16.5 15.25 8 13.5 7 13.25C6 13 4.75 11.6893 4.75 10C4.75 8.31066 6 7 7 6.75C8 6.5 16.5 4.75 16.5 4.75"></path>
        <path stroke="currentColor" stroke-width="1.5" d="M6.75 13.5V17.25C6.75 18.3546 7.64543 19.25 8.75 19.25H9.25C10.3546 19.25 11.25 18.3546 11.25 17.25V14.5"></path>
      </svg>
    </li>
    <li class="menu-item">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 11.75C5.75 11.1977 6.19772 10.75 6.75 10.75H17.25C17.8023 10.75 18.25 11.1977 18.25 11.75V17.25C18.25 18.3546 17.3546 19.25 16.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V11.75Z"></path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 10.5V9.84343C7.75 8.61493 7.70093 7.29883 8.42416 6.30578C8.99862 5.51699 10.0568 4.75 12 4.75C14 4.75 15.25 6.25 15.25 6.25"></path>
      </svg>
    </li>
    <li class="menu-item">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"></path>
      </svg>
    </li>
    <li class="menu-item">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 7.75H19.25L17.6128 14.7081C17.4002 15.6115 16.5941 16.25 15.666 16.25H11.5395C10.632 16.25 9.83827 15.639 9.60606 14.7618L7.75 7.75ZM7.75 7.75L7 4.75H4.75"></path>
        <circle cx="10" cy="19" r="1" fill="currentColor"></circle>
        <circle cx="17" cy="19" r="1" fill="currentColor"></circle>
      </svg>
    </li>
  </ul>
  <label for="menu" class="menu-closer-overlay"></label>
</nav>
</template>
  
<style scoped lang='scss'>
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, #2bc0e4, #eaecc6);
}

.menu-checkbox {
  display: none;
}

.menu {
  position: relative;
}

.menu-dots {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0.3rem #161e3f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  transition: 0.3s;
  cursor: pointer;
}

.menu-dots:hover {
  box-shadow: 0 0 0 0.3rem #161e3f, 0 0 0 1rem rgba(#161e3f, 0.16);
  transform: scale(1.2) rotate(90deg);
}

.menu-dot {
  width: 0.45rem;
  height: 0.45rem;
  background-color: #161e3f;
  border-radius: 50%;
}

.menu-dot + .menu-dot {
  margin-top: 0.3rem;
}

.menu-items {
  position: absolute;
  top: -2.3rem;
  left: -2.2rem;
  width: 9.4rem;
  height: 11rem;
  color: #fff;
  pointer-events: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  opacity: 0;
  transition: 0.3s;
}

.menu-item {
  transform: scale(0.5);
  filter: blur(10px);
  transition: 0.3s;
}

.menu-item:nth-child(odd) {
  text-align: right;
}

.menu-item:nth-child(even) {
  text-align: left;
}

.menu-item:first-child,
.menu-item:last-child {
  grid-column: span 2;
  text-align: center;
}

.menu-checkbox:checked + .menu > .menu-dots {
  transform: none;
  box-shadow: 0 0 0 3.4rem #161e3f;
}

.menu-checkbox:checked + .menu > .menu-items {
  opacity: 1;
  pointer-events: auto;
}

.menu-closer-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
}

.menu-checkbox:checked + .menu > .menu-items > .menu-item {
  opacity: 1;
  transform: none;
  filter: none;
}

.menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(1) {
  transition-delay: 0.05s;
}

.menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(2) {
  transition-delay: 0.1s;
}

.menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(3) {
  transition-delay: 0.15s;
}

.menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(4) {
  transition-delay: 0.2s;
}

.menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(5) {
  transition-delay: 0.25s;
}

.menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(6) {
  transition-delay: 0.3s;
}

.menu-checkbox:checked + .menu > .menu-closer-overlay {
  pointer-events: auto;
  cursor: pointer;
}

</style>
