import React from "react";
import { Menu, Button } from "semantic-ui-react";

function SignedOutMenu({ handleSignIn }) {
  return (
    <Menu.Item position="right">
      <Button onClick={handleSignIn} basic inverted content="Login" />
      <Button
        basic
        inverted
        content="Sign Up"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}

export default SignedOutMenu;
