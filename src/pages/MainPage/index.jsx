import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githubLogo from "../../assets/github-logo.svg";

export default function MainPage() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={githubLogo} alt="Github logo" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
