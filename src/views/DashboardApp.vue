<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-card class="pa-4" outlined>
					<v-card-title>
						<h2>{{ actionName }} - Workflow Canvas</h2>
					</v-card-title>
					<v-card-text>
						<!-- Canvas will be integrated here using Vue Konva -->
						<WorkflowCanvas :action-id="add_id" />
					</v-card-text>
					<v-card-actions>
						<v-btn color="secondary" :to="{ name: 'Dashboard' }">Back to Dashboard</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import WorkflowCanvas from '../components/WorkflowCanvas.vue';

export default {
	name: 'DashboardAppComponent',
	components: {
		WorkflowCanvas,
	},
	props: {
		add_id: {
			type: String,
			required: true,
		},
	},
	computed: {
		...mapGetters(['getWorkflow']),
		actionName() {
			// Retrieve the action name based on add_id
			return this.getWorkflow.jobs[this.add_id]?.name || 'Unnamed Action';
		},
	},
};
</script>

<style scoped>
/* Add any required styles */
</style>