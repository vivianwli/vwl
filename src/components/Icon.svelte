<!-- NOT IN USE RN BUT MAYBE SOMEDAY IF IT COMES TO IT! -->

<script>
    import "../app.css";
    export let name;
    $: path = "src/icons/" + name + ".svg";
</script>

<img class="icon {name}" src={path} alt="{name + ' icon' + ' path: ' + path}"/>

<style>
    .icon {
        width: 2rem;
        fill:cadetblue;
    }
</style>
