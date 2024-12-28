<template>
	<footer v-if="isDashboard" class="app-footer">
		<div class="footer-left">
			<span class="zoom-level">100%</span>
			<span class="separator">|</span>
			<!-- Add clock -->
			<span class="clock">{{ clock }}</span>
		</div>
		<div class="footer-center">
		</div>
		<div class="footer-right">
			<span>&copy; {{ currentYear }}</span>
			<span class="separator">|</span>
			<i class="pi pi-question-circle"></i>
		</div>
	</footer>
	<footer v-else class="footer">
		<div class="footer-container">
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
				<!-- Brand Section -->
				<div class="lg:col-span-4 brand-section">
					<div class="mb-6">
						<h3 class="brand-title">
							GitHub Actions Generator
						</h3>
						<p class="brand-description">
							Build and automate your workflows with our intuitive GitHub Actions generator.
							Streamline your CI/CD pipeline effortlessly.
						</p>
					</div>
					<SocialLinks />
				</div>

				<!-- Links Section -->
				<div class="lg:col-span-8">
					<FooterLinks />
				</div>
			</div>

			<!-- Footer Bottom -->
			<div class="footer-bottom">
				<div class="flex flex-column md:flex-row justify-content-between align-items-center">
					<p class="copyright">
						&copy; {{ currentYear }} GitHub Actions Generator. All rights reserved.
					</p>
					<div class="legal-links">
						<a href="#" class="legal-link">Terms</a>
						<a href="#" class="legal-link">Privacy</a>
						<a href="#" class="legal-link">Cookies</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import { onMounted, ref } from 'vue';
import SocialLinks from './Footer/SocialLinks.vue';
import FooterLinks from './Footer/FooterLinks.vue';
export default {
	name: 'HeaderComponent',
	props: {
		logged: {
			type: Boolean,
			required: true
		},
		isDashboard: {
			type: Boolean,
			required: true
		},
		isDashboardApp: {
			type: Boolean,
			required: true
		},
		isDashboardAppEdit: {
			type: Boolean,
			required: true
		}
	},
	components: {
		SocialLinks,
		FooterLinks
	},
	setup() {
		const currentYear = new Date().getFullYear();
		const clock = ref('');

		onMounted(() => {
			setInterval(() => {
				const date = new Date();
				const day = date.getDate().toString().padStart(2, '0');
				const month = date.toLocaleString('default', { month: 'long' });
				const year = date.getFullYear();
				const weekday = date.toLocaleString('default', { weekday: 'long' });
				const hours = date.getHours().toString().padStart(2, '0');
				const minutes = date.getMinutes().toString().padStart(2, '0');
				const seconds = date.getSeconds().toString().padStart(2, '0');
				const timezone = date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];
				clock.value = `${day} ${month} ${year}, ${weekday} ${hours}:${minutes}:${seconds} ${timezone}`;
			}, 1000);
		});

		return {
			currentYear,
			clock
		};
	}
};
</script>

<style scoped>
/* App Footer */
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
	color: var(--text-color-secondary);
	transition: color 0.2s;
}

i:hover {
	color: var(--primary-color);
}

.zoom-level {
	cursor: pointer;
	transition: color 0.2s;
}

.zoom-level:hover {
	color: var(--primary-color);
}

/* Non-App Footer */
.footer {
	background: var(--surface-section);
	border-top: 1px solid var(--surface-border);
	margin-top: 4rem;
	padding: 2rem 1rem;
}

.footer-container {
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem 1rem; /* Further decrease padding */
	background: var(--surface-card);
	border-radius: var(--border-radius);
	box-shadow: var(--card-shadow);
}

.brand-section {
	background: var(--surface-ground);
	padding: 1rem; /* Further decrease padding */
	border-radius: var(--border-radius);
	box-shadow: var(--card-shadow);
	text-align: left; /* Align left */
}

.brand-title {
	font-size: 2.5rem;
	font-weight: 700;
	color: var(--primary-color-text); /* Ensure visibility */
	margin-bottom: 1rem;
}

.brand-description {
	color: var(--text-color-secondary);
	line-height: 1.6;
	font-size: 1.1rem;
}

.footer-bottom {
	padding-top: 1rem; /* Further decrease padding */
	margin-top: 1rem; /* Further decrease margin */
	border-top: 1px solid var(--surface-border);
}

.copyright {
	color: var(--text-color-secondary);
	font-size: 0.875rem;
	margin: 0;
}

.legal-links {
	display: flex;
	gap: 2rem;
}

.legal-link {
	color: var(--text-color-secondary);
	text-decoration: none;
	font-size: 0.875rem;
	transition: color 0.2s ease;
}

.legal-link:hover {
	color: var(--primary-color);
}

@media (max-width: 768px) {
	.footer-container {
		padding: 2rem 1rem;
	}

	.legal-links {
		gap: 1rem;
		margin-top: 1rem;
	}

	.brand-section {
		text-align: left; /* Align left on smaller screens */
	}

	.brand-title {
		font-size: 2rem; /* Adjust font size for smaller screens */
	}

	.brand-description {
		font-size: 1rem; /* Adjust font size for smaller screens */
	}

	.footer-bottom {
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}
}

@media (max-width: 480px) {
	.footer-container {
		padding: 1rem;
	}

	.legal-links {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
	}

	.brand-section {
		padding: 1.5rem;
	}

	.brand-title {
		font-size: 1.75rem;
	}

	.brand-description {
		font-size: 0.9rem;
	}

	.footer-bottom {
		padding-top: 1rem;
		margin-top: 1rem;
	}
}
</style>