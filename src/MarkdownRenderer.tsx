import React from "react";

// FDG 2021 is held in cooperation with [ACM](https://www.acm.org/) and [ACM SIG AI](http://sigai.acm.org/), [SIGGRAPH](https://www.siggraph.org/) and [SIGCHI](https://sigchi.org/).

// See https://github.com/rexxars/react-markdown/issues/69#issuecomment-289860367
function flatten(text: string, child: any): any {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

export function HeadingRenderer(
  props: React.ComponentProps<any>
): React.ReactElement {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/\W/g, "-");
  return React.createElement("h" + props.level, { id: slug }, props.children);
}
