<template>
	<div>
		<h2>Trade or View your Portfolio</h2>
		<h5>You may Save and Load your data</h5>
		<h5>Click on 'End Day' to begin a New Day</h5>
		<hr>
		<p>Your Funds: {{ funds | currency }} </p>
	</div>
</template>

<script>
	export default {
	 	computed: {
	 		funds() {
	 			return this.$store.getters.funds;
	 		}
	 	}
	}
</script>
