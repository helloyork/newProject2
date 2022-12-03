<script>
	import { spring } from 'svelte/motion';
	import { getContext, setContext } from 'svelte/types/runtime/internal/lifecycle';

	let pos = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	let size = spring(10);
</script>

<svg
	on:mousemove={(e) => pos.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => {size.set(10);}}
	style="height: 100%;width:100%"
>
	<circle fill="red" cx={$pos.x} cy={$pos.y} r={$size} />
</svg>
