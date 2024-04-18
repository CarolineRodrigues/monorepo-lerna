import React, { FC } from "react";
import { Anchor } from "@mono-pack/c-anchor";
import { Button } from "@mono-pack/c-button";

export const Template: FC<any> = () => {
  return (
    <>
      My template:
      <Button />
      <Anchor />
    </>
  );
};
