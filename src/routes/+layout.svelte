<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
</script>

<div>
    <Header/>

    <div class="container mx-auto p-4">
        <slot/>
    </div>
</div>
