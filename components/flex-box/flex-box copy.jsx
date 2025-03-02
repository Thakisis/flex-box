"use client"
import { cn } from "@/lib/utils"
import { Resizable } from "re-resizable"
import FlexChildren from "../flex-children/flex-children"

export function FlexBox({ flexClass, flexCount = 6, flexItems, showAlignSelf }) {
  const childrenList = new Array(flexCount).fill(0).map((item, index) => {
    return (
      <div
        key={index}
        style={{ flexGrow: 0, flexShrink: 1, flexBasis: "200px" }}
        className="min-w-[100px] flex justify-center items-center p-6 bg-orange-500 text-center font-semibold rounded-lg"
      >
        {index + 1}
      </div>
    )
  })

  const childrenList2 = new Array(flexCount).fill(0).map((item, index) => {
    return <FlexChildren key={index} index={index} showAlignSelf={showAlignSelf} />
  })

  const finalChildren = flexItems ? childrenList2 : childrenList

  return (
    <Resizable
      defaultSize={{
        width: "10rem",
        height: "20rem",
      }}
      minWidth="300px"
      maxWidth="100%"
      enable={{
        top: false,
        right: true,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: true,
        bottomLeft: false,
        topLeft: false,
      }}
      className={cn("p-6 rounded-lg border-2 border-dashed border-gray-400 bg-orange-500/20")}
    >
      <div
        className="flex gap-4 w-full min-w-0  bg-black font-monocode flex-widget-box"
        style={{
          minHeight: "100%",
        }}
      >
        {finalChildren}
      </div>
    </Resizable>
  )
}

