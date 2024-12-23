<template>
	<v-container>
		<v-row>
			<v-col>
				<v-btn color="primary" @click="addJob">Add Job</v-btn>
				<v-btn color="secondary" @click="clearCanvas">Clear Canvas</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-stage :config="stageConfig">
					<v-layer>
						<v-rect v-for="element in elements" :key="element.id" :config="element"
							@dragend="onDragEnd(element.id, $event)" @dblclick="removeElement(element.id)" />
						<!-- You can add more shapes like circles, texts, etc. -->
					</v-layer>
					<v-layer>
						<v-rect v-for="element in elements" :key="element.id" :config="element"
							@dragend="onDragEnd(element.id, $event)" @dblclick="removeElement(element.id)" />
						<v-text v-for="element in elements" :key="element.id + '-text'" :config="{
							x: element.x + 10,
							y: element.y + 10,
							text: element.name,
							fontSize: 18,
							fill: 'white',
							width: element.width - 20,
							align: 'center',
						}" />
					</v-layer>
				</v-stage>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
	name: 'WorkflowCanvas',
	computed: {
		...mapGetters(['getElements']),
		elements() {
			return this.getElements;
		},
		stageConfig() {
			return {
				width: 800,
				height: 600,
				draggable: false,
			};
		},
	},
	methods: {
		...mapActions(['addElement', 'updateElementPosition', 'removeElement']),
		addJob() {
			const newJob = {
				id: uuidv4(),
				x: 50,
				y: 50,
				width: 150,
				height: 50,
				fill: 'green',
				draggable: true,
				name: `Job-${this.elements.length + 1}`,
			};
			this.addElement(newJob);
		},
		onDragEnd(id, event) {
			this.updateElementPosition({
				id,
				x: event.target.x(),
				y: event.target.y(),
			});
		},
		clearCanvas() {
			// Optional: Implement a mutation to clear all elements
			this.$store.commit('SET_WORKFLOW_NAME', 'CI');
			this.$store.commit('SET_WORKFLOW_ON', 'push');
			this.$store.commit('ADD_JOB', {}); // Adjust as needed
			// Alternatively, reset the state or create a CLEAR_ELEMENTS mutation
		},
	},
};
</script>

<style scoped>
.v-stage {
	border: 1px solid #ccc;
}
</style>