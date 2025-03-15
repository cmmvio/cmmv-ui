declare module '@xterm/xterm' {
    export interface ITerminalOptions {
        bellStyle?: 'none' | 'sound' | 'visual';
        [key: string]: any;
    }

    export interface ITerminalAddon {
        activate(terminal: Terminal): void;
        dispose(): void;
    }

    export class Terminal {
        constructor(options?: ITerminalOptions);
        open(container: HTMLElement): void;
        write(data: string): void;
        writeln(data: string): void;
        clear(): void;
        reset(): void;
        focus(): void;
        blur(): void;
        resize(cols: number, rows: number): void;
        refresh(start: number, end: number): void;
        loadAddon(addon: ITerminalAddon): void;
        [key: string]: any;
    }
}

declare module '@xterm/addon-attach' {
    import { Terminal } from '@xterm/xterm';

    export class AttachAddon implements ITerminalAddon {
        constructor(socket: WebSocket);
        activate(terminal: Terminal): void;
        dispose(): void;
    }
}

declare module '@xterm/addon-fit' {
    import { Terminal } from '@xterm/xterm';

    export class FitAddon implements ITerminalAddon {
        constructor();
        activate(terminal: Terminal): void;
        dispose(): void;
        fit(): void;
    }
}

declare module '@xterm/addon-web-links' {
    import { Terminal } from '@xterm/xterm';

    export class WebLinksAddon implements ITerminalAddon {
        constructor();
        activate(terminal: Terminal): void;
        dispose(): void;
    }
}

declare module '@xterm/addon-search' {
    import { Terminal } from '@xterm/xterm';

    export class SearchAddon implements ITerminalAddon {
        constructor();
        activate(terminal: Terminal): void;
        dispose(): void;
    }
}

declare module '@xterm/addon-unicode11' {
    import { Terminal } from '@xterm/xterm';

    export class Unicode11Addon implements ITerminalAddon {
        constructor();
        activate(terminal: Terminal): void;
        dispose(): void;
    }
}

declare module '@xterm/addon-webgl' {
    import { Terminal } from '@xterm/xterm';

    export class WebglAddon implements ITerminalAddon {
        constructor();
        activate(terminal: Terminal): void;
        dispose(): void;
    }
}

declare module '@xterm/addon-clipboard' {
    import { Terminal } from '@xterm/xterm';

    export class ClipboardAddon implements ITerminalAddon {
        constructor();
        activate(terminal: Terminal): void;
        dispose(): void;
    }
}

declare module '@xterm/xterm/css/xterm.css';
