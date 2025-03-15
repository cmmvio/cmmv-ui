<template>
    <BaseLayout>
        <c-seo
            section="Terminal Component"
            description="Learn how to use the CTerminal component in CMMV UI. A powerful terminal emulator component with WebSocket support, WebGL rendering, and VSCode-like interface for command-line interactions."
            :keywords="['terminal', 'component', 'ui', 'xterm', 'command line', 'websocket', 'shell']"
        />

        <h1>Terminal</h1>

        <p>
            The <code>CTerminal (alias: c-terminal)</code> component provides a powerful and customizable terminal
            emulator using Xterm.js, offering a VSCode-like experience. It supports WebSocket connections for real-time
            communication with a server, WebGL rendering for better performance, and various features like clipboard
            support, Unicode characters, and customizable themes.
        </p>

        <div
            class="alert alert-info mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-md border border-blue-200 dark:border-blue-800">
            <div class="flex items-start">
                <div class="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm">
                        This component uses Xterm.js and its addons. Be sure to install the required dependencies:
                        <code class="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">pnpm add @xterm/xterm @xterm/addon-attach @xterm/addon-clipboard @xterm/addon-fit @xterm/addon-search @xterm/addon-unicode11 @xterm/addon-web-links @xterm/addon-webgl</code>
                    </p>
                    <p class="text-sm mt-2">
                        For full documentation on Xterm.js features, see the
                        <a href="https://xtermjs.org/" target="_blank"
                            class="text-blue-600 dark:text-blue-400 underline">official Xterm.js documentation</a>.
                    </p>
                </div>
            </div>
        </div>

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
                    <td>title</td>
                    <td>String</td>
                    <td>'Terminal'</td>
                    <td>
                        The title displayed in the terminal header.
                    </td>
                </tr>
                <tr>
                    <td>wsUrl</td>
                    <td>String</td>
                    <td>''</td>
                    <td>
                        WebSocket URL for connecting to a terminal server. When provided, enables real-time communication.
                    </td>
                </tr>
                <tr>
                    <td>theme</td>
                    <td>Object</td>
                    <td>VSCode-like theme</td>
                    <td>
                        Terminal color theme configuration with foreground, background, cursor, and ANSI colors.
                    </td>
                </tr>
                <tr>
                    <td>fontSize</td>
                    <td>Number</td>
                    <td>14</td>
                    <td>
                        Font size in pixels for the terminal text.
                    </td>
                </tr>
                <tr>
                    <td>fontFamily</td>
                    <td>String</td>
                    <td>'Menlo, Monaco, Consolas, monospace'</td>
                    <td>
                        Font family for the terminal text.
                    </td>
                </tr>
                <tr>
                    <td>showHeader</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Shows or hides the terminal header with title and actions.
                    </td>
                </tr>
                <tr>
                    <td>allowFullscreen</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Enables or disables the fullscreen toggle button.
                    </td>
                </tr>
                <tr>
                    <td>rows</td>
                    <td>Number</td>
                    <td>24</td>
                    <td>
                        Initial number of rows in the terminal.
                    </td>
                </tr>
                <tr>
                    <td>cols</td>
                    <td>Number</td>
                    <td>80</td>
                    <td>
                        Initial number of columns in the terminal.
                    </td>
                </tr>
                <tr>
                    <td>cursorBlink</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>
                        Enables cursor blinking animation.
                    </td>
                </tr>
                <tr>
                    <td>cursorStyle</td>
                    <td>String</td>
                    <td>'block'</td>
                    <td>
                        Cursor style: 'block', 'underline', or 'bar'.
                    </td>
                </tr>
                <tr>
                    <td>scrollback</td>
                    <td>Number</td>
                    <td>1000</td>
                    <td>
                        Number of lines to keep in the terminal's scrollback buffer.
                    </td>
                </tr>
                <tr>
                    <td>bellStyle</td>
                    <td>String</td>
                    <td>'sound'</td>
                    <td>
                        Terminal bell style: 'none', 'sound', or 'visual'.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Events</h3>

        <table-docs>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Payload</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>data</td>
                    <td>String</td>
                    <td>
                        Emitted when data is received from the terminal input.
                    </td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>String</td>
                    <td>
                        Emitted when the terminal title changes.
                    </td>
                </tr>
                <tr>
                    <td>resize</td>
                    <td>{ cols: number, rows: number }</td>
                    <td>
                        Emitted when the terminal size changes.
                    </td>
                </tr>
                <tr>
                    <td>connected</td>
                    <td>-</td>
                    <td>
                        Emitted when WebSocket connection is established.
                    </td>
                </tr>
                <tr>
                    <td>disconnected</td>
                    <td>-</td>
                    <td>
                        Emitted when WebSocket connection is closed.
                    </td>
                </tr>
                <tr>
                    <td>error</td>
                    <td>Error</td>
                    <td>
                        Emitted when a WebSocket error occurs.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Exposed Methods</h3>

        <table-docs>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Parameters</th>
                    <th>Return</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>terminal</td>
                    <td>-</td>
                    <td>Terminal</td>
                    <td>
                        Returns the Xterm.js terminal instance for direct manipulation.
                    </td>
                </tr>
                <tr>
                    <td>write</td>
                    <td>(data: string)</td>
                    <td>void</td>
                    <td>
                        Writes data to the terminal without a line break.
                    </td>
                </tr>
                <tr>
                    <td>writeln</td>
                    <td>(data: string)</td>
                    <td>void</td>
                    <td>
                        Writes data to the terminal with a line break.
                    </td>
                </tr>
                <tr>
                    <td>clear</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Clears the terminal content.
                    </td>
                </tr>
                <tr>
                    <td>reset</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Resets the terminal to its initial state.
                    </td>
                </tr>
                <tr>
                    <td>focus</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Sets focus to the terminal.
                    </td>
                </tr>
                <tr>
                    <td>blur</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Removes focus from the terminal.
                    </td>
                </tr>
                <tr>
                    <td>resize</td>
                    <td>(cols: number, rows: number)</td>
                    <td>void</td>
                    <td>
                        Resizes the terminal to specified dimensions.
                    </td>
                </tr>
                <tr>
                    <td>fit</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Fits the terminal to its container size.
                    </td>
                </tr>
                <tr>
                    <td>reconnect</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Reconnects to the WebSocket server if URL is provided.
                    </td>
                </tr>
                <tr>
                    <td>disconnect</td>
                    <td>-</td>
                    <td>void</td>
                    <td>
                        Disconnects from the WebSocket server.
                    </td>
                </tr>
            </tbody>
        </table-docs>

        <h3>Basic Terminal</h3>

        <p>
            The <strong>Basic Terminal</strong> demonstrates the fundamental usage of the <code>CTerminal</code>
            component. This example shows a simple interactive terminal that responds to basic commands.
        </p>

        <card-docs padding="p-0">
            <div class="w-full">
                <c-terminal
                    ref="demoTerminal"
                    title="Demo Terminal"
                    height="300px"
                    @data="handleTerminalInput"
                ></c-terminal>
            </div>

            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-terminal
    ref="demoTerminal"
    title="Demo Terminal"
    height="300px"
    @data="handleTerminalInput"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from 'vue';

