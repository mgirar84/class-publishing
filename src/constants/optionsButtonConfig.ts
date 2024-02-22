import { ActionSheetButton } from "@ionic/react";

export const optionsButtonConfig: ActionSheetButton[] = [
  {
    text: "Newest to Oldest",
    data: {
      action: "date",
    },
  },
  {
    text: "Alphabetical",
    data: {
      action: "alphabetical",
    },
  },
  {
    text: "Cancel",
    role: "cancel",
    data: {
      action: "cancel",
    },
  },
];
