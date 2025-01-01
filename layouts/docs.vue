<template>
	<div class="flex flex-col min-h-screen">
		<DocsHeader />
		<div class="flex-grow">
			<slot />
		</div>
		<DocsFooter />
	</div>
</template>
