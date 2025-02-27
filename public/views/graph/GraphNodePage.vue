<template>
    <BaseLayout>
        <h1>Graph Node</h1>

        <p>
            The <code>c-graph-node</code> component represents a single node inside a <code>c-graph-box</code>.
            It supports multiple inputs and outputs, which can be connected to other nodes using links.
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
                    <td>id</td>
                    <td>String</td>
                    <td>""</td>
                    <td>Unique identifier for the node.</td>
                </tr>
                <tr>
                    <td>x</td>
                    <td>Number</td>
                    <td>0</td>
                    <td>Initial X position of the node.</td>
                </tr>
                <tr>
                    <td>y</td>
                    <td>Number</td>
                    <td>0</td>
                    <td>Initial Y position of the node.</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>"Node"</td>
                    <td>The label displayed on the node header.</td>
                </tr>
                <tr>
                    <td>showHeader</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>Determines if the header should be displayed.</td>
                </tr>
                <tr>
                    <td>centerLabel</td>
                    <td>String</td>
                    <td>""</td>
                    <td>If the header is hidden, this label will be shown in the center.</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>String | Object</td>
                    <td>null</td>
                    <td>An icon component to display next to the label.</td>
                </tr>
                <tr>
                    <td>inputs</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td>List of input ports for the node.</td>
                </tr>
                <tr>
                    <td>outputs</td>
                    <td>Array</td>
                    <td>[]</td>
                    <td>List of output ports for the node.</td>
                </tr>
                <tr>
                    <td>portColor</td>
                    <td>String</td>
                    <td>"bg-gray-500"</td>
                    <td>Default color for node connectors.</td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Example</h3>

        <p>
            Below is a simple example of a <code>c-graph-node</code> inside a <code>c-graph-box</code>.
            The node has both inputs and outputs, allowing connections between nodes.
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
                        id="process"
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
    &lt;c-graph-node
        id="start"
        :x="100"
        :y="150"
        label="Start Node"
        :outputs="[{ id: 'delta', type: 'float', label: 'Delta' }]"
    /&gt;
    &lt;c-graph-node
        id="process"
        :x="300"
        :y="250"
        label="Process Node"
        :inputs="[{ id: 'delta', type: 'float', label: 'Delta' }]"
    /&gt;
&lt;/c-graph-box&gt;</code>
        </pre>

        <h3>Node Inputs & Outputs</h3>

        <p>
            Each node can have multiple inputs and outputs, which are used to establish connections between nodes.
            The colors of the input/output ports are automatically assigned based on the data type.
        </p>

        <c-card variant="flat" class="mx-auto px-4 py-5 sm:p-6 flex flex-col items-center">
            <div class="lg:w-3/4 w-full h-96">
                <c-graph-box ref="graph">
                    <c-graph-node
                        id="math-addition"
                        :x="200"
                        :y="100"
                        label="Addition"
                        :inputs="[
                            { id: 'a', type: 'int', label: 'A' },
                            { id: 'b', type: 'int', label: 'B' }
                        ]"
                        :outputs="[
                            { id: 'result', type: 'int', label: 'Result' }
                        ]"
                    />
                </c-graph-box>
            </div>
        </c-card>

        <pre>
            <code>&lt;c-graph-node
    id="math-addition"
    :x="200"
    :y="100"
    label="Addition"
    :inputs="[
        {
            id: 'a',
            type: 'int',
            label: 'A'
        },
        {
            id: 'b',
            type: 'int',
            label: 'B'
        }
    ]"
    :outputs="[
        {
            id: 'result',
            type: 'int',
            label: 'Result'
        }
    ]"
/&gt;</code>
        </pre>

        <PagePagination previous="Graph Box" previousLink="/graph-box" next="Graph Links" nextLink="/graph-links" />
    </BaseLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseLayout from "../../layout/BaseLayout.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const outputs1 = ref([{ id: "delta", type: "float", label: "Delta" }]);
const inputs1 = ref([{ id: "delta", type: "float", label: "Delta" }]);
const outputs2 = ref([{ id: "X", type: "int", label: "X" }, { id: "y", type: "int", label: "Y" }]);

const graph = ref(null);
</script>
