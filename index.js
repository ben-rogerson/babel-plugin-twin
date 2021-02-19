const template = require("@babel/template").default;

const buildImport = template(`
  import 'twin.macro';
`);

function importTwinMacroPlugin(babel) {
  const importDeclaration = buildImport();

  return {
    visitor: {
      Program: (path, state) => {
        let shouldAddImport = true;
        const hasDebug = state.opts.debug === true;

        state.file.path.traverse({
          ImportDeclaration(path) {
            // Find the twin import path
            if (path.node.source.value !== "twin.macro") return;
            shouldAddImport = false;
          },

          // TODO: Alert on usage of tw when no `import tw from "twin.macro"`
        });

        if (!shouldAddImport) {
          hasDebug &&
            console.log(
              `babel-plugin-twin: Skipped injection in “${state.file.opts.sourceFileName}”`
            );
          return;
        }

        hasDebug &&
          console.log(
            `babel-plugin-twin: Injected import in “${state.file.opts.sourceFileName}”`
          );

        path.unshiftContainer("body", importDeclaration);
      },
    },
  };
}

module.exports = importTwinMacroPlugin;
