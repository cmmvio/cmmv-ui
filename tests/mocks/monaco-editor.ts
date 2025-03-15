import { vi } from 'vitest/dist/index';

// Mock for monaco-editor
const monaco = {
    editor: {
        create: vi.fn(() => ({
            dispose: vi.fn(),
            onDidChangeModelContent: vi.fn().mockReturnValue({ dispose: vi.fn() }),
            getValue: vi.fn().mockReturnValue('// sample code'),
            setValue: vi.fn(),
            updateOptions: vi.fn(),
            layout: vi.fn(),
            focus: vi.fn(),
            getAction: vi.fn().mockReturnValue({
                run: vi.fn()
            }),
            getModel: vi.fn().mockReturnValue({
                getFullModelRange: vi.fn().mockReturnValue({
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: 10,
                    endColumn: 10
                })
            }),
            executeEdits: vi.fn(),
            getPosition: vi.fn().mockReturnValue({
                lineNumber: 1,
                column: 1
            }),
            setPosition: vi.fn()
        })),
        defineTheme: vi.fn(),
        setTheme: vi.fn(),
        EditorOption: {
            fontFamily: 'fontFamily',
            fontSize: 'fontSize',
            lineHeight: 'lineHeight',
            minimap: 'minimap',
            scrollBeyondLastLine: 'scrollBeyondLastLine',
            roundedSelection: 'roundedSelection',
            wordWrap: 'wordWrap'
        }
    },
    languages: {
        register: vi.fn(),
        setMonarchTokensProvider: vi.fn(),
        registerCompletionItemProvider: vi.fn()
    },
    Uri: {
        parse: vi.fn((str) => ({ toString: () => str }))
    }
};

export default monaco;
