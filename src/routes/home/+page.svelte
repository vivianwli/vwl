<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	browser && goto('/');
</script>
