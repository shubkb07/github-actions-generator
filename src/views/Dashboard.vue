<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-card class="pa-4" outlined>
					<v-card-title>
						<h2>GitHub Actions</h2>
					</v-card-title>
					<v-card-text>
						<v-list>
							<!-- Example: List of GitHub Actions -->
							<v-list-item v-for="action in actions" :key="action.id"
								:to="{ name: 'DashboardApp', params: { add_id: action.id } }" link>
								<v-list-item-content>
									<v-list-item-title>{{ action.name }}</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									<v-icon>mdi-chevron-right</v-icon>
								</v-list-item-icon>
							</v-list-item>
						</v-list>
					</v-card-text>
					<v-card-actions>
						<v-btn color="primary" @click="addNewAction">Add New Action</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
	name: 'DashboardComponent',
	data() {
		return {
			actions: [], // Will hold the list of GitHub Actions
		};
	},
	created() {
		// Load actions from temporary storage (src/tmp)
		// For now, we'll initialize with some dummy data
		this.actions = [
			{ id: uuidv4(), name: 'Build and Test' },
			{ id: uuidv4(), name: 'Deploy to Production' },
		];
	},
	methods: {
		addNewAction() {
			const newActionName = prompt('Enter the name of the new GitHub Action:');
			if (newActionName) {
				const newAction = {
					id: uuidv4(),
					name: newActionName,
				};
				this.actions.push(newAction);
				// TODO: Save the new action to /src/tmp or other storage
			}
		},
	},
};
</script>

<style scoped>
/* Add any required styles */
</style>