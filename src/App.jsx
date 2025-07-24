import React from "react";
import Badge from "./components/badge/Badge";

export default function App() {
  return (
    <div className="flex flex-wrap gap-1">
      <Badge color="gray">Badge</Badge>
      <Badge color="gray" rounded={true}>
        Badge
      </Badge>

      <Badge color={"red"}>Badge</Badge>
      <Badge color={"red"} rounded={true}>
        Badge
      </Badge>

      <Badge color={"yellow"}>Badge</Badge>
      <Badge color={"yellow"} rounded={true}>
        Badge
      </Badge>

      <Badge color={"green"}>Badge</Badge>
      <Badge color={"green"} rounded={true}>
        Badge
      </Badge>

      <Badge color={"blue"}>Badge</Badge>
      <Badge color={"blue"} rounded={true}>
        Badge
      </Badge>

      <Badge color={"indigo"}>Badge</Badge>
      <Badge color={"indigo"} rounded={true}>
        Badge
      </Badge>

      <Badge color={"purple"}>Badge</Badge>
      <Badge color={"purple"} rounded={true}>
        Badge
      </Badge>

      <Badge color={"pink"}>Badge</Badge>
      <Badge color={"pink"} rounded={true}>
        Badge
      </Badge>

      <Badge color={"random"}></Badge>
      <Badge color={"shit"} rounded={true} className="rounded-full">
        Lorem ipsum dolor sit amet.
      </Badge>
    </div>
  );
}
