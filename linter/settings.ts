import { rootDir } from "../scripts/common";

const settings: Record<string, unknown> = {
  "import-x/resolver": {
    typescript: {
      alwaysTryTypes: true,
      project: rootDir,
    },
  },
};

export default settings;
