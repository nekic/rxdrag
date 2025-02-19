import { createUuid } from "@rxdrag/shared";
import { constValueSchema } from "./schema";
import { ReactNode } from "react";
import { NodeType, IActivityMaterial } from "@rxdrag/minions-schema";
import { ConstValue } from "@rxdrag/minions-activities";
import { fixedValueIcon } from "../../icons";
import { DEFAULT_INPUT_NAME, DEFAULT_OUTPUT_NAME } from "@rxdrag/minions-runtime";

export const constValueMaterial: IActivityMaterial<ReactNode> = {
  activityName: ConstValue.NAME,
  icon: fixedValueIcon,
  label: "$fixedValue",
  activityType: NodeType.Activity,
  color: "#1668dc",
  defaultPorts: {
    inPorts: [
      {
        id: createUuid(),
        name: DEFAULT_INPUT_NAME,
        label: "",
      },
    ],
    outPorts: [
      {
        id: createUuid(),
        name: DEFAULT_OUTPUT_NAME,
        label: "",
      },
    ],
  },
  schema: constValueSchema,
}