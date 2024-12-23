<template>
	<v-container>
		<v-btn color="success" @click="generateAndDownloadYaml">Download YAML</v-btn>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import yaml from 'js-yaml';
import { saveAs } from 'file-saver';

export default {
	name: 'GenerateYamlButton',
	computed: {
		...mapGetters(['getWorkflow', 'getElements']),
	},
	methods: {
		generateAndDownloadYaml() {
			// Construct the workflow object based on the current state
			const workflow = {
				name: this.getWorkflow.name || 'CI',
				on: this.getWorkflow.on || 'push',
				jobs: {},
			};

		this.getElements.forEach(element => {
			workflow.jobs[element.name] = {
				'runs-on': 'ubuntu-latest',
				steps: [
					{
						name: 'Checkout Repository',
						uses: 'actions/checkout@v2',
					},
					{
						name: 'Set up Node.js',
						uses: 'actions/setup-node@v2',
						with: {
							'node-version': '14',
						},
					},
					{
						name: 'Install Dependencies',
						run: 'npm install',
					},
					{
						name: 'Run Tests',
						run: 'npm test',
					},
					// Add more steps as needed
				],
			};
		});

		// Convert the workflow object to YAML
		const yamlStr = yaml.dump(workflow);

		// Create a Blob from the YAML string
		const blob = new Blob([yamlStr], { type: 'text/yaml;charset=utf-8' });

		// Trigger the download
		saveAs(blob, 'workflow.yml');
	},
},
  };
</script>

<style scoped>
/* Add any required styles */
</style>