const demoTerminal = ref(null);
const currentLine = ref('');
const prompt = '$ ';

// Available commands
const commands = {
  help: 'Shows this help message',
  clear: 'Clears the terminal',
  echo: 'Echoes back the input',
  date: 'Shows current date and time',
  whoami: 'Shows current user'
};

onMounted(() => {
  // Write welcome message
  demoTerminal.value?.writeln('Welcome to CMMV Terminal Demo');
  demoTerminal.value?.writeln('Type "help" to see available commands');
  demoTerminal.value?.write(prompt);
});

const handleTerminalInput = (data) => {
  // Handle enter key
  if (data === '\r') {
    demoTerminal.value?.writeln('');
    handleCommand(currentLine.value.trim());
    currentLine.value = '';
    demoTerminal.value?.write(prompt);
    return;
  }

  // Handle backspace
  if (data === '\x7f') {
    if (currentLine.value.length > 0) {
      currentLine.value = currentLine.value.slice(0, -1);
      demoTerminal.value?.write('\b \b');
    }
    return;
  }

  // Echo the typed character
  currentLine.value += data;
  demoTerminal.value?.write(data);
};

const handleCommand = (cmd) => {
  const args = cmd.split(' ');
  const command = args[0].toLowerCase();

  switch (command) {
    case 'help':
      Object.entries(commands).forEach(([cmd, desc]) => {
        demoTerminal.value?.writeln(`${cmd.padEnd(10)} - ${desc}`);
      });
      break;

    case 'clear':
      demoTerminal.value?.clear();
      break;

    case 'echo':
      demoTerminal.value?.writeln(args.slice(1).join(' '));
      break;

    case 'date':
      demoTerminal.value?.writeln(new Date().toLocaleString());
      break;

    case 'whoami':
      demoTerminal.value?.writeln('demo-user');
      break;

    case '':
      break;

    default:
      demoTerminal.value?.writeln(`Command not found: ${command}`);
      demoTerminal.value?.writeln('Type "help" to see available commands');
  }
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <h3>WebSocket Support</h3>

        <p>
            The terminal component includes built-in support for WebSocket connections, allowing real-time
            communication with a terminal server. To use this feature, you'll need to:
        </p>

        <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>Implement a WebSocket server that supports terminal communication</li>
            <li>Configure the server to handle terminal input/output streams</li>
            <li>Provide the WebSocket URL to the terminal component</li>
        </ul>

        <p class="mb-4">
            Here's an example of how to configure the terminal with WebSocket support:
        </p>

        <card-docs padding="p-0">
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-terminal
    title="WebSocket Terminal"
    ws-url="ws://your-server/terminal"
    height="300px"
    @connected="handleConnected"
    @disconnected="handleDisconnected"
    @error="handleError"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleConnected = () => {
  console.log('Terminal connected to server');
};

const handleDisconnected = () => {
  console.log('Terminal disconnected from server');
};

const handleError = (error) => {
  console.error('Terminal connection error:', error);
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <div class="alert alert-info my-6 p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-md border border-blue-200 dark:border-blue-800">
            <div class="flex items-start">
                <div class="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm">
                        <strong>Note:</strong> The WebSocket server implementation is not included with this component.
                        You'll need to implement your own server that can handle terminal communication protocols.
                        Common implementations use libraries like <code>node-pty</code> on the server side.
                    </p>
                </div>
            </div>
        </div>

        <h3>Custom Theme</h3>

        <p>
            The terminal appearance can be customized using themes. Here's how to configure a custom theme
            with your own color scheme:
        </p>

        <card-docs padding="p-0">
            <template #code>
                <pre><code class="code-highlight language-html">&lt;template&gt;
  &lt;c-terminal
    title="Custom Theme Terminal"
    :theme="customTheme"
    height="300px"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const customTheme = {
  foreground: '#f0f0f0',
  background: '#1a1a1a',
  cursor: '#00ff00',
  selection: '#666666',
  black: '#000000',
  red: '#ff3333',
  green: '#33ff33',
  yellow: '#ffff33',
  blue: '#3333ff',
  magenta: '#ff33ff',
  cyan: '#33ffff',
  white: '#ffffff',
  brightBlack: '#666666',
  brightRed: '#ff6666',
  brightGreen: '#66ff66',
  brightYellow: '#ffff66',
  brightBlue: '#6666ff',
  brightMagenta: '#ff66ff',
  brightCyan: '#66ffff',
  brightWhite: '#ffffff'
};
&lt;/script&gt;</code></pre>
            </template>
        </card-docs>

        <PagePagination previous="Menu" previousLink="/menu" next="TreeView" nextLink="/tree-view" />
    </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BaseLayout from "../../layout/BaseLayout.vue";
import CardDocs from "../../components/CardDocs.vue";
import TableDocs from "../../components/TableDocs.vue";
import PagePagination from "../../layout/PagePagination.vue";

const demoTerminal = ref(null);
const currentLine = ref('');
const prompt = '$ ';

const commands = {
    help: 'Shows this help message',
    clear: 'Clears the terminal',
    echo: 'Echoes back the input',
    date: 'Shows current date and time',
    whoami: 'Shows current user'
};

onMounted(() => {
    demoTerminal.value?.writeln('Welcome to CMMV Terminal Demo');
    demoTerminal.value?.writeln('Type "help" to see available commands');
    demoTerminal.value?.write(prompt);
});

const handleTerminalInput = (data) => {
    if (data === '\r') {
        demoTerminal.value?.writeln('');
        handleCommand(currentLine.value.trim());
        currentLine.value = '';
        demoTerminal.value?.write(prompt);
        return;
    }

    if (data === '\x7f') {
        if (currentLine.value.length > 0) {
            currentLine.value = currentLine.value.slice(0, -1);
            demoTerminal.value?.write('\b \b');
        }
        return;
    }

    currentLine.value += data;
    demoTerminal.value?.write(data);
};

const handleCommand = (cmd) => {
    const args = cmd.split(' ');
    const command = args[0].toLowerCase();

    switch (command) {
        case 'help':
            Object.entries(commands).forEach(([cmd, desc]) => {
                demoTerminal.value?.writeln(`${cmd.padEnd(10)} - ${desc}`);
            });
            break;

        case 'clear':
            demoTerminal.value?.clear();
            break;

        case 'echo':
            demoTerminal.value?.writeln(args.slice(1).join(' '));
            break;

        case 'date':
            demoTerminal.value?.writeln(new Date().toLocaleString());
            break;

        case 'whoami':
            demoTerminal.value?.writeln('demo-user');
            break;

        case '':
            break;

        default:
            demoTerminal.value?.writeln(`Command not found: ${command}`);
            demoTerminal.value?.writeln('Type "help" to see available commands');
    }
};

const customTheme = {
    foreground: '#f0f0f0',
    background: '#1a1a1a',
    cursor: '#00ff00',
    selection: '#666666',
    black: '#000000',
    red: '#ff3333',
    green: '#33ff33',
    yellow: '#ffff33',
    blue: '#3333ff',
    magenta: '#ff33ff',
    cyan: '#33ffff',
    white: '#ffffff',
    brightBlack: '#666666',
    brightRed: '#ff6666',
    brightGreen: '#66ff66',
    brightYellow: '#ffff66',
    brightBlue: '#6666ff',
    brightMagenta: '#ff66ff',
    brightCyan: '#66ffff',
    brightWhite: '#ffffff'
};

const handleConnected = () => {
    console.log('Terminal connected to server');
};

const handleDisconnected = () => {
    console.log('Terminal disconnected from server');
};

const handleError = (error) => {
    console.error('Terminal connection error:', error);
};
</script>

<style>
.card-docs>div:first-child {
    padding: 0 !important;
}
</style>
