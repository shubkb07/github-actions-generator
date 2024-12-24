<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
	<footer class="app-footer">
		<div class="footer-left">
			<span class="zoom-level">100%</span>
			<span class="separator">|</span>
			<span class="canvas-info">Canvas 1</span>
		</div>
		<div class="footer-center">
			<i class="pi pi-user"></i>
			<span>0 users viewing</span>
		</div>
		<div class="footer-right">
			<span>&copy; {{ currentYear }}</span>
			<span class="separator">|</span>
			<i class="pi pi-question-circle"></i>
		</div>
	</footer>
</template>

<style scoped>
.app-footer {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 32px;
	background-color: var(--surface-card);
	border-top: 1px solid var(--surface-border);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	font-size: 0.875rem;
	color: var(--text-color-secondary);
	z-index: 1000;
}

.footer-left,
.footer-center,
.footer-right {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.separator {
	color: var(--surface-border);
	margin: 0 0.5rem;
}

i {
	font-size: 0.875rem;
	cursor: pointer;
}

i:hover {
	color: var(--primary-color);
}

.zoom-level {
	cursor: pointer;
}

.zoom-level:hover {
	color: var(--primary-color);
}
</style>