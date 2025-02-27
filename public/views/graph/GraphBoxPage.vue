<template>
    <BaseLayout>
        <h1>Graph Box</h1>

        <p>
            The <code>c-graph-box</code> component provides a flexible and interactive grid system for graph-based editors,
            similar to Unreal Engine's Blueprint system. It allows panning, zooming, and serves as the container for nodes and connections.
        </p>

        <table-docs>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>gridSize</td>
                    <td>Number</td>
                    <td>20</td>
                    <td>Defines the size of the grid cells.</td>
                </tr>
                <tr>
                    <td>zoomLevel</td>
                    <td>Number</td>
                    <td>1</td>
                    <td>Controls the zoom level of the graph box.</td>
                </tr>
                <tr>
                    <td>minZoom</td>
                    <td>Number</td>
                    <td>0.5</td>
                    <td>Minimum zoom level allowed.</td>
                </tr>
                <tr>
                    <td>maxZoom</td>
                    <td>Number</td>
                    <td>2</td>
                    <td>Maximum zoom level allowed.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            Below is a simple usage example of <code>c-graph-box</code>. You can add graph nodes inside the box
            and use panning and zooming to navigate through the graph.
        </p>

        <c-card variant="flat" class="mx-auto flex flex-col items-center">
            <div class="w-full h-96">
                <c-graph-box ref="graph" :gridSize="30">
                    <c-graph-node
                        id="start"
                        :x="50"
                        :y="50"
                        label="Start Node"
                        :outputs="outputs1"
                    />

                    <c-graph-node
                        id="progress"
                        :x="300"
                        :y="150"
                        label="Process Node"
                        :inputs="inputs1"
                        :outputs="outputs2"
                    />
                </c-graph-box>
            </div>
        </c-card>

        <pre>
            <code>&lt;c-graph-box :gridSize="30"&gt;
    &lt;c-graph-node :x="100" :y="150" label="Start Node" /&gt;
    &lt;c-graph-node :x="300" :y="250" label="Process Node" /&gt;
&lt;/c-graph-box&gt;</code>
        </pre>

        <h3>Zooming & Panning</h3>

        <p>
            The graph box allows zooming in and out using the scroll wheel and panning by clicking and dragging.
            You can customize the zoom limits using the <code>minZoom</code> and <code>maxZoom</code> props.
        </p>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center">
            <div class="lg:w-3/4 w-full h-96">
                <c-graph-box :minZoom="0.7" :maxZoom="1.5" />
            </div>
        </c-card>

        <pre>
            <code>&lt;c-graph-box :minZoom="0.7" :maxZoom="1.5" /&gt;</code>
        </pre>

        <PagePagination previous="Toolbar" previousLink="/toolbar" next="Graph Node" nextLink="/graph-node" />
    </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const outputs1 = ref([
    { id: "delta", type: "float", label: "Delta" }
])

const inputs1 = ref([
    { id: "delta", type: "float", label: "Delta" }
])

const outputs2 = ref([
    { id: "X", type: "int", label: "X" },
    { id: "y", type: "int", label: "Y" }
])

const graph = ref(null);

onMounted(() => {
    graph.value.createLink('output-start-delta', 'input-progress-delta', 'float')
});
</script>
