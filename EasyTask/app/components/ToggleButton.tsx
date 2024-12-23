import React, { useState } from "react";
import { Switch } from "react-native";

function ToggleButton() {
  const [isPending, setIsPending] = useState(true);
  return (
    <Switch
      value={isPending}
      onValueChange={(newValue) => setIsPending(newValue)}
    />
  );
}

export default ToggleButton;
