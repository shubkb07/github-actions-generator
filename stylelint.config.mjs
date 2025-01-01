export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-vue',
		'stylelint-config-tailwindcss'
	],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen'
				]
			}
		],
		'no-descending-specificity': null
	}
}
