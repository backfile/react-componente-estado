import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const addAt = (userName) => `@${userName}`;

  return (
    <section className="app">
      <TwitterFollowCard formatUsername={addAt} userName="batmancito" name="Batman">Seguir</TwitterFollowCard>
      <TwitterFollowCard formatUsername={addAt} userName="juan" name="citos" >Seguir</TwitterFollowCard>
      <TwitterFollowCard formatUsername={addAt} userName="felipe" name="Fernandez">Seguir</TwitterFollowCard>
    </section>
  );
}
