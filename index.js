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
        const matchedExclude = (state.opts.exclude ?? []).find((regex) =>
          RegExp(regex).test(state.file.opts.filename)
        );

        if (matchedExclude) {
          shouldAddImport = false;
          hasDebug &&
            console.log(
              `babel-plugin-twin: Matched exclude pattern “${matchedExclude}” on “${state.file.opts.filename}”`
            );
        } else {
          state.file.path.traverse({
            ImportDeclaration(path) {
              // Find the twin import path
              if (path.node.source.value !== "twin.macro") return;
              shouldAddImport = false;
            },
          });
        }

        if (!shouldAddImport) {
          hasDebug &&
            console.log(
              `babel-plugin-twin: Skipped injection in “${state.file.opts.filename}”`
            );
          return;
        }

        hasDebug &&
          console.log(
            `babel-plugin-twin: Injected import in “${state.file.opts.filename}”`
          );

        path.unshiftContainer("body", importDeclaration);
      },
    },
  };
}

module.exports = importTwinMacroPlugin;
