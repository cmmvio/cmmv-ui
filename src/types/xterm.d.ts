declare module '@xterm/xterm' {
    export class Terminal {
        constructor(options?: any);
        open(container: HTMLElement): void;
        write(data: string): void;
        writeln(data: string): void;
        clear(): void;
        reset(): void;
        focus(): void;
        blur(): void;
        resize(cols: number, rows: number): void;
        refresh(start: number, end: number): void;
        loadAddon(addon: any): void;
        dispose(): void;
        onData(callback: (data: string) => void): void;
        onTitleChange(callback: (title: string) => void): void;
        onResize(callback: (size: { cols: number; rows: number }) => void): void;
        options: any;
        rows: number;
    }
}

declare module '@xterm/addon-attach' {
    export class AttachAddon {
        constructor(socket: WebSocket);
    }
}

declare module '@xterm/addon-fit' {
    export class FitAddon {
        constructor();
        fit(): void;
    }
}

declare module '@xterm/addon-web-links' {
    export class WebLinksAddon {
        constructor();
    }
}

declare module '@xterm/addon-search' {
    export class SearchAddon {
        constructor();
    }
}

declare module '@xterm/addon-unicode11' {
    export class Unicode11Addon {
        constructor();
    }
}

declare module '@xterm/addon-webgl' {
    export class WebglAddon {
        constructor();
        dispose(): void;
    }
}

declare module '@xterm/addon-clipboard' {
    export class ClipboardAddon {
        constructor();
    }
}

declare module '@xterm/xterm/css/xterm.css';
