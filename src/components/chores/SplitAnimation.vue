<script setup lang='ts'>
// https://codepen.io/ggsingla/pen/MWOzxbq
  defineProps({
    word: String,
})
</script>
  
<template>
  <h1>{{ word }}</h1>
</template>
  
<style scoped lang='scss'>
h1 {
	font-size: 5rem;
	position: relative;
	text-transform: uppercase;
	transition: all 300ms ease;
	width: fit-content;
	cursor: pointer;
}
h1:hover {
	transform: skew(10deg);
}
h1::before {
	content: attr(data-name);
	position: absolute;
	top: 0;
	left: -20px;
	background: var(--bgcolor);
	height: 3rem;
	overflow: hidden;
	transition: all 300ms ease;
	padding-left: 20px;
}
h1:hover::before {
	top: -3px;
	left: 0px;
	color: hotpink;
}

h1::after {
	content: "";
	height: 4px;
	width: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: hotpink;
	transition: all 300ms ease;
}
h1:hover::after {
	width: 120%;
	outline: 5px solid rgb(2, 0, 36);
}
</style>
